<?php
declare(strict_types=1);

function allow_origin(): void
{
    $allowed = [
        'https://www.samuelcoachdealeman.com',
        'https://samuelcoachdealeman.com',
    ];
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $value = in_array($origin, $allowed, true) ? $origin : $allowed[0];

    header('Access-Control-Allow-Origin: ' . $value);
    header('Vary: Origin');
    header('Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Content-Type: application/json; charset=utf-8');
}

function json_payload(): array
{
    $raw = file_get_contents('php://input') ?: '';
    $decoded = json_decode($raw, true);

    if (is_array($decoded)) {
        return $decoded;
    }

    return $_POST;
}

function clean_value(array $payload, string $key): string
{
    $value = $payload[$key] ?? '';
    if (is_array($value)) {
        $value = implode(', ', $value);
    }

    return trim((string) $value);
}

function has_value(array $payload, string $key): bool
{
    return clean_value($payload, $key) !== '';
}

function json_response(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function env_value(string $name): string
{
    $value = getenv($name);
    if ($value !== false && $value !== '') {
        return $value;
    }

    return trim((string) ($_SERVER[$name] ?? ''));
}

function verify_turnstile(string $token): bool
{
    $secret = env_value('TURNSTILE_SECRET_KEY');
    if ($secret === '') {
        return true;
    }
    if ($token === '') {
        return false;
    }

    $body = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);

    $response = false;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 6,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $response = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $body,
                'timeout' => 6,
            ],
        ]);
        $response = file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
    }

    if (!is_string($response) || $response === '') {
        return false;
    }

    $decoded = json_decode($response, true);
    return is_array($decoded) && ($decoded['success'] ?? false) === true;
}

allow_origin();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    json_response(200, ['success' => true]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['success' => false, 'messageKey' => 'retry']);
}

$payload = json_payload();

// Honeypot: pretend success so bots do not learn which field blocked them.
if (has_value($payload, 'company')) {
    json_response(200, ['success' => true, 'messageKey' => 'success']);
}

if (!verify_turnstile(clean_value($payload, 'turnstileToken'))) {
    json_response(400, ['success' => false, 'messageKey' => 'risk']);
}

$required = ['name', 'email', 'goal', 'current_level', 'availability'];
$missing = [];

foreach ($required as $field) {
    if (!has_value($payload, $field)) {
        $missing[] = $field;
    }
}

$email = clean_value($payload, 'email');
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $missing[] = 'email_format';
}

if ($missing) {
    json_response(400, [
        'success' => false,
        'messageKey' => 'review',
        'fields' => array_values(array_unique($missing)),
    ]);
}

$labels = [
    'name' => 'Nombre',
    'email' => 'Email',
    'phone' => 'Telefono / WhatsApp',
    'age_band' => 'Edad',
    'goal' => 'Objetivo',
    'current_level' => 'Nivel actual',
    'availability' => 'Disponibilidad',
    'service_interest' => 'Servicio',
    'hours_per_week' => 'Horas por semana',
    'preferred_schedule' => 'Horario preferido',
    'situation' => 'Situacion',
    'message' => 'Mensaje',
    'locale' => 'Idioma',
    'page_path' => 'Pagina',
];

$lines = [
    'Nuevo lead desde samuelcoachdealeman.com',
    '',
];

foreach ($labels as $field => $label) {
    $value = clean_value($payload, $field);
    if ($value !== '') {
        $lines[] = $label . ': ' . $value;
    }
}

$lines[] = '';
$lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$lines[] = 'User-Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown');

$to = 'samuelcoachdealeman@gmail.com';
$subject = 'Nuevo lead web - Samuel Coach de Aleman';
$body = implode("\n", $lines);
$from = 'Samuel Coach de Aleman <no-reply@samuelcoachdealeman.com>';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $from,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    json_response(500, ['success' => false, 'messageKey' => 'retry']);
}

json_response(200, ['success' => true, 'messageKey' => 'success']);

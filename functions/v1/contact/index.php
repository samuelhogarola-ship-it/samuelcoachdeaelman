<?php
declare(strict_types=1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'messageKey' => 'retry']);
    exit;
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

function response(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

$payload = json_payload();

// Honeypot: pretend success so bots do not learn which field blocked them.
if (has_value($payload, 'company')) {
    response(200, ['success' => true, 'messageKey' => 'success']);
}

$required = ['name', 'email', 'goal', 'current_level'];
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
    response(400, [
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
    response(500, ['success' => false, 'messageKey' => 'retry']);
}

response(200, ['success' => true, 'messageKey' => 'success']);

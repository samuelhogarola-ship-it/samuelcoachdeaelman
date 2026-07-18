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
    header('Access-Control-Allow-Headers: content-type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Content-Type: application/json; charset=utf-8');
}

function json_response(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function json_payload(): array
{
    $raw = file_get_contents('php://input') ?: '';
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : $_POST;
}

function clean_value(array $payload, string $key): string
{
    $value = $payload[$key] ?? '';
    if (is_array($value)) {
        $value = implode(', ', $value);
    }

    return trim((string) $value);
}

allow_origin();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    json_response(200, ['success' => true]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['success' => false, 'message' => 'Method not allowed']);
}

$payload = json_payload();

// Honeypot: silently accept bot submissions.
if (clean_value($payload, 'company') !== '') {
    json_response(200, ['success' => true, 'status' => 'pending_manual']);
}

$email = clean_value($payload, 'email');
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(400, ['success' => false, 'message' => 'Invalid email']);
}

$locale = clean_value($payload, 'locale');
if (!in_array($locale, ['es', 'de', 'en'], true)) {
    $locale = 'es';
}

$page = clean_value($payload, 'page_path');

$lines = [
    'Nueva solicitud de newsletter',
    '',
    'Email: ' . $email,
    'Idioma: ' . $locale,
];

if ($page !== '') {
    $lines[] = 'Pagina: ' . $page;
}

$lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$lines[] = 'User-Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown');

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Samuel Coach de Aleman <no-reply@samuelcoachdealeman.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(
    'samuelcoachdealeman@gmail.com',
    'Nueva suscripcion newsletter - Samuel Coach de Aleman',
    implode("\n", $lines),
    implode("\r\n", $headers)
);

if (!$sent) {
    json_response(500, ['success' => false, 'message' => 'Mail failed']);
}

json_response(200, ['success' => true, 'status' => 'pending_manual']);

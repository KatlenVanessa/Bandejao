<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");

// Define os métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET");

// Define os cabeçalhos permitidos durante a pré-verificação da solicitação
header("Access-Control-Allow-Headers: Content-Type");

// Verifica o método da solicitação
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    // Se a solicitação for OPTIONS, apenas retorne os cabeçalhos CORS, não é necessário processar a busca
    return;
}

$servername = "192.168.1.8";
$username = "root";
$password = "123";
$dbname = "usuarios";

// Estabeleça a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

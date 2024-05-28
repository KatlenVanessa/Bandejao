<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    return;
}

include 'conexao.php'; // Inclua o arquivo de conexão com o banco de dados

$data = json_decode(file_get_contents("php://input"), true);
$matricula = $data['matricula'];
$senha = $data['senha'];

// Consulta SQL para verificar o matricula e senha no banco de dados
$query = "SELECT * FROM login WHERE matricula = '$matricula' AND senha = '$senha'";

$result = mysqli_query($conn, $query);

if (!$result) {
    die("Erro na consulta ao banco de dados: " . mysqli_error($conn));
}

if (mysqli_num_rows($result) === 1) {
    // Login bem-sucedido
    $response = ['success' => true, 'message' => 'Login bem-sucedido'];
} else {
    // Login falhou
    $response = ['success' => false, 'message' => 'matricula ou senha inválidos'];
}

echo json_encode($response);
?>

<?php

include 'conexao.php';
$data = json_decode(file_get_contents("php://input"), true);
$cart = $data['cart'];
$total = $data['total'];

if (isset($_SESSION['cpf'])) {
    $teste = $_SESSION['cpf'];
    $response = ['success' => true, 'message' => $teste];
    echo json_encode($response);
} else {
    $response = ['success' => false, 'message' => 'Sessão não contém CPF'];
    echo json_encode($response);
}
?>
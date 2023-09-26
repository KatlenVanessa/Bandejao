<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    return;
}

include 'conexao.php';

$data = json_decode(file_get_contents("php://input"), true);
$cart = $data['cart'];
$total = $data['total'];
$cpfUser = $data['cpf'];

//$user_id = 2;

foreach ($cart as $type => $quantity) {
    // Construa a consulta SQL com base no tipo de refeição
    $columnName = "qtd_" . $type;
    $query = "UPDATE login SET $columnName = $columnName + $quantity WHERE cpf = '$cpfUser'";
    mysqli_query($conn, $query);
}

//$conn->close();

$response = ['success' => true, 'message' => 'Compra realizada com sucesso'];
echo json_encode($response);
?>

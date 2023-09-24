<?php
//session_start(); // Inicie a sessão


// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");

// Define os métodos HTTP permitidos
header("Access-Control-Allow-Methods: POST");

// Define os cabeçalhos permitidos durante a pré-verificação da solicitação
header("Access-Control-Allow-Headers: Content-Type");

// Verifica o método da solicitação
// if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
//     // Se a solicitação for OPTIONS, apenas retorne os cabeçalhos CORS, não é necessário processar a busca
//     return;
// }

// Inclua o arquivo de conexão com o banco de dados
include 'conexao.php';

// Recupere os dados do carrinho e o total da compra
$data = json_decode(file_get_contents("php://input"), true);
$cart = $data['cart'];
$total = $data['total'];

// Recupere o CPF do usuário a partir da variável de sessão
if (isset($_SESSION['cpf'])) {
    $cpf = $_SESSION['cpf'];

    // Consulta SQL para obter o ID do usuário com base no CPF
    $query = "SELECT id FROM login WHERE cpf = '$cpf'";

    $result = mysqli_query($conn, $query);

    if (!$result) {
        die("Erro na consulta ao banco de dados: " . mysqli_error($conn));
    }

    // Verifique se o usuário com o CPF existe no banco de dados
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        $user_id = $row['id']; // Use o ID do usuário encontrado
    } else {
        // Usuário com CPF não encontrado, trate de acordo com suas necessidades
        $response = ['success' => false, 'message' => 'Usuário não encontrado'];
        echo json_encode($response);
        exit; // Saia do script
    }

    // Atualize a quantidade de tickets comprados para cada tipo de refeição
    foreach ($cart as $type => $quantity) {
        // Construa a consulta SQL com base no tipo de refeição
        $columnName = "qtd_" . $type;
        $query = "UPDATE login SET $columnName = $columnName + $quantity WHERE id = $user_id";
        mysqli_query($conn, $query);
    }

    // Registre a compra na tabela de histórico de compras (se aplicável)

    // Envie uma resposta de sucesso para o cliente
    $response = ['success' => true, 'message' => 'Compra realizada com sucesso'];
    echo json_encode($response);
} else {
    // Sessão não contém CPF, trate de acordo com suas necessidades
    $response = ['success' => false, 'message' => 'Sessão não contém CPF'];
    echo json_encode($response);
}
// Feche a conexão com o banco de dados
$conn->close();
?> 

<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");

// Define os métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET");

include 'conexao.php';

// Verifica o método da solicitação
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Recupera o matricula da consulta
    $matricula = $_GET['matricula'];

    // Consulta SQL para obter informações do perfil do usuário com base no matricula
    $query = "SELECT * FROM login WHERE matricula = '$matricula'";

    $result = mysqli_query($conn, $query);

    if (!$result) {
        die("Erro na consulta ao banco de dados: " . mysqli_error($conn));
    }

    if (mysqli_num_rows($result) === 1) {
        // Se o usuário com o matricula especificado for encontrado, retorne seus dados
        $row = mysqli_fetch_assoc($result);

        $userData = [
            'nome' => $row['nome'],
            'cpf' => $row['cpf'],
            'cafe' => $row['qtd_cafe'],
            'almoco' => $row['qtd_almoco'],
            'janta' => $row['qtd_janta'],
            'curso' => $row['curso'],
            'matricula' => $row['matricula'],
        ];

        echo json_encode($userData);
    } else {
        // Se nenhum usuário com o matricula especificado for encontrado, retorne uma mensagem de erro
        echo json_encode(['error' => 'Usuário não encontrado']);
    }

    // Feche a conexão com o banco de dados
    //$conn->close();
}
?>

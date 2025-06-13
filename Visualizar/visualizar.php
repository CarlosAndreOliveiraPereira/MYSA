<?php
$host = "localhost";
$user = "seu_usuario";
$password = "sua_senha";
$database = "nome_do_banco";

$con = new mysqli($host, $user, $password, $database);

if ($con->connect_error) {
    die("Erro na conexão: " . $con->connect_error);
}

$pesquisa = isset($_GET['q']) ? $con->real_escape_string($_GET['q']) : '';

$sql = "SELECT * FROM maquinas WHERE 
        localidade LIKE '%$pesquisa%' OR
        nome_dispositivo LIKE '%$pesquisa%' OR
        numero_serie LIKE '%$pesquisa%' OR
        nota_fiscal LIKE '%$pesquisa%' OR
        responsavel LIKE '%$pesquisa%' OR
        email LIKE '%$pesquisa%' OR
        setor LIKE '%$pesquisa%' OR
        windows_update_ativo LIKE '%$pesquisa%' OR
        sistema_operacional LIKE '%$pesquisa%'";

$result = $con->query($sql);

$dados = [];

while ($row = $result->fetch_assoc()) {
    $dados[] = $row;
}

echo json_encode($dados);

$con->close();
?>

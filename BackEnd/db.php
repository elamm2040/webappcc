<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');

switch($_SERVER['REQUEST_METHOD'])
{
    case 'GET': 
        get_db_data();
    break;
}

function get_db_data () {
    $pdo = new PDO('mysql:host=localhost;dbname=cc_web_app', 'root', '');

    $query = $pdo->query('SELECT * FROM web_app');

    echo json_encode($query->fetchAll());
}
?>

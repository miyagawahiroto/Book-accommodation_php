<?php

//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//データベースからユーザ情報を取得
$pdo = new PDO('mysql:host=localhost;dbname=webdb;charset=utf8', 'webuser', 'abccsd2');
$sql = 'SELECT * FROM user_tbl';
$ps = $pdo->prepare($sql);
$ps->execute();
$search = $ps->fetchAll();

//配列の宣言（無いとエラーが発生した）
$data = array();

//データベースから持ってきたデータをforeachを利用してデータの数だけ$dataに追加している
foreach ($search as $row) {
    array_push($data, array('id' => $row['id'], 'pass' => $row['pass'], 'username' => $row['username'], 'mail' => $row['usermail'], 'address' => $row['address']));
}
//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;

<?php

//JSON形式で返却すること、文字形式がUTF-8だということの宣言

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=UTF-8');

//データベースからユーザ情報を取得
$pdo = new PDO('mysql:host=mysql208.phy.lolipop.lan;dbname=LAA1418138-yadoyoyaku;charset=utf8', 'LAA1418138', 'teamd');
$sql = 'SELECT * FROM user_tbl';
$ps = $pdo->prepare($sql);
$ps->execute();
$search = $ps->fetchAll();

//配列の宣言（無いとエラーが発生した）
$data = array();

//データベースから持ってきたデータをforeachを利用してデータの数だけ$dataに追加している
foreach ($search as $row) {
    array_push($data, array('id' => $row['user_id'],'username' => $row['user_name'], 'mail' => $row['user_email'], 'address' => $row['user_address']));
}
//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;

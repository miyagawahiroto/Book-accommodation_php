<?php


//CROSエラーの解消
header("Access-Control-Allow-Origin: *");
//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//DAOの読み込み
require 'DAO.php';

//get_userの引数がある場合user情報を返す
if (isset($_GET['get_user']) == true) {
    $class = new Dteam();
    $data = $class->get_user();
}
//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;

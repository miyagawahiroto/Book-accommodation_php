<?php


//CROSエラーの解消
header("Access-Control-Allow-Origin: *");
//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//DAOの読み込み
require './DAO.php';

//get_userlistの引数がある場合user情報を返す
if (isset($_GET['get_userlist']) == true) {
    $class = new Dteam();
    $data = $class->get_userlist();
}

//get_userの引数がある場合user情報を返す
if (isset($_GET['get_user']) == true) {
    $class = new Dteam();
    $data = $class->get_user($_GET['user_id']);
}

//get_hotelの引数がある場合user情報を返す
if (isset($_GET['get_hotel']) == true) {
    $class = new Dteam();
    $data = $class->get_hotel($_GET['hotel_id']);
}

//insrt文がある時の処理
if(isset($_GET['create_user'])==true){
    $class = new Dteam();
    $class->insert_user($_GET['name'],$_GET['pass'],$_GET['mail'],$_GET['tel'],$_GET['address'],$_GET['gender'],$_GET['age']);
}
//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;

<?php


//CROSエラーの解消
header("Access-Control-Allow-Origin: *");
//JSON形式で返却すること、文字形式がUTF-8だということの宣言
header('Content-Type: application/json; charset=UTF-8');

//DAOの読み込み
require './DAO.php';

//login_userの引数がある場合はtrueを返す
if(isset($_GET['login_user'])==true){
    $class = new Dteam();
    $data = $class->login_user($_GET['user_id'],$_GET['user_pass']);
}

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

//get_hotelの引数がある場合情報ホテルを返す
if (isset($_GET['get_hotel']) == true) {
    $class = new Dteam();
    $data = $class->get_hotel($_GET['hotel_id']);
}


//get_roomの引数がある場合部屋情報を返す
if (isset($_GET['get_room']) == true) {
    $class = new Dteam();
    $data = $class->get_room($_GET['room_id']);
}

//get_hotellistの引数がある場合ホテル情報を返す
if (isset($_GET['get_hotellist']) == true) {
    $class = new Dteam();
    $data = $class->get_hotellist();
}

//get_hotelidlistの引数がある場合ホテル情報を返す
if (isset($_GET['get_hotelidlist']) == true) {
    $class = new Dteam();
    $data = $class->get_hotelidlist();
}

//get_hotelnumの引数がある場合情報ホテルを返す
if (isset($_GET['get_farst']) == true) {
    $class = new Dteam();
    $data = $class->get_farst_hotels($_GET['num']);
}

//insrt文がある時の処理
if(isset($_GET['create_user'])==true){
    $class = new Dteam();
    $class->insert_user($_GET['name'],$_GET['pass'],$_GET['mail'],$_GET['tel'],$_GET['address'],$_GET['gender'],$_GET['age']);
    $data = true;
}

//引数hotel_tag_searchがある時の処理
if(isset($_GET['hotel_tag_search1'])==true){
    $class = new Dteam();
    $data=$class->hotel_tag_search1($_GET['tag'],$_GET['key']);
}
if(isset($_GET['hotel_tag_search2'])==true){
    $class = new Dteam();
    $data=$class->hotel_tag_search2($_GET['tag'],$_GET['key']);
}

//引数hotel_photoがある時の処理
if(isset($_GET['hotel_photo'])==true){
    $class = new Dteam();
    $data=$class->hotel_photo($_GET['id']);
}

//引数room_photoがある時の処理
if(isset($_GET['room_photo'])==true){
    $class = new Dteam();
    $data=$class->room_photo($_GET['id']);
}

//引数insert_reserveがある時の処理
if(isset($_GET['insert_reserve'])==true){
    $class = new Dteam();
    $data=$class->insert_reserve($_GET['user_id'],$_GET['hotel_id'],$_GET['room_id'],$_GET['checkin'],$_GET['checkout'],$_GET['number']);
}


//引数delete_reserveがある時の処理
if(isset($_GET['delete_reserve'])==true){
    $class = new Dteam();
    $data=$class->delete_reserve($_GET['reserve_id']);
}


//引数get_reservelistがある時の処理
if(isset($_GET['get_reserve'])==true){
    $class = new Dteam();
    $data=$class->get_reservelist($_GET['user_id']);
}

//引数room_listがある時の処理
if(isset($_GET['room_list'])==true){
    $class = new Dteam();
    $data=$class->room_list($_GET['hotel_id']);
}

//arrayの中身をJSON形式に変換している
$json_array = json_encode($data);

print $json_array;

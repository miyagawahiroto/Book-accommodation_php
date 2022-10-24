<?php

header('Content-Type: application/json; charset=UTF-8');

$pdo = new PDO('mysql:host=localhost;dbname=webdb;charset=utf8', 'webuser', 'abccsd2');
$sql = 'SELECT * FROM user_tbl';
$ps = $pdo->prepare($sql);
$ps->execute();
$search = $ps->fetchAll();
$data = array();
foreach ($search as $row) {
    array_push($data,array('id'=>$row['id'],'pass'=>$row['pass'],'username'=>$row['username'],'mail'=>$row['usermail'],'address'=>$row['address']));
}
$data1 = array('value1' => array('id' => 1, 'name' => 'aaa'), 'value2' => array('id' => 2, 'name' => 'bbb'), 'value3' => array('id' => 3, 'name' => 'ccc'));
$data2 = array('value1' => array('id' => 4, 'name' => 'AAA'), 'value2' => array('id' => 5, 'name' => 'BBB'), 'value3' => array('id' => 6, 'name' => 'CCC'));
if(isset($_GET['a'])==true)
if($_GET['a']==0){
    $json_array = json_encode($data);
}else if ($_GET['a']==1){
    $json_array = json_encode($data1);
}else {
    $json_array = json_encode($data2);
}
print $json_array;

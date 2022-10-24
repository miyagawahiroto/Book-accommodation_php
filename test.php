<?php

header('Content-Type: application/json; charset=UTF-8');
$data1 = array('value1' => array('id' => 1, 'name' => 'aaa'), 'value2' => array('id' => 2, 'name' => 'bbb'), 'value3' => array('id' => 3, 'name' => 'ccc'));
$data2 = array('value1' => array('id' => 4, 'name' => 'AAA'), 'value2' => array('id' => 5, 'name' => 'BBB'), 'value3' => array('id' => 6, 'name' => 'CCC'));
if(isset($_GET['a'])==true)
if ($_GET['a']==1){
    $json_array = json_encode($data1);
} else {
    $json_array = json_encode($data2);
}
print $json_array;

<?php
class Dteam
{

    function get_pdo()
    {
        $pdo = new PDO('mysql:host=mysql208.phy.lolipop.lan;dbname=LAA1418138-yadoyoyaku;charset=utf8', 'LAA1418138', 'teamd');
        return $pdo;
    }

    function get_user()
    {

        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = 'SELECT * FROM user_tbl';
        $ps = $pdo->prepare($sql);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array('id' => $row['user_id'], 'username' => $row['user_name'], 'mail' => $row['user_email'], 'address' => $row['user_address']));
        }
        return $data;
    }
    function insert_user($name,$pass,$email,$tel,$address,$gender,$age){

        $pdo = $this->get_pdo();
        $sql = 'INSERT INTO user_mst (user_name,user_pass,user_email,user_tel,user_address,user_gender,user_age) VALUE (?,?,?,?,?,?)';

        $ps = $pdo->prepare($sql);
        $ps->bindValue(1, $name, PDO::PARAM_STR);
        $ps->bindValue(2, $pass, PDO::PARAM_STR);
        $ps->bindValue(3, $email,PDO::PARAM_STR);
        $ps->bindValue(4, $tel, PDO::PARAM_STR);
        $ps->bindValue(5, $address, PDO::PARAM_STR);
        $ps->bindValue(6, $gender, PDO::PARAM_STR);
        $ps->bindValue(7, $age, PDO::PARAM_STR);
        $ps->execute();
    }
}

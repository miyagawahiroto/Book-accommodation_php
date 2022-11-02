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
}

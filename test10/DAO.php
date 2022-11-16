<?php
class Dteam
{

    function get_pdo()
    {
        $pdo = new PDO('mysql:host=mysql208.phy.lolipop.lan;dbname=LAA1418138-yadoyoyaku;charset=utf8', 'LAA1418138', 'teamd');
        return $pdo;
    }

    function login_user($user_id, $user_pass)
    {

        $pdo = $this->get_pdo();
        $sql = "SELECT * FROM user_tbl WHERE user_id = ? AND user_pass = ?";
        $ps = $pdo->prepare($sql);
        $ps->bindValue(1, $user_id, PDO::PARAM_STR);
        $ps->bindValue(2, $user_pass, PDO::PARAM_STR);
        $ps->execute();
        $search = $ps->fetchAll();
        if ($search == null) {
            $data = false;
        } else {
            $data = true;
        }
        return $data;
    }

    function get_user($user_id)
    {

        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = "SELECT * FROM user_tbl WHERE user_id = $user_id";
        $ps = $pdo->prepare($sql);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array('id' => $row['user_id'], 'username' => $row['user_name'], 'mail' => $row['user_email'], 'address' => $row['user_address']));
        }
        return $data;
    }

    function get_userlist()
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

    function get_hotellist()
    {

        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = 'SELECT * FROM hotel_tbl';
        $ps = $pdo->prepare($sql);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array(
                'id' => $row['hotel_id'], 'hotel_name' => $row['hotel_name'], 'address' => $row['hotel_address'], 'checkin' => $row['checkin_time'], 'capacity' => $row['hotel_capacity'],
                'tag_1' => $row['hotel_tag_1'], 'tag_2' => $row['hotel_tag_2'], 'tag_3' => $row['hotel_tag_3'], 'tag_4' => $row['hotel_tag_4'], 'tag_5' => $row['hotel_tag_5'], 'tag_6' => $row['hotel_tag_6'], 'tag_7' => $row['hotel_tag_7'], 'tag_8' => $row['hotel_tag_8'], 'tag_9' => $row['hotel_tag_9'], 'tag_10' => $row['hotel_tag_10']
            ));
        }
        return $data;
    }

    function get_hotelidlist()
    {

        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = 'SELECT * FROM hotel_tbl';
        $ps = $pdo->prepare($sql);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array(
                'id' => $row['hotel_id'], 'num' => 0
            ));
        }
        return $data;
    }

    function get_hotel($hotel_id)
    {

        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = "SELECT * FROM hotel_tbl WHERE hotel_id = $hotel_id";
        $ps = $pdo->prepare($sql);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array(
                'id' => $row['hotel_id'], 'hotel_name' => $row['hotel_name'], 'address' => $row['hotel_address'], 'checkin' => $row['checkin_time'], 'capacity' => $row['hotel_capacity'],
                'tag_1' => $row['hotel_tag_1'], 'tag_2' => $row['hotel_tag_2'], 'tag_3' => $row['hotel_tag_3'], 'tag_4' => $row['hotel_tag_4'], 'tag_5' => $row['hotel_tag_5'], 'tag_6' => $row['hotel_tag_6'], 'tag_7' => $row['hotel_tag_7'], 'tag_8' => $row['hotel_tag_8'], 'tag_9' => $row['hotel_tag_9'], 'tag_10' => $row['hotel_tag_10']
            ));
        }
        return $data;
    }

    function insert_user($name, $pass, $email, $tel, $address, $gender, $age)
    {

        $pdo = $this->get_pdo();
        $sql = 'INSERT INTO user_tbl (user_name,user_pass,user_email,user_tel,user_address,user_gender,user_age) VALUE (?,?,?,?,?,?,?)';

        $ps = $pdo->prepare($sql);
        $ps->bindValue(1, $name, PDO::PARAM_STR);
        $ps->bindValue(2, $pass, PDO::PARAM_STR);
        $ps->bindValue(3, $email, PDO::PARAM_STR);
        $ps->bindValue(4, $tel, PDO::PARAM_STR);
        $ps->bindValue(5, $address, PDO::PARAM_STR);
        $ps->bindValue(6, $gender, PDO::PARAM_STR);
        $ps->bindValue(7, $age, PDO::PARAM_STR);
        $ps->execute();
    }

    function hotel_tag_search1($tag, $key)
    {

        $data = array();

        $pdo = $this->get_pdo();
        if ($tag == 'hotel_tag_1') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_1 LIKE ?";
        } else if ($tag == 'hotel_tag_2') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_2 LIKE ?";
        } else if ($tag == 'hotel_tag_3') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_3 LIKE ?";
        } else if ($tag == 'hotel_tag_4') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_4 LIKE ?";
        } else if ($tag == 'hotel_tag_5') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_5 LIKE ?";
        }

        $ps = $pdo->prepare($sql);
        $ps->bindValue(1, '%' . $key . '%', PDO::PARAM_STR);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array('hotel_id' => $row['hotel_id']));
        }

        return $data;
    }

    function hotel_tag_search2($tag, $key)
    {

        $data = array();

        $pdo = $this->get_pdo();
        if ($tag == 'hotel_tag_1') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_1 LIKE ?";
        } else if ($tag == 'hotel_tag_2') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_2 LIKE ?";
        } else if ($tag == 'hotel_tag_3') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_3 LIKE ?";
        } else if ($tag == 'hotel_tag_4') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_4 LIKE ?";
        } else if ($tag == 'hotel_tag_5') {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_5 LIKE ?";
        }

        $ps = $pdo->prepare($sql);
        $ps->bindValue(1, '%' . $key . '%', PDO::PARAM_STR);
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            $sql = "SELECT * FROM hotel_tbl WHERE hotel_id = ?";
            $ps = $pdo->prepare($sql);
            $ps->bindValue(1, $row['hotel_id'], PDO::PARAM_STR);
            $ps->execute();
            $search2 = $ps->fetchAll();
            foreach ($search2 as $row2) {
                array_push($data, array(
                    'id' => $row2['hotel_id'], 'hotel_name' => $row2['hotel_name'], 'address' => $row2['hotel_address'], 'checkin' => $row2['checkin_time'], 'capacity' => $row2['hotel_capacity'],
                    'tag_1' => $row2['hotel_tag_1'], 'tag_2' => $row2['hotel_tag_2'], 'tag_3' => $row2['hotel_tag_3'], 'tag_4' => $row2['hotel_tag_4'], 'tag_5' => $row2['hotel_tag_5'], 'tag_6' => $row2['hotel_tag_6'], 'tag_7' => $row2['hotel_tag_7'], 'tag_8' => $row2['hotel_tag_8'], 'tag_9' => $row2['hotel_tag_9'], 'tag_10' => $row2['hotel_tag_10']
                ));
            }
        }

        return $data;
    }

    function get_farst_hotels($num)
    {
        //配列の宣言（無いとエラーが発生した）
        $data = array();

        $pdo = $this->get_pdo();
        $sql = "SELECT * FROM hotel_tbl WHERE hotel_tag_1 LIKE ?";
        $ps = $pdo->prepare($sql);
        if($num=='1'){
            $ps->bindValue(1, '%ホテル%', PDO::PARAM_STR);
        }else if($num=='2'){
            $ps->bindValue(1, '%旅館%', PDO::PARAM_STR);
        }else if($num=='3'){
            $ps->bindValue(1, '%ビジネス%', PDO::PARAM_STR);
        }else if($num=='4'){
            $ps->bindValue(1, '%カジュアル%', PDO::PARAM_STR);
        }
        $ps->execute();
        $search = $ps->fetchAll();
        foreach ($search as $row) {
            array_push($data, array(
                'id' => $row['hotel_id'], 'hotel_name' => $row['hotel_name'], 'address' => $row['hotel_address'], 'checkin' => $row['checkin_time'], 'capacity' => $row['hotel_capacity'],
                'tag_1' => $row['hotel_tag_1'], 'tag_2' => $row['hotel_tag_2'], 'tag_3' => $row['hotel_tag_3'], 'tag_4' => $row['hotel_tag_4'], 'tag_5' => $row['hotel_tag_5'], 'tag_6' => $row['hotel_tag_6'], 'tag_7' => $row['hotel_tag_7'], 'tag_8' => $row['hotel_tag_8'], 'tag_9' => $row['hotel_tag_9'], 'tag_10' => $row['hotel_tag_10'], 'num' => 0
            ));
        }
        return $data;
    }
}

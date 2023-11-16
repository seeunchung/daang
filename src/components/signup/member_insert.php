<?php
// 리액트 서버와 PHP/MYSQL 서버 주소가 서로 다르기 때문에 데이터베이스 접속 불가능
// CORS API 접속 권한 헤더문을 추가하여 접속 권한을 풀어준다.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

// 1. 데이터베이스 인증 정보 (열기 = 접속)
$db_sever     = 'localhost';
$db_user_name = 'kiik52';
$db_password  = 'wlwjdgh2!#';
$db_name      = 'kiik52';
$conn = mysqli_connect($db_sever, $db_user_name, $db_password, $db_name);
mysqli_set_charset($conn, 'utf8');

if ($conn == false) {
    die('데이터베이스 접속 실패');
} else {
    echo('데이터베이스 접속 성공');
}

// 2. 데이터베이스에 저장 INSERT SQL
// 입력데이터 : 회원가입 입력상자에 입력받은 값을 저장 => AJAX를
$id         = $_POST['id'];
$pw         = $_POST['pw'];
$name       = $_POST['irum'];
$email      = $_POST['email'];
$hp         = $_POST['hp'];
$dog_name   = $_POST['dog_Name'];
$dog_birth  = $_POST['dog_Birth'];
$dog_breed  = $_POST['dog_Breed'];
$dog_info   = $_POST['dog_Info'];
$service    = $_POST['service'];
$gaibDate   = $_POST['join_date'];

// SQL INSERT INTO 저장할 테이블 이름 VALUES
$sql = "INSERT INTO daaang_member_table(id, pw, name, email, hp, dog_name, dog_birth, dog_breed, dog_info, service, join_date)
        VALUES('$id', '$pw', '$name', '$email', '$hp', '$dog_name', '$dog_birth', '$dog_breed', '$dog_info', '$service', '$gaibDate')";
$result = mysqli_query($conn, $sql);

// INSERT 문 실행 결과 확인
if ($result == false) {
    echo('저장 실패');
    echo 'Error: ' . mysqli_error($conn);
} else {
    echo($name . '님 저장 성공');
}

// 3. 데이터베이스 닫기
mysqli_close($conn);
?>

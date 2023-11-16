<?

// CORS API 접속 권한 헤더문
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

  // 1. 데이터베이스 인증 정보 (열기 = 접속)
  // http://kiik52.dothome.co.kr/kurly_study/member_login.php

  $db_sever     = 'localhost';
  $db_uesr_name = 'kiik52';
  $db_password  = 'wlwjdgh2!#';
  $db_name      = 'kiik52';
  $conn = mysqli_connect($db_sever, $db_uesr_name, $db_password, $db_name);
  mysqli_set_charset($conn, 'utf8');

  // 데이터 조회
  $sql = "SELECT id, pw FROM daaang_member_table";
  $result = mysqli_query($conn, $sql);

  // 결과 값이 0보다 크면 데이터가 있다 그걸 배열처리 한다.
  // 1행씩 뽑아서 배열처리하고, 반복문
  $imsi = array();
  
  // 1명 이상 있어야 데이터 반복처리 실행
  if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
      // 배열에 데이터를 넣기 (push)
      array_push($imsi, array(
        '아이디'=> $row['id'],
        '비밀번호'=> $row['pw']  // 배열객체 처리중
      ));
    }
  }
  

  // JSON 인코딩
  echo json_encode($imsi, JSON_UNESCAPED_UNICODE);  // 유니코드형식으로 AJAX에게 되돌려 보낸다



?>
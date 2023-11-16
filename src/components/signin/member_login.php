<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$db_server = 'localhost';
$db_user_name = 'kiik52';
$db_password = 'wlwjdgh2!#';
$db_name = 'kiik52';
$conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
mysqli_set_charset($conn, 'utf8');

$id = $_POST['id'];
$pw = $_POST['pw'];

$sql = "SELECT * FROM daaang_member_table  WHERE id='$id' AND pw='$pw'";
$result = mysqli_query($conn, $sql);

session_start();
$session_id = session_id();

if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_array($result);
  echo '{"아이디":"' . $row['id'] . '", "세션아이디":"' . $session_id . '","이름":"' . $row['name'] . '"}';
} else {
  echo "";
}

echo json_encode($imsi, JSON_UNESCAPED_UNICODE);
?>

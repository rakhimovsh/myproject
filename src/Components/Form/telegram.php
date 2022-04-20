
<?php

/* https://api.telegram.org/bot5349189133:AAFVvDAyH-H8o5owCtas9bk13NFLOqNF9jM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$email = $_POST['user_email'];
// $phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "5349189133:AAFVvDAyH-H8o5owCtas9bk13NFLOqNF9jM";
$chat_id = "-772141632";
$arr = array(
  'Name: ' => $name,
  'Message: ' => $message,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
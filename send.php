<?php

$name=$_POST['fullName'];
$email=$_POST['email'];
$message=$_POST['message'];


$to = "ivanpopovych1988@gmail.com";

$subject = "Contact Form";
$formcontent="From: $name \n Message: $message";
$mailheader = "From: $email \r\n";
mail($to, $subject, $formcontent, $mailheader) or die("Error!");

header('Location: thanks.html');
exit;
?>


<?php 

    $method = $_SERVER['REQUEST_METHOD'];

    $email = trim($_POST['email']);
    $phone = $_POST['tel'];
    $message = $_POST['message'];
    $headers = "From: $email" . "\r\n";

    if(!empty($_POST['call'])) {
        $message .=  "!!!Перезвоните мне!!!" $phone
        mail ('texs14@yandex.ru','Example1', $message .  "\r\n" $phone, $headers);
    } else {
        mail ('texs14@yandex.ru','Example', $message, $headers);
    }
    
?> 
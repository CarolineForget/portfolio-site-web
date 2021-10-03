<?php

    //get all form value
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $receiver = "info@cforget.com"; //email receiver email address
    $subject = "From: $name <$email>"; //subject of the email. Ex: Caroline Forget <info@cforget.com>
    $body = "$message";

    $headers = array("From: $email",
    "Reply-To: $email",
    "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);

    if(mail($receiver, $subject, $body, $headers)) { //mail(), inbuilt php function to send mail
        echo "Message envoyé.";
    } else {
        echo "Une erreur est survenue.";
    }

?>
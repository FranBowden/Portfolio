<?php
if(isset($_POST["submit"])) {
    $recipient = "francescalbowden@gmail.com";
    $subject = "Form to email message";
    $sender = $_POST["sender"];
    $senderLastName = $_POST["senderLastName"];
    $senderEmail = $_POST["senderEmail"];
    $message = $_POST["message"];

    $mailBody = "Name: $sender $senderLastName\nEmail: $senderEmail\n\n$message";

    $mailResult = mail($recipient, $subject, $mailBody);

    if($mailResult) {
        $thankYou = "<p>Thank you! Your message has been sent.</p>";
    } else {
        $thankYou = "<p>Sorry, there was a problem sending your message. Please try again later.</p>";
    }
}
?>

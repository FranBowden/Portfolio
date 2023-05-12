<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Create the email body
  $subject = "New Form Submission";
  $body = "Name: $firstName $lastName\n";
  $body .= "Email: $email\n";
  $body .= "Message:\n$message";

  // Set the recipient email address
  $to = "francescalbowden@gmail.com";

  // Set the email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Oops! Something went wrong and we couldn't send your message.";
  }
}
?>

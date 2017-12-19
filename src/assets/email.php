<?php
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 	$from_email = $request->email;
	$firstname = $request->firstname;
	$lastname = $request->lastname;
	$text = $request->message;

	$email_subject = "Сообщение с сайта библиотеки.";

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";

	$message = "<html><body>";
	$message .= "<div>От: ".$firstname." ".$lastname." </div>";
	$message .= "<div>Почта: <a style='text-decoration: none; color:#005999' href='mailto:".$from_email."'> ".$from_email."</a></div>";
	$message .= "<div>Сообщение: ".$text."</div>";
	$message .= "</body></html>";
  
	mail("tlbaranovichy@tut.by", $email_subject, $message, $headers );
	return $from_email;
}
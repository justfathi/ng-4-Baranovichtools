<?php
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 	$from_email = $request->email;
	$firstname = $request->firstname;
	$lastname = $request->lastname;

	$href = 'http://baranovichytools.ru/getSubscr/email?res=';
	
	$email_subject = "Подписка на новости.";

	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: tlbaranovichy@tut.by\n";
	$headers .= "Reply-To: $from_email";

	$message = "<html><body>";
	$message .= "<div><p>Уважаемый<strong> ".$firstname." ".$lastname."</strong>.</p></div>";
	$message .= "<div><p>Данный адрес электронной почты был указан при подписке<br />";
	$message .= "на новости Библиотеки инструментов Барановичи. <br />";
	$message .= "Eсли Вы этого не делали, просто удалите это письмо. <br />";
	$message .= "Eсли Вы хотите получать новости от Библиотеки инструментов, то <br />";
	$message .= "<a style='text-decoration: none; color: red'  href='".$href."".$from_email."'>пройдите по ссылке для подтверждения.</a>";
	$message .= "</div></body></html>";
  
	mail($from_email, $email_subject, $message, $headers );
	return $from_email;
}





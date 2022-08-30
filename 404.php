<?php
$to = "error@ciricillo.com";
$subject = "CarlyCiricillo.com Error";
$message = "CarlyCiricillo.com Error";
$domain = $_SERVER['HTTP_HOST'];
$page = $_SERVER['REQUEST_URI'];
  $errortime = (date(" F d h:ia"));
  $browser = $_SERVER['HTTP_USER_AGENT'];
  $referer = $_SERVER['HTTP_REFERER'];
  $IP = $_SERVER['REMOTE_ADDR'];
  $message .= "Time Created: $errortime\n\n";
  $message .= "browser: $browser\n\n";
  $message .= "Page Requested: $domain$page\n\n";
  $message .= "Referer: $referer\n\n";
  $message .= "IP Address: $IP\n\n";
  $name = gethostbyaddr($IP);
  $message .= "Hostname: $name\n\n";

//mail headers
$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
$headers .= "X-Priority: 3\n";
$headers .= "X-MSMail-Priority: Normal\n";
$headers .= "X-Mailer: php\n";
$headers .= "From: \"CarlyCiricillo.com Error \" <error@ciricillo.com>\n";
$headers .= "Return-Path: error@ciricillo.com.com\n";

mail($to,$subject,$message,$headers);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title>404 - Where Oh Where?</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/output.css"> <!-- Tailwind output CSS -->
	</head>
  <body class="bg-background-page">
		<header class="w-4/5 sm:w-3/4 mx-auto mt-7 sm:mt-14">
			<h1 class="font-cursive text-text-base text-3xl sm:text-4xl font-bold">Oops.</h1>
		</header>
		<main class="w-4/5 sm:w-3/4 mx-auto mt-6 sm:mt-7">
			<p class="font-sans text-text-base text-lg md:text-base">You've reached my 404 page.</p>
			<p class="font-sans text-text-base text-lg md:text-base mt-2">The probem has been reported, so any broken links can be found and&nbsp;repaired.</p>
			<p class="font-sans text-text-base text-lg md:text-base mt-2">Head back to <a href="index.html" class="underline text-text-accent">carlyciricillo.com</a> or <a href="index.html" onclick="window.history.go(-1); return false;" class="underline text-text-accent">your&nbsp;previous&nbsp;page</a>.</p>
		</main>
	</body>
</html>
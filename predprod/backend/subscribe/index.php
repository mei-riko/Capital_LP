<?php require __DIR__."/functions.php";

$token = getToken('melkozerov', '1631087421');

$result = sendUserData($token, [
    'name' => $_POST['name'],
	'email' => $_POST['mail'],
	'message' => $_POST['message'],
    'ga_id' => $_COOKIE["_ga"]
    ]
);

echo json_encode($result);


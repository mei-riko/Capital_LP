<?php

function getToken($username, $password, $url = "https://iticapital.ru/apicrm-test/token/"){
    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>'{
        "grant_type": "client_credentials"
    }',
    CURLOPT_HTTPHEADER => array(
        'Authorization: Basic '.base64_encode($username . ":" . $password),
        'Content-Type: application/json'
    ),
    ));

    $response = json_decode(curl_exec($curl), true);

    curl_close($curl);

    return $response["access_token"];
}

function sendUserData($token, $userdata, $url = "https://iticapital.ru/apicrm-test/MailingList/"){
    if (!$token) return false;
    if (!$userdata['email']) return false;

    $re = '/GA\d\.\d\.(.+)/u';
    $str = $userdata['ga_id'];
    preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

	if (!$userdata['name']){
		$name = '';
	}else{
		$name = $userdata['name'];
	}

	if (!$userdata['message']){
		$message = '';
	}else{
		$message = $userdata['message'];
	}

    $curl = curl_init();
	$dat = array(
		"name" => $name,
		"email" => $userdata['email'],
		"message" => $message,
		"prod_id" => "71",
		"source_url" => $_SERVER['HTTP_REFERER'],
		"google_id" => $matches[0][1]
	);
	$data = json_encode($dat);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer '.$token,
            'Content-Type: application/json'
        ),
    ));

    $response = json_decode(curl_exec($curl), true);

    curl_close($curl);

    return $response["data"];
}
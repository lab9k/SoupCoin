<?php namespace Listener;


$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$payment_amount = $_POST['mc_gross'];
$payer_email = $_POST['payer_email'];
$ethaddress = $_POST['custom'];

require('PaypalIPN.php');

use PaypalIPN;

$ipn = new PaypalIPN();

// Use the sandbox endpoint during testing.
$ipn->useSandbox();
$verified = $ipn->verifyIPN();

//echo '<script>console.log({$verified})</script>';

if ($verified) {

	chdir('/var/www/html/php/');
	$file = './logfile.csv';
	$current = file_get_contents($file);
	

	$pdo = new \PDO('sqlite:/var/www/html/php/soupcoindb.sqlite');
	#$pdo->exec('create table orders(date DATETIME,name VARCHAR(255),email VARCHAR(255), amount INT, address VARCHAR(255), status TINYINT)');
	$datum = date("Y-m-d H:i:s");
	$name = $first_name . " " . $last_name;
	$status = 0;
	$sql = 'INSERT INTO orders VALUES (:datum,:name,:email,:amount,:address,:status)';
	$preparedstmnt = $pdo->prepare($sql);
	$preparedstmnt->bindValue(':datum',$datum);
	$preparedstmnt->bindValue(':name',$name);
	$preparedstmnt->bindValue(':email',$payer_email);
	$preparedstmnt->bindValue(':amount',$payment_amount);
	$preparedstmnt->bindValue(':address',$ethaddress);
	$preparedstmnt->bindValue(':status',$status);
	$preparedstmnt->execute();

	$string = date("Y-m-d H:i:s") . ";" . $first_name . ";" . $last_name . ";" . $payment_amount . ";" . $payer_email . ";" . $ethaddress . "\n";
	//Write the contents back to the file
        #file_put_contents($file,$current . $string);

	//$old_path = getcwd();
	//chdir('/var/www/html/php/');
	//$args = $first_name . " " . $last_name . " " . (string) $payment_amount . " " . $payer_email . " " .(string) $ethaddress

	#shell_exec("./processpayment.sh $first_name $last_name $payment_amount $payer_email $ethaddress");
	//chdir($old_path);
}

// fclose($fp);


// Reply with an empty 200 response to indicate to paypal the IPN was received correctly.
header("HTTP/1.1 200 OK");
?>

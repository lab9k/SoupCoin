php namespace Listener;

// $parArray = array($_POST['first_name'], $_POST['last_name'], $_POST['mc_gross'], $_POST['payer_email']);

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
	$file = 'logfile.csv';
	$current = file_get_contents($file);

	$string = $first_name . ";" . $last_name . ";" . $payment_amount . $payment_currency . ";" . $payer_email . ";" . $ethaddress . "\n";
	//Write the contents back to the file
	file_put_contents($file, $string);

	$old_path = getcwd();
	chdir('/var/www/html/php/');
	shell_exec("./processpayment.sh $first_name $last_name $payment_amount $payer_email $ethaddress");
	chdir($old_path);
}

// fclose($fp);


// Reply with an empty 200 response to indicate to paypal the IPN was received correctly.
header("HTTP/1.1 200 OK");

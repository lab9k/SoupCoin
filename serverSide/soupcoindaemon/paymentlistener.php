<?php

        $pdo = new PDO('sqlite:/var/www/html/php/soupcoindb.sqlite');
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$select = 'SELECT * FROM orders WHERE status = 0 ORDER BY date LIMIT 1';
	

	$results = $pdo->query($select);
	$ethaddress;
	$amount;
	$datum;
	foreach($results as $result){
		$ethaddress = $result[address];
		$amount = $result[amount];
		$datum = $result[date];
	}
	if(empty($ethaddress)){
		exit("Geen orders te behandelen. \n");
	}

	$lock = "UPDATE orders SET status = 1 WHERE status = 0 AND date = '".$datum."'";
	#orderstatus in progress
	$pdo->exec($lock);
	
	#script oproepen
	shell_exec("/usr/bin/node /root/soupcoindaemon/soupcoinmintscript.js '".$ethaddress."' '".$amount."'");

	$finish = "UPDATE orders SET status = 2 WHERE status = 1 AND date = '".$datum."'";
	#orderstatus voltooid
	$pdo->query($finish);
?>


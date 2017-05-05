<?php
	$db_name = "timelog";
	$servername = "localhost";
	$username = "root";
	$password = "1234";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $db_name);

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	//echo "Connected successfully";
	
	// Inserting Values in tables
	$name = $_GET['name'];
	$from = date("Y-m-d", $_GET['from']);
	$to = date("Y-m-d", $_GET['to']);
	
	$sql = "INSERT INTO rent  VALUES ('".$name."', '".$from."', '".$to."' )";
	if (mysqli_query($conn,$sql)){
		echo "OK";
	}else{
		echo mysql_errno($sql). ": " . mysql_error($sql). "\n";
	}
	
	mysqli_close($conn);
?>
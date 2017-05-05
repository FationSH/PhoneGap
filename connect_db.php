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
	$id = $_GET['id'];
	$name = $_GET['name'];
	$time = $_GET['time'];
	$date = $_GET['date'];
	
	if (!isset($id) || empty($id)){
		echo("You forgot your ID");
		exit(1);
	}
	if (!isset($name) || empty($name)){
		echo("You forgot your name");
		exit(1);
	}
	
	$sql = "INSERT INTO userstime (ID, Name, Date, Time) VALUES ('".$id."', '".$name."', '".$date."', '".$time."' )";
	if (!mysqli_query($conn,$sql)){
		if (mysqli_errno($conn) == 1062 ){
			//echo "Error " .mysqli_errno($conn). ": " . mysqli_error($conn). "\n";
			echo "You have take this pill ones.";
		}
	}
	
	mysqli_close($conn);
?>
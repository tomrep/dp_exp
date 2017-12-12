<?php
$data = $_POST['data'];
$file = 'testData\spam.csv';

if(file_exists($file)) {
    $writeData = "";
} else {
    $writeData = "time;event;keyCode;\n";
}

$a = explode("|", $data);
foreach($a as $d) {
	$writeData .= $d . "\n";
}
file_put_contents($file, $writeData, FILE_APPEND);
echo 'append';
?>
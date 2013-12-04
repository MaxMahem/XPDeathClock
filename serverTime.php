<?php 
// this is to respond to AJAX calls asking for the time.
$now = new DateTime(); 
echo $now->format("M j, Y H:i:s O") . PHP_EOL;
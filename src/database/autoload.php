<?php

// a function that fetches the class through it's name and requires it automaticaly.

function autoload($className) {
  $folder = __DIR__.'/classes/'.$className.'.php';

  if(is_file($folder)) {
    require_once($folder);
  }
}

spl_autoload_register('autoload');

// THE AUTOLOAD MUST BE LOADED IN EACH PAGE, ANYTIME WE MUST USE IT BY:

// require_once('autoload.php');

?>
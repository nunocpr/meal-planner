<?php
// loads the database configuration settings
require_once('../config.php');

class DB{
  private static $pdo;

  // initialize the DB
  public static function init() {
    // if there isn't a pdo,
    if(!isset(self::$pdo)) {
      try {
        // create one
        self::$pdo = new PDO('mysql:host='.SERVER.';dbname='.DB, USER, PASSWORD);
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
      } catch (PDOException $err) {
        // else return error + message
        echo "Could not connect to the database. ".$err->getMessage();
      }
    }
    return self::$pdo;
  }

  // DB::prepare($sql) will prepare the sql message 
  public static function prepare($sql) {
    return self::init()->prepare($sql);
  }
}
?>
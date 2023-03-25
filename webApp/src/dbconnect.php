<?php
// function connect_db(){
//     //ホスト名、データベース名、文字コードの３つを定義する
//     $host = 'mysql';
//     $db = 'posse';
//     $charset = 'utf8';
//     $dsn = "mysql:host=$host; dbname=$db; charset=$charset";

//     //ユーザー名、パスワード
//     $user = 'root';
//     $pass = 'root';

//     //オプション
//     $options = [
//         PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
//         PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
//         PDO::ATTR_EMULATE_PREPARES   => false,
//     ];

//     try{

//         //上のデータを引数に入れて、PDOインスタンスを作成
//         $pdo = new PDO($dsn, $user, $pass, $options);
//         //PDOインスタンスを返す
//         return $pdo;
//     }catch(PDOException $e){
//         echo $e->getMessage();
//     }
// }

// //データベースと接続して、PDOインスタンスを取得
// $pdo = connect_db();

// //実行したいSQLを準備する
// $sql = 'SELECT * FROM questions';
// $stmt = $pdo->prepare($sql);

// //SQLを実行
// $stmt->execute();

// //データベースの値を取得
// $result = $stmt->fetchall();
// // var_dump($result);


/// h関数が未定義の場合は定義
if( ! function_exists('h') ) {
    function h($s) {
      echo htmlspecialchars($s, ENT_QUOTES, "UTF-8");
    }
  }
  
  $dsn = 'mysql:host=mysql;dbname=webapp;charset=utf8;';
  $user = 'root';
  $password = 'password';
  
  try {
    $db = new PDO($dsn, $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo '接続失敗: ' . $e->getMessage();
    exit();
  }
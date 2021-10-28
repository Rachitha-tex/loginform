<?php

require 'connect.php';


$postdata=file_get_contents("php://input");
 
if(isset($postdata) && !empty($postdata)){
    $request=json_decode($postdata);

    print_r($request);

    $name=$request->name;
    $password=$request->password;

    $sql="INSERT INTO 'users' (`name`,`password`) VALUES ('{$name}','{$password}'')";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }else
    {
      http_response_code(422);
    }
}
<?php
require 'connect.php';
error_reporting(E_Error);

$user=[];
$sql="SELECT * FROM user";

if($result=mysqli_query($con,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $user[$cr]['uid']=$row['uid'];
        $user[$cr]['name']=$row['name'];
        $user[$cr]['username']=$row['username'];
        $user[$cr]['email']=$row['email'];

        $cr++;

    }
    echo json_encode($user);
}
else
    {
      http_response_code(404);
    }
    ?>
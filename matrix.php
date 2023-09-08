 <?php

$myvalue=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

$number=count($myvalue);
$number2=count($myvalue);
for($i=0;$i<$number;$i++){
    for($j=0;$j<$number2;$j++){
        echo $myvalue[$i][$j] ." ";
    }
    echo "<br>";
}
 ?>

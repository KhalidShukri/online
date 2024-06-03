<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro to PHP</title>
</head>
<body>
    <?php 
    
    // php code goes here
    echo "Hello,WORLD!";
    
    // variable
    // integer 
    $Age = 20;
    
    // floats
    $price = 0.99;
    
    // ?string 
    $name = "Sarah";
    
    // boolean
    $isStudent = true;
    
    // ?Array 
    $colors = array("green", "red");
    
    // object
    $person = new stdClass();
    $person->name = "Khalid";
    $person->age = 20;
    
    // output
    echo $name . "<br>";
    echo $Age. "<br>";
    echo $price."<br>";
    echo $person->name."<br>";
    echo $person->age."<br>";
    
    // operators
    $x = 10;
    $y = 3;
    
    // Arithmetic: +,-,/,*,%
    echo $x + $y ."<br>";
    echo $x - $y ."<br>";
    echo $x * $y ."<br>";
    echo $x / $y ."<br>";
    echo $x % $y ."<br>";
    echo $x ** $y ."<br>";
    
    // Assignment: +=, +=, -=,8=,/=, .=(String concatenation)
    $sentense = "This is a ";
    echo $x += 2;
    echo $x -= 2;
    echo $x *= 2;
    echo $x /= 2;
    $sentense .= "sentense <br>";
    echo $sentense;
    // Comparison: ==, ===, !=,!==,<,>,>=,<=
    echo $x == $y . "<br>";
    echo $x === $y . "<br>";
    echo $x != $y . "<br>";
    echo $x !== $y . "<br>";
    echo $x > $y . "<br>";
    echo $x < $y . "<br>";
    echo $x >= $y . "<br>";
    echo $x <= $y . "<br>";
    
    // logical:&&(and), ||(or), !(Not)
    $iaAdult = ($Age >= 18 && $isStudent == false);
    echo $iaAdult . "<br>";
    // Creates a php that calculates the perimeter and area of circle whose diameter is 14.
    $diameter = 14;
    $radius = $diameter / 2;
    $perimeter = (22 / 7) * $diameter;
    echo $perimeter . "<br>";
    $area = (22 / 7) * $radius * $radius;
    echo $area ."<br>";
    
    // Control Structures 
    // if...else
    $totalPrice = 150;
    if ($totalPrice > 100) {
        echo "You get a discount of 10%. <br>";
    } else {
        echo "No discount on price below 100!. <br>";
    }
    
    $temperature = 32;
    if ($temperature > 32) {
        echo "Cover your Tomatoes. <br>";
    } else if ($temperature < 32) {
        echo "Unover your Tomatoes. <br>";
    } else {
        echo "Enjoy your Fruit. <br>";
    }
    // switch statement
    $score = 75;
    switch ($score) {
        case ($score >= 90):
        echo "A <br>";
            break;
        case ($score >= 80):
        echo "B <br>";
            break;
        case ($score >= 70):
        echo "C  <br>";
            break;
        default;
        echo "F  <br>";
    }
    // ternary operator: condition? value1: value2:
    $grade = ($score >= 60) ? "Pass" : "Fail";
    echo $grade ."<br>";
    // loops: for, foreach ,while,Do....while
    for ($x = 1;$x <= 10;$x++){
        echo "x = $x <br>";
    }
    for ($x = 0;$x <= 100;$x += 2){
        echo "x = $x <br>";
    }
    $fruits = array("apples","bananas","cherries","berries");
    foreach ($fruits as $fruit) {
        echo $fruit ."<br>";
    }
    $person = array(
        "name" =>"Khalid",
        "age" => 20,
        "email" => "Khalid@gmaill.com",
    );
    print_r($person) . "<br>";
    var_dump($person) . "br>";
    foreach ($person as $k => $v) {
        echo "$k: $v . <br>";
    }
    // while loop
    $i = 1;
    while ($i <= 10) {
        echo $i ."<br>";
        $i++;
    }
    // use a while loop to print your name 20 times
    $k = 1;
    while ($k <= 20)  {
        echo "$k. Khalid.<br>";
        $k++;
    }
    // do..while
    do {
        $a = 1;
        echo $a ."<br>";
        $a++;
    } while($a >= 10);

    // arrays
    // indexed arrays 
    $isStudent = array("Joan","Khalid","Juliet","cynthia","maryam","eric","ricky","jabir","bradley","ryan");
    echo $isStudent[1]. "<br>";
    // Associated 
    $switch = array(
        "model" =>"26008xm",
        "serial_no"=> "123456",
        "ios"=> "12.4",
    );
    echo $switch['model']. "<br>";
    echo $switch['ios']. "<br>";

    // functions 
    // user defined funvtions with keywords functiom
    // parameters are passed by vale
    // return values with return statement
    function greet(){
        echo "Hello Everypne! <br>";
    }
    greet();
    // a function with a parameter
    function greet_user( $name) {
        echo "hello $name!.<br>";
    }
    greet_user("Khalid");
    // create a function that takes 3 integer parameters and return the product of first 2 to the power of the third
    function power($x, $y, $z) {
        return ($x * $y) ** $z;
    }
    echo power(3,4,2)."<br>";
    ?>
    
</body>
</html>
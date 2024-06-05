<?php
// Working with files in php

// 1.Reading Files
// file_get_contents()-> reads the entire content of a file into a string
$file_content = file_get_contents('file.txt');
echo $file_content . "<br>";
echo "fclose() output" . "<br>";

// fopen(), fclose().fread():These functios are used to read a file line by line or in chunkz

$file = fopen('file.txt','r');
if ($file) {
    while (!feof($file)){
        $line = fgets($file);
        echo $line . "<br>";
    }
    fclose($file);

}
// writing to files
// file_put_contents():This function writes data to file
$data = "Hello Everyone";
file_put_contents('file.txt', $data);

// fopen , fwrite(),  fclose():These functions are used to write data to a file in chunkz
$file = fopen('file.txt','w');
if ($file) {
    fwrite($file,"Hello, PHP");
    fclose( $file );

}
// rename(): renames a file
// rename('old file','new file');

// copy():copies a file
// copy('source.txt','destination.txt');

// unlink() deltes a file
// unlink("file.txt")

// mkdir():creates a folder
// mkdir("new folder");


// rmdir():removes a folder
// rmdir("folder");
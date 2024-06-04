<?php
// Introduction to PHP

// PHP(Recursing acronym for Hypertext Preprocessor) is a server-side scipt programmming language primarily used for web Development
// PHP code is executed on the server and the result is sent to the client's browser

// PHP files have .php extension and can contain a mixture oh HTML and Php code

// Basic syntax

// PHP code is enclosed within <?php
// statements are terminated with a semi-colon(;)
// PHP i s alosely typed langugae but supports type declarations with data types
// Comments can be single // or multiline/* */ 
// this is a single line comment
echo "Hello,Everyone";  

/**
 * this is a multiline comment
 */

//  Variables
// in php variables start with $ followed by the variable name
// variables are dynamically types based on their value

// Common Data Types: integers,strings,floats,boolean, null,objects,arrays

// Variable naming follows camelCase convention

// forms and data handling
// handling form data with $_GET and $_POAT superglobals
// 
// form validation and sanitization with filter_input() and filter_var()
// preventing code injection with prepared statements or input santization

// Form methods

// GET -> Appends form data in the URL in name/value pairs.Useful when the data doesn't need to be secure(e.g.search forms)
// POST ->Sends data inside the body of the HTTP request.More secure for sensitive data(e.g.Passwords)

// Handling $_GET data
// When a form is submitted using the GET method,form data is appended to the URL as a query string and can be accessed using $_GET superglobal

?>
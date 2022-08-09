//The RegExp \s Metacharacter in JavaScript is used to find the whitespace characters.
//The whitespace character can be a space/tab/new line/vertical character. It is same as [ \t\n\r].


//Exmaple for MetaCharacter Regular Expression

var regex = /\s/g;
            var replace = "-"; //this Value Replace Whitespace with Paramneter pass in it.
            var str = "JavaScript is the Very Powerfull Language "
                    + "Internship\nProject\tfor Swati.";
            var str1 = str.replace(regex, replace);
            alert("The new string is: \n" + str1);

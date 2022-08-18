# Assignment 3: JavaScript Password Generator

## Description

The Password Generator has been designed to meet the specifications provided. It includes a web interface written in HTML (supplied code), which allows a user to select a number of parameters before generating a randomly generated password of 8 to 128 characters. 

## Planned Development

This password generator has been developed in stages, to enable me to develop some basic Javascript code that doesn't produce errors, and then add the functionality one step at a time, and then test that functionality to make sure it works, before adding the next lot of code.

I started with a number of arrays that included Numbers, Upper Case, Lower Case and Special Characters. 

I then added some code to concatinate these into an all inclusive array, and added the code to open a window and prompt the user to enter a number between 8 & 20 characters, with a number of error conditions including:
    . No Entry;
    . Less than 8 or more than 20; and
    . Alpha chars instead of a number.

This was done using a 'while loop', which worked but had a bug where, if I entered an incorrect choice, it kept asking me to enter a number between 8 & 20, even after I entered a correct number. The variable 'lengthPrompt' was incorrectly defined, and once this was resolved the code worked as expected, all error test cases worked as expected, and when a valid number was eventually added it generated a randomly selected password the correct length.

During a tutor session, my tutor suggested that I modify the HTML to include a 'click' function to activate 'writePassword', which worked for the initial version. However, as I soo discovered, this failed when I implemented the next lot of code. 

I then deleted the code to concatinate the characters, and added the code to prompt the user to select if they wanted to include Numbers, Upper Case, Lower Case and Special Characters. The first version displayed the correct prompts in the window, but after the last prompt npothing happened. 

This bug was diagnosed and resolved. The issue was due to a mistake, where I used the variable names (number, upperCase, LowerCase & spChar) instead of parameters. I changed these to 'includeNumber', 'includeUpperCase', 'includeLowerCase' and 'includeSpChar'. 

This also failed. With some support I added 'lenghthPrompt = parsInt(lengthPrompt), which appeared to work but did not generate a password.

With some additional assistance in "office hours" we discovered the EventListener was not defined in the Javascript, because it was defined in the HTML, which did not work with the additional code. I then put the HTML back to the original code, and added "generateBtn.addEventListener("click", writePassword)" into line 22 of the Javascript, and this resolved the issue. 

I am now able to run all test cases, including testing error conditions, and it now performs as it was intended. 

## Credits

I need to thank Dan for helping me to debug the last two issues during office hours. I learnt a lot through that process.  

## Features

The features of the Password Generator are:

    . The user can create a randomly generated password between 8 and 128 chars;
    . The user is then prompted to choose if they want to include Numbers;
    . The user is then prompted to choose if they want to include Lower Case;   
    . The user is then prompted to choose if they want to include Upper Case;
    . The user is then prompted to choose if they want to include Special Characters;
    . If the user does not enter any number, or if they enter a number less than 8, or if they enter a number greater than 128 - an appropriate message is displayed.


 


 

 








 











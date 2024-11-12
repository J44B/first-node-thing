// Begin import section

import { mkdir, writeFile } from 'node:fs';

// End import section

// get message from user input

var userMessage = process.argv[2];

// names for directory and file

var currentDate = new Date(Date.now());

var dirName = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

console.log(dirName); // YYYY-MM-DD

var fileName = `${currentDate.getHours()}-${currentDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}.txt`;

console.log(fileName); // HH-mm > needs .padStart(2, "0")

// check and create directory

mkdir(dirName, (err) => {
    if (err) throw err;
});

// create file

// const path = dirName;

const saveMessage = writeFile(fileName, userMessage, 'utf-8', (err) => {
    if (err) throw err;
    console.info(`Your message was saved in file ${fileName}.`);
});

/* 
### Directory Structure:

-   The function should check the current date and ensure a directory for the day exists.
-   Directory names should follow the format yyyy-mm-dd.
-   If the directory doesn’t exist, create it.
-   If the directory exists, create the file inside it.

-   File Naming: File names should follow the format hh-mm-ss.txt.
-   Behavior: If the file doesn’t exist, create it. If the file exists, append the message to it.
*/

/* 
## createFileWithMessage

-   Purpose: Creates a file with a message as content. If the file already exists, it should append the message to the file.
-   Execution: Should be callable via the terminal and as a function in the code, i.e:

node createFileWithMessage "Hello there"

and

createFileWithMessage("Hello there")
*/

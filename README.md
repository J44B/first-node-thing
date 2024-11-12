# first-node-thing

# Requirements

## createFileWithMessage

-   Purpose: Creates a file with a message as content. If the file already exists, it should append the message to the file.
-   Execution: Should be callable via the terminal and as a function in the code, i.e:

node createFileWithMessage "Hello there"

and

createFileWithMessage("Hello there")

### Directory Structure:

-   The function should check the current date and ensure a directory for the day exists.
-   Directory names should follow the format yyyy-mm-dd.
-   If the directory doesn’t exist, create it.
-   If the directory exists, create the file inside it.

-   File Naming: File names should follow the format hh-mm-ss.txt.
-   Behavior: If the file doesn’t exist, create it. If the file exists, append the message to it.

## deleteFileByName

-   Purpose: Deletes a file by its path and name.
-   Execution: Should be callable via the terminal and as a function in the code.
-   Behavior: If file doesn’t exist, inform the user. If file exists, delete it and confirm.

# Instructions

## Part 1: createFileWithMessage

### Setup:

-   Import the required modules: fs and path.

### Function Definition:

-   Define a function createFileWithMessage(message) if you are using promises, it has to be async!

#### Date and Time:

-   Get the current date and time.
-   Format the directory name as yyyy-mm-dd.
-   Format the file name as hh-mm-ss.txt.

#### Directory Check:

-   Check if the directory for the current date exists.
-   If it doesn’t exist, create the directory.

#### File Creation/Appending:

-   Construct the full path for the file.
-   Create the file with the message

#### Terminal Execution:

-   Allow the function to be called via the terminal with a message passed as an argument.

## Part 2: deleteFileByName

### Setup:

-   Import the required modules: fs and path.

### Function Definition:

-   Define a function deleteFileByName(filePath).

### File Deletion:

-   Check if the file exists.
-   If it exists, delete the file.
-   If it doesn’t exist, log an appropriate message.

### Terminal Execution:

-   Allow the function to be called via the terminal with the file name passed as an argument.

# Hints

## Check Node.js official docs

### From the fs module:

-   access : Check user’s permissions to access a path or file, effectively checking if the path or file exist 😀
-   writeFile : Well…
-   mkdir : Creates a directory
-   unlink : Removes symbolic links (shortcuts) or files

### From the path module:

-   join: Joins segments in a path. Basically concatenation but properly done for file systems paths. e.g. join('/mydir/, '/myfile.txt') will remove unnecessary / symbols

-   For command line execution, remember you can use process.argv to access the arguments:

e.g. for the following command:

node index.mjs create "Hello there"

you could access the command and message like:
const command = process.argv[2];
const argument = process.argv[3];

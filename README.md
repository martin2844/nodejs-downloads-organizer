# nodejs-downloads-organizer

A simple script to organize your downloads folder.

## What it does?
You put your download folder's path and it will automatically move all of your selected filetype extensions into a folder with said name,
for example all of your pdfs into a folder inside the downloads folder called pdf.
You can add certain exceptions to this, read below.

## Requirements: 
1. Node installed.
2. For now, no extralibraries are needed.

___

## How to run:
1. First insert the path to your downloads folder at the start of the script
2. Then, select which types of files you want to organize by putting the filetypes on to the selectedExtensions array.
3. Write any special rules or exceptions to the switchstatement below. An example is provided.
4. Just node app.js and you are done.

But just to clarify it:

```javascript

 switch (extension) {
            //manage certain cases individually, for example, I want all excel files in a single XLX folder.
            case ".doc":
            case ".docx":
            case ".txt":
                newFilePath = dirPath + "/" + "docs";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            default:
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
 }

```
In this example, I put all of my text documents inside a docs folder. So I made a case rule for .doc, .docx, and .txt to go to a path called "/docs"

If there are no case for an extension it will default to just creating a folder with the name of said extension, for example .torrent will create a .torrent folder.



___

Version history:

1.0 - Initial script, future modifications will include an implementation of fs.watch to keep the script running and check for filechanges.

const path = require("path");
const fs = require('fs');

// this variable contains your download folder directory
const dirPath = "C:/Users/Martin/Downloads";

//Helper functions!
//just a helper function to make code cleaner down the line. This just encapsulates a rename function from fs inside a new function with 
//three clear arguments. Old Dir, new Dir, and the file.
const moveFile = (oldDir, newDir, file) => {

    fs.rename(oldDir + "/" + file , newDir + "/" + file, (err) => {
        if (err) throw err;
      });
}

//check if directory exists and ifnot create new
const checkDir = (dir) => {

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

}

//counter to check how many items we have moved:
let counter = 0;
//check the amount of time it took
const start = new Date();

fs.readdirSync(dirPath).forEach(file => {
    
    let extension = file.toLowerCase().substr(file.lastIndexOf("."), file.length);
    
    // Define the target folder. for example. I want to make my target folder have the name of the extension. FOR EXAMPLE, CSV will be
    // Downloads/csv
    const newFolder = "/" + extension.substr(1, extension.length);
    let newFilePath = dirPath + newFolder;

    //switch case for types of files you want to move. You could do it without the switch statement and just make a folder for each filetype,
    //but I rather select which filetypes I wanna move.

    const selectedExtensions = [
        ".csv",
        ".pdf",
        ".xlx", ".xls", ".xlsx", 
        ".mp3",
        ".msi", 
        ".zip", ".rar", ".7z",
        ".exe", 
        ".torrent", 
        ".svg", 
        ".jpeg", ".jpg",
        ".png",
        ".mp4", ".mkv", ".avi",
        ".doc", ".docx", ".txt",
        ".html", ".htm", ".ico", ".js",
        ".ppk", ".pem",
        ".iso"
    ];
    
    if(selectedExtensions.indexOf(extension) > -1) {
        switch (extension) {
            //manage certain cases individually, for example, I want all excel files in a single XLX folder.
            case ".doc":
            case ".docx":
            case ".txt":
                newFilePath = dirPath + "/" + "docs";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".mp4":
            case ".mkv":
            case ".avi":
                newFilePath = dirPath + "/" + "videos";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".jpeg": 
                newFilePath = dirPath + "/" + "jpg";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".xlsx":
            case ".xls":
                newFilePath = dirPath + "/" + "xlx";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".rar":
            case ".7z":
                newFilePath = dirPath + "/" + "zip";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".html":
            case ".htm":
            case ".ico":
            case ".js":
                newFilePath = dirPath + "/" + "web files";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            case ".pem":
            case ".ppk":
                newFilePath = dirPath + "/" + "keys";
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
            default:
                checkDir(newFilePath);
                moveFile(dirPath, newFilePath, file);
                break;
        }
        counter++;
    }

  });

  const total = (Date.now() - start) / 1000;

  console.log(`done, moved a total of ${counter} files and took a total of ${total} seconds`);
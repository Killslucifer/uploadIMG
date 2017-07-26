/**
 * Created by iFree on 26/07/2017.
 */
const express = require('express');
const fs = require('fs');
const unzip = require('unzip');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

var path    = require("path");
var ip = require("ip");
var port = 4000;
var bodyParser = require('body-parser');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/show',function(req,res){
    console.log(req.query.picName);

        res.sendFile(path.join(__dirname+'/public/'+req.query.picName));

    //__dirname : It will resolve to your project folder.
});

// app.get('/unzip',function(req,res){
//     fs.createReadStream('./testIMG.zip')
//         .pipe(unzip.Parse())
//         .on('entry', function (entry) {
//             var fileName = entry.path;
//             var type = entry.Directory; // 'Directory' or 'File'
//             var size = entry.size;
//             console.log(fileName);
//             // res.send(fileName);
//             // res.send(fileName);
//             // if (fileName === "this IS the file I'm looking for") {
//             //     entry.pipe(fs.createWriteStream('output/path'));
//             // } else {
//             //     entry.autodrain();
//             // }
//         });
//
// });



app.listen(port, function () {
    console.log('Example app listening on port '+port+' !')
})

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./public/'+ sampleFile.name, function(err) {
        if (err)
            return res.status(500).send(err);
myheader='<a href="'
        mider='http://'+ip.address()+':'+port+'/show?picName='+sampleFile.name;
        endd='">Visit<\/a>'
        res.send('File uploaded!'+myheader+mider+endd);

        console.log ( mider );
    });
});
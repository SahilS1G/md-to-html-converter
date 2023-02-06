const express = require('express');
const marked = require('marked');
const app = express();
const testFolder = '../client/src/blogs';
const fs = require('fs');



app.get('/getfiles/:id', (req, res) => {
    const id = req.params.id;


    const data = fs.readFileSync(testFolder + '/' + id, 'utf8');
    console.log("data: " + data)

    // const html = marked.parse(data);

    res.json({ "html": html });
});

app.get('/getfiles', (req, res) => {
    fs.readdir(testFolder, (err, files) => {
        res.json({ "files": files });
    });
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

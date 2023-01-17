const express = require('express');
const app = express();
const testFolder = '../client/src/blogs';
const fs = require('fs');


app.get('/getfiles/:id', (req, res) => {
    const id = req.params.id;
    const html =
        `<div>
        <h1>${id}</h1>
    </div>`
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

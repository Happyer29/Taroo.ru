const express = require('express');
const app = express();
const port = 3000;
//exec('wget https://webrtc.sipnet.ru/webrtc-sipnet/js/ximsswrapper.js', function(stdout) {  });

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Example app listening at http://37.140.197.25:${port}`);
})



console.log("test");


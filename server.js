const express = require('express');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/',(res,req)=>{
	res.send ("Miss you my love");
});

app.listen(port);

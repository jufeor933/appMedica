const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/medic-app'));

app.listen(process.env.PORT || 8080)

app.get('/*', function(req, res){
  // res.send("Tiempo agotado del demo 'Medic App'- Ponganse en contacto con Victor Valencia Rico para habilitar el demo nuevamente.")
  res.sendFile(path.join(__dirname + '/dist/medic-app/index.html'))
});

console.log('Server runnig')
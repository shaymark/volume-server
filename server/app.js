'use strict';

var express = require('express'),
    cors = require('cors'),
    loudness = require('loudness'),
    app = express();

app.use(cors())

app.get('/set/:value', async function(req, res) {
    var value = req.params.value;
    console.log(value);
    await loudness.setVolume(value * 1, function(err) {
        console.error(err);
    });
    res.send('Up volumen:' + value);
});

app.get('/volume', async function(req, res) {
  try {
    let volume = await loudness.getVolume()
    console.log('volume:' + volume);
    res.send('{"volume":"' + volume + '"}'); 
  } catch(e) {
    console.log('error:' + e);
    res.send(e);
  }
});

app.get('/mute', async function(req, res) {
  try {
    await loudness.setMuted(true)
    res.send("ok");
  }
  catch(e) {
    res.send(e);
  }
});

app.get('/nomute', async function(req, res) {
  try {
    await loudness.setMuted(false)
    res.send("ok");
  }
  catch(e) {
    res.send(e);
  }
});

app.listen(8082, function() {
    console.log('All is loaded!');
});
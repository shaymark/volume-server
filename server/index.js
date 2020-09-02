var loudness = require('loudness');
 
loudness.setVolume(45, function (err) {
    console.log("done");
});
 
loudness.getVolume(function (err, vol) {
    console.log(vol);
});
 
loudness.setMuted(false, function (err) {
    // Done
});
 
loudness.getMuted(function (err, mute) {
    // mute = false
});


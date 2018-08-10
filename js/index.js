const userLogin = 'lestreetlamp'; // twitch username

// Obtain a unique ClientID at: https://dev.twitch.tv/dashboard
// Register a new app to get your own as response limits are ~120/minute
const clientID = 'ptny2oa42ekrfliw99hzjacusuewyk';

// reference here for more information: https://dev.twitch.tv/docs/api/reference#get-streams
const endpoint = 'https://codepen.io/mattmascolo/pen/LBMweW' + userLogin;

var squiiUrl = 'https://api.twitch.tv/kraken/channels/drsquii?client_id=' + clientID;

setup();
function setup() {
  $.getJSON(squiiUrl).done(function(squiiData){
  console.log(squiiData);
    $('.who-doin-what').html(squiiData.display_name + " be playin " + squiiData.game);
    $('.logo').attr('src', squiiData.logo);
  })
}
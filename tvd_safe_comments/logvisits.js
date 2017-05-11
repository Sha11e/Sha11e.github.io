 function getCurrentUTCtime() {
  var utcToday = new Date();
  var cetToday = new Date(utcToday.getTime() + 7200000);
	var today = cetToday;
	
	var hours = today.getUTCHours(); if (hours<10) hours = '0' + hours;
	var minutes = today.getUTCMinutes(); if (minutes<10) minutes = '0' + minutes;
	var seconds = today.getUTCSeconds(); if (seconds<10) seconds = '0' + seconds;
	var time = hours + ":" + minutes + ":" + seconds;
	
	return time;
  }
  
  function getCurrentUTCDate() {
  var utcToday = new Date();
  var cetToday = new Date(utcToday.getTime() + 7200000);
	var today = cetToday;
  	var dd = today.getUTCDate(); if (dd<10) dd = '0' + dd;
	var mm = today.getUTCMonth()+1; if (mm<10) mm = '0' + mm;
	var yyyy = today.getUTCFullYear();
	var date = yyyy+"-"+mm+"-"+dd;
	
	return date;
  }

var config = {
    apiKey: "AIzaSyART9VomfOH4fmZBTXBdjaqnbSt0kgWJXY", //web api key AIzaSyART9VomfOH4fmZBTXBdjaqnbSt0kgWJXY
    authDomain: "test-project-f64bd.firebaseapp.com", //project id test-project-f64bd
    databaseURL: "https://test-project-f64bd.firebaseio.com", //database name test-project-f64bd
    storageBucket: "gs://test-project-f64bd.appspot.com", //<BUCKET> gs://test-project-f64bd
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();
  DBWrite('load', 'tvd_safe_comments');
  
 function DBWrite(action, page) {
//if (userip=="62.220.178.3") return; 
var date = getCurrentUTCDate();
var time =  getCurrentUTCtime();


var country_code = "n/a";
$.getJSON('http://ipinfo.io/' + userip, function(data){
    country_code = data.country;
});
	firebase.database().ref('tvd/'+date+'/' + userip + '/' + time).set({
	d_page: page,
	c_action: action,
    b_address: country_code,
  });

  }
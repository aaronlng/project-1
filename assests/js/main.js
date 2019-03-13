var config = {
  apiKey: "AIzaSyBwJVYMdbP96XJLiDZxcxVcWKVK1wCtFSk",
  authDomain: "project-1-21c94.firebaseapp.com",
  databaseURL: "https://project-1-21c94.firebaseio.com",
  projectId: "project-1-21c94",
  storageBucket: "project-1-21c94.appspot.com",
  messagingSenderId: "423051883696"
};
firebase.initializeApp(config);

var NewsURL = "https://newsapi.org/v2/everything?q=" + trending + "&language=en&apiKey=3f407cd0f52f4f3c819efcd2e3b147c9";
var trending = "games+xbox+pc+playstation+nintendo";
$.ajax({
  url: NewsURL,
  method: "GET"
}).then(function (data) {
  console.log(data);
});

$('.modal-log-in').on('click', function () { $('#login-modal.large.modal').modal('show'); });

$('.modal-sign-up').on('click', function () {$('#signup-modal').modal('show'); });


var config = {
  apiKey: "AIzaSyBwJVYMdbP96XJLiDZxcxVcWKVK1wCtFSk",
  authDomain: "project-1-21c94.firebaseapp.com",
  databaseURL: "https://project-1-21c94.firebaseio.com",
  projectId: "project-1-21c94",
  storageBucket: "project-1-21c94.appspot.com",
  messagingSenderId: "423051883696"
};
firebase.initializeApp(config);
var database = firebase.database();
var lookFor = "";



window.onload = function () {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  var section = $('section').attr('id');
  if (section === "trending") {
    lookFor = "games+xbox+pc+playstation+nintendo&sortBy=popularity";
    ignAPI();
  } else if (section === "daily") {
    lookFor = "games+xbox+pc+playstation+nintendo&from=" + today + "&to" + today;
    ignAPI();
  }
};

function ignAPI() {
  var NewsURL = "https://newsapi.org/v2/everything?q=" + lookFor + "&language=en&apiKey=3f407cd0f52f4f3c819efcd2e3b147c9";
  $.ajax({
    url: NewsURL,
    method: "GET"
  }).then(function (data) {

    for (let i = 0; i < data.articles.length; i++) {
      var titleURL = data.articles[i].title;
      var imgURL = data.articles[i].urlToImage;
      var card = $('<div class="card">');
      var img = $('<img class="img" id="img">').attr('src', imgURL);
      var content = $('<div class="content">');
      var title = $('<div class="header" id="title">').text(titleURL);
      var extra = $('<div class="extra content"><div class="ui centered labeled button" id="heart" tabindex="0"><div class="ui green button"><i class="heart icon"></i> Like</div><a class="ui basic green left pointing label" id="number">1,048</a></div></div></div>');

      card.append(img);
      card.append(content);
      card.append(title);
      card.append(extra);
      $('#cards').append(card);
    }
  });

}

$('.modal-log-in').on('click', function () { $('#login-modal.large.modal').modal('show'); });

$('.modal-sign-up').on('click', function () { $('#signup-modal').modal('show'); });


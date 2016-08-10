$(document).ready(function() {




  //on page load populate featured-joke
  var api = 'http://api.icndb.com/jokes/random';
  $.ajax({
      url: api
    })
    .done(function(data) {
      // console.log(data);
      $('#featured-joke').html(data.value.joke)
    })

  //onClick the get jokes button
  $('#btn-getjokes').on('click', function() {
    // console.log('it worked');
    var api = 'http://api.icndb.com/jokes/random';

    $.ajax({
        url: api
      })
      .done(function(data) {
        console.log(data);
        pushText();
        $('#featured-joke').text(data.value.joke)
      })

    function pushText() {
      var joke = $('#featured-joke').text()
      var li = $('<li></li>')
      li.text(joke)
      $('#previous-joke').append(li)
    }
  })
});

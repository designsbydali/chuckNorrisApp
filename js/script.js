$(document).ready(function() {
  //created input for first and last name
  $('body').prepend('<input id="firstname" placeholder="Enter First Name">')
  $('#firstname').after('<input id="lastname" placeholder="Enter Last Name">')

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
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();

      $.ajax({
          url: api,
          data: {
            firstName: firstname,
            lastName: lastname

          }
        })
        .done(function(data) {
          console.log(data);
          pushText();
          $('#featured-joke').text(data.value.joke)
          emptyFirstName();
        })

      function pushText() {
        var joke = $('#featured-joke').text()
        var li = $('<li></li>')
        li.text(joke)
        $('#previous-joke').append(li)
      }
    }
  })
});

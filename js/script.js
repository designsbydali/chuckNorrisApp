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
    // var next = $('#featured-joke').html(data.value.joke);

    $.ajax({
      url: api
    })

      .done(function(data) {
        console.log(data);
        $('#featured-joke').html(data.value.joke)
        // $('#previous-joke').text(next)
        // $('#weather-img').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png')
        // $('#previous').show()
    })
    //   .fail(function() {
    //     alert("error");
    // });

  })
});

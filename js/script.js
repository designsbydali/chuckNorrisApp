$(document).ready(function() {
  //created input for first and last name
  $('h1').after('<input id="firstname" placeholder="Enter First Name">')
  $('#firstname').after('<input id="lastname" placeholder="Enter Last Name">')

  // $('<option/>', {val: val, text: data[val]}).append(s);
  // s.append('body');

  //on page load populate featured-joke
  var api = 'http://api.icndb.com/jokes/random';
  $.ajax({
      url: api
    })
    .done(function(data) {
      // console.log(data);
      $('#featured-joke').text(data.value.joke)
    })

  //onClick the get jokes button
  $('#btn-getjokes').on('click', function() {
      // console.log('it worked');

      var newfirstname = $('#firstname').val();
      var newlastname = $('#lastname').val();

      if (!newfirstname) {
        newfirstname = 'Chuck'
      }
      if (!newlastname) {
        newlastname = 'Norris'
      }
      var numberofjokes = $('#number-of-jokes').val()

      var api = 'http://api.icndb.com/jokes/random/'+ numberofjokes;



      // console.log('yeah');

      $.ajax({
          url: api,
          data: {
            firstName: newfirstname,
            lastName: newlastname
          }
        })
        .done(function(data) {
          
          // console.log(data.value);
          $('#previous-joke').append($('#featured-joke').html())
          $('#featured-joke').html('')
          // emptyFirstName();
          for (var i=0; i<data.value.length;i++){
            var joke = data.value[i].joke
            var li = $('<li></li>')
            li.text(joke)
            $('#featured-joke').append(li)
            // console.log('yeah2');
          }
        })

      // function pushText() {
      //   var joke = $('#featured-joke').text()
      //   var li = $('<li></li>')
      //   li.text(joke)
      //   $('#previous-joke').append(li)
      //   // console.log('yeah2');
      // }
  })
})

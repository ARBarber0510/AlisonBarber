// EMAIL FORM MADE WITH FORMSPREE
window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

  // CONTACT FORM
//   $('#contact-form').submit(function(e) {
//     e.preventDefault();

//     $.ajax({
//       url: 'https://formspree.io/mattwilliams85@gmail.com',
//       method: 'POST',
//       data: { message: $('form').serialize() },
//       dataType: 'json'
//     }).done(function(response) {
//       $('#success').addClass('expand');
//       $('#contact-form')
//         .find('input[type=text], input[type=email], textarea')
//         .val('');
//     });
//   });

//   $('#close').click(function() {
//     $('#success').removeClass('expand');
//   });
// });
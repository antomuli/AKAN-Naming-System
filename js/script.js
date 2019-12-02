// Returned values after calling functions//
function output() {

  var dd = document.getElementById("day").value;
  var year = document.getElementById("year").value;
  var mm = document.getElementById("month").value;
  var male = document.getElementById("gender1").checked;
  var female = document.getElementById("gender2").checked;


  var yy = year.slice(0, 2);
  var yy = year.slice(2, 4);
  var cc = (yy - 1) / 100 + 1;
  var results = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender1").checked) {
    var gender = 'male';

  } else {
    var gender = 'female';

  }
  if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
    alert("INVALID MONTH");
  } else if (dd < 1 || dd > 31) {
    alert("INVALID DAY");
  }


  if (male) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("Born on Monday ,your Akan name is " + boy[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("Born on Tuesday ,your Akan name is " + boy[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("Born on Wednesday ,your Akan name is " + boy[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("Born on Thursday,your Akan name is " + boy[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("Born on Friday,your Akan name is " + boy[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("Born on Saturday,your Akan name is " + boy[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("Born on Sunday,your Akan name is " + boy[0]);
    }
  }


  //Female function
  else if (female) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("Born on Monday ,your Akan name is " + girl[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("Born on Tuesday,your Akan name is " + girl[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("Born on Wednesday,your Akan name is " + girl[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("Born on Thursday,your Akan name is " + girl[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("Born on Friday,your Akan name is " + girl[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("Born on Saturday,your Akan name is " + girl[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("Born on Sunday,your Akan name is " + girl[0]);
    }
  } else {
    alert("enter your credentials please");
  }
}







$(document).ready(function () {
  // Listen to submit event on the <form> itself!
  $('#main').submit(function (e) {

    // Prevent form submission which refreshes page
    e.preventDefault();

  });
});

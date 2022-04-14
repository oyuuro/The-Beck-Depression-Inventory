var submitButton = document.getElementById("submitButton");

//function to hide the get help form and show the confrimation of sending
submitButton.addEventListener('click', function() {
  event.preventDefault();
  console.log("clicked");

  var sentConfrim = document.getElementById("sentConfirm");
  var getHelp = document.getElementById("getHelp");

  getHelp.classList.add("form-hidden");
  sentConfirm.classList.remove("sent-hidden");
})

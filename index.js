var loadFile = function () {
  var fileUpload = document.getElementById("file-upload");
  fileUpload.style.display = "none";

  var image = document.getElementById("output");
  image.style.display = "block";

  var header = document.getElementById("main-heading");
  header.innerHTML = "Analysing crops....";
  // image.src = URL.createObjectURL(event.target.files[0]);

  setTimeout(myGreeting, 5000);
  function myGreeting() {
    header.innerHTML = "Congrats your analysis is complete!";
    var resultEle = document.getElementById('result');
    image.style.display = "none";
    resultEle.style.display = "block";
  }
};

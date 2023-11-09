function change_color() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("przycisk").style.backgroung = randomColor;

}



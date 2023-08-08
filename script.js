function age() {

  var bsDate = document.getElementById('dob').value;
  const [y1, m1, d1] = bsDate.split('-').map(Number);

  var date = new NepaliDate();
  var d2 = date.getDate();  
  var m2 = 1 + date.getMonth();
  var y2 = date.getYear();

  var month = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  if (d >= 0 && m >= 0 && y >= 0){

  document.getElementById("age").innerHTML =
    "Your age is " + y + " years " + m + " months " + d + " days";
  }
  else{
    document.getElementById('age').innerHTML = "Something went wrong!"
  }
  
}
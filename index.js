// conversionFactor km to mi = 1.609344 -> We'll round to 1.6 instead.
var conversionFactor = 1.6;
function kmToMi() {
  var kilometers = document.getElementById("km-input").value;
  var miles = kilometers / conversionFactor;
  console.log("Distance conversions");
  console.log(kilometers + " kilometers are:");
  console.log(miles + "miles");
  document.getElementById("mi-input").value = miles;
}
function miToKm(miles) {
  var miles = document.getElementById("mi-input").value;
  var kilometers = miles * conversionFactor;
  console.log("Distance conversions");
  console.log(miles + " miles are:");
  console.log(kilometers + " kilometers");
  document.getElementById("km-input").value = kilometers;
}


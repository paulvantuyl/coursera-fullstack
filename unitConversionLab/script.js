// temp(fahrenheit) = [temp(degrees)* 9/5] + 32
// C ---> F
function temperature() {
    var c = document.getElementById('c').value;
    var f = (c * (9/5)) + 32;
    document.getElementById('f').value = f;
}

// Weight(Pounds) = Weight(Kgs) * 2.2
// Kg ---> Lbs
function weight() {
    var kg = document.getElementById('kg').value;
    var lbs = kg * 2.2;
    document.getElementById('lbs').value = lbs;
}

// Distance(Miles) = Distance(Kms) * 0.62137
// Kms ---> Miles
function distance() {
    var km = document.getElementById('km').value;
    var m = km * 0.62137;
    document.getElementById('m').value = m;
}
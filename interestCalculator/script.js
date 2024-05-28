function compute() {
    // Get values of elements from form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById('result');
    var interest = (principal * years * rate) / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert('Please enter a positive number.');
        document.getElementById("principal").focus();
    } else {
        result.innerHTML =
            '<dl><dt>Deposit</dt>' + '<dd><mark>$' + principal +'</mark></dd></dl>' +
            '<dl><dt>Interest rate</dt>' + '<dd><mark>' + rate + '%</mark></dd></dl>' +
            '<dl><dt>Return</dt>' + '<dd><mark>$' + amount + '</mark></dd></dl>' +
            '<dl><dt>Return by</dt>' + '<dd><mark>' + year + '</mark></dd></dl>';

        result.className = 'visible';
        document.getElementById('result-heading').className = 'visible';
        document.getElementById('reset').className = 'visible';
    }
    // Troubleshooting
    console.log(principal, rate, years, result);
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval; 
}

function reset() {
	principal.value = '';
    rate.value = '';
    years.value = '';
	document.getElementById('rate_val').innerText = '10.25';
	document.getElementById('result-heading').className = 'hidden';
	document.getElementById('result').className = 'hidden';
	document.getElementById('reset').className = 'hidden';
}
        
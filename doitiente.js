function convert(){
    let result = document.getElementById('result');
    let amount = document.getElementById('amount').value;

    amount = parseFloat(amount)

    let form = document.getElementById('form').value;
    let to = document.getElementById('to').value;

    let storedValue
    if (form == to){
        result.innerHTML = "Result: " + amount;
    }
    if (form == 'vnd' && to == 'usd'){
        storedValue = amount / 23000;
        result.innerHTML = "Result: " + storedValue;
    }
    if (form == 'usd' && to == 'vnd'){
        storedValue = amount * 23000;
        result.innerHTML = "Result: " + amount * 23000;
    }
}


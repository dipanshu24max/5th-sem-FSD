function calculateSI(){

    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if(isNaN(p) || isNaN(r) || isNaN(t)){
        document.getElementById("result").innerHTML="Please enter all values.";
        return;
    }

    let si = (p * r * t) / 100;
    let amount = p + si;

    document.getElementById("result").innerHTML =
    "Simple Interest = ₹" + si.toFixed(2) +
    "<br>Total Amount = ₹" + amount.toFixed(2);
}

function calculateCI(){

    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if(isNaN(p) || isNaN(r) || isNaN(t)){
        document.getElementById("result").innerHTML="Please enter all values.";
        return;
    }

    let amount = p * Math.pow((1 + r/100), t);
    let ci = amount - p;

    document.getElementById("result").innerHTML =
    "Compound Interest = ₹" + ci.toFixed(2) +
    "<br>Total Amount = ₹" + amount.toFixed(2);
}
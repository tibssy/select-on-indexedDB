function downloadData() {
    const Http = new XMLHttpRequest();
    const url = 'https://api.exchangeratesapi.io/latest';

    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let rates = JSON.parse(Http.responseText);

            selectVal(rates, 'select1');
            selectVal(rates, 'select2');
        }
    }
}

function selectVal(rates, s) {
    let sel = document.getElementById(s);

    Object.entries(rates.rates).forEach(entry => {
        const [key, value] = entry;
        var opt = document.createElement('option');
        opt.innerHTML = key;
        opt.value = value;
        sel.appendChild(opt);
    });
}

function getSelectValue(s) {
    const selectedValue = document.getElementById(s).value;
    console.log("id: ", document.getElementById(s).firstChild.textContent);
    console.log(s + ": ", selectedValue);
    if (s == "select1") {
        rate1 = document.getElementById("rate1").innerHTML = "rate: " + selectedValue;
    }
    else if (s == "select2") {
        rate2 = document.getElementById("rate2").innerHTML = "rate: " + selectedValue;
    }

}

let rate1 = 1;
downloadData();


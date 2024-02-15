let isCelsius = true;
let inputValue = '';
let resultValue = '';
var titleElement = document.getElementById("conversion-title");
var textElement = document.getElementById("conversion-text");

document.getElementById('mainElement').classList.add('show');

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function doConvert() {
    inputValue = parseFloat(document.getElementById("input").value);

    if (!isNaN(inputValue)) {
        if (isCelsius) {
            resultValue = celsiusToFahrenheit(inputValue);
        } else {
            resultValue = fahrenheitToCelsius(inputValue);
        }
        document.getElementById("result").value = resultValue;
    } else {
        document.getElementById("result").value = "";
    }
}

document.getElementById("convert").addEventListener("click", doConvert);

document.getElementById("change").addEventListener("click", function() {
    isCelsius = !isCelsius;

    if (!isCelsius) {
        titleElement.textContent = `Cara Conversi Dari Fahrenheit(°F) Ke Celcius(°C)`;
        textElement.innerHTML = `
            Suhu <span class="superscript">S</span> dalam derajat Fahrenheit (°F) sama dengan suhu <span class="superscript">S</span> dalam derajat Celcius (°C) dikurangi 32, lalu dikali 5/9
            <br><br>
            S<span class="subscript">(°C)</span> = (S<span class="subscript">(°F)</span> - 32) x 5/9
        `;
    } else {
        titleElement.textContent = "Cara Conversi Dari Celcius(°C) Ke Fahrenheit(°F)";
        textElement.innerHTML = `
            Suhu <span class="superscript">S</span> dalam derajat Fahrenheit (°F) sama dengan suhu <span class="superscript">S</span> dalam derajat Celcius (°C) kali 9/5 tambah 32
            <br><br>
            S<span class="subscript">(°F)</span> = (S<span class="subscript">(°S)</span> x 9/5) + 32
            <br><br>
            atau
            <br><br>
            S<span class="subscript">(°F)</span> = (S<span class="subscript">(°S)</span> x 1.8) + 32
        `;
    }
    if (isCelsius) {
        document.getElementById("input-text-temp").textContent = "Celsius";
        document.getElementById("input-logo-temp").textContent = "C";
        document.getElementById("result-text-temp").textContent = "Fahrenheit";
        document.getElementById("result-logo-temp").textContent = "F";
    } else {
        document.getElementById("input-text-temp").textContent = "Fahrenheit";
        document.getElementById("input-logo-temp").textContent = "F";
        document.getElementById("result-text-temp").textContent = "Celsius";
        document.getElementById("result-logo-temp").textContent = "C";
    }
    doConvert();
});

document.getElementById("input").addEventListener("input", doConvert);

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("result").value = "";
    document.getElementById("input").value = "";
});

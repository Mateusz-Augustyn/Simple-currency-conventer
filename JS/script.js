let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formularz został wysłany");

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let EUR = 4.2883;
    let USD = 3.9571;
    let GBP = 5.0003;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "GBP":
            result = amount / GBP;
            break;
    }
console.log(result.toFixed(2))
resultElement.innerText = `${result.toFixed(2)} ${currency}`;
})


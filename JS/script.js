{
    const calcCurrency = (currency, amount) => {

        const EUR = 4.2883;
        const USD = 3.9571;
        const GBP = 5.0003;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GBP":
                return amount / GBP;
        }
    };

    const updateResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const currency = currencyElement.value;
        const amount = amountElement.value;

        const result = calcCurrency(currency, amount);
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

        updateResult(result, currency);
    };
   

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    };

    init();

}

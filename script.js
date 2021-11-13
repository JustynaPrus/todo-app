const button = document.querySelector('.reset');
const form = document.querySelector('form');
const buttonArray = [...document.querySelectorAll('.percent')];

const bill = document.getElementById('bill');
const numberOfPeople = document.getElementById('numberOfPeople');
const custom = document.querySelector('.custom');
const tip = document.getElementById('tip');
const total = document.getElementById('total');

let customValue = custom.value;
let percent = 0;

buttonArray.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target == buttonArray[0]) {
            percent = 5;
        } else if (event.target == buttonArray[1]) {
            percent = 10;
        } else if (event.target == buttonArray[2]) {
            percent = 15;
        } else if (event.target == buttonArray[3]) {
            percent = 20;
        } else if (event.target == buttonArray[4]) {
            percent = 25;
        } else {
            percent = customValue;
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let billValue = bill.value;
    let numberOfPeopleValue = numberOfPeople.value;

    if (numberOfPeopleValue > 0) {
        let tipAmount = (billValue / 100) * percent;
        let billTotal = parseFloat(billValue) + parseFloat(tipAmount);

        total.textContent = `${(billTotal/numberOfPeopleValue).toFixed(2)}`;
        tip.textContent = `${(tipAmount/numberOfPeopleValue).toFixed(2)}`;

        document.querySelector('.alert').style.opacity = "0";
        numberOfPeople.style.border = "none";
    } else {
        document.querySelector('.alert').style.opacity = "100%";
        numberOfPeople.style.border = "2px solid indianred";
    }
});

button.addEventListener('click', resetForm);

function resetForm() {
    bill.value = "0";
    numberOfPeople.value = "0";
    custom.value = "Custom";
    tip.textContent = "0.00";
    total.textContent = "0.00"
}
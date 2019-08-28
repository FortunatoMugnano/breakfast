console.log("hello")

const breakfast = {
    drink: "Espresso",
    food: "Pan di stella cookies",
    amount: 5,
}

console.log("this is my breakfast", breakfast)

const createBreakfast = (item) => {
    return `<div>
    <h1>This is my breakfast today!</h1>
    <h3>Fortunato Mugnano</h3>
    <p>${item.drink} with ${item.amount} ${item.food}.</p>
    </div>`
}

console.log(createBreakfast)

const dailyBreakfast = document.querySelector(".entryLog");

dailyBreakfast.innerHTML += createBreakfast(breakfast);
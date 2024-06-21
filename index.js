// dog = [name, breed, price, has_been_adopted]

let murphy = ['Murphy', 'bulldog mix', 123.45, false];
let poppy = ['Poppy', 'Shiht-zu', 123.45, false];
let jack = ['Jack', 'Beagle', 123.45, false];
let duffy = ['Duffy', 'Pitbull mix', 123.45, false];
let lucas = ['Lucas', 'Shephard mix', 123.45, false];
let jake = ['Jake', 'Yellow Lab', 123.45, false];
let angus = ['Angus', 'Boxer', 123.45, false];
let violet = ['Violet', 'Chocolate Lab', 123.45, false];
let piper = ['Piper', 'Chocolate Lab', 123.45, false];
let maximus = ['Maximus', 'Chocolate Lab', 123.45, false];
let luna = ['Luna', 'Chocolate Lab', 123.45, false];
let stella = ['Stella', 'Chocolate Lab', 123.45, false];

let total_cost = 0;

function displayDogInformation (dog) {
    let dog_name = dog[0];
    let dog_breed = dog[1];
    let dog_price = dog[2];

    alert_text = `
    Name: ${dog_name}
    Breed: ${dog_breed}
    Price: ${dog_price}
    `
    alert(alert_text)
}

function addToTotalAndDisplay(dog) {
    dog_price = dog[2]
    has_been_adopted = dog[3]

    if (has_been_adopted) {
        alert("This dog is taken...")
    } else {
        total_cost += dog_price
        alert_text = `
        Total: ${total_cost}
        `
        alert(alert_text)
        dog[3] = true
    }
}

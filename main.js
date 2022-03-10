//DOM:en

let myPetDiv = document.querySelector(".myPetDiv");

const createPetBtn = document.querySelector(".createPetBtn");

let arrayWPets = [];

let petId = 0;

class Pet {

    constructor(name, petType) {

        this.name = name;

        this.petType = petType;

        this.petId = petId++;

        this.tiredness = 50;

        this.hunger = 50;

        this.loneliness = 50;

        this.happiness = 50;

        arrayWPets.push(this);

    }

    nap() {

        console.log(`You took a nap with ${this.name}.`);

        this.tiredness -= 50;

        this.happiness -= 20;

        this.hunger += 20;

        this.loneliness += 20;

    }

    play() {

        if (this.tiredness < 70) {

            console.log(`You played with ${this.name}!`);

            this.happiness += 30; 

            this.hunger += 20;
    
            this.tiredness += 20;
    
            this.loneliness -= 10;

        }

    }

    eat() {

        console.log(`You fed ${this.name}.`);

        this.hunger -= 60;

        this.tiredness += 10;

    }

}

function drawPetInfo(thePet, rightURL) {

    let myPetinfo = `

        <h2>${thePet.name} the ${thePet.petType}</h2>
        <img src=${rightURL} alt="image of ${thePet.type}">
        <label for="myPetTiredness${thePet.petId}">Tiredness:</label>
        <progress id="myPetTiredness${thePet.petId}" class="myPetTiredness" value="${parseInt(thePet.tiredness)}" max="100"> ${thePet.tiredness}% </progress>
        <br>
        <label for="myPetHunger${thePet.petId}">Hunger:</label>
        <progress id="myPetHunger${thePet.petId}" class="myPetHunger" value="${parseInt(thePet.hunger)}" max="100"> ${thePet.hunger}% </progress>
        <br>
        <label for="myPetLoneliness${thePet.petId}">Loneliness:</label>
        <progress id="myPetLoneliness${thePet.petId}" class="myPetLoneliness" value="${parseInt(thePet.loneliness)}" max="100"> ${thePet.loneliness}% </progress>
        <br>
        <label for="myPetHappiness${thePet.petId}">Happiness:</label>
        <progress id="myPetHappiness${thePet.petId}" class="myPetHappiness" value="${parseInt(thePet.happiness)}" max="100"> ${thePet.happiness}% </progress>
        <br><br>
        <button class="napWPetBtn">Nap with ${thePet.name}</button>
        <button class="playWPetBtn">Play with ${thePet.name}</button>
        <button class="eatWPetBtn">Eat with ${thePet.name}</button>
    `;

    return myPetinfo;
}

function updatePetHealth(thePet) {

    const myPetTiredness = document.querySelectorAll(".myPetTiredness");

    const myPetHunger = document.querySelectorAll(".myPetHunger");

    const myPetLoneliness = document.querySelectorAll(".myPetLoneliness");

    const myPetHappiness = document.querySelectorAll(".myPetHappiness");

    myPetTiredness[thePet.petId].value = thePet.tiredness;

    myPetTiredness[thePet.petId].innerText = thePet.tiredness + "%";

    myPetHunger.forEach((progress, index) => {

        if(index === thePet.petId) {

            progress.value = thePet.hunger;

            progress.innerText = thePet.hunger + "%";

        } 

    })

    myPetLoneliness.forEach((progress, index) => {

        if(index === thePet.petId) {

            progress.value = thePet.loneliness;

            progress.innerText = thePet.loneliness + "%";

        }

    })

    myPetHappiness.forEach((progress, index) => {

        if(index === thePet.petId) {

            progress.value = thePet.happiness;

            progress.innerText = thePet.happiness + "%";

        }

    })

}

createPetBtn.addEventListener("click", () => {

    let petNameInput = document.querySelector("#petName").value;

    let petTypeSelect = document.querySelector("#petTypeSelect").value;

    let myPet = new Pet(petNameInput, petTypeSelect);
    
    let rightImgURL = "";

    if(myPet.petType === "rat") {

        rightImgURL = "/images/rat.jpeg";

    } else if (myPet.petType === "elephant") {
        
        rightImgURL = "/images/elephant.png";

    } else {

        rightImgURL = "/images/turtle.png"

    }

    let myPetInfo = drawPetInfo(myPet, rightImgURL);

    myPetDiv.innerHTML += myPetInfo;

    let napWPetBtns = document.querySelectorAll(".napWPetBtn");

    console.log(arrayWPets)

    napWPetBtns.forEach((btn, index) => {

        btn.addEventListener("click", () => {

            alert(`You took a nap with ${arrayWPets[index].name}.`);

            arrayWPets[index].nap();
    
            updatePetHealth(arrayWPets[index]);
            
        })

    })

    let playWPetBtns = document.querySelectorAll(".playWPetBtn");

    playWPetBtns.forEach((btn, index) => {

        btn.addEventListener("click", () => {

            alert(`You played with ${arrayWPets[index].name}!`);

            arrayWPets[index].play();
    
            updatePetHealth(arrayWPets[index]);
    
        })

    })

    let eatWPetBtns = document.querySelectorAll(".eatWPetBtn");

    eatWPetBtns.forEach((btn, index) => {

        btn.addEventListener("click", () => {

            alert(`You fed ${arrayWPets[index].name}.`);
            
            arrayWPets[index].eat();
    
            updatePetHealth(arrayWPets[index]);
    
        })

    })

})
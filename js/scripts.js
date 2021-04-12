// UI Logic
function getDayBorn() {
    alert("Hi there! We'll start by providing the day born. Click ok to continue");
    let dateString = prompt("Enter date born in the following format: mm/dd/yyyy"); // Getting the date as a string
    let gender = prompt("What is your gender, female or male?");
    getNameFromDate(dateString, gender);
    
    
}

// Business Logic
function getNameFromDate(dateString, gender) {
    let dateOfBirth = new Date(dateString); // Creating a date object from the string
    let dayOfTheWeek = dateOfBirth.getDay(); // Get the position of the day
    let maleNames = ["Brian", "Paul", "Isaac", "Kevin", "Gabriel", "Peter", "Timothy"];
    let femaleNames = ["Susan", "Mary", "Catherine", "Fiona", "Rose", "Stella", "Vivian"];
    if(gender == "male") {
        // console.log(maleNames[dayOfTheWeek]);
        document.getElementById('displayNameHere').innerHTML = "Your Birth Name is " + maleNames[dayOfTheWeek];
    }
    else if(gender == "female") {
        // console.log(femaleNames[dayOfTheWeek]);
        document.getElementById('displayNameHere').innerHTML = "Your Birth Name is " + femaleNames[dayOfTheWeek];
    }
    else {

    }
}
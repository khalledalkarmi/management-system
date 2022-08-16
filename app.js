const employee = function (employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary(level)
    function salary(level) {
        switch (level) {
            case "Senior":
                return getRandomInt(1500, 2000);
            case "Mid-Senior":
                return getRandomInt(1000, 1500);
            case "Junior":
                return getRandomInt(500, 1000);
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
let employeeArray = [
    new employee("1000", "Ghazi Samer", "Administration", "Senior", "google.com"),
    new employee("1001", "Lana Ali", "Finance", "Senior", "google.com"),
    new employee("1002", "Tamara Ayoube", "Marketing", "Senior", "google.com"),
    new employee("1003", "Safi Walid", "Administration", "Mid-Senior", "google.com"),
    new employee("1004", "Omar Zaid", "Development", "Senior", "google.com"),
    new employee("1005", "Rana Saleh", "Development", "Junior", "google.com"),
    new employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "google.com"),
]

let table = document.createElement("table");
let tbody = document.createElement("tbody");
for (const employee of employeeArray) {
    console.log(employee.fullName + " " + employee.salary);

    // createRow(employee);
}


//TODO: make rowFunction
//TODO: make colFunction
//TODO: make tableFunction

// function crateThead(employee) {
//     let thead = document.createElement("thead");
//     let tr = document.createElement("tr");

//     for (const iterator of Object.entries(employee)) {
//         if (iterator[0] != "imageUrl") {
//             let th = document.createElement("th");
//             th.textContent = iterator[0];
//             tr.append(th);
//         }
//     }
//     thead.append(tr);

//     return thead;
// }

// function createRow(employee) {
//     let tr = document.createElement("tr");
//     for (const iterator of Object.entries(employee)) {
//         if (iterator[0] != "imageUrl") {
//             let th = document.createElement("th");
//             th.textContent = iterator[1];
//             tr.append(th);
//         }
//     }

//     tbody.append(tr);
// }

// table.append(crateThead(employeeArray[0]));
// table.append(tbody);

const main = document.getElementsByTagName("main");
// main[0].append(table);


let form = document.getElementById("form");
let cardDiv = document.getElementById("cardDiv");

function getData(event) {
    let id = document.getElementById("ID").value;
    let fullName = document.getElementById("fullName").value;
    let department = document.getElementById("department").value;
    let level = document.getElementById("level").value;
    let imageUrl = document.getElementById("imageUrl").value;
    let employeeForm = new employee(id, fullName, department, level, imageUrl);
    localStorage.setItem("employee", JSON.stringify(employeeForm));
    console.log(employeeForm);
    createCard(employeeForm);
    event.preventDefault();

}

form.addEventListener('submit', getData);

function createCard(employeeForm) {

    let divCol = document.createElement("div");
    divCol.className = "col-sm-3";
    cardDiv.append(divCol);

    let card = document.createElement("div");
    card.className = "card"
    divCol.append(card);

    let imgCard = document.createElement("img");
    imgCard.className = "card-img-top";
    imgCard.style.width="50px"
    imgCard.src = employeeForm.imageUrl
    card.append(imgCard)

    let cardBody = document.createElement("div");
    cardBody.className = "card-body"
    card.append(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title"
    cardTitle.textContent = "hi"
    cardBody.append(cardTitle);

    let cardText = document.createElement("p");
    cardText.className = "card-text"
    cardText.textContent = "Name: " + employeeForm.fullName + " - ID: " + employeeForm.employeeID +  " Department: " + employeeForm.department + " - Level: " + employeeForm.level
    cardBody.append(cardText);

}













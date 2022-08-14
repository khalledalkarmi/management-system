const employee = function (employeeID, fullName, department, level, imageUrl) {
    this.department = department;
    this.employeeID = employeeID;
    this.fullName = fullName;
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

for (const employee of employeeArray) {
    console.log(employee.fullName + " " + employee.salary);
}


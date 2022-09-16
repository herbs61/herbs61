function submit() {

    //.value returns the value entered in your forms
    let regName = /^[a-zA-Z]{2,30}$/; //input value should be alphabets only
    let fullName = document.getElementById("f_Name").value;
    let age = document.getElementById("age").value;
    let nationality = document.getElementById("nation").value;
    let ticketNo = document.getElementById("tic").value;
    let departure = document.getElementById("dep").value;
    let destination = document.getElementById("des").value;

    // Display the values entered on to travel details
    if (fullName == null || fullName == "") { //fullname space should not be blank
        alert("Name is not displayed")
    } else if (!regName.test(fullName.value)) { //fullname should be in alphabets only
        alert("Invalid name")
    } else {
        document.getElementById("tr_name").innerHTML = "Full Name: " + fullName
    }

    if (age == null) {
        alert("Enter your age")
    } else if (age <= 18 || age >= 70) { //age comdition not less than 18 or above 70
        alert("Please travel with guardian")
    } else {
        document.getElementById("tr_age").innerHTML = "Age: " + age
    }

    document.getElementById("tr_nation").innerHTML = "Nationality: " + nationality

    document.getElementById("tr_number").innerHTML = "Ticket No.: " + ticketNo

    if (departure == null || departure == "") { //departure conditions
        alert("departure is not displayed")
    } else if (!regName.test(departure.value)) {
        alert("Enter reasonable departure")
    } else {
        document.getElementById("tr_depart").innerHTML = "Departure: " + departure
    }


    if (destination == null || destination == "") { //destination conditions
        alert("destination is not displayed")
    } else if (!regName.test(destination.value)) {
        alert("Enter reasonable destination")
    } else {
        document.getElementById("tr_destin").innerHTML = "Destination: " + destination
    }

}
function total() {
    let num1 = parseInt(document.getElementById("eng").value);
    let num2 = parseInt(document.getElementById("mat").value);
    let num3 = parseInt(document.getElementById("sci").value);
    let num4 = parseInt(document.getElementById("soc").value);

    if (num1 > 100 || num2 > 100 || num3 > 100 || num4 > 100) {
        alert("Wrong input")
    } else {
        totality = num1 + num2 + num3 + num4
        document.getElementById("total").innerHTML = "</br>" + "English: " + num1 + "</br>" + "Maths: " + num2 +
            "</br>" + "Science: " + num3 + "</br>" + "Social: " + num4 + "</br>" + "</br>" + "</br>" + "Total Result: " + totality;

    }
}

function average() {


    Average = totality / 4
    document.getElementById("avg").innerHTML = "Average: " + Average;

}

function grade() {


    if (Average >= 80 && Average <= 100) {
        document.getElementById("gra").innerHTML = "Grade: " + "A";


    } else if (Average >= 70 && Average <= 79) {
        document.getElementById("gra").innerHTML = "Grade: " + "B";

    } else if (Average >= 60 && Average <= 69) {
        document.getElementById("gra").innerHTML = "Grade: " + "C";

    } else if (Average >= 50 && Average <= 59) {
        document.getElementById("gra").innerHTML = "Grade: " + "D";

    } else if (Average >= 40 && Average <= 49) {
        document.getElementById("gra").innerHTML = "Grade: " + "E";

    } else {
        document.getElementById("gra").innerHTML = "Grade: " + "F";

    }

}
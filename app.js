document.write("<br>");
document.write("<h3>Question no 01 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques1() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function ques1() {
    var resultDiv = document.getElementById("pere");
    resultDiv.innerHTML = 'var studentNamesLiteral = [];<br><br>';
}
document.write('<div id="pere"></div>')

// question no 2

document.write("<h3>Question no 02 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques2();">Click Me</button>');
function ques2() {
    var resultDiv = document.getElementById("pe");
    resultDiv.innerHTML = '<br>var studentNamesObject = new Array();<br>';
}
document.write('<div id="pe"></div>')

document.write("<br>");
document.write("<br>");

//question no 3

document.write("<h3>Question no 03 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques3()">Click Me</button>');
function ques3() {
    var resultDiv = document.getElementById("per");
    resultDiv.innerHTML = '<br>var stringsArray = ["apple", "banana", "orange"];<br>';
}
document.write('<div id="per"></div>')
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var resultDiv = document.getElementById("perra");
    resultDiv.innerHTML = '<br>var numbersArray = [1, 2, 3, 4, 5]; <br>';
};
document.write('<div id="perra"></div>')
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    var resultDiv = document.getElementById("perer");
    resultDiv.innerHTML = '<br>var booleanArray = [true, false, true, true];    <br>';
}
document.write('<div id="perer"></div>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques6()"">Click Me</button>');
function ques6() {
    var resultDiv = document.getElementById("pererl");
    resultDiv.innerHTML = '<br>var mixedArray = ["apple", 5, true, "banana", 10];<br>';
}
document.write('<div id="pererl"></div>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    let qualificationsList = document.getElementById("qualificationsList");
    qualifications.forEach(qualification => {
        let listItem = document.createElement("li");
        listItem.textContent = qualification;
        qualificationsList.appendChild(listItem);
    });
}
document.write('<br><br><div id="qualificationsList"></div>')
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var nameone = prompt('first name ');
    var nametwo = prompt('second name ');
    var namethree = prompt('thired name');
    let studentNames = [nameone, nametwo, namethree];
    var Scorone = prompt('first Score \rAssuming scores out of 500 for each student ');
    var Scortwo = prompt('Second Score \r Assuming scores out of 500 for each student ');
    var Scorthree = prompt('thired Score\r Assuming scores out of 500 for each student');
    let scores = [Scorone, Scortwo, Scorthree];
    for (let i = 0; i < studentNames.length; i++) {
        let percentage = (scores[i] / 500) * 100;
        console.log(studentNames[i] + ": Score - " + scores[i] + ", Percentage - " + percentage + "%");
        alert(studentNames[i] + ": Score - " + scores[i] + ", Percentage - " + percentage + "%");
    }
}
document.write("<br>");
document.write("<br>");

//question no 9

document.write("<h3>Question no 09 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques9()">Click Me</button>');
function ques9() {
    // Initialize an array with color names
    var colorArray = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

    // Display the original array
    console.log('Original array of colors:' + colorArray);
    // console.log(colorArray);

    // Ask the user for a color to add to the beginning
    var colorToAddAtBeginning = prompt('Enter a color to add to the beginning:');
    colorArray.unshift(colorToAddAtBeginning);

    // Display the updated array after adding at the beginning
    console.log('Updated array after adding at the beginning:' + colorArray);
    alert('Updated array after adding at the beginning:' + colorArray);
    // console.log(colorArray);

    // Ask the user for a color to add to the end
    var colorToAddAtEnd = prompt('Enter a color to add to the end:');
    colorArray.push(colorToAddAtEnd);

    // Display the updated array after adding at the end
    console.log('Updated array after adding at the end:' + colorArray);
    alert('Updated array after adding at the end:' + colorArray);
    // console.log(colorArray);

    // Add two more colors to the beginning
    colorArray.unshift('Purple', 'Pink');

    // Display the updated array after adding two colors at the beginning
    console.log('Updated array after adding two colors at the beginning:' + colorArray);
    alert('Updated array after adding two colors at the beginning:' + colorArray);
    // console.log(colorArray);

    // Delete the first color in the array
    colorArray.shift();

    // Display the updated array after deleting the first color
    console.log('Updated array after deleting the first color:' + colorArray);
    alert('Updated array after deleting the first color:' + colorArray);
    // console.log(colorArray);

    // Delete the last color in the array
    colorArray.pop();

    // Display the updated array after deleting the last color
    console.log('Updated array after deleting the last color:' + colorArray);
    alert('Updated array after deleting the last color:' + colorArray);
    // console.log(colorArray);

    // Ask the user for an index and a color to add
    var indexToAdd = parseInt(prompt('Enter the index to add a color:'));
    var colorToAddAtIndex = prompt('Enter the color to add at the specified index:');
    colorArray.splice(indexToAdd, 0, colorToAddAtIndex);

    // Display the updated array after adding at the specified index
    console.log('Updated array after adding at the specified index:' + colorArray);
    alert('Updated array after adding at the specified index:' + colorArray);
    // console.log(colorArray);

    // Ask the user for an index and the number of colors to delete
    var indexToDelete = parseInt(prompt('Enter the index to delete color(s):'));
    var numColorsToDelete = parseInt(prompt('Enter the number of colors to delete:'));
    colorArray.splice(indexToDelete, numColorsToDelete);

    // Display the updated array after deleting colors at the specified index
    console.log('Updated array after deleting colors at the specified index:' + colorArray);
    alert('Updated array after deleting colors at the specified index:' + colorArray);
    // console.log(colorArray);

}
document.write("<br>");
document.write("<br>");

//question no 10

document.write("<h3>Question no 10 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques10()">Click Me</button>');
function ques10() {
    alert('the Score in ascending order using Array’s sort method.')
    var scoronest = parseInt(prompt('put the score of student one! '))
    var scortwost = parseInt(prompt('put the score of student two! '))
    var scorthreest = parseInt(prompt('put the score of student three! '))
    var scorfourst = parseInt(prompt('put the score of student four! '))
    var scorfivest = parseInt(prompt('put the score of student five! '))
    let studentScoes = [scoronest, scortwost, scorthreest, scorfourst, scorfivest];
    studentScoes.sort(function (a, b) { return a - b });
    console.log("Sorted student scores in ascending order:", studentScoes);
    alert("Sorted student scores in ascending order:\r" + studentScoes);

}
document.write("<br>");
document.write("<br>");

//question no 11

document.write("<h3>Question no 11 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques11()">Click Me</button>');
function ques11() {
    // Initialize array with city names
    let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
    alert(cities)
    // Initialize selectedCities array
    let selectedCities = [];

    // Copy three elements from cities array to selectedCities array
    selectedCities = cities.slice(0, 3);

    // Display the selectedCities array
    console.log("Selected cities:", selectedCities);
    alert("Selected cities:" + selectedCities);
}
document.write("<br>");
document.write("<br>");

//question no 12

document.write("<h3>Question no 12 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques12()">Click Me</button>');
function ques12() {
    var arr = ["This", "is", "my", "cat"];
    var singleString = arr.join(" ");
    console.log(singleString);
    alert(singleString);
}
document.write("<br>");
document.write("<br>");

//question no 13

document.write("<h3>Question no 13 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques13()">Click Me</button>');
function ques13() {
    var fifoArray = [];
    fifoArray.unshift("mouse");
    fifoArray.unshift("keyboard");
    fifoArray.unshift("printer");

    var firstValue = fifoArray.shift();
    var secondValue = fifoArray.shift();
    var thirdValue = fifoArray.shift();

    console.log("First value:", firstValue);
    alert("First value:", firstValue);
    console.log("Second value:", secondValue);
    alert("Second value:", secondValue);
    console.log("Third value:", thirdValue);
    alert("Third value:", thirdValue);
}
document.write("<br>");
document.write("<br>");

//question no 14

document.write("<h3>Question no 14 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques14()">Click Me</button>');
function ques14() {
    // Initialize an empty arra
    let lifoArray = [];

    lifoArray.push("mouse");
    lifoArray.push("keyboard");
    lifoArray.push("printer");

    let lastValue = lifoArray.pop();
    let secondLastValue = lifoArray.pop();
    let thirdLastValue = lifoArray.pop();

    console.log("Last value:", lastValue);
    alert("Last value:", lastValue);
    console.log("Second last value:", secondLastValue);
    alert("Second last value:", secondLastValue);
    console.log("Third last value:", thirdLastValue);
    alert("Third last value:", thirdLastValue);

}
document.write("<br>");
document.write("<br>");

//question no 15

document.write("<h3>Question no 15 :-</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques15()">Click Me</button>');
function ques15() {
    let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    // Start building the select menu
    let selectMenu = "<select id='manufacturerSelect'>";

    // Add options for each manufacturer
    for (let i = 0; i < manufacturers.length; i++) {
        selectMenu += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
    }

    // Close the select menu tag
    selectMenu += "</select>";

    // Display the select menu in the browser
    // document.write(selectMenu);
    var resultDiv = document.getElementById("caat");
    resultDiv.innerHTML = '<br>' + selectMenu;
}

document.write('<div id="caat"></div>')
document.write("<br>");
document.write("<br>");


document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075

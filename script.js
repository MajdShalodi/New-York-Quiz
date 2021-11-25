// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the capital of New York State?",
    a: [{ text: "Syracuse", isCorrect: false },
        { text: "Staten Island", isCorrect: false },
        { text: "Albany", isCorrect: true },
        { text: "Manhattan", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Around how many languages are spoken in New York?",
    a: [{ text: "100 mil", isCorrect: false, isSelected: false },
        { text: "600 mil", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "800 mil", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the best borough in New York?",
    a: [{ text: "Staten Island", isCorrect: true },
        { text: "Staten Island", isCorrect: true },
        { text: "Staten Island", isCorrect: true },
        { text: "Staten Island", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "rgba(79,146,240,.5)";
    op3.style.backgroundColor = "rgba(79,146,240,.5)";
    op4.style.backgroundColor = "rgba(79,146,240,.5)";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(79,146,240,.5)";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "rgba(79,146,240,.5)";
    op4.style.backgroundColor = "rgba(79,146,240,.5)";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(79,146,240,.5)";
    op2.style.backgroundColor = "rgba(79,146,240,.5)";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "rgba(79,146,240,.5)";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(79,146,240,.5)";
    op2.style.backgroundColor = "rgba(79,146,240,.5)";
    op3.style.backgroundColor = "rgba(79,146,240,.5)";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "YES SIRR";
        result[0].style.color = "rgba(46, 191, 90)";
    } else {
        result[0].innerHTML = "You're wrong lol";
        result[0].style.color = "#e31414";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})



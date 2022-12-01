

var selectedMonth = 0;
var selectedYear = 0;

function updateMonth() {
    selectedMonth = document.querySelector("#selected-month").value;
    if(selectedMonth !== 0 && (selectedYear !== 0)){
    createCalendar(calendar, selectedYear, selectedMonth);
    }
}

function updateYear() {
    selectedYear = document.querySelector("#selected-year").value;
    createCalendar(calendar, selectedYear, selectedMonth);
}
var d = new Date();
function createCalendar(elem, year, month) {

    let mon = month - 1; 
     d = new Date(year, mon);

    let table = '<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() == mon) {
        table += '<td class="green">' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { 
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function markedDate() {
  console.log("inside markedDate");
  let enteredDate = document.querySelector("#entered-date").value;
   console.log(enteredDate);
  if (enteredDate === "") {
    alert("Please enter a date");
  }  else {
  var tds = document.getElementsByTagName("td");

   tds[enteredDate].style.backgroundColor="green";
  }
  document.querySelector("#entered-date").value = "";
}



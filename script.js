function clearScreen() {
  document.getElementById("result").value = "";
}


function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {

  setTimeout(function() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  }, 1000); // Delay execution for 1000 milliseconds (1 second)
}

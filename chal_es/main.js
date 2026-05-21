var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("tekstni_id");

button.onclick = function() {
    text.innerHTML = input.value;
}

var regex = new RegExp(/0-9/);
document.getElementById("tekstni_id").innerHTML = regex.test(text.innerHTML);

if (regex.test(text.innerHTML) === true) {
    document.getElementById("tekstni_id").innerHTML = "Your input contains numbers!";
} else {
    document.getElementById("tekstni_id").innerHTML = "ok";
}
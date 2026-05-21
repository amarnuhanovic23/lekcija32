var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("tekstni_id");

button.onclick = function() {
    text.innerHTML = input.value;
}

//var text = "The best school in the world is Digital School!";
//var result = text.search("Digital School");
//document.getElementById("result1").innerHTML = result;

//var text = "The best school in the world is Digital School!";
//var result = text.replace(/Digital School/);
//document.getElementById("result2").innerHTML = result;

//var text = "The best school in the world is Digital School!";
//var result = text.replace(/Digital School/g, "Another School");
//document.getElementById("result3").innerHTML = result;

//var text = "abcdef";
//var regex = new RegExp("abc");
//document.getElementById("result4").innerHTML = regex.test(text);

//var text = "The best school in the world is Digital School!";
//var regex = /school/g;
//document.getElementById("result5").innerHTML = regex.match(text);

//var text = "The best school in the world is Digital School!";
//var regex = /i/g;
//document.getElementById("result6").innerHTML = text.match(regex);

//var text = "The best school in the world is Digital School!";
//var regex = /[abc]/g;
//document.getElementById("result7").innerHTML = text.match(regex);

//var text = "The best school in the top 10 is Digital School!";
//var regex = /[0-9]/g;
//document.getElementById("result8").innerHTML = text.match(regex);

//var text = "The best school in the world is Digital School!";
//var regex = /top|best|school/g;
//document.getElementById("result9").innerHTML = text.match(regex);

//var text = "100 precent!";
//var regex = /\d/g;
//document.getElementById("result10").innerHTML = text.match(regex);

//var text = "The best school in the world is Digital School!";
//var regex = /\s/g;
//document.getElementById("result11").innerHTML = text.match(regex);

//var text = "Heeey, how are you?";
//var regex = /e+/g;
//document.getElementById("result12").innerHTML = text.match(regex);

//var text = "so, i hope well se each othert again soon ...";
//var regex = /so*/g;
//document.getElementById("result13").innerHTML = text.match(regex);

//var text = "hey, hi, hiii!!!";
//var regex = /hi?/g;
//document.getElementById("result14").innerHTML = text.match(regex);

//var text = "hello, helloo, hellooo !!!";
//var regex = /hello{3}/g;
//document.getElementById("result15").innerHTML = text.match(regex);

//var text = "hello, helloo, hellooo, helloooo, hellooooo !!!";
//var regex = /hello{3,5}/g;
//document.getElementById("result16").innerHTML = text.match(regex);

//var text = "bestfrieng, boyfriend, girlfriend";
//var regex = /end$/g;      
//document.getElementById("result17").innerHTML = text.match(regex);

//var text = "cat, catalog, category";
//var regex = /^cat/g;
//document.getElementById("result18").innerHTML = text.match(regex);
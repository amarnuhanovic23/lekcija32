var input = document.getElementById("nameInput");
        var button = document.getElementById("btn");
        var error = document.getElementById("error");

        button.onclick = function(event) {

            event.preventDefault();

            var regex = /^[A-Za-z]+$/;

            if(regex.test(input.value)) {
                error.innerHTML = "";
            } else {
                error.innerHTML = "Only letters are allowed!";
            }
        } 
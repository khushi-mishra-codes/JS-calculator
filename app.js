let string = "";
let input = document.querySelector("#inputplace");
let btns = document.querySelectorAll("button");

let arr = Array.from(btns);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == "%") {
            string = (eval(string) / 100).toString();
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    
    })
})
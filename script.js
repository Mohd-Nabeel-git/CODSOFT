let string = "";
let buttons = document.querySelectorAll(".btn");
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;
        if (value === "=") {
            try {
                string = eval(string);
                if (string === Infinity || isNaN(string)) {
                    throw new Error("Invalid operation");
                }
                document.querySelector(".input").value = string;
            } catch (error) {
                document.querySelector(".input").value = "Error";
                string = "";
            }
        } 
        else if (value === "x") {
            string += "*";
            document.querySelector(".input").value = string;
        } 
        else if (value === "DEL") {
            string = "";
            document.querySelector(".input").value = string;
        } 
        else {
            if (value === ".") {
                const lastNumber = string.split(/[\+\-\*\/]/).pop();
                if (lastNumber.includes(".")) return;
            }

            string += value;
            document.querySelector(".input").value = string;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".b");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;
            console.log("Button clicked:", value); // Add this line

            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(display.value.replace(/×/g, "*").replace(/√/g, "Math.sqrt"));
                } catch (error) {
                    display.value = "Error";
                }
            } else if (value === "()") {
                // You can add functionality for parentheses here
            } else if (value === "%") {
                display.value += "/100";
            } else if (value === "√") {
                display.value += "Math.sqrt(";
            } else {
                display.value += value;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".b")

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;
            console.log("Button clicked:", value); // Debugging line

            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                try {
                    // Add closing parenthesis for any open Math.sqrt functions
                    let expression = display.value;
                    let openSqrtCount = (expression.match(/Math.sqrt\(/g) || []).length;
                    let closeParenthesisCount = (expression.match(/\)/g) || []).length;

                    while (openSqrtCount > closeParenthesisCount) {
                        expression += ")";
                        closeParenthesisCount++;
                    }

                    // Replace the display symbols with actual JavaScript functions
                    expression = expression.replace(/×/g, "*").replace(/√/g, "Math.sqrt");
                    const result = eval(expression);
                    display.value = result;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (value === "()") {
                // Append brackets in pairs
                if (display.value.includes("(") && !display.value.includes(")")) {
                    display.value += ")";
                } else {
                    display.value += "(";
                }
            } else if (value === "√") {
                // Append 'Math.sqrt(' to display
                display.value += "Math.sqrt(";
            } else if (value === ".") {
                // Ensure only one decimal point in a number
                const lastChar = display.value[display.value.length - 1];
                if (!isNaN(lastChar) || lastChar === ")") {
                    display.value += value;
                }
            } else {
                display.value += value;
            }
        });
    });
});

function generateTableRows() { 
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
    let rows = ''; 

    days.forEach(day => { 
        rows += ` 
            <tr> 
                <td>${day}</td> 
                <td><input type="text" name="${day}_breakfast" id="${day}_breakfast" required></td> 
                <td><input type="text" name="${day}_morning_snack" id="${day}_morning_snack" required></td> 
                <td><input type="text" name="${day}_lunch" id="${day}_lunch" required></td> 
                <td><input type="text" name="${day}_afternoon_snack" id="${day}_afternoon_snack" required></td> 
                <td><input type="text" name="${day}_dinner" id="${day}_dinner" required></td> 
            </tr> 
        `; 
    }); 
    return rows;
}

function generateMealPlan() { 
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;  

    // Email validation regex 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    // Validate email 
    if (!emailPattern.test(email)) { 
        alert("Please enter a valid email address."); 
        return; 
    }

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
    var mealPlanTable = ` 
        <table> 
            <thead> 
                <tr> 
                    <th>Day</th> 
                    <th>Breakfast</th> 
                    <th>Morning Snack</th> 
                    <th>Lunch</th> 
                    <th>Afternoon Snack</th> 
                    <th>Dinner</th> 
                </tr> 
            </thead> 
            <tbody> ${generateMealPlanRows()} </tbody> 
        </table> 
    `;
    var mealPlanContent = ` 
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
            <title>Meal Plan for ${name}</title> 
            <style>
                .banner {
                    width: 100%;
                    height: auto;
                } 
                body { 
                    font-family: monospace; 
                } 
                table, th, td { 
                    border: 1px solid black; 
                    border-collapse: collapse; 
                    padding: 5px; 
                } 
                table { 
                    width: 100%; 
                } 
                th { 
                    background-color: #463b3b; 
                } 
                .email-validation { 
                    font-weight: bold; 
                    color: red; 
                }
                button[type="submit"] { 
                    display: block; 
                    padding: 8px; 
                    font-size: 14px; 
                    border: none; 
                    border-radius: 5px; 
                    cursor: pointer; 
                }
            </style>
                <link rel="stylesheet" href="simplecss.css">
                <script src="projectJS.js"></script>
        </head> 
        <body>
                <header>
                    <img src="banner3.jpeg" alt="Banner Image" class="banner">
                </header>
                <h1>Meal Plan for ${name}</h1>
                <p>
                    Email address: ${email} <br>
                    Goal: Your goal for the week is ${goal} <br>
                </p>
                ${mealPlanTable}
                <p>
                Your Meal plan is above. It can be printed or downloaded for your convienience. Thank you for taking advantage of our new service and thank you for being a loyal customer.
                </p>
                <button type="button" onclick="window.print()">Print Planner</button>
                <button type="button" onclick="downloadPlanner()">Download Planner as Text File</button>

        </body> 
        </html>
    `;

    var menuWindow = window.open('', '_blank'); 
    menuWindow.document.write(mealPlanContent); 
    menuWindow.document.close();

    window.mealPlanContent = mealPlanContent;


}

function generateMealPlanRows() { 
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
    let rows = ''; 

    days.forEach(day => { 
        const breakfast = document.getElementById(`${day}_breakfast`).value; 
        const morningSnack = document.getElementById(`${day}_morning_snack`).value; 
        const lunch = document.getElementById(`${day}_lunch`).value; 
        const afternoonSnack = document.getElementById(`${day}_afternoon_snack`).value; 
        const dinner = document.getElementById(`${day}_dinner`).value; 
        
        rows += ` 
            <tr> 
                <td>${day}</td> 
                <td>${breakfast}</td> 
                <td>${morningSnack}</td> 
                <td>${lunch}</td> 
                <td>${afternoonSnack}</td> 
                <td>${dinner}</td> 
            </tr> 
        `; 
    }); 
    return rows;
}

function clearPlanner() { 
    document.getElementById('MealForm').reset();
} 
 

function downloadPlanner() { 
    const blob = new Blob([window.mealPlanContent], { type: 'text/html' }); 
    const link = document.createElement('a'); 
    link.href = URL.createObjectURL(blob); 
    link.download = 'meal-plan.html'; 
    link.click();
}


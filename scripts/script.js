
function generateMoodMessage(){
 let bill = document.getElementById("bill").value;
 let people = document.getElementById("people").value;
 let meal = null;

  if (bill<=20){
 meal = "Budget Friendly!";
  } else if (bill >= 200 && people >= 4){
 meal = "Party Vibes!"
  } else if(people == 1){
    meal = "Solo Dining!"
  } else{
    meal = "Casual Dinner Night";
  }
  alert(`Your meal is ${meal}`);
}

function calculateTip(){
     let bill = document.getElementById("bill").value;
     let tip = document.getElementById("tip").value;
     let tipamount = (bill *tip /100)
     alert(`Your total tip amount is ${tipamount}`)
     return tipamount;
}

function splitBill(){
    let bill = document.getElementById("bill").value;
     let tip = document.getElementById("tip").value;
     let people = document.getElementById("people").value;
     let tipamount = calculateTip();
 let totalamount = (bill+tipamount)
 let splitamount = (totalamount / people)
 alert (` Each person should pay ${splitamount}!`);


}
/* =============================================================
     🎯 ASSIGNMENT: TIP & BILL SPLIT CALCULATOR
     -------------------------------------------------------------
     GOAL: Practice variables, arithmetic operations, conditionals & functions.
     -------------------------------------------------------------

     📝 INSTRUCTIONS:

     0️⃣ STEP ZERO: Connect script file TO HTML
     1️⃣ Create a function named generateMoodMessage() that:
         - Reads the bill amount and number of people.
         - Displays a fun message based on values entered:
             • If bill < 20 → "Budget-friendly meal 👌"
             • If bill > 200 and people > 4 → "Party vibes 🥳"
             • If people === 1 → "Solo dining! Self-care mode on 🍲"
             • Otherwise → "Casual dinner night 🍽️"
         - This shows how JavaScript reacts differently based on conditions.

     2️⃣ Create a function named calculateTip() that:
         - Reads the bill amount and tip percentage.
         - Calculates the total tip (bill * tip / 100).
         - Returns the total tip.
         - Shows an alert: "Your tip amount is $10."
// 
     3️⃣ Create a function named splitBill() that:
         - Calls calculateTip() to reuse its return value.
         - Calculates total amount = bill + tip.
         - Divides total by number of people.
         - Shows an alert message:
             - Example: "Each person should pay $55."
         - If the per person amount > 100, show: "Whoa, that’s pricey! 💸"
           Otherwise show: "Nice, that’s affordable! 😄"

     ✅ BONUS TASK:
     - Round all currency values to 2 decimal places using toFixed(2).
     - Use creative alert messages to personalize the experience.

     -------------------------------------------------------------
     💡 Example alert messages:
     - "Solo dining! Self-care mode on 🍲"
     - "Your tip amount is $12.50."
     - "Each person should pay $56.25. Nice, that’s affordable! 😄"
     -------------------------------------------------------------

     🔗 Button connections:
     - Generate Mood button → generateMoodMessage()
     - Calculate Tip button → calculateTip()
     - Split Bill button → splitBill()
  ============================================================= */
 
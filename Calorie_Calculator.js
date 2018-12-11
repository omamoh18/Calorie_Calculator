var inputName = prompt("Please enter you\'re name");
alert("Welcome" + " " + inputName);


/* I hard code the calories the user consume per day.
 I use switch statment to return how many calories the user consume a day with a prompt method.*/


var day = prompt("Please enter a day, begin with a big Letter");

function caloriesPerDay(day) {
	switch (day) {
		case "Monday":
			return 2200;
				break;
		case "Tuesday":
			return 1500;
				break;
		case "Wedensday":
			return 3000;
				break;
        case "Thursday":
			return 1200;
				break;
        case "Friday":
			return 2500;
        case "Saturday":
			return 3500;
				break;
        case "Sunday":
			return 800;
				break;
        default:
			return "Please pick a day";

	}

	

}

alert(caloriesPerDay(day));

/* I create a function that multiplies all the days to get the total sum of how much calories the user consumed the week.*/

function totalCalories() {
	return caloriesPerDay("Monday") +
           caloriesPerDay("Tuesday") +
		   caloriesPerDay("Wedensday") +			
		   caloriesPerDay("Thursday") +
		   caloriesPerDay("Friday") +
		   caloriesPerDay("Saturday") +	
		   caloriesPerDay("Sunday");	
}

/* I make another function for the ideal intake of calories for the week, 
inside the function i declare a variable with a prompt method in it.*/

function idealCaloriesGoal() {
	var enterCalorieGoal = prompt("Please enter you\'re goal for calories");
	return enterCalorieGoal * 7;


}

/* I make this function to put all ingrdients above together,
to make a health plan for the user. To either visit the gym more, enjoy his/her more with food
 or keep going. I do this thru a "if statement" to see if he have ate to much, eaten less or are on the right track with the food*/

function makeHealthPlan() {
	var actualCalories = totalCalories();
	var idealCalories = idealCaloriesGoal();
	if (actualCalories === idealCalories) {
		return"You are on the right track";
			} if (actualCalories > idealCalories) {
			return"No more doughnuts on you"; 
	} else  {
		return "Lets visit McDonalds";
	}
           
}

alert(makeHealthPlan());
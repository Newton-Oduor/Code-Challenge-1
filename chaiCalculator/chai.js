function calculateChaiIngredients(numberOfCups) {
    // One cup quantities
    const waterPerCup = 200; // in ml
    const milkPerCup = 50; // in ml
    const majaniPerCup = 1; // in tablespoons
    const sugarPerCup = 2; // in teaspoons
    // Scale ingridients
    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalMajani = numberOfCups * majaniPerCup;
    const totalSugar = numberOfCups * sugarPerCup;
    // Output results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalMajani} tablespoon${totalMajani > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log('\nEnjoy your Chai Bora!');
}
// Prompt and parse integer
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(userInput);
// if not a number or number is below 0
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
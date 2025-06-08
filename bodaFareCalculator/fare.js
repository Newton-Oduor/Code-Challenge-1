function calculateBodaFare(distanceInKm) {
    
    // Constant costs
    const baseFare = 50; // Busfare in Kshs.
    const chargePerKm = 15; // Per Km in Kshs.
   
    // Calculation of variable and Total fare
    const variableFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + variableFare;

    // Display output to user
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${variableFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`\nPanda Pikipiki!`);

    // Prompt for user and Parsefloat to convert string to number
    const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    distanceInKm = parseFloat(userInput);

    // If distance is NaN or less than 0, return cosole.log below
    if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
    } else {
  console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
    }
}
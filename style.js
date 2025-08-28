function trackCycle() {
  console.log("Function trackCycle called"); 
  console.log("Start Date:", startDateInput);
  console.log("Cycle Length:", cycleLength); 
  console.log("Period Length:", periodLength); 
  const startDateInput = document.getElementById('startDate').value;
  const cycleLength = parseInt(document.getElementById('cycleLength').value);
  const periodLength = parseInt(document.getElementById('periodLength').value);

  if (!startDateInput || isNaN(cycleLength) || isNaN(periodLength)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const startDate = new Date(startDateInput);
  const nextPeriod = new Date(startDate);
  nextPeriod.setDate(startDate.getDate() + cycleLength);

  const ovulationDate = new Date(startDate);
  ovulationDate.setDate(startDate.getDate() + Math.floor(cycleLength / 2));

  const periodEnd = new Date(startDate);
  periodEnd.setDate(startDate.getDate() + periodLength);

  document.getElementById("results").innerHTML = `
    <strong>🌸 Predicted Dates:</strong><br>
    🗓️ Next Period: <b>${nextPeriod.toDateString()}</b><br>
    💧 Ovulation Day: <b>${ovulationDate.toDateString()}</b><br>
    🩸 Period Ends On: <b>${periodEnd.toDateString()}</b>
  `;
}

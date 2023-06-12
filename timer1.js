//beeps after input many seconds
const timer = (seconds) => {
  const milliseconds = seconds * 1000;

  setTimeout(() => {
    process.stdout.write('\x07');
  }, milliseconds);
}

//takes in array of numbers and schedules a timer to go off at each number second.
//skips numbers smaller than or equal to zero
//if no numbers are given, returns without scheduling timer.
const scheduleTimer = (beepTimes) => {
  //clean up inputs
  let toSchedule = inputCleaner(beepTimes);
  
  for (const time of toSchedule) {
    timer(time);
  }

}

//cleans up command line inputs to be sent into scheduleTimer
//ensures all inputs are numbers
//removes all numbers smaller than or equal to zero
const inputCleaner = (inputs) => {
  if(!inputs) {
    return;
  }

  //convert string inputs to number
  inputs = inputs.map(item => Number(item));

  //weed out non valid timer times
  let cleanInputs = [];
  for (item of inputs) {
    if (item && item >= 0) {
      cleanInputs.push(item);
    }
  }

  return cleanInputs;
}

//preparing input for timer scheduling
const inputs = process.argv.slice(2);
//console.log (inputs);

//console.log(inputCleaner(inputs));
scheduleTimer(inputs)

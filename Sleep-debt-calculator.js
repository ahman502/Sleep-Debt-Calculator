const getSleepHours = day => {

    switch(day) {
      case 'monday':
        return 3;
      case 'tuesday':
        return 2;
      case 'wednesday':
        return 3;
      case 'thursday':
        return 5;
      case 'friday':
        return 8;
      case 'saturday':
        return 4;
      case 'sunday':
        return 9;
      default:
        return 'Not a weekday'
    }
  };
  
  const getActualSleepHours = () =>
  
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
    
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
  
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log("You are getting perfect amount of sleep!");
    }
  
    else if(actualSleepHours >= idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
    }
    
    else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  
    else {
      console.log("Invalid input");
    }
  }
  
  calculateSleepDebt();
  
  console.log('Actual sleep hours: ' + getActualSleepHours());
  console.log('Ideal sleep hours: ' + getIdealSleepHours());
  
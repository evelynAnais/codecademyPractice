const getSleepHours = day => {
  day = day.toLowerCase()
  if(day === 'sunday') {
    return 8
  } else if(day === 'monday') {
    return 8
  }else if(day === 'tuesday') {
    return 8
  }else if(day === 'wednesday') {
    return 8
  }else if(day === 'thursday') {
    return 8
  }else if(day === 'friday') {
    return 8
  }else if(day === 'saturday') {
    return 12
  }
}

const getActualSleepHours = () => {
  return getSleepHours('sunday') +
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') 
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours) {
    console.log('Perfect Sleep!')
  } else if(actualSleepHours > idealSleepHours) {
    console.log('Too Much Sleep! ' + (actualSleepHours - idealSleepHours) + ' hours more than needed')
  } else if(actualSleepHours < idealSleepHours) {
    console.log('You need more Sleep in your life! ' + (idealSleepHours - actualSleepHours) + ' more hours to meet your goal!')
  } 
}

calculateSleepDebt()
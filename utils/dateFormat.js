const addDateSuffix = date => {
  let dateStr = date.toString();

  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (date === 1 || date === 21 || date === 31) {
    return `${date}st`;
  } else if (date === 2 || date === 22) {
    return `${date}nd`;
  } else if (date === 3 || date === 23) {
    return `${date}rd`;
  } else {
    return `${date}th`;
  }
}

module.exports = (timestamp) => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = addDateSuffix(dateObj.getDate());

  const year = dateObj.getFullYear();

  let hour;
  if (dateObj.getHours > 12) {
    hour = Math.floor(dateObj.getHours() / 2);
  } else {
    hour = dateObj.getHours();
  }

  if (hour === 0) {
    hour = 12;
  }

  const minutes = dateObj.getMinutes();

  let periodOfDay;

  if (dateObj.getHours() >= 12) {
    periodOfDay = 'pm';
  } else {
    periodOfDay = 'am';
  }

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
}
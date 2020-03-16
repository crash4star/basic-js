module.exports = function getSeason(date) {
  let arr = []
  for (let key in date) {
    arr.push(key)
  }

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else {
    if (typeof date == 'object' && arr.length == 0) {
      if (date.getMonth() >= 0 && date.getMonth() <= 1 || date.getMonth() == 11) {
        return 'winter';
      } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
        return 'spring';
      } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
        return 'summer';
      } else if (date.getMonth() >= 8 && date.getMonth() <= 11) {
        return 'autumn';
      }
    } else {
      throw 'Error';
    }
  }
};
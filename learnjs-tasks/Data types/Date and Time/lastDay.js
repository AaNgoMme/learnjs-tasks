function getLastDayOfMonth(year, month) {
    let copy = new Date(year, month, 1);
    copy.setMonth(month + 1);
    copy.setDate(copy.getDate() -1);
    return copy.getDate();
  }
Date.prototype.daysTo = function (otherDate) {
  const timeDifference = otherDate.getTime() - this.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

const d1 = new Date("2024-11-01");
const d2 = new Date("2024-11-13");

console.log(d1.daysTo(d2));

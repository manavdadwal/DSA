/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// function timeConversion(s) {
//   let period = s.slice(-2);
//   const [hour, mins, seconds] = s.slice(0, -2).split(":");
//   let calculatedHour = "";
//   if (period.includes("AM")) {
//     calculatedHour = hour === "12" ? "00" : hour;
//   } else if (period.includes("PM")) {
//     calculatedHour = hour < "12" ? parseInt(hour) + 12 : hour;
//   }
//   return `${calculatedHour}:${mins}:${seconds}`;
// }

// Test cases
console.log(timeConversion("07:05:45PM")); // Output: 19:05:45
console.log(timeConversion("12:00:00AM")); // Output: 00:00:00

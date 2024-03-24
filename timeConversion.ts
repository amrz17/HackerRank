export function timeConversion(s: string): string {
  let amPm = s.charAt(8);
  let military = "";
  if (amPm == "A") {
    if (s.substring(0, 2) == "12") {
      military = "00";
    } else military = s.substring(0, 2);
  } else {
    if (s.substring(0, 2) == "12") {
      military = s.substring(0, 2);
    } else {
      military = (parseInt(s.substring(0, 2), 10) + 12).toString();
    }
  }
  return military + s.substring(2, 8);
}

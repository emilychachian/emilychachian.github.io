export default function dateFormatter(date) {
  let currentDatetime = new Date();
  let formattedDate =
    currentDatetime.getDate() +
    "/" +
    (currentDatetime.getMonth() + 1) +
    "/" +
    currentDatetime.getFullYear();
  return formattedDate;
}

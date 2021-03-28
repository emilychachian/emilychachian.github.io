export default function dateFormatter(date) { 
  let d = new Date (date);
  let formattedDate = d.toLocaleDateString('en-GB'); 
  return formattedDate;
}
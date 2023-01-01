const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function getFormattedDate(date) {
  const rawDate = new Date(date);
  const month = months[rawDate.getMonth() + 1];
  return month + ' ' + rawDate.getFullYear();
}
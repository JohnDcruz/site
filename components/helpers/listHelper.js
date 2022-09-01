export default function getListWithCommas(list) {
  let listString = '';
  for (let i = 0; i < list.length - 1; i++) {
    listString += list[i] + ', ';
  }
  listString += list[list.length - 1];
  return listString;
}
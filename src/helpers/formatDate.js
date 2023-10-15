export default function formatDate(unformattedDate) {
  const dateTime = new Date(unformattedDate);
  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const day = dateTime.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

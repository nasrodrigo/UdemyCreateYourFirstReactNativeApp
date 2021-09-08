const FirstLetterUppercase = (value: string) => {
  return `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;
};

export const capitalize = (value: string) => {
  if (!value) return "";
  return value
    .split(" ")
    .map((item: string) => FirstLetterUppercase(item))
    .join(" ");
};

export const formatToPhoneNumber = (value: string) => {
  const phone = value.replace("-", "");
  return `${phone.substring(0, 3)}-${phone.substring(3, 6)}-${phone.substring(
    6
  )}`;
};

const getOrdinal = function (value: number) {
  if (value > 3 && value < 21) return "th";
  switch (value % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
export const formatToDate = (value: string, utc = false) => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(value.replace(" ", "T"));
  if (!value || Number.isNaN(date.getTime())) return "";
  const day = date.getDate();
  const ordinal = getOrdinal(Number(day));
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}${ordinal}, ${year}`;
};

import dayjs from "dayjs";

const formatTemplate = "MM月DD日"

export function formatDate(dateString, format = formatTemplate) {
  return dayjs(dateString).format(format);
}

export function getTodayAndTomorrow() {
  const today = dayjs();
  const tomorrow = dayjs().add(1, 'day');
  const stay = getDaysDiff(today, tomorrow)
  return {today, tomorrow, stay};
}

export function getDaysDiff(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.diff(start, 'day');
}

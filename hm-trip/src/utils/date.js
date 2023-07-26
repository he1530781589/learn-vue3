import dayjs from "dayjs";

const formatTemplate = "MM月DD日"

export function formatDate(dateString) {
  return dayjs(dateString).format(formatTemplate);
}

export function getTodayAndTomorrow() {
  const today = dayjs().format(formatTemplate);
  const tomorrow = dayjs().add(1, 'day').format(formatTemplate);
  const stay = getDaysDiff(dayjs(), dayjs().add(1, 'day'))
  return {today, tomorrow, stay};
}

export function getDaysDiff(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.diff(start, 'day');
}

import dayjs from "dayjs";

export const transformCommentDate = (date: string) => {
  const interval = dayjs().minute() - dayjs(date).minute();
  if (interval <= 30) return `${interval} 分钟前`;
  const isThisDay = dayjs(date).isAfter(dayjs().startOf("day"));
  const isPrevDay = dayjs(date).isAfter(
    dayjs().startOf("day").subtract(1, "day")
  );
  const isThisYear = dayjs(date).isAfter(dayjs().startOf("year"));
  // 仍在今天，只显示时间
  if (isThisDay) return dayjs(date).format("HH:mm");
  // 在前一天，显示 `昨天`
  if (isPrevDay) return dayjs(date).format("昨天 HH:mm");
  // 在今年，不显示年份
  if (isThisYear) return dayjs(date).format("M-DD HH:mm");
  // 不在今年，显示年份
  return dayjs(date).format("YYYY-M-DD HH:mm");
};

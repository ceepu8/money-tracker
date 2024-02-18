export const FORMAT_STRING = {
  // Date formats
  date_slash: 'YYYY/MM/DD', // Example: 2023/07/15
  date_dash: 'YYYY-MM-DD', // Example: 2023-07-15
  date_short: 'YY/MM/DD', // Example: 22/07/15
  month_day: 'MMM DD', // Example: June 15

  date_str: 'YYYY年MM月DD日', // Example: 2023年7月15日
  date_str_ja: 'MM月DD日YYYY年', // Example: 2023年7月15日
  month_year: 'YYYY年MM月', // Example: 2023年7月
  month_day_str: 'MM月DD日', // Example: 7月15日
  date_weekday_str: 'YYYY年M月DD日 (ddd)', // Example: 2023年11月24日 (木)
  month_day_weekday: 'MM月DD日 (ddd)', // Example: 5月15日 (木)
  date_month_year: 'YYYY年MM月', // Example: 2023年09月
  iso: 'YYYY-MM-DD_HH-mm-ss', // Example: 2023-09-26_10-09-32

  // Date unit
  year: 'YYYY年',
  month: 'M月',
  day: 'DD日',

  // Time formats
  time_full: 'H時mm分ss秒', // Example: 13時30分59秒
  time_today_tomorrow: '[今日]H時mm分 | [明日]H時mm分', // Example: 今日13時30分 | 明日13時30分
  time_utc_full: 'HH:mm:ss z', // Example: 10:30:45 UTC
  time_utc_short: 'HH:mm z', // Example: 10:30 UTC
  time_ap: 'HH:mm a', // Example: 10:30 AM
  time: 'HH:mm', // Example: 10:30

  // Datetime formats
  datetime_slash: 'YYYY/MM/DD HH:mm', // Example: 2023/07/15 13:30
  datetime_slash_ap: 'YYYY/MM/DD HH:mm a', // Example: 2023/07/15 13:30_ap
  fulltime_slash: 'YYYY/MM/DD (ddd) HH:mm', // Example: 2023/07/15 (Fri) 13:30
  datetime_str: 'YYYY年MM月DD日 HH:mm', // Example: 2023年7月15日 13:30
  fulltime_str: 'YYYY年MM月DD日 (ddd) HH:mm', // Example: 2023年06月23日(金) 15:00

  // Today format
  today: '今日H時mm分', // Example: 今日13時30分

  // Unit format
  hour_minute_second: 'H時間mm分ss秒',
  hour: 'H時間',
  minute: 'mm分',
  second: 'ss秒',

  // recruitment
  recruitment_start_date: 'YYYY/MM/DD  00:00',
  recruitment_end_date: 'YYYY/MM/DD  23:59',

  reset_time: 'YYYY-MM-DD 00:00:00',

  dd: 'dd',
  day_month_year: 'DD/MM/YYYY',
  month_day_year: 'MMMM/DD/YYYY',
  full_date: 'MMMM D, YYYY',
  year_month_day: 'YYYY/MM/DD',
}

import { format, formatDistanceToNowStrict, differenceInYears } from 'date-fns';

export const getReadableDateFromUnix = (unixTimestamp) => {
  // Convert Unix timestamp to JavaScript Date object
  const date = new Date(unixTimestamp * 1000);

  const now = new Date();

  // Check if the difference is more than a year
  if (differenceInYears(now, date) > 0) {
    // If more than a year, display the actual date
    return format(date, 'MMM dd, yyyy');
  } else {
    // If less than a year, display relative time
    return formatDistanceToNowStrict(date) + ' ago';
  }
};

export const getReadableDateFromUTC = (utcTimestamp) => {
  // Convert UTC timestamp to JavaScript Date object
  const date = utcTimestamp;
  const now = new Date();

  // Check if the difference is more than a year
  if (differenceInYears(now, date) > 0) {
    // If more than a year, display the actual date
    return format(date, 'MMM dd, yyyy');
  } else {
    // If less than a year, display relative time
    return formatDistanceToNowStrict(date) + ' ago';
  }
};

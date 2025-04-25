export function formatTime(input, options = {removeLeadingZero: true}) {
  const { removeLeadingZero = true } = options;
  let hours, minutes;

  if (input instanceof Date) {
    hours = input.getHours();
    minutes = input.getMinutes();
  } else if (typeof input === 'string') {
    const [h, m] = input.split(':');
    hours = parseInt(h, 10);
    minutes = parseInt(m, 10);
    console.log(hours, minutes)
  } else {
    return '';
  }
  

  const hStr = removeLeadingZero && hours !== 0 ? String(hours) : String(hours).padStart(2, '0');
  const mStr = minutes === 0 ? '' : String(minutes).padStart(2, '0');


  return mStr ? `${hStr}h${mStr}` : `${hStr}h`;
}

// From https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js

function formatReadingTime(minutes) {
  let chiles = Math.round(minutes / 5);
  if (chiles > 5) {
    return `${new Array(Math.round(chiles / Math.E))
      .fill('🔥')
      .join('')} ${minutes} min read`;
  } else {
    return `${new Array(chiles || 1).fill('🌶️').join('')} ${minutes} min read`;
  }
}

export default formatReadingTime;
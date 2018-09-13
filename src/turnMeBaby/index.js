/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if (typeof str === "string") {
    let i = str.length - 1;
    let result = '';

    while (i >= 0) {
      result = result + str[i];
      i = i - 1;
    }
    return result;
  } else {
    return new Error('this is not a string');
  }
};

export default turnMeBaby;

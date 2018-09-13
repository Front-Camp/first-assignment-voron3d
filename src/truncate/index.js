/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
  if (str === "") {
  return "";
  }
  if (length === 0) {
  let len = str.length - replacer.length;
  let string = str.substring(0, len);
  return string.concat(replacer);
  }
  if (length < str.length) {
  let length1 = length-replacer.length;
  let string = str.substring(0, length1);
  return string.concat(replacer);
  }
  if(length>str.length)
  return str;
  
  };
  
  export default truncate;

import { errors } from '../resources'

/**
 * Validates the recived parameter is a non numeric string
 * @param {string} text
 */
const validator = (text) => {
  if ((typeof text === 'string') && (!text.match(/(\d|{|})/g))) {
    return
  }
  return errors.NoText
}

/** Converts characters with diacritics to regular characters
 * and removes punctuation
* @param {string} text
*/
const cleanUp = (text) => {
  return text.replace(' ')/* Removes whitespace */
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') /* Removes diacritics */
    .replace(/\W/g, '')/* Removes non eord characters */
}

export default {
  validator,
  cleanUp
}

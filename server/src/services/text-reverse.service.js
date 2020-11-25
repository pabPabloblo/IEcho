import { ValidationError } from '../errors'
import { textHelpers } from '../helpers/index'

/**
 * Validates if the provided text is a palindrome.
 * @param {string} text
 * @returns {boolean}
 */
const isPalindrome = (text) => {
  // Validates the recieved parameter is entirley text
  const err = textHelpers.validator(text)
  if (err) {
    throw new ValidationError(err)
  }

  /* Optimization since we already know technically
     an empty string is a palindorme */
  if (!text) {
    return true
  }
  // Normalizes text for processing
  const cleanText = textHelpers.cleanUp(text)
  const stringLen = cleanText.length - 1
  const stringMiddle = Math.floor(cleanText.length / 2)
  // Compares the string symmetrically, if it is symmetric the text is a palindrome
  for (let index = 0; index < stringMiddle; index++) {
    if (cleanText[index].toLowerCase() !== cleanText[stringLen - index].toLowerCase()) {
      return false
    }
  }

  return true
}

/**
 * Recieves a piece of text and returns the
 * reversed of that text
 * @param {string} text
 * @returns {string}
 */
const reverseWord = (text) => {
  // validates the recieved parameter is entirley text
  const err = textHelpers.validator(text)
  // if any thows an error
  if (err) {
    throw new ValidationError(err)
  }
  return text.split('').reverse().join('')
}

export default {
  isPalindrome,
  reverseWord
}

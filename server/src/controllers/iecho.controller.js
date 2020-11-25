import { textReverse } from '../services'
import { textHelpers, requestHelpers } from '../helpers'

const get = (req, res) => {
  const { text } = req.query
  const errors = requestHelpers.validate([textHelpers.validator], text)
  if (errors.length > 0) {
    res.status(400).json({ error: errors.join(' ') })
    return
  }
  const result = {
    text: textReverse.reverseWord(text),
    palindrome: textReverse.isPalindrome(text)
  }
  res.json(result)
}

export default { get }

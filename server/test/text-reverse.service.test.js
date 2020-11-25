import chai from 'chai'
import { textReverse } from '../src/services'
import testData from './test-data.json'
import { ValidationError } from '../src/errors'
const expect = chai.expect

describe('Text reverse service', () => {
  describe('Validates palindrome', () => {
    testData.palindromes.forEach(word => {
      it(`palindrome text: '${word}' is dected properly`, () => {
        expect(textReverse.isPalindrome(word)).to.equal(true)
      })
    })

    testData.nonPalindromes.forEach(word => {
      it(`non palindrome text: '${word}' is dected properly`, () => {
        expect(textReverse.isPalindrome(word)).to.equal(false)
      })
    })

    testData.numbers.concat(testData.objects).forEach(parameter => {
      it(`wrong parameter: '${parameter}' is dected properly`, () => {
        expect(() => textReverse.isPalindrome(parameter)).throws()
      })
    })
  })

  describe('Reverse string', () => {
    testData.palindromes.concat(testData.nonPalindromes).forEach(word => {
      it(`properly reverts: '${word}'`, () => {
        const reverse = word.split('').reverse().join('')
        expect(textReverse.reverseWord(word)).equals(reverse)
      })
    })

    testData.numbers.concat(testData.objects).forEach(parameter => {
      it(`wrong parameter: '${parameter}' is dected properly`, () => {
        expect(() => textReverse.reverseWord(parameter)).throws(ValidationError)
      })
    })
  })
}
)

import app from '../src/app'
import supertest from 'supertest'
import testData from './test-data.json'

describe('iecho integration test', () => {
  it('number iecho should return 400', (done) => {
    const value = 99.77
    supertest(app).get('/iecho').query({ text: value })
      .expect(400).end((err, res) => {
        if (err) {
          console.error(err)
        }
        done(err)
      })
  })

  testData.numbers.concat(testData.objects).forEach(parameter => {
    it(`palindrome parameter: '${parameter}' is received properly`, (done) => {
      supertest(app).get('/iecho').query({ text: parameter })
        .expect(400)
        .end((err, res) => {
          if (err) {
            console.error(err)
          }
          done(err)
        })
    })
  })

  testData.palindromes.forEach(word => {
    it(`palindrome text: '${word}' is received properly`, (done) => {
      const testWordReverse = word.split('').reverse().join('')
      supertest(app).get('/iecho').query({ text: word })
        .expect(200, { palindrome: true, text: testWordReverse })
        .end((err, res) => {
          if (err) {
            console.error(err)
          }
          done(err)
        })
    })
  })

  testData.nonPalindromes.forEach(word => {
    it(`non palindrome text: '${word}' is received properly`, (done) => {
      const testWordReverse = word.split('').reverse().join('')
      supertest(app).get('/iecho').query({ text: word })
        .expect(200, { palindrome: false, text: testWordReverse })
        .end((err, res) => {
          if (err) {
            console.error(err)
          }
          done(err)
        })
    })
  })
}
)

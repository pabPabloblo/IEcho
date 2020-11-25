/**
 * Custom class for validation errors
 * @class
 */

export default class ValidationError extends Error {
  constructor (msg) {
    super(msg)
    this.name = this.constructor.name
  }
}

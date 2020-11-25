const validate = (validators, value) => {
  return validators.reduce((arr, validator) => { /* Each validaor is run */
    const result = validator(value)
    if (typeof result === 'string') {
      arr.push(result) /* Each error is returned */
    }
    return arr
  }, [])
}

export default { validate }

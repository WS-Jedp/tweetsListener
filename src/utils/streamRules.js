module.exports = function (rules, description = '') {

  return {
    add: [
      { value: rules, tag: description}
    ]
  }
}
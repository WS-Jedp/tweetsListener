const setRulesToDelete = (rules) => {
  return {
    "delete": {
      "ids": [
        ...rules
      ]
    }
  }
}

module.exports = setRulesToDelete
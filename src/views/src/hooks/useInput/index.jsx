import React, { useState } from 'react'

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  const setState = (ev) => {
    ev.preventDefault()
    setValue(ev.currentTarget.value)
  }

  return [value, setState]
}
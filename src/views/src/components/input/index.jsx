import React from 'react'
import { InputWrapper } from './styles'

import { useInput } from '@hooks/useInput'

export const Input = ({title, description, setState, placeholder}) => {

  return (
    <InputWrapper>
      <label htmlFor={title}>
        { title || 'Title label' }
      </label>
      <p>
        {
          description || 'Little description of the input'
        }
      </p>
      <input type="text" placeholder={placeholder} onChange={setState} />
    </InputWrapper>
  )
}
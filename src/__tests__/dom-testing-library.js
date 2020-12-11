import React from 'react'
import {screen, render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  render(<FavoriteNumber />)
  const inputLabel = screen.getByLabelText(/favorite number/i)
  expect(inputLabel).toHaveAttribute('type', 'number')
})

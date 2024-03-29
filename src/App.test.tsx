import React from 'react'
import { screen } from '@testing-library/react'
import { render } from './test-utils'
import { App } from './App'

test('renders settings', () => {
  render(<App />)
  const summandsString = screen.getByText(/Summands/i)
  expect(summandsString).toBeInTheDocument()
})

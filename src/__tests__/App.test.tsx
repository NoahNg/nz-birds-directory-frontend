import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('All components should be in the page', () => {
  render(<App />)
  expect(screen.getByTestId('app')).toBeInTheDocument()
  expect(screen.getByTestId('overlay')).toBeInTheDocument()
  expect(screen.getByTestId('appName')).toBeInTheDocument()
  expect(screen.getByTestId('searchBar')).toBeInTheDocument()
  expect(screen.getByTestId('body')).toBeInTheDocument()
})

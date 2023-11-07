import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Sort from './Sort'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

test('Sort component renders with default values', async () => {
  render(<Sort />)

  const largeTileButton = screen.getByTestId('largeTile')
  expect(largeTileButton).toBeInTheDocument()

  const smallTileButton = screen.getByTestId('smallTile')
  expect(smallTileButton).toBeInTheDocument()

  // Find the button element within the div with the data-testid
  const sortButton = screen.getByTestId('sortButton').querySelector('button')

  if (sortButton) {
    await act(async () => {
      userEvent.click(sortButton)
    })
  }

  await waitFor(() => {
    expect(sortButton).toHaveClass('dropdown-toggle show btn btn-light')
  })

  const sortAZButton = screen.getByTestId('sortAZ')
  expect(sortAZButton).toBeInTheDocument()

  const sortZAButton = screen.getByTestId('sortZA')
  expect(sortZAButton).toBeInTheDocument()
})

test('Handles large tile button clicks', async () => {
  render(<Sort />)

  // Click large tile button
  const largeTileButton = screen.getByTestId('largeTile')
  await act(async () => {
    userEvent.click(largeTileButton)
  })

  expect(largeTileButton).toHaveClass('active')

  const smallTileButton = screen.getByTestId('smallTile')
  expect(smallTileButton).not.toHaveClass('active')
})

test('Handles small tile button clicks', async () => {
  render(<Sort />)

  // Click small tile button

  const smallTileButton = screen.getByTestId('smallTile')

  await act(async () => {
    userEvent.click(smallTileButton)
  })

  await waitFor(() => {
    expect(smallTileButton).toHaveClass('active')
  })

  const largeTileButton = screen.getByTestId('largeTile')
  expect(largeTileButton).not.toHaveClass('active')
})

test('Handles sort criteria button clicks', async () => {
  render(<Sort />)

  // Find the button element within the div with the data-testid
  const sortButton = screen.getByTestId('sortButton').querySelector('button')

  if (sortButton) {
    await act(async () => {
      userEvent.click(sortButton)
    })
  }

  await waitFor(() => {
    expect(sortButton).toHaveClass('dropdown-toggle show btn btn-light')
  })

  // Get all dropdown items
  const sortAZButton = screen.getByTestId('sortAZ')
  const sortZAButton = screen.getByTestId('sortZA')

  // Sort A-Z
  await act(async () => {
    userEvent.click(sortAZButton)
  })

  await waitFor(() => {
    expect(sortAZButton).toHaveClass('active dropdown-item')
  })

  expect(sortZAButton).toHaveClass('dropdown-item')

  // Sort Z-A
  await act(async () => {
    userEvent.click(sortZAButton)
  })

  await waitFor(() => {
    expect(sortZAButton).toHaveClass('active dropdown-item')
  })
  expect(sortAZButton).toHaveClass('dropdown-item')
})

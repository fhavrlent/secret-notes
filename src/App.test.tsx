import { render, screen } from '@testing-library/react'

import { add, App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('HALLO!')).toBeInTheDocument()
  })
})

describe('Add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})

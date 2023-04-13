import {render, screen} from '@testing-library/react'
import App from '../App'
import { React } from "react";
import '@testing-library/jest-dom'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)

  // ACT

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Howdy')
})

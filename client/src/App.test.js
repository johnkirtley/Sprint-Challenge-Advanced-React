import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom'
import App from './App';
import Header from './components/Header'
import PlayerList from './components/playerList';

test('renders title', () => {
  const { getByText } = render(<Header />);

  const header = getByText(/women world cup/i);

  expect(header).toBeTruthy();
})

test('renders player header', () => {
  const { getByTestId } = render(<PlayerList />)

  const playersHeader = getByTestId('players-header')

  expect(playersHeader).toBeTruthy()
})

test('check for player card container', () => {
  const { queryByTestId } = render(<App />)
  const container = queryByTestId('player-container')
  const playerId = queryByTestId('player-id')
  expect(container).toBeTruthy()
})

test('checks for button', () => {
  const { queryByTestId } = render(<App />)
  const button = queryByTestId('button');
  expect(button).toBeTruthy();
  expect(button).toContainHTML('Click Me')
})



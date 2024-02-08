import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('test 2 + 2', () => {
    render(<App/>)

    let a = 2 + 2;

    expect(a).toEqual(4)
  })
})

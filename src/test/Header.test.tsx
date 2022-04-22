import { render, screen } from "@testing-library/react";
import Header from '../components/Header';


describe('Testing the Header component', () => {
  test('Is rendering the title', () => {
    render(<Header />)

    const title = screen.getByText('Easily create or join a local nanny share with Hapu');

    expect(title).toBeInTheDocument();
  })
})
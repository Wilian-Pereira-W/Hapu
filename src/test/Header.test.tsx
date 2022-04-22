import { render, screen } from "@testing-library/react";
import Header from '../components/Header';


describe('Testing the Header component', () => {
  test('Is rendering the title', () => {
    render(<Header />)

    const title = screen.getByText('Easily create or join a local nanny share with Hapu');

    expect(title).toBeInTheDocument();
  });

  test('Is rendering the description', () => {
    render(<Header />)

    const description = screen.getByText(/Hapu is Airbnb for nanny share. Share your home/i);

    expect(description).toBeInTheDocument();
  });

  test('Is rendering the logo', () => {
    render(<Header />)

    const logo = screen.getByAltText('logo da Hapu');

    expect(logo).toBeInTheDocument();
  });

  test('Its rendering the Become a Babysitter Share Host button', () => {
    render(<Header />)

    const buttonBecomeNannyShareHost = screen.getByText('Become a Nanny Share Host');

    expect(buttonBecomeNannyShareHost).toBeInTheDocument();
  });

  test('Is rendering the Enter button', () => {
    render(<Header />)

    const buttonSignIn = screen.getByText('Sign In');

    expect(buttonSignIn).toBeInTheDocument();
  });
})
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Display projects/i,
    });

    expect(heading).toBeInTheDocument();
  })
  it('does not render a link to the Home page', () => {
    render(<Home />);

    const links = screen.queryAllByRole('link', {
      name: /← Back to home/i,
      href: /\//i,
    });

    expect(links.length).toEqual(0);
  })

  // TODO: Mock the Home component to check what is rendered when there are
  // - zero projects
  // - one or more projects
})
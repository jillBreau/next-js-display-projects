import { render, screen } from '@testing-library/react';
import ProjectPage from '../pages/projects/[project]';

describe('ProjectPage', () => {
  it('renders a heading', () => {
    render(<ProjectPage />);

    const heading = screen.getByRole('heading', {
      name: /Display project info/i,
    });

    expect(heading).toBeInTheDocument();
  })
  it('renders a link to the Home page', () => {
    render(<ProjectPage />);

    const link = screen.getByRole('link', {
      name: /← Back to home/i,
      href: /\//i,
    });

    expect(link).toBeInTheDocument();
  })

  // TODO: Mock the ProjectPage component to check that the project name is rendered and check what is rendered when there are
  // - zero feeds
  // - 1 to 10 feeds
  // - more than 10 feeds
})
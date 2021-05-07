import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = renderTheme(<Footer html={'<h1>html</h1>'} />);
    expect(screen.getByRole('heading', { name: 'html' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

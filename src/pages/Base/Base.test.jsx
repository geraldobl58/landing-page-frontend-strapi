import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';

import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render a Base', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});

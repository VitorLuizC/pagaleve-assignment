import { render, screen } from '@testing-library/react';
import InputEmail from './InputEmail';

describe('InputEmail | component | integration tests', () => {
  it('renders an input email', () => {
    render(<InputEmail />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('inputMode', 'email');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });
});

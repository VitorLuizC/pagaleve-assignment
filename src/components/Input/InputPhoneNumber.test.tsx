import { render, screen } from '@testing-library/react';
import InputPhoneNumber from './InputPhoneNumber';

describe('InputPhoneNumber | component | integration tests', () => {
  it('renders a input phone number', () => {
    render(<InputPhoneNumber />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'tel');
    expect(input).toHaveAttribute('inputMode', 'tel');
    expect(input).toHaveAttribute('autoComplete', 'tel');
  });
});

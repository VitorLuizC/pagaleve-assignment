import { render, screen } from '@testing-library/react';
import InputText from './InputText';

describe('InputText | component | integration tests', () => {
  it('renders an accessible text input', () => {
    const hint = "Don't forget about your middle name.";

    render(
      <>
        <label id="InputText__label">Name</label>
        <p id="InputText__hint">{hint}</p>
        <InputText
          id="InputText"
          hintId="InputText__hint"
          labelId="InputText__label"
          invalid={false}
          disabled={false}
        />
      </>,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBe(input);
    expect(input).toHaveAccessibleDescription(hint);
  });

  describe('when the input is disabled', () => {
    it('renders an accessible but disabled text input', () => {
      render(
        <InputText
          id="InputText"
          invalid={false}
          disabled
        />,
      );

      expect(screen.getByRole('textbox')).toBeDisabled();
    });
  });

  describe('when the input is invalid', () => {
    it('renders an accessible but invalid text input', () => {
      const error = 'Please type in a valid e-mail.'

      render(
        <>
          <InputText
            id="InputText"
            invalid
            errorId="InputText__error"
            disabled={false}
          />
          <p id="InputText__error">{error}</p>
        </>,
      );

      const input = screen.getByRole('textbox');

      expect(input).toBeInvalid();
      expect(input).toHaveErrorMessage(error);
    });
  });
});

import { render, screen } from '@testing-library/react';
import InputText from './InputText';
import InputWrapper from './InputWrapper';

describe('InputWrapper | component | integration tests', () => {
  it('renders the infrastructure for an input', () => {
    const hint = 'Não é necessário digitar os caracteres especiais.';

    render(
      <InputWrapper hint={hint} label="CPF">
        {(props) => <InputText {...props} />}
      </InputWrapper>,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(screen.getByLabelText('CPF')).toBe(input);
    expect(input).toHaveAccessibleDescription(hint);
  });

  describe("when there's an error", () => {
    it('renders the input as invalid and show error message', () => {
      render(
        <InputWrapper error="Name is required.">
          {(props) => <InputText {...props} />}
        </InputWrapper>,
      );

      const input = screen.getByRole('textbox');

      expect(input).toBeInvalid();
      expect(input).toHaveErrorMessage('Name is required.');
    });
  });

  describe("when there's an error but is disabled", () => {
    it('just renders the input as disabled', () => {
      render(
        <InputWrapper error="Name is required." disabled>
          {(props) => <InputText {...props} />}
        </InputWrapper>,
      );

      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();
      expect(input).not.toBeInvalid();
      expect(input).not.toHaveErrorMessage('Name is required.');
    });
  });
});

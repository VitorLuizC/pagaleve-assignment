/**
 * The props shared between input components, and sent by {@link InputWrapper}.
 */
type InputProps = {
  id: string;
  hintId?: string;
  errorId?: string;
  labelId?: string;
  invalid: boolean;
  disabled: boolean;
};

export default InputProps;

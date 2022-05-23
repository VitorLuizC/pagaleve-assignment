import { useField } from 'formik';
import type { ChangeEvent, ReactElement } from 'react';
import { InputText, InputWrapper } from '../Input';

type Props = {
  name: string;
};

function ContactEmailLabelField(props: Props): ReactElement {
  const { name } = props;

  const [inputProps, { error }, { setValue }] = useField<string | null>(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim() ?? null, true);
  };

  return (
    <InputWrapper error={error} label="Email Label">
      {(props) => (
        <InputText
          {...props}
          {...inputProps}
          value={inputProps.value ?? ''}
          onChange={handleChange}
        />
      )}
    </InputWrapper>
  );
}

export default ContactEmailLabelField;

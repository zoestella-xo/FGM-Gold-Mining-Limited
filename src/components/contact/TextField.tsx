import { useId } from 'react';

interface TextFieldProps {
  /** Visible label text (without the required asterisk). */
  readonly label: string;
  /** Form field name / autofill key. */
  readonly name: string;
  readonly value: string;
  readonly placeholder: string;
  readonly onChange: (value: string) => void;
  /** Validation message; when set the field is styled and announced as invalid. */
  readonly error?: string;
  readonly type?: 'text' | 'email';
  /** Renders a <textarea> instead of an <input>. */
  readonly multiline?: boolean;
  /** Shows the "*" marker and sets aria-required. */
  readonly required?: boolean;
  readonly autoComplete?: string;
}

/**
 * Labelled input / textarea with error messaging.
 * States (see contact.css): hover, focus (gold ring), invalid (red border + message), disabled.
 */
export function TextField({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  type = 'text',
  multiline = false,
  required = false,
  autoComplete,
}: TextFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  const sharedProps = {
    id,
    name,
    value,
    placeholder,
    autoComplete,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: `field__control${multiline ? ' field__control--multiline' : ''}`,
  } as const;

  return (
    <div className={`field${error ? ' field--invalid' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? ' *' : ''}
      </label>

      {multiline ? (
        <textarea {...sharedProps} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input {...sharedProps} type={type} onChange={(event) => onChange(event.target.value)} />
      )}

      {error ? (
        <p id={errorId} className="field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

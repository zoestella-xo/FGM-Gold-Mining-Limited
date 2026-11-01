import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';
import { TextField } from './TextField';
import './contact.css';

/** Everything the visitor can enter. */
export interface EnquiryFormValues {
  fullName: string;
  email: string;
  organisation: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof EnquiryFormValues, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: EnquiryFormValues = {
  fullName: '',
  email: '',
  organisation: '',
  message: '',
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Pure validation: returns a message per invalid field (empty object = valid). */
function validate(values: EnquiryFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
  if (!values.consent) errors.consent = 'Please confirm you agree before sending.';
  return errors;
}

interface EnquiryFormProps {
  /**
   * Called with the validated values. Reject/throw to show the error state.
   * TODO: wire this to your backend, e.g. `(v) => fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(v) })`.
   * The default simply waits briefly so the UI states can be previewed.
   */
  readonly onSubmit?: (values: EnquiryFormValues) => Promise<void>;
}

const previewSubmit = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 600));

/** Contact enquiry form: client-side validation + submit status feedback. */
export function EnquiryForm({ onSubmit = previewSubmit }: EnquiryFormProps) {
  const [values, setValues] = useState<EnquiryFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const consentId = useId();
  const consentErrorId = `${consentId}-error`;

  /** Updates one field and clears its error as soon as the visitor edits it. */
  function setField<K extends keyof EnquiryFormValues>(key: K, value: EnquiryFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === 'success' || status === 'error') setStatus('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      await onSubmit(values);
      setValues(EMPTY_VALUES);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <h2 className="enquiry-form__heading">Send an enquiry</h2>
      <p className="enquiry-form__hint">Fields marked * are required.</p>

      <div className="enquiry-form__row">
        <TextField
          label="Full name"
          name="fullName"
          placeholder="Your name"
          autoComplete="name"
          required
          value={values.fullName}
          error={errors.fullName}
          onChange={(value) => setField('fullName', value)}
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => setField('email', value)}
        />
      </div>

      <TextField
        label="Organization (optional)"
        name="organisation"
        placeholder="Company or organization"
        autoComplete="organization"
        value={values.organisation}
        onChange={(value) => setField('organisation', value)}
      />

      <TextField
        label="Message"
        name="message"
        placeholder="Tell us how we can help."
        multiline
        required
        value={values.message}
        error={errors.message}
        onChange={(value) => setField('message', value)}
      />

      {/* Custom checkbox: the native input stays in the DOM (visually hidden) for keyboard + screen-reader support. */}
      <div className={`consent${errors.consent ? ' consent--invalid' : ''}`}>
        <label className="consent__label" htmlFor={consentId}>
          <input
            id={consentId}
            className="consent__input"
            type="checkbox"
            checked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? consentErrorId : undefined}
            onChange={(event) => setField('consent', event.target.checked)}
          />
          <span className="consent__box" aria-hidden="true">
            <Check size={14} strokeWidth={2.5} />
          </span>
          <span className="consent__text">I agree that FGM may use the details provided to respond to this enquiry.</span>
        </label>
        {errors.consent ? (
          <p id={consentErrorId} className="field__error" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="enquiry-form__actions">
        <Button type="submit" label={status === 'submitting' ? 'Sending…' : 'Send enquiry'} disabled={status === 'submitting'} />

        {/* Live region: announces the outcome to screen readers. */}
        <p
          className={`enquiry-form__status${status === 'error' ? ' enquiry-form__status--error' : ''}${
            status === 'success' ? ' enquiry-form__status--success' : ''
          }`}
          role="status"
        >
          {status === 'success' ? 'Thank you. Your enquiry has been sent.' : null}
          {status === 'error' ? 'Something went wrong. Please try again.' : null}
        </p>
      </div>
    </form>
  );
}

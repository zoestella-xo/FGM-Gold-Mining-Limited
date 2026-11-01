import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Button.css';

interface ButtonBaseProps {
  /** Visible text, e.g. "About FGM". */
  readonly label: string;
  readonly className?: string;
}

/** Renders a router <Link> (navigation). */
interface LinkButtonProps extends ButtonBaseProps {
  readonly to: string;
  readonly type?: never;
  readonly onClick?: never;
  readonly disabled?: never;
}

/** Renders a native <button> (form submit / actions). */
interface ActionButtonProps
  extends ButtonBaseProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'> {
  readonly to?: undefined;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

/**
 * The site's signature two-part button: a dark label block with a gold arrow block.
 *
 * Interactive states
 *  - hover:  label lightens, arrow block darkens, arrow nudges right, soft shadow
 *  - active: button presses down 1px
 *  - focus:  gold focus ring (keyboard only)
 *  - disabled: dimmed, no pointer events
 */
export function Button(props: ButtonProps) {
  const { label, className } = props;
  const classes = ['btn', className].filter(Boolean).join(' ');

  const content = (
    <>
      <span className="btn__label">{label}</span>
      <span className="btn__icon" aria-hidden="true">
        <ArrowRight size={24} strokeWidth={1.5} />
      </span>
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} className={classes} onClick={props.onClick} disabled={props.disabled}>
      {content}
    </button>
  );
}

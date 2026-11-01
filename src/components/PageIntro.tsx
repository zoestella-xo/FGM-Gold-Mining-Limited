import type { ReactNode } from 'react';
import './PageIntro.css';

interface PageIntroProps {
  /** Large serif page heading (the page's <h1>). */
  readonly title: string;
  /** Optional right-hand summary paragraph (used on Collection). */
  readonly summary?: ReactNode;
}

/**
 * Editorial page opener shared by Collection, Gallery and Contact:
 * huge serif title on the left, optional summary bottom-aligned on the right.
 * The top padding clears the floating navigation pill.
 */
export function PageIntro({ title, summary }: PageIntroProps) {
  return (
    <header className="page-intro">
      <div className="container page-intro__inner">
        <h1 className="page-intro__title">{title}</h1>
        {summary ? <p className="page-intro__summary">{summary}</p> : null}
      </div>
    </header>
  );
}

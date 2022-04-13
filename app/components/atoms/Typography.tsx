import { findBodySize, findHeaderSize } from '@app/helpers/util.helper';
import { HTMLAttributes, memo } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
}

export const Heading = memo(
  ({ children, level = 1, bold, ...rest }: HeadingProps) => {
    const H = `h${level}` as React.ElementType;
    const size = findHeaderSize(level);
    return (
      <H
        className={`${bold ? 'font-bold' : 'font-medium'} ${size ?? size}`}
        style={{ whiteSpace: 'break-spaces' }}
        {...rest}
      >
        {children}
      </H>
    );
  }
);

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  level?: 1 | 2;
  richText?: boolean;
  bold?: boolean;
}

export const Body = memo(
  ({ children, level = 1, richText, bold, ...rest }: BodyProps) => {
    const Wrapper = (richText ? 'div' : 'p') as React.ElementType;
    return (
      <Wrapper
        className={`${bold && 'font-bold'} ${'text-' + findBodySize(level)}`}
        style={{ whiteSpace: 'break-spaces' }}
        {...rest}
      >
        {children}
      </Wrapper>
    );
  }
);

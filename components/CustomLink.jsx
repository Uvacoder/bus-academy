import UnstyledLink from './UnstyledLink';
import { classNames } from '../lib/helper';

export default function CustomLink({ children, className = '', ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={classNames(
        'inline-flex items-center gap-1 px-3 py-2 ml-auto text-sm font-medium text-white rounded-md hover:bg-sky-400 bg-sky-500',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}

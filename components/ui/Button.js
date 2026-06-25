import Link from 'next/link';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  icon,
  className = '',
  target,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-full';

  const variants = {
    primary:
      'bg-[#111111] text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]',
    secondary:
      'border border-outline-variant text-on-surface hover:bg-surface-container',
    outline:
      'border border-primary/20 text-primary hover:bg-primary/5',
    ghost: 'text-on-surface-variant hover:text-primary hover:bg-surface-container/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-8 py-5 text-body-md',
    lg: 'px-12 py-6 text-lg',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {icon && <span className="material-symbols-outlined text-[1.2em]">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {icon && <span className="material-symbols-outlined text-[1.2em]">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="material-symbols-outlined text-[1.2em]">{icon}</span>}
      {children}
    </button>
  );
}

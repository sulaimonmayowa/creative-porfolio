export default function Chip({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-container text-on-surface-variant',
    primary: 'bg-primary/10 text-primary',
    dark: 'border border-white/20 text-white bg-white/5',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-label-caps ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}

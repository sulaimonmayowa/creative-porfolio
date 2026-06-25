export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
}) {
  const variants = {
    default:
      'bg-white border border-on-surface/5 rounded-2xl',
    featured:
      'bg-primary-container text-white rounded-2xl',
    glass:
      'glass-panel rounded-2xl',
    dark: 'bg-white/5 border border-white/10 rounded-3xl text-white',
  };

  return (
    <div
      className={`p-10 ${variants[variant] || variants.default} ${
        hover ? 'transition-all duration-300 hover:border-primary/20 proximity-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

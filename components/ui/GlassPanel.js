export default function GlassPanel({
  children,
  className = '',
  dark = false,
}) {
  return (
    <div
      className={`${
        dark ? 'glass-panel-dark' : 'glass-panel'
      } p-8 rounded-2xl shadow-2xl relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

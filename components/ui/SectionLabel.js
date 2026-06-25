export default function SectionLabel({ children, className = '', dark = false }) {
  return (
    <h2
      className={`text-label-caps mb-4 ${
        dark ? 'text-primary-fixed' : 'text-primary'
      } ${className}`}
    >
      {children}
    </h2>
  );
}

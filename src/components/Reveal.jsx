import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const { ref, isVisible } = useReveal();
  const classes = ['reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

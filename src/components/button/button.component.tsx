import styles from './button.module.scss';

interface IButton extends Pick<HTMLAnchorElement, 'href' | 'target' | 'rel'> {
  text: string;
  outline?: boolean;
  href: string;
  icon?: React.ReactNode;
}

const Button = ({ icon, href, outline, text = 'Button' }: IButton) => {
  return (
    <a
      className={
        styles.btn + ' ' + `${outline ? styles.btn_outline : styles.btn_full}`
      }
      href={href}
    >
      <span>{icon}</span>
      {text}
    </a>
  );
};

export default Button;

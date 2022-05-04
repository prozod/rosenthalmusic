import styles from './button.module.scss';

interface IButton extends Pick<HTMLAnchorElement, 'href' | 'target' | 'rel'> {
  text: string;
  outline?: boolean;
  href: string;
}

const Button = ({ href, outline, text = 'Button' }: IButton) => {
  return (
    <a
      className={
        styles.btn + ' ' + `${outline ? styles.btn_outline : styles.btn_full}`
      }
      href={href}
    >
      {text}
    </a>
  );
};

export default Button;

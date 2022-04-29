import styles from './button.module.scss';

interface IButton {
  text: string;
  outline?: boolean;
}

const Button = ({ outline, text = 'Button' }: IButton) => {
  return (
    <button
      className={
        styles.btn + ' ' + `${outline ? styles.btn_outline : styles.btn_full}`
      }
    >
      {text}
    </button>
  );
};

export default Button;

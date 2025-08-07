
import styles from './footer.module.css';
import { ButtonStyle } from './components.styled';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 My Company</p>
      <p>Follow us on social media!</p>
      <ButtonStyle>Contact Us</ButtonStyle>
    </footer>
  );
}
export default Footer;

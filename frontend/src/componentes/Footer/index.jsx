import styles from './Footer.module.css';
import {FaInstagram, FaWhatsapp} from 'react-icons/fa';

function Footer(){
    return(
        <div className={styles.footer}>
            <a href="https://paz.church/fortaleza/" target="_blank" rel="noopener noreferrer">
                <img className={styles.logochurch} src='https://paz.church/fortaleza/wp-content/uploads/2018/12/logomenor.png' alt='Logo da Paz Church'/>
            </a>
            <div className={styles.social}>
                <FaInstagram />
                <FaWhatsapp />
            </div>
        </div>
    )
}

export default Footer;
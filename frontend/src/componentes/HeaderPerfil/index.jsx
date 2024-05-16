import styles from './HeaderPerfil.module.css';
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';                                   //Importa um componente do gerenciador de rotas
function  Header(){
    return(
        <div className={styles.topbar}>                
            <Link to="/" className={styles.titulo}>
                <h3>Livraria Paz Church</h3>
            </Link>
            <Link to="/perfil" className={styles.iconperfil}>
                <IoPersonCircle/>
            </Link>
        </div>
    )
}

export default Header
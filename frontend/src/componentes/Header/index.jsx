import styles from './Header.module.css'
import React, { useState } from 'react';
import { IoMenu, IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart, FaSearch }  from "react-icons/fa";
import { Link } from 'react-router-dom';                                   //Importa um componente do gerenciador de rotas
import Menu from '../Menu'
function  Header(){
    const [menu, setMenu] = useState(false);                               //Define o estado do menu, incialmente fechado
    const [menuPerfil, setMenuPerfil] = useState(false);

    const openMenu = () => {
        setMenu(!menu);
      };
    
    const closeMenu = () => {
        setMenu(false);
    };

    const togglePerfil = () => {
        setMenuPerfil(!menuPerfil);
    }

    return(
        <>
            <div className={styles.topbar}> 
                <IoMenu className={styles.iconmenu} onClick={openMenu}/>              
                <Link to="/" className={styles.titulo}>
                    <h3>Livraria Paz Church</h3>
                </Link>
                <div className={styles.direita_bar}>
                    <div className={styles.barra_busca}>
                        <button className={styles.button}><FaSearch className={styles.iconbusca}/></button>
                        <input type="text" className={styles.input} name="busca" placeholder="Buscar..."/>
                    </div>
                    <div className={styles.icones}>
                        <Link to="/carrinho" className={styles.iconcarrinho}>
                            <FaShoppingCart/>
                        </Link> 
                        <div className={styles.login_perfil}>
                            <IoPersonCircle className={styles.iconperfil} onClick={togglePerfil}/>
                            {menuPerfil ? (
                                <ul className={styles.submenu}>
                                    <li>
                                        <Link to="/perfil" className={styles.perfil}>perfil</Link> 
                                    </li>
                                    <li>
                                        <Link to="/logout" className={styles.sair}>sair</Link>
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>        
            </div>
            {menu && <div className={styles.sidebar}><Menu close={closeMenu}/></div>} 
            {menu && <div className={styles.filtro} onClick={closeMenu}/>}
        </>
    )
}

export default Header
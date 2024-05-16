import styles from './Menu.module.css'
import {IoClose, IoChevronDown, IoChevronUp} from 'react-icons/io5'
import React, { useState } from 'react'


function Menu({ close }){

    const closeMenu = () => {close(false)}

    const [menuBiblia, setmenuBiblia] = useState(false);
    const [menuLiteratura, setmenuLiteratura] = useState(false);

    const handleMenuBiblia = () => {
      setmenuBiblia(!menuBiblia);
    };
    const handleMenuLiteratura = () => {
      setmenuLiteratura(!menuLiteratura);
    };

    // Calcula a altura dinâmica dos submenus
    const calculateGridRows = () => {
        const rows = [
            '50px',
            '50px',
            menuBiblia ? '150px' : '0',
            '50px',
            menuLiteratura ? '150px' : '0',
            '50px',
            '50px',
          ];
          return rows.join(' ');
    };

    return(
        <div className={styles.body}>
            <IoClose className={styles.exit} onClick={closeMenu}/>
            <div className={styles.opcoes} style={{ gridTemplateRows: calculateGridRows() }}>
                <button className={styles.botoes}>Novidades</button>
                <div className={styles.seta} onClick={handleMenuBiblia}>
                    <button className={styles.botoes}>Bíblias</button>
                    {menuBiblia ? <IoChevronUp className={styles.setabaixo}/> : <IoChevronDown className={styles.setabaixo}/>}
                </div>
                <div className={styles.menu}>
                    {menuBiblia ? (
                                <ul className={styles.submenu}>
                                    <li><button>Estudo</button></li>
                                    <li><button>Infantil</button></li>
                                    <li><button>Jovem</button></li>
                                    <li><button>Mulher</button></li>
                                    <li><button>Letras grandes</button></li>
                                </ul>
                    ) : null}
                </div>
                <div className={styles.seta} onClick={handleMenuLiteratura}>
                    <button className={styles.botoes}>Literaturas</button>
                    {menuLiteratura ? <IoChevronUp className={styles.setabaixo}/> : <IoChevronDown className={styles.setabaixo}/>}
                </div>
                <div className={styles.menu}>
                    {menuLiteratura ? (
                                <ul className={styles.submenu}>
                                    <li><button>Família</button></li>
                                    <li><button>Relacionamentos</button></li>
                                    <li><button>Infantil</button></li>
                                    <li><button>Teologia</button></li>
                                    <li><button>Outros</button></li>
                                </ul>
                    ) : null}
                </div>
                <button className={styles.botoes}>Cadernos</button>
                <button className={styles.botoes}>Acessórios</button>
            </div>
            
        </div>
    )
}

export default Menu
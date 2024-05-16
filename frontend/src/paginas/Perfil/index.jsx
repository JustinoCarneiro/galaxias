import styles from './Perfil.module.css';
import HeaderPerfil from '../../componentes/HeaderPerfil';
import Footer from '../../componentes/Footer';
import EditPerfil from '../../componentes/EditPerfil';
import EditEnd from '../../componentes/EditEnd';
import AddEnd from '../../componentes/AddEnd';
import { IoPencil } from "react-icons/io5";
import { useState } from 'react';

function Perfil(){

    const [editPerfil, setEditPerfil] = useState(false);
    const [editEnd, setEditEnd] = useState(false);
    const [addEnd, setAddEnd] = useState(false);

    const handlerEditPerfil = () => {
        setEditPerfil(!editPerfil);
    };

    const handlerEditEnd = () => {
        setEditEnd(!editEnd);
    };

    const handlerAddEnd= () => {
        setAddEnd(!addEnd);
    };

    return(
        <>
            <HeaderPerfil/>
            <div className={styles.body}>
                <h2 className={styles.titulo}>Perfil</h2>
                <div className={styles.comunicacao}>
                    <IoPencil className={styles.iconpencil_com} onClick={handlerEditPerfil}/>
                    <p className={styles.texto}>Antonio Marcos Justino Carneiro</p>
                    <p className={styles.subtitulo}>Email:</p>
                    <p className={styles.texto}>marcosjustino161@gmail.com</p>
                    <p className={styles.subtitulo}>Número telefone:</p>
                    <p className={styles.texto}>+55 85 99820-3980</p>
                </div>
                <div className={styles.endereco}>
                    <div className={styles.header_end}>
                        <p className={styles.titulo_endereco}>Endereços</p>
                        <button className={styles.adicionar_end} onClick={handlerAddEnd}>+ Adicionar</button>
                    </div>
                    <div className={styles.caixa_end} onClick={handlerEditEnd}>
                        <div className={styles.header_caixa_end}>
                            <p className={styles.padrao_end}>Endereço padrão</p>
                            <IoPencil className={styles.iconpencil_end}/>
                        </div>
                        <p className={styles.texto}>Rua Adel Nogueira Maia, 68</p>
                        <p className={styles.texto}>60843-160</p>
                        <p className={styles.texto}>Fortaleza - CE</p>
                    </div>
                </div>
            </div>
            <Footer/>
            {editPerfil && <div className={styles.filtro} onClick={handlerEditPerfil}/>}
            {editEnd && <div className={styles.filtro} onClick={handlerEditEnd}/>}
            {addEnd && <div className={styles.filtro} onClick={handlerAddEnd}/>}
            {editPerfil && 
            <div className={styles.overlay_editperfil}>
                <EditPerfil close={handlerEditPerfil}/>
            </div>}
            {editEnd && 
            <div className={styles.overlay_end}>
                <EditEnd close={handlerEditEnd}/>
            </div>}
            {addEnd && 
            <div className={styles.overlay_end}>
                <AddEnd close={handlerAddEnd}/>
            </div>}
        </>
    )
}

export default Perfil;
import styles from './EditPerfil.module.css'
import {IoClose} from 'react-icons/io5'

function EditPerfil({ close }){

    const closeCaixa = () => {close(false)}

    return(
        <div className={styles.body}>
            <div className={styles.header}>
                <h3 className={styles.titulo}>Editar perfil</h3>
                <IoClose className={styles.exit} onClick={closeCaixa}/>
            </div>
            <div className={styles.nomecompleto}>
                <input type="texto" placeholder="Nome" className={styles.nome}/>
                <input type="texto" placeholder="Sobrenome" className={styles.sobrenome}/>
            </div>
            <input type="texto" placeholder="Email" className={styles.email}/>
            <input type="texto" placeholder="Telefone - (DDD) 9xxxx-xxxx" className={styles.telefone}/>
            <div className={styles.botoes}>
                <button className={styles.cancelar} onClick={closeCaixa}>Cancelar</button>
                <button className={styles.salvar}>Salvar</button>
            </div>
        </div>
    )
}

export default EditPerfil
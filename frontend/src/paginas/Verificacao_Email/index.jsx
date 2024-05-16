import { Link } from 'react-router-dom'
import styles from './Verificacao_Email.module.css'

function Verificacao_Email(){
    return(
        <div className={styles.body}>
            <div className={styles.caixa}>
                <Link to="/" className={styles.titulo}>
                    <h1 className={styles.titulo}>Livraria Paz Church</h1>
                </Link>
                <h2 className={styles.verificar_cadastro}>Verificar cadastro</h2>
                <p>Foi enviado um código para o emailexemplo@gmail.com, digite-o abaixo.</p>
                <div className={styles.credenciais}>
                    <div className={styles.codigo}>
                        <label className={styles.label_codigo}>Código:</label>
                        <input type="texto" className={styles.input}/>
                    </div>
                </div>
                <Link to="" className={styles.reenviar}>
                    <button>Reenviar código</button>
                </Link>
            </div>
        </div>
    )
}

export default Verificacao_Email
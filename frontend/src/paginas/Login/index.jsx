import { Link } from 'react-router-dom'
import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.body}>
            <div className={styles.caixa}>
                <Link to="/" className={styles.titulo}>
                    <h1 className={styles.titulo}>Livraria Paz Church</h1>
                </Link>
                <h2 className={styles.login}>Login</h2>
                <div className={styles.credenciais}>
                    <div className={styles.email}>
                        <label className={styles.label_email}>Email:</label>
                        <input type="texto" className={styles.input}/>
                    </div>
                    <div className={styles.caixa_senha}>
                        <div className={styles.senha}>
                            <label className={styles.label_senha}>Senha:</label>
                            <input type="password" className={styles.input}/>
                        </div>
                        <button className={styles.esqueceu_senha}>Esqueceu a senha?</button>
                    </div>
                </div>
                <Link to="/" className={styles.entrar}>
                    <button>Entrar</button>
                </Link>
                <Link to="/cadastro" className={styles.cadastrar}>
                    <button>Não tenho cadastro</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
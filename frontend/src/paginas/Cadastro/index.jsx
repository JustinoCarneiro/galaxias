import styles from './Cadastro.module.css'
import { Link } from 'react-router-dom'

function Cadastro(){
    return(
        <div className={styles.body}>
            <div className={styles.caixa}>
                <Link to="/" className={styles.titulo}>
                    <h1 className={styles.titulo}>Livraria Paz Church</h1>
                </Link>
                <h2 className={styles.login}>Cadastro</h2>
                <div className={styles.credenciais}>
                    <div className={styles.nome}>
                        <label className={styles.label_nome}>Nome completo:</label>
                        <input type="texto" className={styles.input}/>
                    </div>
                    <div className={styles.email}>
                        <label className={styles.label_email}>Email:</label>
                        <input type="texto" className={styles.input}/>
                    </div>
                    <div className={styles.caixa_senha}>
                        <div className={styles.senha}>
                            <label className={styles.label_senha}>Senha:</label>
                            <input type="password" className={styles.input}/>
                        </div>
                        <p className={styles.obs_senha}>As senhas devem ter no mínimo 8 caracteres.</p>
                        <div className={styles.senha_rep}>
                            <label className={styles.label_senha}>Repita a senha:</label>
                            <input type="password" className={styles.input}/>
                        </div>
                    </div>
                </div>
                <Link to="/verificacao_email" className={styles.entrar}>
                    <button>Cadastrar</button>
                </Link>
                <Link to="/login" className={styles.cadastrar}>
                    <button>Já tenho cadastro</button>
                </Link>
            </div>
        </div>
    )
}

export default Cadastro
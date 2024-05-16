import styles from './Detalhes.module.css'
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";

function Detalhes(){
    return(
        <>
            <Header/>
            <div className={styles.body}>
                <img alt='Imagem do livro'className={styles.capa}/>
                <div className={styles.geral}>
                    <div className={styles.nomeacao}>
                        <h3 className={styles.titulo}>O Deus que destrói sonhos</h3>   {/* Verificar os casos onde o título é grande */}
                        <div className={styles.linha}>.</div>
                        <h4 className={styles.autor}>Rodrigo Bibo</h4>
                    </div>
                    <p className={styles.descricao}>Descrição detalhada sobre o livro...</p>
                </div>
                <div className={styles.addcart}>
                    <div className={styles.info}>
                        <h3 className={styles.preco}>R$40,98</h3>
                        <div className={styles.modificador}>
                            <div className={styles.quantidade}>1</div>
                            <button className={styles.mais}>+</button>
                            <button className={styles.menos}>-</button>
                        </div>
                    </div>
                    <button className={styles.botao}>Adicionar ao carrinho</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Detalhes;
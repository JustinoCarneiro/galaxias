import styles from "./Carrinho.module.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import carrinho from '../../dados/carrinho.json';
import Item from "../../componentes/Item"

function Carrinho(){
    return(
        <>
            <Header/>
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.lista}>
                        {carrinho.map((livro, index) => (                       //Passa os dados livro por livro usnado o método map
                            <div key={livro.id}>
                                <Item livro={livro}/>
                                {index !== carrinho.length - 1 && <hr className={styles.divisor}/>}
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <div className={styles.preco}>
                            <div className={styles.totalname}>Total:</div>
                            <div className={styles.valor}>R$45,00</div>
                        </div>
                        <button className={styles.botao}>Finalizar pedido</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Carrinho
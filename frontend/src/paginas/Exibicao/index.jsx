import styles from './Exibicao.module.css';
import Card from "../../componentes/Card";
import livros from '../../dados/livros.json';               //Importa o banco de dados dos livros
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function Exibicao(){
    return(
        <div>
            <Header/>
            <div className={styles.body}>
            {livros.map((livros) => (                       //Passa os dados livro por livro usnado o método map
                <Card key={livros.id} livro={livros}/>
            ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Exibicao;
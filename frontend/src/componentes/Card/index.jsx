import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ livro }){                   //Recebe um objeto que possui informações de um livro
    const {Titulo, Autor, Capa, Preco, id} = livro;    //Cada constanto recebe respectivamente as informações do livro passado
    return (
        <Link to={`/detalhes/${id}`} className={styles.caixa}>
                <img className={styles.capa} src={Capa} alt={`Capa de ${Titulo}.`}/>
                <h5 className={styles.titulo}>{Titulo}</h5>
                <p className={styles.autor}>{Autor}</p>
                <h5 className={styles.preco}>R${Preco}</h5>
        </Link>
    )
}

export default Card;
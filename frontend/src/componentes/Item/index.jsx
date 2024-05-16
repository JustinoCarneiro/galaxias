import styles from './Item.module.css'

function Item({livro}){

    const {Titulo, Autor, Capa, Preco, id} = livro;
    return(
        <div className={styles.body}>
            <img className={styles.capa} src={Capa} alt={`Capa de ${Titulo}.`}/>
            <div className={styles.nomes}>
                <h5 className={styles.titulo}>{Titulo}</h5>
                <p className={styles.autor}>{Autor}</p>
            </div>
            <h5 className={styles.preco}>R${Preco}</h5>
        </div>
    )
}

export default Item
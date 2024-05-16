import styles from './AddEnd.module.css'
import {IoClose, IoChevronDown, IoChevronUp} from 'react-icons/io5'
import { useState } from 'react'

function AddEnd({ close }){

    const closeCaixa = () => {close(false)}

    const [setaPais, setSetaPais] = useState(false);
    const [setaEstado, setSetaEstado] = useState(false);

    const togglePais = () => {
        setSetaPais(!setaPais);
    };

    const toggleEstado = () => {
        setSetaEstado(!setaEstado);
    };

    return(
        <div className={styles.body}>
            <div className={styles.header}>
                <h3 className={styles.titulo}>Adicionar endereço</h3>
                <IoClose className={styles.exit} onClick={closeCaixa}/>
            </div>
            <div className={styles.checkbox}>
                <input type='checkbox' className={styles.end_padrao}/>
                <p className={styles.end_pad_text}>Endereço padrão</p>
            </div>
            <div className={styles.nomecompleto}>
                <input type="texto" placeholder="Nome" className={styles.nome}/>
                <input type="texto" placeholder="Sobrenome" className={styles.sobrenome}/>
            </div>
            <div>
                <div className={styles.caixa_pais} onClick={togglePais}>
                    <div className={styles.pais}>
                        <label>País/Região</label>
                        <div className={styles.pais_padrao}>Brasil</div>
                    </div>
                    {setaPais ? <IoChevronDown className={styles.setabaixo}/> : <IoChevronUp className={styles.setabaixo}/>}
                </div>
                {setaPais ? (
                            <ul className={`${styles.submenu_paises} ${setaPais && styles.scrollable_pais}`}>
                                <li>Brasil</li>
                                <li>Estados Unidos</li>
                                <li>Brasil</li>
                                <li>Estados Unidos</li>
                                <li>Brasil</li>
                                <li>Estados Unidos</li>
                                <li>Brasil</li>
                                <li>Estados Unidos</li>

                            </ul>
                ) : null}
            </div>
            <input type='text' placeholder='CEP' className={styles.cep}/>
            <input type='text' placeholder='Rua e número da casa' className={styles.rua}/>
            <input type='text' placeholder='Apartamento, bloco, etc.' className={styles.complemento}/>
            <div>
                <div className={styles.local_reg}>
                    <input type='text' placeholder='Cidade' className={styles.cidades}/>
                    <div className={styles.caixa}>
                        <div className={styles.caixa_estados} onClick={toggleEstado}>
                            <div className={styles.estado}>
                                <label>Estado</label>
                                <div className={styles.estado_padrao}>Ceará</div>
                            </div>
                            {setaEstado ? <IoChevronDown className={styles.setabaixo}/> : <IoChevronUp className={styles.setabaixo}/>}
                        </div>
                        {setaEstado ? (
                            <ul className={`${styles.submenu_estados} ${setaEstado && styles.scrollable_estado}`}>
                                <li>Acre</li>
                                <li>Ceará</li>
                                <li>Florianópolis</li>
                                <li>Acre</li>
                                <li>Ceará</li>
                                <li>Florianópolis</li>
                                <li>Acre</li>
                                <li>Ceará</li>
                                <li>Florianópolis</li>
                            </ul>
                        ) : null}
                    </div>
                </div>
            </div>
            <input type='text' placeholder='Telefone - (DDD) 9xxxx-xxxx' className={styles.telefone}/>
            <div className={styles.botoes}>
                <button className={styles.cancelar} onClick={closeCaixa}>Cancelar</button>
                <button className={styles.salvar}>Salvar</button>
            </div>
        </div>
    )
}

export default AddEnd;
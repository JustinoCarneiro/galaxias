import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exibicao from './paginas/Exibicao';
import Carrinho from './paginas/Carrinho';
import Detalhes from './paginas/Detalhes';
import Perfil from './paginas/Perfil';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Verificacao_Email from './paginas/Verificacao_Email';

function AppRoutes(){
    return(
        <BrowserRouter>                         
            <Routes>            
                <Route path="/" element={ <Exibicao/> }></Route>        {/* Define o componente Exibicao como raiz */}
                <Route path="/carrinho" element={ <Carrinho/> }></Route>
                <Route path="/detalhes/:id" element={ <Detalhes/> }></Route>
                <Route path="/perfil" element={ <Perfil/> }></Route>
                <Route path="/login" element={ <Login/> }></Route>
                <Route path="/cadastro" element={ <Cadastro/> }></Route>
                <Route path="/verificacao_email" element={ <Verificacao_Email/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
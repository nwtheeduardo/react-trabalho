import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Categoria } from "./pages/Categoria";
import { Produto } from "./pages/Produto";
import { Carrinho } from "./pages/Carrinho";
import { Finalizar } from "./pages/Finalizar";
import { Erro } from "./pages/Erro";
import { Roupas } from "./pages/Roupas";

import { Header, Footer } from "./components/Main";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <div className="container">
                <Switch>
                    <Route path={['/','/home']} exact component={Home}></Route>
                    <Route path={'/carrinho'} exact component={Carrinho}></Route>
                    <Route path={'/finalizar'} exact component={Finalizar}></Route>
                    <Route path={['/categoria','/categoria/:id']} exact component={Categoria}></Route>
                    <Route path={['/produto','/produto/:id']} exact component={Produto}></Route>
                    <Route path={['/roupas','/roupas/:id']} exact component={Roupas}></Route>
                    <Route path='*' exact component={Erro}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    )
}
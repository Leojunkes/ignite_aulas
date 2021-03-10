import { Counter } from './componentes/counter';
import { ListaRepositorio } from './componentes/ListadeRepositorio';
import './styles/global.scss';

export function App(){
    return(
        <>
        <ListaRepositorio/>
        <Counter/>
        <Counter/>
        </>
    )
}
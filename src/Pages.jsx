import React from 'react'
import { Link } from 'react-router-dom'
import Page from './Page';

const Pages = props => {
    return (
        props.match.params.value
            ? <Page page={props.match} />
            : <>
                <div>Soy la ruta Paginas. Esta son las paginas</div>
                <ul>
                    {/* Con Link podemos trabajar las navegaciones como una SPA, evitando recargar la pagina */}
                    <li><Link to="/pages/page/1">Page 1</Link></li>
                    <li><Link to="/pages/page/2">Page 2</Link></li>
                    <li><Link to="/pages/page/3">Page 3</Link></li>
                    <li><Link to="/pages/page/4">Page 4</Link></li>
                </ul>
            </>
    )
}

export default Pages

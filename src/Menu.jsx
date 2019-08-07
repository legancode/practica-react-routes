import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            {/* Los Navlink a diferencia de los Link, tienen un parametro especial que es activeClassName para activarse cuando
            se encuentra en ese path */}
            <li><NavLink to="/uncomponente" className="link" activeClassName="active">Uncomponente</NavLink></li>
            <li><NavLink to="/myhook" className="link" activeClassName="active">Mi Hook</NavLink></li>
            <li><NavLink to="/changenumber" className="link" activeClassName="active">Change Number App</NavLink></li>
            <li><NavLink to="/servicios" className="link" activeClassName="active">Servicios</NavLink></li>
            <li><NavLink to="/posts" className="link" activeClassName="active">Posts</NavLink></li>
            <li><NavLink to="/comentarios" className="link" activeClassName="active">Comentarios</NavLink></li>
            <li><NavLink to="/pages" className="link" activeClassName="active">Pages</NavLink></li>
            <li><NavLink to="/contacto" className="link" activeClassName="active">contacto</NavLink></li>
        </ul>
    )
}

export default Menu

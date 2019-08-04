import React from 'react';
import './styles.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Hello from './Hello';
import Services from './Services';
import Contact from './Contact';
import Pages from './Pages';
import Comments from './Comments'
import Menu from './Menu';
import Posts from './Posts';
const App = () => (
  <Router>
    {/* Todo lo que este fuera de switch, es lo que no cambiara en la interfaz */}
    <Menu />
    {/* Con switch manejamos las rutas y el error 404 pasandole un component por default */}
    <Switch>
      <Route path='/' exact component={Hello} />
      {/* Un path, puede contener parametros. En este caso el parametro creado es :value y en el componente Pages, se puede acceder
      a esa prop por medio de props.match.params.value */}
      <Route path="/pages/page/:value" component={Pages} />
      <Route path="/pages" component={Pages} />
      <Route path='/servicios' component={Services} />
      <Route path='/posts' component={Posts} />
      <Route path='/comentarios' component={Comments} />
      <Route path='/contacto' component={Contact} />
      {/* Una ruta que devuelve un callback que retorna un componente */}
      <Route path="/uncomponente" component={() => (<div>Soy un componente creado en un callback</div>)} />
      <Route component={() => (<div>ERROR 404</div>)} />
    </Switch>
  </Router>
)


export default App;
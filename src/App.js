import 'rbx/index.css';
import { Container, Title } from 'rbx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Motorcycles from './components/Motorcycles';

function App() {
  return (
    <Container>
      <Router>
        <Title>Motorcycles App</Title>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/motorcycles" component={Motorcycles} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

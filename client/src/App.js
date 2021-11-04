import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalAlert from './components/GlobalAlert';
import TextValidation from './views/TextValidation';
import SuccessMsg from './views/SuccessMsg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <GlobalAlert/>
        <div className="app-body">
          <main className="main">
            <Switch>
              <Route path="/success">
                <SuccessMsg />
              </Route>
              <Route path="/">
                <TextValidation />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

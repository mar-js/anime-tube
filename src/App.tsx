import { GlobalStyles } from './assets/styles'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { Header } from './layouts/header'
import { Home } from './pages/home'
import { AboutApp } from './pages/about-app'
import { Contact } from './pages/contact'
import { Anime } from './pages/anime'
import { SearchResult } from './pages/search_result'

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about-app" component={ AboutApp } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/anime/:id" component={ Anime } />
        <Route exact path="/search/" component={ SearchResult } />
      </Switch>
    </BrowserRouter>
  </>
)

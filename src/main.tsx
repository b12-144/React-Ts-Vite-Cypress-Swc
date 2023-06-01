import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRoutes } from './enums/AppEnums'
import { store } from './redux'
import Emotion from './pages/Emotions'
import Dates from './pages/Dates'
import Forms from './pages/Forms'
import Hooks from './pages/Hooks'
import Redux from './pages/Redux'
import ServerRequests from './pages/ServerRequests'
import Times from './pages/Times'
import Translations from './pages/Translations'
import Formik from './pages/Formik';
import TailWindCSS from './pages/TailWindcss'
import Urql from './pages/Urql'
import { Client, Provider as UrlProvider, cacheExchange, fetchExchange } from 'urql';
import ApolloClientPage from './pages/ApolloClientPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ApolloClientPageTyped from './pages/ApolloClientPageTyped'
import SassPage from './pages/SassPage'
import TestPage from './pages/TestPage'
import PropsPage from './pages/PropsPage'
import StylesPage from './pages/StylesPage'
import ConditionalPage from './pages/ConditionalPage'
import ListsPage from './pages/ListsPage'
import HooksSameParent from './pages/HooksSameParent'
import TypescriptPage from './pages/TypescriptPage'
import LottiePage from './pages/LottiePage'
import RefPage from './pages/RefPage'

const urqlClient = new Client({
  url: 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
  <Provider store={store}>
  <UrlProvider value={urqlClient}>  
  <ApolloProvider client={apolloClient}>  
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
              <Route path={AppRoutes.apolloclient} element={<ApolloClientPage/>}/>
              <Route path={AppRoutes.apolloclientTyped} element={<ApolloClientPageTyped/>}/>
              <Route path={AppRoutes.conditional} element={<ConditionalPage isLogged={true}/>}/>
              <Route path={AppRoutes.translations} element={<Translations/>}/>
              <Route path={AppRoutes.hooks} element={<Hooks/>}/>
              <Route path={AppRoutes.hooksSameParent} element={<HooksSameParent/>}/>
              <Route path={AppRoutes.emotion} element={<Emotion/>}/>
              <Route path={AppRoutes.dates} element={<Dates/>}/>
              <Route path={AppRoutes.lists} element={<ListsPage/>}/>
              <Route path={AppRoutes.lottiePage} element={<LottiePage/>}/>
              <Route path={AppRoutes.redux} element={<Redux/>}/>
              <Route path={AppRoutes.serverRequests} element={<ServerRequests/>}/>
              <Route path={AppRoutes.formik} element={<Formik/>}/>
              <Route path={AppRoutes.forms} element={<Forms/>}/>
              <Route path={AppRoutes.props} element={<PropsPage/>}/> 
              <Route path={AppRoutes.refPage} element={<RefPage/>}/> 
              <Route path={AppRoutes.sass} element={<SassPage/>}/> 
              <Route path={AppRoutes.stylesPage} element={<StylesPage/>}/> 
              <Route path={AppRoutes.testPage} element={<TestPage/>}/>  
              <Route path={AppRoutes.times} element={<Times/>}/> 
              <Route path={AppRoutes.typescriptPage} element={<TypescriptPage/>}/> 
              <Route path={AppRoutes.tailWindCSS} element={<TailWindCSS/>}/> 
              <Route path={AppRoutes.urql} element={<Urql/>}/> 
          </Route>
      </Routes>
  </BrowserRouter>
  </ApolloProvider>
  </UrlProvider>  
</Provider>
</React.StrictMode>
)

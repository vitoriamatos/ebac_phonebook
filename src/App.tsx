import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container, Body } from './styles'

import store from './store'
import Home from './pages/Home'
import Register from './pages/Cadastro'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Body>
        <RouterProvider router={route}></RouterProvider>
      </Body>
    </Provider>
  )
}

export default App

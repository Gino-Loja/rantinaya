import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const samurai = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary:{
      100:"#f4f1ff",
      200:"#edffec",
      300:"#fef3f3"
    }
  }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={samurai}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import YizuzStore from './YizuzStore'
import { store } from './store'

import './index.css'
import 'antd/dist/antd.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <YizuzStore />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

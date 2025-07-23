import { dataContext } from './context/userContext';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <dataContext.Provider value={{}}>
    <App />
  </dataContext.Provider>
  </Provider>
);

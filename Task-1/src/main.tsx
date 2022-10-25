import './style.scss';
import store from './store';
import Router from "./router";
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#root') as HTMLDivElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
);

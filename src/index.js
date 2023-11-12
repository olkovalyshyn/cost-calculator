import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.js';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// import React from 'react';
// import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import { store } from './store/store.js';
// import App from './App.js';
// import { router } from './routes/router.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//       <App />
//     </Provider>
//   </React.StrictMode>,
// );

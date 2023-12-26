import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CustomStore from "./CustomStore.jsx";
import MainRouter from "./mainroutes"
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("Called main index.js");
root.render(
  <Provider store={CustomStore}>
    <RouterProvider router={MainRouter} />
  </Provider>
);



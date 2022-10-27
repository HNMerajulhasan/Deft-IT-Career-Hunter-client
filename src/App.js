import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Routes';
//import { router } from './Routers/Router/Router';

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;




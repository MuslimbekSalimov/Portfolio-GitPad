import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { Provider} from './Components/Context/useTheme';
import { Provider as Localization } from './Components/Context/Localization';

const PUBLISHABLE_KEY =
  "pk_test_Z29sZGVuLWtvYWxhLTQyLmNsZXJrLmFjY291bnRzLmRldiQ";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Localization>
           <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
               <App />
          </ClerkProvider>  
       </Localization>
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

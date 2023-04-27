import Router from './routes/Router.routing';
import { Auth0Provider } from '@auth0/auth0-react';
import TaskProvider from './context/TasksContext/TasksProvider';

function App() {

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
      redirect_uri: window.location.origin + "/dashboard"
    }}
    >
      <TaskProvider>
        <Router />
      </TaskProvider>
    </Auth0Provider>

  );
}

export default App;
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { BlogProvider } from './context/BlogContext';
import { UserProvider } from './context/UserContext';
import AddPage from './views/AddPage';
import AuthView from './views/AuthView';
import DetailView from './views/DetailView';
import Home from './views/Home';
import ListView from './views/ListView';
export default function App() {
  return (
    <>
      <UserProvider>
        <BlogProvider>
          <Header />
          <Switch>
            <Route path={'/auth'}>
              <AuthView />
            </Route>
            <PrivateRoute path={'/blogs/:id'}>
              <DetailView />
            </PrivateRoute>
            <PrivateRoute path={'/blogs'}>
              <ListView />
            </PrivateRoute>
            <PrivateRoute path={'/add'}>
              <AddPage />
            </PrivateRoute>
            <Route path={'/'}>
              <Home />
            </Route>
          </Switch>
        </BlogProvider>
      </UserProvider>
    </>
  );
}

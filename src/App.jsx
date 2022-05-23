import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
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
            <Route path={'/blogs/:id'}>
              <DetailView />
            </Route>
            <Route path={'/blogs'}>
              <ListView />
            </Route>
            <Route path={'/add'}>
              <AddPage />
            </Route>
            <Route path={'/'}>
              <Home />
            </Route>
          </Switch>
        </BlogProvider>
      </UserProvider>
    </>
  );
}

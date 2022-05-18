import { Route, Switch } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import AddPage from './views/AddPage';
import Auth from './views/Auth';
import DetailView from './views/DetailView';
import Home from './views/Home';
import ListView from './views/ListView';
export default function App() {
  return (
    <>
      <BlogProvider>
        <Switch>
          <Route path={'/auth'}>
            <Auth />
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
    </>
  );
}

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { hot } from 'react-hot-loader/root';

import type { ReactElement } from 'react';

import { useSelector, useDispatch } from 'hooks/store';
import { setLoading } from 'reducers/global';

import store from './store';
import routes from './routes';

const i18nInstance = i18next.createInstance();

const Container = (): ReactElement => {
  const content = useRoutes(routes);
  const loading = useSelector((state: State) => state.global.loading);
  const dispatch = useDispatch();

  // mock loading
  setTimeout(() => {
    dispatch(setLoading(false));
  }, 3000);

  return <div>{loading ? 'loading...' : content}</div>;
};

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18nInstance}>
        <Router>
          <Container />
        </Router>
      </I18nextProvider>
    </Provider>
  );
};

export default hot(App);

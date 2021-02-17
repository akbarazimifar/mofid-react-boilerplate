import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ErrorBoundary } from '@sentry/react';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';

import './app.less';

// Layout
import MainLayout from '@layouts/main-layout';

// Pages
const Samples = lazy(() => import('./pages/samples'));

function FallbackComponent() {
  return <div>An error has occured.</div>;
}

function App() {
  return (
    <>
      <Helmet>
        <title>Mofid React Boilerplate</title>
      </Helmet>
      <ErrorBoundary fallback={FallbackComponent}>
        {/* AntDesign Config Provider */}
        <ConfigProvider locale={faIR} direction="rtl">
          <Suspense fallback="">
            <Router>
              <MainLayout>
                <Switch>
                  <Route path="/samples" component={Samples} />
                  <Route render={() => <Redirect to="samples" />} />
                </Switch>
              </MainLayout>
            </Router>
          </Suspense>
        </ConfigProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;

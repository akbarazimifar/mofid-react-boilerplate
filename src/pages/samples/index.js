import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Layout
import SamplesLayout from '@layouts/SamplesLayout';

const Login = lazy(() => import('@pages/samples/Login'));

const index = () => (
  <Suspense fallback="Loading...">
    <SamplesLayout>
      <Switch>
        <Route path="/samples/login" component={Login} />
        <Route render={() => <Redirect to="/samples/login" />} />
      </Switch>
    </SamplesLayout>
  </Suspense>
);

export default index;

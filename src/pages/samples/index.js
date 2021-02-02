import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Layout
import SamplesLayout from '@layouts/SamplesLayout';

const LoginForm = lazy(() => import('@pages/samples/forms/LoginForm'));
const DateForm = lazy(() => import('@pages/samples/forms/DateForm'));

const index = () => (
  <Suspense fallback="Loading...">
    <SamplesLayout>
      <Switch>
        <Route path="/samples/forms/login" component={LoginForm} />
        <Route path="/samples/forms/date" component={DateForm} />
        <Route render={() => <Redirect to="/samples/forms/login" />} />
      </Switch>
    </SamplesLayout>
  </Suspense>
);

export default index;

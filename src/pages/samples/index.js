import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Route
import { SampleRoutes } from '@constants/routes';

// Layout
import SamplesLayout from '@layouts/samples-layout';

const LoginForm = lazy(() => import('@pages/samples/forms/login-form'));
const RHFLoginForm = lazy(() => import('@pages/samples/forms/rhf-login-form'));
const DateForm = lazy(() => import('@pages/samples/forms/date-form'));
const CustomizedButton = lazy(() =>
  import('@pages/samples/components/customized-button')
);

const index = () => (
  <Suspense fallback="Loading...">
    <SamplesLayout>
      <Switch>
        <Route path="/samples/forms/login" component={LoginForm} />
        <Route path="/samples/forms/rhf-login" component={RHFLoginForm} />
        <Route path="/samples/forms/date" component={DateForm} />

        <Route
          path="/samples/components/customized-button"
          component={CustomizedButton}
        />
        <Route
          render={() => (
            <Redirect to={`/samples/${SampleRoutes[0].subRoutes[0].route}`} />
          )}
        />
      </Switch>
    </SamplesLayout>
  </Suspense>
);

export default index;

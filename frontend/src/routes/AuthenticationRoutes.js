import React, { lazy } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from '../ui-component/Loadable';

// project imports
import MinimalLayout from './../layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/authentication/Login')));
const AuthRegisterEnterprise = Loadable(lazy(() => import('../views/pages/authentication/authentication/Register')));
const AuthRegisterStudent = Loadable(lazy(() => import('../views/pages/authentication/authentication/Register')));
const AuthRegisterEmployee = Loadable(lazy(() => import('../views/pages/authentication/authentication/Register')));
const AuthSignup = Loadable(lazy(() => import('../views/pages/authentication/authentication/Signup')));
const JobOffers = Loadable(lazy(() => import('../views/job-offers')));

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//
function mapStateToProps(state) {
    return { isAuthenticated: !!state.auth.token };
}

const AuthenticationRoutes = (props) => {
    const location = useLocation();

    if (props.isAuthenticated) {
        return <Redirect to="/dashboard/default" />
    }

    return (
        <Route path={['/login', '/signup', '/register/c', '/register/s', '/register/e', '/jobs']}>
            <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/login" component={AuthLogin} />
                    <Route path="/signup" component={AuthSignup} />
                    <Route path="/register/c" component={AuthRegisterEnterprise} />
                    <Route path="/register/s" component={AuthRegisterStudent} />
                    <Route path="/register/e" component={AuthRegisterEmployee} />
                    <Route path="/jobs" component={JobOffers} />
                </Switch>
            </MinimalLayout>
        </Route>
    );
};

export default connect(mapStateToProps)(AuthenticationRoutes);

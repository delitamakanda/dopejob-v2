import React, { lazy } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

const JobOffers = Loadable(lazy(() => import('../views/job-offers')));
const AccountSettings = Loadable(lazy(() => import('../views/account-settings')));
const MyMessages = Loadable(lazy(() => import('../views/my-messages')));
const MyOffers = Loadable(lazy(() => import('../views/my-offers')));
const Notifications = Loadable(lazy(() => import('../views/notifications')));
const SocialProfile = Loadable(lazy(() => import('../views/social-profile')));


//-----------------------|| MAIN ROUTING ||-----------------------//
function mapStateToProps(state) {
    return { isAuthenticated: !!state.auth.token };
}

const MainRoutes = (props) => {
    const location = useLocation();

    if (!props.isAuthenticated) {
        return <Redirect to="/login" />
    }


    return (
        <Route
            path={[
                '/dashboard/default',

                '/dashboard/jobs',
                '/user/account-settings',
                '/user/social-profile',
                '/user/messages',
                '/user/notifications',
                '/user/offers',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',

                '/sample-page'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />

                    <Route path="/dashboard/jobs" component={JobOffers} />
                    <Route path="/user/account-settings" component={AccountSettings} />
                    <Route path="/user/social-profile" component={SocialProfile} />
                    <Route path="/user/messages" component={MyMessages} />
                    <Route path="/user/notifications" component={Notifications} />
                    <Route path="/user/offers" component={MyOffers} />

                    <Route path="/utils/util-typography" component={UtilsTypography} />
                    <Route path="/utils/util-color" component={UtilsColor} />
                    <Route path="/utils/util-shadow" component={UtilsShadow} />
                    <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                    <Route path="/icons/material-icons" component={UtilsMaterialIcons} />

                    <Route path="/sample-page" component={SamplePage} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default connect(mapStateToProps)(MainRoutes);

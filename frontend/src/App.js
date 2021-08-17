import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

import { IntlProvider } from 'react-intl';

import * as authActions from './store/actions/auth';

function loadLocaleData(locale) {
    switch (locale) {
        case 'en':
            return import('./utils/locales/en.json');
        default:
            return import('./utils/locales/fr.json');
    }
}

function mapStateToProps(state) {
    return { isAuthenticated: !!state.auth.token };
}

function mapDispatchToProps(dispatch) {
    return { onTryAutoSignup: () => dispatch(authActions.authCheckState()) };
}

//-----------------------|| APP ||-----------------------//

const App = () => {
    const customization = useSelector((state) => state.customization);
    const [messages, setMessages] = useState();
    const dispach = useDispatch((props) => props.onTryAutoSignup());

    useEffect(() => {

        loadLocaleData(customization.locale).then(d => {
            setMessages(d.default);
        });
    }, [customization, dispach]);

    return (
        <React.Fragment>
            {messages && <IntlProvider
                locale='fr'
                defaultLocale="fr"
                messages={messages}
            >
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme(customization)}>
                        <CssBaseline />
                        <NavigationScroll>
                            <Routes />
                        </NavigationScroll>
                    </ThemeProvider>
                </StyledEngineProvider>
            </IntlProvider>}
        </React.Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

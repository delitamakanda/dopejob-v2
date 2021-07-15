import React from 'react';

// material-ui
import { Link, Typography, Stack } from '@material-ui/core';

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
    const copyright = new Date().getFullYear();
    const htmlFooter = { __html: `&copy; ${copyright} dopejob` };
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" component={Link} href="dopejob.herokuapp.com" target="_blank" underline="hover">
                dopejob.herokuapp.com
            </Typography>
            <Typography variant="subtitle2" component={Link} href="dopejob.herokuapp.com" target="_blank" underline="hover" dangerouslySetInnerHTML={htmlFooter}>
            </Typography>
        </Stack>
    );
};

export default AuthFooter;

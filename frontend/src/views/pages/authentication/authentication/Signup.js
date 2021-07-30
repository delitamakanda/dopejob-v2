import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core';
import { Divider, Grid, Stack, Typography, useMediaQuery, ButtonBase } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from '../../../../ui-component/Logo';
import AuthFooter from '../../../../ui-component/cards/AuthFooter';

// assets

const images = [
    {
        url: require('../../../../assets/images/student.jpg'),
        title: 'Etudiant',
        width: '100%',
        link: '/register/s'
    },
    {
        url: require('../../../../assets/images/employee.jpg'),
        title: 'Employé',
        width: '100%',
        link: '/register/e'
    },
    {
        url: require('../../../../assets/images/enterprise.jpg'),
        title: 'Entreprise',
        width: '100%',
        link: '/register/c'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

//===============================|| AUTH3 - SIGNUP ||===============================//

const Signup = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <RouterLink to="#">
                                            <Logo />
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Sign up
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={"container signup" + classes.root}>
                                            {images.map((image, idx) => (
                                                <RouterLink to={image.link}
                                                    key={idx}>
                                                    <ButtonBase
                                                        focusRipple
                                                        key={image.title}
                                                        className={classes.image}

                                                        focusVisibleClassName={classes.focusVisible}
                                                        style={{
                                                            width: image.width
                                                        }}
                                                    >
                                                        <span
                                                            className={classes.imageSrc}
                                                            style={{
                                                                backgroundImage: `url(${image.url})`,
                                                            }}
                                                        />
                                                        <span className={classes.imageBackdrop} />
                                                        <span className={classes.imageButton}>
                                                            <Typography
                                                                component="span"
                                                                variant="subtitle1"
                                                                color="inherit"
                                                                className={classes.imageTitle}
                                                            >
                                                                {image.title}
                                                                <span className={classes.imageMarked} />
                                                            </Typography>
                                                        </span>
                                                    </ButtonBase>
                                                </RouterLink>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={RouterLink}
                                                to="/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Signup;

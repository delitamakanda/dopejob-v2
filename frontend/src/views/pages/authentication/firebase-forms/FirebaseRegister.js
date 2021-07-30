import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { authEnterpriseSignup, authStudentSignup, authEmployeeSignup } from '../../../../store/actions/auth';
import { jobListURL, facultyListURL, cursusListURL } from '../../../../api/constants';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from './../../../../ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from '../../../../utils/password-strength';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: theme.palette.grey[100] + ' !important',
        color: theme.palette.grey[900] + '!important',
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}));

//===========================|| FIREBASE - REGISTER ||===========================//
function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
        statusText: state.auth.statusText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signupEmployee: (username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, office, faculty, job) => dispatch(authEmployeeSignup(username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, office, faculty, job)),
        signupStudent: (username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, year, cursus, faculty) => dispatch(authStudentSignup(username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, year, cursus, faculty)),
        signupEnterprise: (username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, logo, office, company_url, address, description) => dispatch(authEnterpriseSignup(username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, logo, office, company_url, address, description))
    };
}

const FirebaseRegister = (props, { ...others }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const location = useLocation();
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);
    const [usage, setUsage] = useState('');

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState('');

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [options, setOptions] = useState([]);
    const [options2, setOptions2] = useState([]);
    const [options3, setOptions3] = useState([]);
    const loading = open && options.length === 0;
    const loading2 = open2 && options2.length === 0;
    const loading3 = open3 && options3.length === 0;

    const dispatch = useDispatch();

    const handleSignup = (values) => {
        switch (usage) {
            case 'student':
                dispatch(authStudentSignup(values.username, values.email, values.password1, values.password2, values.last_name, values.first_name, values.birth_date, values.home_phone_number, values.mobile_phone_number, values.year, values.cursus, values.faculty))
                break;
            case 'employee':
                dispatch(authEmployeeSignup(values.username, values.email, values.password1, values.password2, values.last_name, values.first_name, values.birth_date, values.home_phone_number, values.mobile_phone_number, values.office, values.faculty, values.job))
                break;
            case 'enterprise':
                dispatch(authEnterpriseSignup(values.username, values.email, values.password1, values.password2, values.last_name, values.first_name, values.birth_date, values.home_phone_number, values.mobile_phone_number, values.logo, values.office, values.company_url, values.address, values.description))
                break;

            default:
                break;
        }
    }

    const displayFormsByUsage = () => {
        switch (location.pathname) {
            case '/register/s':
                setUsage('student');
                break;
            case '/register/c':
                setUsage('enterprise');
                break;
            case '/register/e':
                setUsage('employee');
                break;

            default:
                break;
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        displayFormsByUsage();
    });

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch(facultyListURL);
            const faculties = await response.json();

            if (active) {
                setOptions(Object.keys(faculties).map((key) => faculties[key]));
            }

        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        let active2 = true;

        if (!loading2) {
            return undefined;
        }

        (async () => {
            const response = await fetch(jobListURL);
            const jobs = await response.json();

            if (active2) {
                setOptions2(Object.keys(jobs).map((key) => jobs[key]));
            }

        })();

        return () => {
            active2 = false;
        };
    }, [loading2]);

    useEffect(() => {
        let active3 = true;

        if (!loading3) {
            return undefined;
        }

        (async () => {
            const response = await fetch(cursusListURL);
            const cursus = await response.json();

            if (active3) {
                setOptions3(Object.keys(cursus).map((key) => cursus[key]));
            }

        })();

        return () => {
            active3 = false;
        };
    }, [loading3]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    useEffect(() => {
        if (!open2) {
            setOptions2([]);
        }
    }, [open2]);

    useEffect(() => {
        if (!open3) {
            setOptions3([]);
        }
    }, [open3]);

    return (
        <React.Fragment>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box
                        sx={{
                            mb: 2
                        }}
                    >
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password1: '',
                    password2: '',
                    last_name: '',
                    first_name: '',
                    birth_date: '',
                    home_phone_number: '',
                    mobile_phone_number: '',
                    /*year: '',
                    cursus: '',
                    faculty: '',
                    
                    // employee
                    job: '',

                    // enterprise
                    logo: '', 
                    office: '',
                    company_url: '', 
                    address: '', 
                    description: '',*/
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required('Username is required'),
                    last_name: Yup.string().max(255),
                    first_name: Yup.string().max(255),
                    home_phone_number: Yup.string().max(255),
                    mobile_phone_number: Yup.string().max(255),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password1: Yup.string().max(255).required('Password is required'),
                    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match'),
                    birth_date: Yup.string().required('Birth date is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                        handleSignup(values)
                        console.log(values)
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    value={values.first_name}
                                    name="first_name"
                                    type="text"
                                    defaultValue=""
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    inputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                    className={classes.loginInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    value={values.last_name}
                                    margin="normal"
                                    name="last_name"
                                    type="text"
                                    defaultValue=""
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    inputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                    className={classes.loginInput}
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth error={Boolean(touched.username && errors.username)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-username-register">Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-username-register"
                                type="text"
                                value={values.username}
                                name="username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.username && errors.username && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {' '}
                                    {errors.username}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {' '}
                                    {errors.email}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth error={Boolean(touched.password1 && errors.password1)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password1-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password1-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password1}
                                name="password1"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.password1 && errors.password1 && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {' '}
                                    {errors.password1}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box
                                    sx={{
                                        mb: 2
                                    }}
                                >
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                backgroundColor={level.color}
                                                sx={{
                                                    width: 85,
                                                    height: 8,
                                                    borderRadius: '7px'
                                                }}
                                            ></Box>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}

                        <FormControl fullWidth error={Boolean(touched.password2 && errors.password2)} className={classes.loginInput}>
                            <InputLabel htmlFor="outlined-adornment-password2-register">Password Confirmation</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password2-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password2}
                                name="password2"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                inputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {touched.password2 && errors.password2 && (
                                <FormHelperText error id="standard-weight-helper-text-password2-register">
                                    {' '}
                                    {errors.password2}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={Boolean(touched.birth_date && errors.birth_date)} className={classes.loginInput}>
                                    <InputLabel htmlFor="outlined-adornment-birth_date-register">Birth date</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-birth_date-register"
                                        type="date"
                                        value={values.birth_date}
                                        name="birth_date"
                                        label="Birth date"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        inputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                    />
                                    {touched.birth_date && errors.birth_date && (
                                        <FormHelperText error id="standard-weight-helper-text-birth_date-register">
                                            {' '}
                                            {errors.birth_date}{' '}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>

                            </Grid>
                        </Grid>

                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={Boolean(touched.home_phone_number && errors.home_phone_number)} className={classes.loginInput}>
                                    <InputLabel htmlFor="outlined-adornment-home_phone_number-register">Home Phone Number</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-home_phone_number-register"
                                        type="tel"
                                        value={values.home_phone_number}
                                        name="home_phone_number"
                                        label="Home Phone Number"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        inputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                    />
                                    {touched.home_phone_number && errors.home_phone_number && (
                                        <FormHelperText error id="standard-weight-helper-text-home_phone_number-register">
                                            {' '}
                                            {errors.home_phone_number}{' '}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={Boolean(touched.mobile_phone_number && errors.mobile_phone_number)} className={classes.loginInput}>
                                    <InputLabel htmlFor="outlined-adornment-mobile_phone_number-register">Home Phone Number</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-mobile_phone_number-register"
                                        type="tel"
                                        value={values.mobile_phone_number}
                                        name="mobile_phone_number"
                                        label="Mobile Phone Number"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        inputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                    />
                                    {touched.mobile_phone_number && errors.mobile_phone_number && (
                                        <FormHelperText error id="standard-weight-helper-text-mobile_phone_number-register">
                                            {' '}
                                            {errors.mobile_phone_number}{' '}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                        </Grid>

                        {usage === 'enterprise' && (
                            <FormControl>
                                enterprise
                            </FormControl>
                        )}

                        {usage === 'employee' && (
                            <FormControl>
                                employee
                            </FormControl>
                        )}

                        {usage === 'student' && (
                            <FormControl>
                                student
                            </FormControl>
                        )}

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        {errors.submit && (
                            <Box
                                sx={{
                                    mt: 3
                                }}
                            >
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        {props.statusText && (
                            <Box
                                sx={{
                                    mt: 3
                                }}
                            >
                                <FormHelperText error>{props.statusText}</FormHelperText>
                            </Box>
                        )}

                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting || props.loading || props.isAuthenticated}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseRegister);

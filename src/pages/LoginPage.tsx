
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../app/hooks';
import { loginService } from '../features/authSlice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


// Define the copyright component
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required !"),
    password: Yup.string().required("Password is required !"),
});

export default function LoginPage() {
    // Use the dispatch function from the hooks
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    // Use the navigate function from the hooks
    const navigate = useNavigate();

    // Set up the validation schema by Formik
    const validateFormik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            dispatch(loginService({
                username: values.username,
                password: values.password
            }))
                .unwrap()
                .then((res : any) => {
                    navigate('/dashboard', { replace: true });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    // Return the login page
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {t('Welcome to React')}
                            </Typography>
                            <Box component="form" onSubmit={
                                validateFormik.handleSubmit
                            } noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="off"
                                    value={validateFormik.values.username}
                                    onChange={validateFormik.handleChange}
                                    error={validateFormik.touched.username && Boolean(validateFormik.errors.username)}
                                    helperText={validateFormik.touched.username && validateFormik.errors.username}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    value={validateFormik.values.password}
                                    onChange={validateFormik.handleChange}
                                    error={validateFormik.touched.password && Boolean(validateFormik.errors.password)}
                                    helperText={validateFormik.touched.password && validateFormik.errors.password}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disableElevation
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
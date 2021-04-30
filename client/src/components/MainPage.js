import React, { useState, Fragment } from 'react';
import { Snackbar, Container } from '@material-ui/core'
import UrlForm from './urlForm'
import { Alert } from '@material-ui/lab'

const MainPage = () => {
    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState({
        severity: "",
        message: ""
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const handleAlert = (severity, message) => {
        setAlertInfo({
            severity: severity,
            message: message
        })
        setOpen(true)
    }

    return(
        <Fragment>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert variant="filled" onClose={handleClose} severity={alertInfo.severity}>
                    {alertInfo.message}
                </Alert>
            </Snackbar>
            <Container>
                <h1>Vault</h1>
                <h3>Anonymous URL Shortening for one-time links</h3>
                <UrlForm setSnackbar={handleAlert} />
            </Container>
        </Fragment>
    );
}

export default MainPage;
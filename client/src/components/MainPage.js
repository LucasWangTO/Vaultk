import React, { useState, useEffect, Fragment } from 'react';
import { Snackbar, Container } from '@material-ui/core'
import UrlForm from './urlForm'
import LinkCounter from './LinkCounter'
import { Alert } from '@material-ui/lab'

const MainPage = () => {
    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState({
        severity: "",
        message: ""
    })
    const [counter, setCounter] = useState({
        start: 0,
        end: 0
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

    const handleCounter = (newEnd) => {
        setCounter({
            start: counter.end,
            end: newEnd
        })
    }

    useEffect(() => {
        fetch('https://vaultk.herokuapp.com/api/count')
        .then(response => response.text())
        .then(data => setCounter({
            start: 0,
            end: Number(data)
        }))
    }, [])

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
                <UrlForm setSnackbar={handleAlert} setCounter={handleCounter} />
                <LinkCounter start={counter.start} end={counter.end} />
            </Container>
        </Fragment>
    );
}

export default MainPage;
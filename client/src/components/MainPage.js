import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container'
import UrlForm from './urlForm'

const MainPage = () => {
    return(
        <Fragment>
            <Container>
                <h1>Vault</h1>
                <h3>Anonymous URL Shortening for one-time links</h3>
                <UrlForm />
            </Container>
        </Fragment>
    );
}

export default MainPage;
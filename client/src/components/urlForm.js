import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ShortUrl from './ShortUrl';
import CustomText from './CustomText'
import { Button, Grid } from '@material-ui/core';

// Basic URL Validation
function valid_url(url) {
    let lowerUrl = url.toLowerCase();
    let validUrl = url;
    if (!(lowerUrl.startsWith("http://") || lowerUrl.startsWith("https://"))) {
        validUrl = "http://".concat(url);
    }
    if (url.includes('.')) {
        return validUrl;
    }
    return "";
}

// JSX Component for inputting URL to shorten
const UrlForm = () => {
    const [currentUrl, setCurrentUrl] = useState('')
    const [urls, setUrls] = useState([])

    const handleChange = (event) => {
        setCurrentUrl(event.target.value)
    }

    const handleSubmitUrl = (event) => {
        event.preventDefault()
        let validUrl = valid_url(currentUrl)
        if (validUrl) {
            setUrls([{id: nanoid(), link: validUrl, displayLink: currentUrl}, ...urls])
            setCurrentUrl('')
        } else {
            alert("URL is not valid!");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitUrl}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={9}>
                        <CustomText label="Enter URL" value={currentUrl} size="small" onChange={handleChange} isDisabled={false}/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button variant="contained" color="primary" type="submit" size="large" style={{width: "100%"}}>Shorten</Button>
                    </Grid>
                </Grid>
            </form>
            <div style={{marginTop: "1.5rem", marginBottom: "2rem"}}>
                {urls.map(url => <ShortUrl key={url.id} url={url.link} displayUrl={url.displayLink} />)}
            </div>
        </div>
    )
}

export default UrlForm;
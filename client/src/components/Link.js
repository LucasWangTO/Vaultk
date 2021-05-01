import React, {Fragment} from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import CustomText from './CustomText'

const Link = (props) => {
    if (props.isLink) {
        return (
            <Grid item xs={12} sm={8} >
                <Typography variant="h6" style={{textAlign: "center"}}>
                    vaul.tk/{props.url}
                </Typography>
            </Grid>
        )
    } else {
        return (
            <Fragment>
                <Grid item xs={3} sm={2} style={{textAlign: "right"}}>
                    <Typography variant="h6">
                        vaul.tk/
                    </Typography>
                </Grid>
                <Grid item xs={9} sm={4}>
                    <CustomText label="Ending" value={props.url} size="small" isDisabled={props.isDisabled} onChange={props.handleChange} style={{width: "100%"}} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="primary" type="submit" disabled={props.isDisabled} style={{width: "100%"}}>Confirm</Button>
                </Grid>
            </Fragment>
        )
    }
}

export default Link;
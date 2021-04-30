import React from 'react';
import { TextField, useTheme, useMediaQuery } from '@material-ui/core';

const CustomText = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const width = isSmallScreen ? "100%" : "96%";
    return <TextField variant="outlined" disabled={props.isDisabled} label={props.label} value={props.value} size={props.size} onChange={props.onChange} style={{width: width, float: "left"}}/>;
}

export default CustomText;
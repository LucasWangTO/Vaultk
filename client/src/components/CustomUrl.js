import React from 'react';
import { Typography, useTheme, useMediaQuery } from '@material-ui/core';

const CustomUrl = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const alignment = isSmallScreen ? "center" : "left";
    return (
        <Typography variant="h6" style={{textAlign: alignment, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
            {props.displayUrl}
        </Typography>
    )
}

export default CustomUrl;
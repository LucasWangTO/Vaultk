import React from 'react'

const UrlEnding = (props) => {
    const ending = props.match.params.ending;
    fetch(`http://localhost:3001/${ending}`)
     .then(response => response.text())
     .then(data => {
         window.location.replace(data);
     });
    return null;
}

export default UrlEnding;
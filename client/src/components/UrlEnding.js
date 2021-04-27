const UrlEnding = (props) => {
    const ending = props.match.params.ending;
    fetch(`https://vaultk.herokuapp.com/${ending}`)
     .then(response => response.text())
     .then(data => {
         window.location.replace(data);
     });
    return null;
}

export default UrlEnding;
const UrlEnding = (props) => {
    const ending = props.match.params.ending.toLowerCase();
    fetch(`https://vaultk.herokuapp.com/${ending}`)
     .then(response => response.text())
     .then(data => {
         window.location.replace(data);
     })
     .catch(error => {
        console.log(error);
        window.location.replace("https://vaul.tk");
     });
    return null;
}

export default UrlEnding;
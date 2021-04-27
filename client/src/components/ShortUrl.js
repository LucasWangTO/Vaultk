import React, {useState} from 'react'
import Link from './Link'

const ShortUrl = (props) => {
    const [link, setLink] = useState('')
    const [linkSuccess, setLinkSuccess] = useState(false)

    const handleChange = (event) => {
        setLink(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            url: props.url,
            ending: link
        }
        fetch('https://vaultk.herokuapp.com/api/urls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            // Check if ending already exists
            if (!response.ok) {
                if (response.status === 409) {
                    alert("Ending already exists.");
                }
                throw Error(response.statusText);
            }

            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setLinkSuccess(true)
        })
        .catch((error) => {
            console.log(error);
            setLinkSuccess(false);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label><span>{props.url}</span> vaul.tk/</label>
            <Link url={link} handleChange={handleChange} isLink={linkSuccess}/>
        </form>
    )
}

export default ShortUrl;
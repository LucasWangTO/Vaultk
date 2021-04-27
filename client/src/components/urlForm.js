import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import ShortUrl from './ShortUrl'

// JSX Component for inputting URL to shorten
const UrlForm = () => {
    const [currentUrl, setCurrentUrl] = useState('')
    const [urls, setUrls] = useState([])

    const handleChange = (event) => {
        setCurrentUrl(event.target.value)
    }

    const handleSubmitUrl = (event) => {
        event.preventDefault()
        setUrls([{id: nanoid(), link: currentUrl}, ...urls])
        setCurrentUrl('')
    }

    return (
        <div>
            <form onSubmit={handleSubmitUrl}>
                <input type="text" name="URL" placeholder="Enter URL" value={currentUrl} onChange={handleChange}/>
                <button type="submit">Shorten</button>
            </form>
            <div>
                {urls.map(url => <ShortUrl key={url.id} url={url.link} />)}
            </div>
        </div>
    )
}

export default UrlForm;
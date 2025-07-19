import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY
const ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN
import axios from 'axios'
import NotFound from "./NotFound"


function ObjectDetails() {
    const { id } = useParams()
    const [fullDetails, setFullDetails] = useState(null)
    const [hasError, setHasError] = useState(false)
    // const getimage_URL = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=' + ACCESS_TOKEN + `&object_id=${id}`
    const getDetails_URL = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getInfo&access_token=' + ACCESS_TOKEN + `&object_id=${id}`


    useEffect(() => {
        const getCoinDetail = async () => {
            try {
                const details = await axios.get(getDetails_URL)
                let response = details.data.object
                setFullDetails(response)
                setHasError(false)
            } catch (err) {
                console.error("API error:", err)
                setHasError(true)
            }
        }
        getCoinDetail()
        
    }, [id])

    if (hasError) return <NotFound />

    return (
        <div className="object-details">
            {fullDetails ? (
                <>
            < div id="gallery-text">
                <h1>{fullDetails.title}</h1>
                <img
                className="images"
                src={fullDetails.images[0].b.url}
                alt={`Image of ${fullDetails.title}`}
                />
                {fullDetails.gallery_text}
                <a target="_blank" href={fullDetails.url}>Click  here to see the full entry</a>
            </div>
            <br></br>
            <div className="details-table-container">
                <table>
                    <tbody> 
                        {fullDetails &&
                            Object.entries(fullDetails)
                            .filter(([key]) => key !== 'images' && key !== 'url' && key !== 'gallery_text' && key !== 'participants' && key !== 'label_text')
                            .map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{value ? String(value) : ''}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>
            
            </>) : (
                <h2>Loading ... </h2>
            )}
        </div>  
    )
}

export default ObjectDetails
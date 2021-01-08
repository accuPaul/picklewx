import axios from "axios"

export function FetchApi (target, locationId)
{
    const blob = process.env.REACT_APP_TESTER
    let url = "https://apidev.accuweather.com"
    let keyString = "apikey="+blob

    if (target.includes("{text}"))
        url += target.replace("{text}",locationId)
    else
        url += target.replace("{locationId}",locationId)

    if (!url.endsWith("?")) keyString = "&"+keyString

    url += keyString


        console.log("url = "+url)

        return axios.get(url) 
}
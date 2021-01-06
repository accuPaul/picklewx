import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons'
import axios from "axios";

const CitySearch = ({getQuery, getLocationId}) => {
    const  [text, setText] = useState('')
    const blob = process.env.REACT_APP_NONSENSE

    const onSubmit = async (e) => {
        e.preventDefault()
        getQuery(text)

        // Fetch the new location key for the requested city...
       const locations = await axios(
        `http://dataservice.accuweather.com/locations/v1/cities/search.json?q=${text}&apikey=${blob}&language=en-us&alias=always`
        )
        .catch(function(error) {
          console.log(error)
        })

        getLocationId(locations.data[0].Key)

    }

    return (
        <Form inline onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="cityRequest">
                <Form.Control 
                type="text" 
                placeholder="Enter City" 
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <Button variant="primary" type="submit">
                    <Search className="ml-4" />
                </Button>
            </Form.Group>
        </Form>
    )
}

export default React.memo(CitySearch)


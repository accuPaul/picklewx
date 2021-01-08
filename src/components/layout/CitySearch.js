import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons'
import { FetchApi }from '../middleware/FetchApi'
import ApiError from './ApiError'

const CitySearch = ({getQuery, getLocationId}) => {
    const  [text, setText] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        getQuery(text)

        FetchApi('/locations/v1/cities/search.json?q={text}&language=en-us&alias=always',text)
      .then(response => { getLocationId(response.data[0].Key)})
      .catch(error => {ApiError(error)})

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


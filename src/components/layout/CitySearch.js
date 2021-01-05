import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons'

const CitySearch = ({getQuery}) => {
    const  [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        getQuery(text)
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

export default CitySearch


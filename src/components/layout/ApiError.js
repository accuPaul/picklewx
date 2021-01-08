import React from 'react'

const ApiError = ({Error}) => {
    return (
        <div>
            An error occured fetching data from the api... <br />
            {Error.message}
        </div>
    )
}

export default ApiError

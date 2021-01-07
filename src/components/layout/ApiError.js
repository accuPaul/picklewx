import React from 'react'

const ApiError = ({Error}) => {
    return (
        <div>
            An error occured fetching data from the api... <br />
            {Error.data}
        </div>
    )
}

export default ApiError

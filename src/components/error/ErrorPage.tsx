import { isRouteErrorResponse, useRouteError } from 'react-router'
import Page404 from './Page404'

const ErrorPage = () => {
    const error =useRouteError()
    
    if(isRouteErrorResponse(error)){
        if(error.status ===404){
            return <Page404/>
        }
    }

    return (
        <div>
            {`Error : ${error instanceof Error ? error.message: 'unknown error'}`}
        </div>
    )
}

export default ErrorPage
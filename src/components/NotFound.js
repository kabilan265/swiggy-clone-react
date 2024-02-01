import { useRouteError } from "react-router-dom"
const NotFound = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <h1>{err.status}:{err.statusText}</h1>
    )
}
export default NotFound 
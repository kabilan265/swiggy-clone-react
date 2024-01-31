import { useRouteError } from "react-router-dom"
export default NotFound = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <h1>{err.status}:{err.statusText}</h1>
    )
}
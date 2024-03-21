import { useRouteError } from "react-router-dom";

export default function Error() {
    console.log(useRouteError());
    const { status, statusText, data } = useRouteError();
    return (
        <div className="error-details-container">
            <h1>Oops!! Something Went Wrong!</h1>
            <p className="status-code"><b>Status :</b> {status} {statusText}</p>
            <p>{data}</p>
        </div>
    )
}
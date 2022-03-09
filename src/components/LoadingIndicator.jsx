import "../styles/LoadingIndicator.css"

function LoadingIndicator() {
    return (
        <center>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </center>
    );
}

export default LoadingIndicator;
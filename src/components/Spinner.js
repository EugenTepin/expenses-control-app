import React from "react";

class Spinner extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center spinner">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>);
    }
}

export default Spinner;
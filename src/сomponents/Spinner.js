import React from "react";

class Spinner extends React.Component {
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center spinner">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>);
    }
}

export default Spinner;
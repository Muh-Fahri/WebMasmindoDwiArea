import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';


function NoData() {
    return (
        <div
            style={{
                minHeight: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <div>
                <h1 className="text-secondary">Oops!!!</h1>
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-danger fa-fade"
                    style={{ fontSize: '100px' }}
                />
                <p className="fs-5 fw-medium text-secondary">No data found, are you sure you have entered the data?</p>
            </div>
        </div>
    )
}
export default NoData;
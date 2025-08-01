import React, { useState, useEffect } from 'react';
import '../styles/ProgressBar.css'

function ProgressBar({value}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(value);
        }, 100);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
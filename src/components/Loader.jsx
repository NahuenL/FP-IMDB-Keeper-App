import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
    <div className="circular-progress">
        <CircularProgress size={ 100 } className="circular-progress-color" />
    </div>
);


export default Loader;

import React from 'react'
import { useSnackbar } from 'notistack';

const Msg = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        enqueueSnackbar('I love hooks'),
        <button onClick={handleClick}>Show snackbar</button>
    );
}
export default Msg
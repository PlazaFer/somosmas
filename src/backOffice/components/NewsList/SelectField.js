import React from 'react';
import { Select, InputLabel, FormControl, FormHelperText } from '@mui/material';


const SelectField = ({children, id, label, className, error, errorText,  ...props}) => {


    return(
        <FormControl fullWidth className={className} error={error}>
            <InputLabel id={id}>{ label }</InputLabel>
            <Select
                {...props}
                labelId={id}
                id={id}
            >
                {children}
            </Select>
            {
              error && <FormHelperText> { errorText } </FormHelperText>
            }
        </FormControl>
        
    );
};

export default SelectField;
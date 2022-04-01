import React from 'react';
import { TextField, InputLabel } from '@mui/material';


const Field = ({ label, type, name, onChange, error, helperText, value, className }) => {
    
  if(type === 'file'){
        return (
          <>
            <InputLabel>
              {label}
            </InputLabel>
            <TextField
              type={type}
              name={name}
              onChange={onChange}
              error={error}
              helperText={helperText}
              fullWidth
              className={className}
            />
            </>
          );
    }else{
        return (
            <TextField
              label={label}
              type='text'
              name={name}
              onChange={onChange}
              value={value}
              error={error}
              helperText={helperText}
              fullWidth
              className={className}
            />
          );
    }

  
};

export default Field;
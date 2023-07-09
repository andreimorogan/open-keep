import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Tooltip } from '@mui/material';

export default function NoteInput() {
    return (

        <Box sx={{ '& > :not(style)': { m: 1 }}} className="p-5 flex justify-center">
            <Box className="border rounded p-2 w-full lg:w-2/4">
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    placeholder='Take a note...'
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position="start">
                                <div className='flex gap-5'>
                                    <Tooltip title="New list">
                                        <CheckBoxOutlinedIcon />
                                    </Tooltip>
                                    <Tooltip title="New note with image">
                                        <ImageOutlinedIcon />
                                    </Tooltip>
                                </div>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
        </Box>
    );
}
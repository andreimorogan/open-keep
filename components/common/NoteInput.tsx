"use client";

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

export default function NoteInput() {

    const [input, setInput] = useState({
        isActive: false,
        isList: false
    })

    const handleBlur = (e: React.FormEvent) => {
        const currentTarget = e.currentTarget;

        setTimeout(() => {
            if (!currentTarget.contains(document.activeElement)) {
                setInput({...input, isActive: false})
            }
        }, 0);
    };

    return (
        <>
            {!input.isActive ?
            <Box className="border rounded-lg w-3/4 py-2 px-4 my-6 lg:w-2/5 shadow"
                >
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
                        onFocus={() => setInput({ ...input, isActive: true })}
                    />
                </Box>
                : 
                <Box className="border rounded-lg w-3/4 py-2 px-4 my-6 lg:w-2/5" onBlur={handleBlur}>
                    <TextField
                        className='mt-1'
                        fullWidth
                        id="input-with-icon-textfield"
                        placeholder='Title'
                        InputProps={{
                            disableUnderline: true
                        }}
                        variant="standard"
                    />
                    <TextField
                        className='mt-2'
                        fullWidth
                        sx={{
                            '& input::placeholder': {
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem'
                            },
                        }}
                        id="input-with-icon-textfield"
                        placeholder='Take a note...'
                        InputProps={{
                            disableUnderline: true
                        }}
                        variant="standard"
                    />
                </Box>
                }

        </>

    );
}
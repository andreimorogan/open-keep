"use client";

import { Avatar, Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Topbar = () => {
    return (
        <Box className="w-full flex items-center">
            <div
                className="flex items-center rounded p-2 mb-1 w-full sm:w-3/4 mr-2"
                style={{ backgroundColor: '#525356' }}
            >
                <SearchIcon sx={{ mr: 1 }} />
                <InputBase
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{ color: 'inherit   ', width: '100%' }}
                />
            </div>
            <div className="flex items-center ml-auto gap-5">
                <SettingsOutlinedIcon />
                <Avatar
                    src="https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
                    sx={{ marginLeft: 'auto' }} /
                >
            </div>

        </Box>
    )
}

export default Topbar;
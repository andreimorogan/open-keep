"use client";

import { Avatar, Box, InputBase, Tooltip } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import Settings from "./Settings";


const Topbar = () => {
   
    return (
        <Box className="w-full flex items-center mt-2 sm:mt-0">
            <div
                className="flex items-center rounded p-2 mb-1 w-full sm:w-2/4 mr-2"
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
                <Settings />
                <Tooltip title="Account">
                    <Avatar
                        src="https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
                        sx={{ marginLeft: 'auto' }} /
                    >
                </Tooltip>
            </div>

        </Box>
    )
}

export default Topbar;
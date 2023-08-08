import { Avatar, Box, Fade, InputBase, Tooltip } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import React from "react";
import Settings from "./Settings";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

const Topbar = () => {

    const checkedNotes = useSelector((state: RootState) => state.checkedNotes.list);

    return (
        <>
            {checkedNotes.length > 0 && (
                <Fade in={checkedNotes.length > 0} timeout={200}>

                    <div
                        className="w-full flex items-center mt-2 sm:mt-0"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            zIndex: 1,
                        }}
                    >
                        <Box className="w-full flex items-between">
                            <div
                                className="flex items-center rounded p-2 mb-1 w-full lg:w-2/4 mr-2"
                                style={{ backgroundColor: '#525356' }}
                            >
                                <ClearIcon sx={{ mr: 1 }} />
                                <DeleteIcon sx={{ mr: 1 }} />
                            </div>
                        </Box>
                    </div>
                </Fade>

            )}

            <Box className="w-full flex items-center mt-2 sm:mt-0">
                <div
                    className="flex items-center rounded p-2 mb-1 w-full lg:w-2/4 mr-2"
                    style={{ backgroundColor: '#525356' }}
                >
                    <SearchIcon sx={{ mr: 1 }} />
                    <InputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ color: 'inherit', width: '100%' }}
                    />
                </div>
                <div className="flex items-center ml-auto gap-5">
                    <Settings />
                    <Tooltip title="Account">
                        <Avatar
                            src="https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
                            sx={{ marginLeft: 'auto' }}
                        />
                    </Tooltip>
                </div>
            </Box>
        </>
    );
}

export default Topbar;

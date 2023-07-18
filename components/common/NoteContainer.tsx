import { Grid } from "@mui/material";
import React from "react";

type NoteContainerProps = {
    children: React.ReactNode;
};

const NoteContainer: React.FC<NoteContainerProps> = ({ children }) => {
    return (
        <Grid container spacing={2}>
            {React.Children.map(children, (child) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
};

export default NoteContainer;

import { Box, Typography } from "@mui/material"
import React from "react"

type NoteCardProps = {
    title?: string,
    content?: string
}

const NoteCard: React.FC<NoteCardProps> = ({
    title,
    content
}) => {
    return (
        <Box className="rounded border p-4 flex flex-col">
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography sx={{ overflowWrap: 'break-word'}}>
                {content}
            </Typography>
        </Box>
    )
}

export default NoteCard
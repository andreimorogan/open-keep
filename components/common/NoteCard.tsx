import { Box, Typography } from "@mui/material"
import React from "react"

type NoteCardProps = {
    title?: string
}

const NoteCard: React.FC<NoteCardProps> = ({
    title
}) => {
    return (
        <Box className="rounded border p-4">
            <Typography variant="h6">
                Test
            </Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptates temporibus maiores numquam delectus dignissimos excepturi, pariatur exercitationem aliquid expedita dolorum, laboriosam tenetur voluptas cum laudantium, quaerat error fugiat. Neque?
        </Box>
    )
}

export default NoteCard
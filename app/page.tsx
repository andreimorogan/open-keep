"use client";

import NoteCard from "@/components/common/NoteCard";
import NoteContainer from "@/components/common/NoteContainer";
import NoteInput from "@/components/common/NoteInput";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

type Notes = {
  error?: string,
  data: {
    note_id: number,
    user_id: number,
    title: string,
    content: string
  }[],
  count?: number,
  status: number,
  statusText: string
}


const Home = () => {

  const [notes, setNotes] = useState<Notes>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadNotes = async () => {
    try {
      const response = await fetch(`/api/notes`);
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      const loadedNotes: Notes = await response.json(); 
      setNotes(loadedNotes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NoteInput />
        {loading ?
          <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%' }} />
          :
          <NoteContainer>
            {notes?.data.map((note) => (
              <NoteCard
                key={note.user_id}
                title={note.title}
                content={note.content}
              />
            ))}
          </NoteContainer>
        }
      </div>
    </>
  );
}

export default Home

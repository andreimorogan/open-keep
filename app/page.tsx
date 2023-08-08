"use client";

import NoteCard from "@/components/common/NoteCard";
import NoteContainer from "@/components/common/NoteContainer";
import NoteInput from "@/components/common/NoteInput";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { setCheckedNotes } from "./redux/checkedNotesReducer";

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
};

const Home = () => {

  const checkedNotes = useSelector((state: RootState) => state.checkedNotes.list);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState<Notes>();

  const [loading, setLoading] = useState<boolean>(true);

  const onCardCheck = (id: number) => {
    const updatedCheckedNotes = checkedNotes.includes(id)
      ? checkedNotes.filter(noteId => noteId !== id)
      : [...checkedNotes, id];

    dispatch(setCheckedNotes(updatedCheckedNotes));
  };

  const handleDeleteNotes = async () => {
    try {
      const queryParams = new URLSearchParams();
      checkedNotes.forEach(id => queryParams.append('ids', id.toString()));

      const response = await fetch(`/api/notes?${queryParams.toString()}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete notes');
      }
    } catch (e) {
      console.log(e);
    }
  };

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
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="cursor-pointer" onClick={() => handleDeleteNotes()}>Teeeest</div>
        <NoteInput />
        {loading ?
          <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%' }} />
          :
          <NoteContainer>
            {notes?.data.map((note) => (
              <NoteCard
                key={note.user_id}
                note={note}
                onCardCheck={onCardCheck}
              />
            ))}
          </NoteContainer>
        }
      </div>
    </>
  );
}

export default Home

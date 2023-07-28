"use client";

import NoteCard from "@/components/common/NoteCard";
import NoteContainer from "@/components/common/NoteContainer";
import NoteInput from "@/components/common/NoteInput";
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from "react";


const Home = () => {
  
  const [notes, setNotes] = useState<any>()

  const supabase = createClient('https://zpkokgnpxbrenwhtpcev.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwa29rZ25weGJyZW53aHRwY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3MDM2MjMsImV4cCI6MjAwNTI3OTYyM30.tW-gUKSJ_PUXTdXuAfVXUB_W1bAlV2kpizXv0gOjwZs')

  const loadNotes = async () => {
    try {
      const { data, error } = await supabase.from('notes').select();
      if (error) {
        throw error;
      }
      setNotes(data); // Update the 'notes' state with the fetched data
    } catch (error) {
      console.error('Error fetching data from Supabase:', error);
    }
  };

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <>
      <NoteInput />
      <NoteContainer>
        {notes?.map((note: any) => (
          <NoteCard key={note.user_id} title={note.title} content={note.content} />
        ))}
      </NoteContainer>
    </>
  );
}

export default Home

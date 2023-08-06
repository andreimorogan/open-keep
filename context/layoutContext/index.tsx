import React, { createContext, useState } from 'react';

interface CardContextType {
    checkedNotes: number[];
    onCardCheck: (id: number) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [checkedNotes, setCheckedNotes] = useState<number[]>([]);

    const onCardCheck = (id: number) => {
        setCheckedNotes((prev) => {
            if (prev.includes(id)) {
                return prev.filter(noteId => noteId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <CardContext.Provider value={{ checkedNotes, onCardCheck }}>
            {children}
        </CardContext.Provider>
    );
};

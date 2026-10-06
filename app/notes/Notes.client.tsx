'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '../../../src/components/NoteList/NoteList'; // Перевір шлях до твого компонента NoteList
import css from './Notes.module.css';

export default function NotesClient() {
  const { data: notes, isLoading, isError } = useQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(), // Функція має тягнути всі нотатки без ID
  });

  if (isLoading) return <p>Завантаження списку нотаток... ⏳</p>;
  if (isError || !notes) return <p>Помилка завантаження 🤷‍♂️</p>;

  return (
    <div className={css.container}>
      {/* Передаємо отриманий масив нотаток у твій компонент */}
      <NoteList notes={notes.notes} /> 
    </div>
  );
}
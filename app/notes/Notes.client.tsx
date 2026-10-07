'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList'; 
import css from './Notes.module.css';
import { useState } from 'react'; 
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';



export default function NotesClient() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: notes, isLoading, isError } = useQuery({
    queryKey: ['notes', page, searchQuery],
    queryFn: () => fetchNotes({ page, search: searchQuery }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !notes) return <p>Ooops! Error loading...</p>;

  return (
    <div className={css.container}>
    
      {/* 📦 Наша нова поличка для верхнього меню */}
      <div className={css.controls}>
        <SearchBox onChange={setSearchQuery} />
      
        <Pagination
          currentPage={page}
          totalPages={notes.totalPages}
          onPageChange={setPage}
        />
      
        <button className={css.createButton} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
      </div>

      <NoteList notes={notes.notes} />
    
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
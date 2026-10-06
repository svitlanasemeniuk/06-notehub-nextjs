import axios from 'axios';
import type { Note } from '../types/note'; 

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

// Це твій "розумний" клієнт
const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (page: number = 1, search: string = ''): Promise<FetchNotesResponse> => {
  // Використовуємо api.get і забираємо результат із властивості .data
  const response = await api.get<FetchNotesResponse>(`/notes?page=${page}&perPage=12&search=${search}`);
  return response.data;
};

export const createNote = async (newNote: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> => {
  const response = await api.post<Note>('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

export async function fetchNoteById(id: string): Promise<Note> {
    // Також змінили fetch на api.get і додали типізацію повернення
    const response = await api.get<Note>(`/notes/${id}`);
    return response.data;
}
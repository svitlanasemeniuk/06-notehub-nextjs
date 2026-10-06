import axios from 'axios';
import type { Note } from '../app/types/note'; 

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

//export const fetchNotes = async (page: number = 1, search: string = ''): Promise<FetchNotesResponse> => {
  // Використовуємо api.get і забираємо результат із властивості .data
  //const response = await api.get<FetchNotesResponse>(`/notes?page=${page}&perPage=12&search=${search}`);
  //return response.data;
//};

export const fetchNotes = async (page: number = 1, search: string = ''): Promise<FetchNotesResponse> => {
  // Тимчасова заглушка для перевірки списку нотаток
  return {
    notes: [
      { 
        id: '1', 
        title: 'Моя перша ідеальна нотатка', 
        content: 'Бекенд тимчасово відпочиває, але мій фронтенд працює бездоганно!', 
        tag: 'React Pro', 
        createdAt: '2026-10-06',
        updatedAt: '2026-10-06' // 👈 Додаємо обов'язкове поле
      },
      { 
        id: '2', 
        title: 'Магія CSS-модулів', 
        content: 'Перевіряю, як працює сітка карток на головній сторінці.', 
        tag: 'Design', 
        createdAt: '2026-10-06',
        updatedAt: '2026-10-06' // 👈 Додаємо обов'язкове поле
      },
      { 
        id: '3', 
        title: 'Робота з TanStack Query', 
        content: 'Дані підтягуються миттєво завдяки мокам.', 
        tag: 'FullStack', 
        createdAt: '2026-10-05',
        updatedAt: '2026-10-06' // 👈 Додаємо обов'язкове поле
      }
    ],
    totalPages: 1
  };
};

  // Оригінальний запит ховаємо до кращих часів:
  // const response = await api.get<FetchNotesResponse>(`/notes?page=${page}&perPage=12&search=${search}`);
  // return response.data;
//};

export const createNote = async (newNote: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> => {
  const response = await api.post<Note>('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

//export async function fetchNoteById(id: string): Promise<Note> {
    // Також змінили fetch на api.get і додали типізацію повернення
    //const response = await api.get<Note>(`/notes/${id}`);
    //return response.data;
//}//

export async function fetchNoteById(id: string) {
  // Тимчасова заглушка для перевірки верстки
  return {
    id: id,
    title: 'Моя перша ідеальна нотатка',
    content: 'Бекенд тимчасово відпочиває, але мій фронтенд працює бездоганно! Тут я можу перевірити, як круто застосовуються мої CSS-модулі.',
    tag: 'React Pro',
    createdAt: '2026-10-06'
  };
  
  // Оригінальний код закоментовано до кращих часів:
  // const response = await api.get(`/notes/${id}`);
  // return response.data;
}


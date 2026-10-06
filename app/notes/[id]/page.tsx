import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';

export default async function NoteDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // У нових версіях Next.js params є асинхронними
  const { id } = await params; 
  
  const queryClient = new QueryClient();

  // Завантажуємо дані на сервері
  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  // Передаємо гідратований стан клієнту
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
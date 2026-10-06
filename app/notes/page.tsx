import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api'; 

export default async function Home() {
    const queryClient = new QueryClient();

  // 2. Попередньо завантажуємо дані на сервері
    await queryClient.prefetchQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(),
    });

  // 3. Передаємо стан на клієнт за допомогою dehydrate
    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient />
    </HydrationBoundary>
    );
}
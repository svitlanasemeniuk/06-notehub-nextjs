'use client'; // 👈 МАГІЯ ТУТ: Кажемо Next.js, що це клієнтський код!

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export const TanStackProvider = ({ children }: { children: React.ReactNode }) => {
    // Зберігаємо QueryClient у стані, щоб він не створювався наново при кожному рендері
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
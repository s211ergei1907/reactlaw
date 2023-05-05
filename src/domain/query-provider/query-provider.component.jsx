import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const QueryProvider = ({ children }) => {
    const onQueryError = error => {
        // if (error instanceof GlobalError && GLOBAL_MODAL_ERROR_CODES.includes(error.code)) {
        //     // addError(error);
        // }
    };

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 3000,
                retry: false,
                onError: onQueryError
            },
            mutations: {
                onError: onQueryError
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
            {children}
        </QueryClientProvider>
    );
};

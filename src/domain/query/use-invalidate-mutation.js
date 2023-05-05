import { useMutation, useQueryClient } from 'react-query';

export const useInvalidateMutation = ({ mutationFn, options, invalidateKeys }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,
        ...options,
        onSuccess: (...params) => {
            invalidateKeys?.map(key =>
                queryClient.invalidateQueries({ queryKey: Array.isArray(key) ? key : [key] })
            );

            options?.onSuccess?.(...params);
        }
    });
};

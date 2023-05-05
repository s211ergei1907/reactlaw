import { Api } from '../../domain/axios/api';
import { useInvalidateMutation } from '../../domain/query/use-invalidate-mutation';

const execute = async ({ name, surname, fatherland, email, phone, password }) => {
    const { data } = await Api.post('todos/', {
        name,
        surname,
        email,
        fatherland,
        phone,
        password
    });

    return data;
};

export const useRegistrationMutation = (invalidateKeys = []) =>
    useInvalidateMutation({ mutationFn: execute, invalidateKeys });

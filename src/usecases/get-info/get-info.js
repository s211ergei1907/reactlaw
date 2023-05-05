import { QUERY_KEYS } from '../../domain/query/query-keys';
import { Api } from '../../domain/axios/api';
import { useQuery } from 'react-query';

const execute = async () => {
    const { data } = await Api.get('todos/1');
    return data;
};

export const useGetInfo = () => useQuery([QUERY_KEYS.GET_INFO_QUERY], execute);

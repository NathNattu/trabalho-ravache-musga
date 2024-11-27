import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8080/api';

// Função para buscar os dados
const fetchData = async () => {
    const response = await axios.get(API_URL + '/disc');
    return response;
};

// Hook personalizado para buscar os dados dos discos
export function useDiscData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['disc-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data // Extrai os dados diretamente do Axios
    };
}

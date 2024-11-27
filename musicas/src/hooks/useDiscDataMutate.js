import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8080/api';

// Função para postar os dados
const postData = async (data) => {
    const response = await axios.post(API_URL + '/disc', data);
    return response;
};

// Hook personalizado para mutação de dados dos discos
export function useDiscDataMutate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['disc-data']); // Invalida o cache da query para obter dados atualizados
        }
    });

    return mutate;
}

import Http from "@/Http";

const URL_API_ESTADOS = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
export default {
    async getEstados() {
        return Http.get(URL_API_ESTADOS);
    }
};

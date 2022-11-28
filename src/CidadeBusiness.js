import Http from "@/Http"

const URL_API_CIDADES = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";
export default {
    async getCidades() {
        return Http.get(URL_API_CIDADES);
    },
};



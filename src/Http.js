import axios from 'axios'

const httpDefaults = {
    timeout: 15000,
    withCredentials: false,
};

const callBackRejectConnections = (error) => {
    console.log(error);
    console.log("Call back para requisições rejeitadas pelo servidor.")
    return Promise.reject(error);
}

const httpBusiness = axios.create(httpDefaults);

httpBusiness.interceptors.request.use(config => {
    console.log("Interceptador para requisições");
    return config
});

httpBusiness.interceptors.response.use(response => {
    console.log("Interceptador para respostas");
    return response.data;
}, callBackRejectConnections);

export default httpBusiness;
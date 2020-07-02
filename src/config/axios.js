import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://listado-productos-app.herokuapp.com/'
});

export default clienteAxios;
// apiService.js
import axios from 'axios';

export async function fazerLogin(email, senha) {
  try {
    const response = await axios.post('https://hackathon.epuredigital.com.br/api/login', null, {
      params: {
        email: email,
        password: senha
      }
    });
    const token = response.data.token;
    // Armazenar o token JWT
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
}
 
export async function fazerConsulta() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('https://hackathon.epuredigital.com.br/api/sua-rota', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer consulta:', error);
    throw error;
  }
}

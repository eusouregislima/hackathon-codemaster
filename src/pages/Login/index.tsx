import React, { useState } from 'react';
import { fazerLogin } from '../services/apiService/apiService'; // Importe o serviço de API conforme necessário

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleLogin = async () => {
    try {
      const token = await fazerLogin(email, senha);
      console.log('Token JWT:', token);

    } catch (error) {
      console.error('Erro:', error);
      setMensagemErro('Erro ao fazer login. Por favor, verifique suas credenciais.');
    }
  };

  const handleEsqueciSenha = () => {
    console.log('Esqueci a senha');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Login</h2>
        {mensagemErro && <p>{mensagemErro}</p>}
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
          />

          <button
            type="button"
            onClick={handleLogin}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
        </form>
        <p><a href="#" onClick={handleEsqueciSenha}>Esqueci minha senha</a></p>
      </div>
    </div>
  );
}

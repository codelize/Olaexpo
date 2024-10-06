import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            console.log("Tentando login com:", username, password); // Log de depuração

            if (username === 'meuUsuario' && password === 'minhaSenha123') {
                const userData = { username };
                await AsyncStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                console.log("Login bem-sucedido:", userData); // Log de sucesso
                return true;
            } else {
                console.log("Login falhou. Credenciais inválidas.");
                return false;
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
            return false;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.error('Erro ao fazer logout', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Dilma');
        }, 1000);
    });

    const handleLogOut = useCallback(() => {
        console.log('Logout executou');
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogOut }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Dilma' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}
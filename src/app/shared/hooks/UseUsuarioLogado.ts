import { useContext } from "react";

import { UsuarioLogadoContext } from "../contents";

export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext);
    return context;
}
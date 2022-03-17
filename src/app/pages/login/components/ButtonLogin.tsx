import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contents";

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";

    onClick: () => void;
}



export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
    const {nomeDoUsuario} = useContext(UsuarioLogadoContext);
    
    return (
        <button type={type} onClick={onClick}>
           {nomeDoUsuario} {children}
        </button>
    );
}
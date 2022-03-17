import { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { UsuarioLogadoContext } from '../../shared/contents';

import { ButtonLogin } from './components/ButtonLogin';
import { InputLogin } from './components/InputLogin';

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const {nomeDoUsuario} = useContext(UsuarioLogadoContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const emailLenght = useMemo(() => {
        console.log('Executou');
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus();
        }
    }, [email, password]);



    return (
        <div>
            <form>
                <p>Quantidade de caracteres no Email: {emailLenght}</p>
                <p>{nomeDoUsuario}</p>
                <InputLogin
                    label='Email'
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label='Senha'
                    type='password'
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    ref={inputPasswordRef}
                />

                <ButtonLogin type='button' onClick={handleEntrar}>
                    {'Entrar'}
                </ButtonLogin>
            </form>
        </div>
    );
};
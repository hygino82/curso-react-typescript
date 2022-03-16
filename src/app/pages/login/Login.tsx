import { useCallback, useMemo, useState } from 'react';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const emailLenght = useMemo(() => {
        console.log('Executou');
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);



    return (
        <div>
            <form>
                <p>Quantidade de caracteres no Email: {emailLenght}</p>
                <label>
                    <span>Email</span>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type='button' onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
};
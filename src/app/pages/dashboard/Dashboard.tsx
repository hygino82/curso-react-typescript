import { useCallback, useEffect, useState } from 'react';
import { ApiException } from '../../shared/services/api/ApiException';

import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
        .then((result) => {
            if(result instanceof ApiException) {
                alert(result.message);
            }
            else {
                setLista(result);
            }
        })
    },[]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

                return [...oldLista,
                {
                    title: value,
                    isCompleted: false,
                    id: oldLista.length
                }
                ];
            });
        }
    }, []);

    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown} />

            <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>

            <ul>
                {lista.map((ListItem) => {
                    return <li key={ListItem.id}>
                        <input
                            type='checkbox'
                            checked={ListItem.isCompleted}
                            onChange={() => {
                                setLista(oldLista => {
                                    return oldLista.map(oldListItem => {
                                        const newIsCompleted = oldListItem.title === ListItem.title
                                            ? !oldListItem.isCompleted
                                            : oldListItem.isCompleted
                                        return {
                                            ...oldListItem,
                                            isCompleted: newIsCompleted
                                        };
                                    });
                                });
                            }}
                        />
                        {ListItem.title}
                    </li>;
                })}
            </ul>
        </div>
    );
};

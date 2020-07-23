import { Provider } from './provider-model';
import { Producer } from './producer-model';


export interface Enterprise {
    id: number;
    name: string;
    pag_web: string;
    inf_contacto: string;
    tipo: 'V' | 'R'
}

export function fromProvider(p: Provider): Enterprise {
    return {
        id: p.id,
        name: p.nombre,
        pag_web: p.pag_web,
        inf_contacto: p.inf_contacto,
        tipo: 'V'
    }
}

export function fromProducer(p: Producer): Enterprise {
    return {
        id: p.id,
        name: p.nombre,
        pag_web: p.pag_web,
        inf_contacto: p.inf_contacto,
        tipo: 'R'
    }
}

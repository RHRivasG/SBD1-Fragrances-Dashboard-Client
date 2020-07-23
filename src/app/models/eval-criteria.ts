export interface EvalCriteria {
    fechai: Date,
    fechaf: Date | null,
    tipoformula: 'E' | 'I',
    peso: number,
    id_emp_prod: number,
    id_criterio: number
}

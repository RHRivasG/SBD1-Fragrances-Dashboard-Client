export interface EvalCriteria {
    fechai: Date,
    fechaf: Date | null,
    tipoFormula: 'E' | 'I',
    peso: number,
    id_emp_prod: number,
    id_criterio: number
}

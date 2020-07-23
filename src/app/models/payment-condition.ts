export interface PaymentCondition {
    id:number,
    id_emp_prov: number,
    tipo: 'AP' | 'C',
    cuotas: number | null,
}

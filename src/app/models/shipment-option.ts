export interface ShipmentOption {
    id_emp_prov: number,
    id_pais: number,
    dias_entrega: number,
    tipo_transporte: 'A' | 'B',
    costo: number | null
}

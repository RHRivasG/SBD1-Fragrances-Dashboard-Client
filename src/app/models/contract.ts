import { ShipmentOption } from './shipment-option';
import { PaymentCondition } from './payment-condition';
import { IfraIngredient } from './ifra-ingredient';

export interface Contract {
    id: number | null,
    id_emp_prov: number,
    fecha_emision: Date,
    fecha_cancelado: Date | null,
    motivo_cancelado: string | null
}

export interface ParticularContract {
    id: null,
    shipment: ShipmentOption | null,
    payment: PaymentCondition | null
}

export interface ContractStock {
    id: number | null,
    id_emp_prov: number,
    ifra: IfraIngredient[] | null,
    others: any[] | null
}

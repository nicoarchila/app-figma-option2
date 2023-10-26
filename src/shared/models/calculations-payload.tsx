export interface CalculationPayload {
    data: Data
}

export interface Data {
    client_ip: string
    device: Device
    encoded_operation: string
    source_account: SourceAccount
    destination_account: DestinationAccount
    amount: Amount
    comment: string
    category: string
    transaction_currency: string
    payment_type: string
    operation_target: string
}

export interface Device {
    os_name: string
    os_version: string
    model: string
}

export interface SourceAccount {
    account_id: number
    account_type: string
    account_description: string
}

export interface DestinationAccount {
    recipient_id: number
    account_id: number
    account_type: string
    account_subtype: string
    recipient_name: string
    bank_id: string
    bank_name: string
    client_id: number
    account_description: string
    account_number: number
    account_owner: string
}

export interface Amount {
    currency: string
    amount: number
    decimals: number
}

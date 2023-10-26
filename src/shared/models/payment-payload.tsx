export interface PaymentPayload {
    data: Data
  }
  
  export interface Data {
    source_account: SourceAccount
    loan_type: string
    loan_id: string
    amount: Amount
    category: Category
    effective_date: string
    branch_code: number
    debit_category: DebitCategory
    debit_transaction_description: string
    loan_transaction_description: string
    charge_code: number
  }
  
  export interface SourceAccount {
    account_id: string
    account_type: string
    account_subtype: string
    account_description: string
  }
  
  export interface Amount {
    currency: string
    amount: number
    decimals: number
  }
  
  export interface Category {
    category_id: number
  }
  
  export interface DebitCategory {
    category_id: number
  }
  
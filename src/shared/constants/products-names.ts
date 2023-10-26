interface Dictionary<T> {
    [Key: string]: T;
}

export class ProductsName {
    static catalog: Dictionary<string> = {
        AFC:"Cuenta Ahorro AFC",
        AHO:"Cuenta Ahorros Tradicional",
        CTE:"Cuenta Corriente",
        LBR:"Crédito Libranza",
        CRP:"Crédito Rotativo",
        ORD:"Crédito Personal",
        ORO:"Tarjeta Crédito",
        PPT:"Tarjeta Crédito",
        PDB:"Tarjeta Crédito"
    };
}

export class ProductsDomain {
    static catalog: Dictionary<string> = {
        AFC:"Cuenta",
        AHO:"Cuenta",
        CTE:"Cuenta",
        LBR:"Crédito",
        CRP:"Crédito",
        ORD:"Crédito",
        ORO:"Tarjeta",
        PPT:"Tarjeta",
        PDB:"Tarjeta"
    };
}

export const productsLoanEnabled: string[] = ["ORD"];

export const productsLoan: string[] = ["LBR","CRP","ORD"];
export const productsAccount: string[] = ["AHO","CTE", "AFC"];

export const productsActive: string[] = ["LBR","CRP","ORD", "TCR"];
export const productsPassive: string[] = ["AHO","CTE", "AFC"];

export const PRODUCTS_VARIANTS = {
    ACTIVE: 'active',
    PASSIVE: 'passive'
};

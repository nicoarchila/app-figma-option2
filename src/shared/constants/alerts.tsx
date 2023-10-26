export const AlertsMsg = {
    ALERT_MOUNT : { state: true, msg: "El valor a pagar debe ser mayor a 0", type: "warning"},
    ALERT_ACCOUNT : { state: true, msg: "Debes seleccionar una cuenta a debitar", type: "warning"},
    ALERT_PRODUCTS : { state: true, msg: "Ha ocurrrido un error en la carga de los productos, intenta de nuevo", type: "error"},
    ALERT_DETAILS : { state: true, msg: "Ha ocurrrido un error en la consulta de detalle del producto, intenta de nuevo", type: "error"},
    ALERT_PAYMENT : { state: true, msg: "Ha ocurrrido un error en el pago del préstamo, intenta de nuevo", type: "error"},
    ALERT_BLOCK_FUNC : { state: true, msg: "Upss! Esto está fuera de alcance funcional de la PoC", type: "warning"},
    ALERT_ERROR_LOGIN : { state: true, msg: "¡Datos incorrectos!", type: "warning"},
    ALERT_OFF : { state: false, msg: ""},

    ALERT_PAYMENT_ERROR: "Ha ocurrrido un error en el pago, intenta de nuevo",
    ALERT_BLOCK_FUNC_MSG: "Upss! Esto está fuera de alcance funcional de la PoC",
}


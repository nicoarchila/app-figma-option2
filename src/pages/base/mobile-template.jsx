import { Grid, View, Menu, MenuItem, Divider, MenuButton, Alert, Loader } from "@aws-amplify/ui-react";
import { NavBarHeaderMobile } from "../../ui-components";
import { AlertsMsg } from '../../shared/constants/alerts';

export default function MobileTemplate({props}) {

    return (
        <>
            <Grid
                columnGap="0rem"
                rowGap="0rem"
                templateColumns="1fr"
                templateRows="7fr 93fr"
                height="100vh"
            >
                <View columnStart="1" columnEnd="-1" rowStart="1" rowEnd="1">
                    <NavBarHeaderMobile
                        width={"100vw"}
                        menuBtn={
                            <Menu menuAlign="end" triggerClassName="mobile-btn-menu">
                                <MenuItem onClick={() => alert(AlertsMsg.ALERT_BLOCK_FUNC_MSG)}>
                                    Beneficios
                                </MenuItem>
                                <MenuItem onClick={() => alert(AlertsMsg.ALERT_BLOCK_FUNC_MSG)}>
                                    Productos
                                </MenuItem>
                                <MenuItem onClick={() => alert(AlertsMsg.ALERT_BLOCK_FUNC_MSG)}>
                                    Servicios Internacionales
                                </MenuItem>
                                <MenuItem onClick={() => alert(AlertsMsg.ALERT_BLOCK_FUNC_MSG)}>
                                    Sucursales
                                </MenuItem>
                                <MenuItem onClick={() => alert(AlertsMsg.ALERT_BLOCK_FUNC_MSG)}>
                                    Ayuda
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={() => window.location = "/"}>
                                    Salir
                                </MenuItem>
                            </Menu>
                        }
                    />
                    { props.alertMessage?.state? <Alert /*className="alert-abs"*/ variation={props.alertMessage.type}>{props.alertMessage.msg}</Alert>:<></> }
                    { props.loader? <Loader size="large" variation="linear"/>:<></> }
                </View>
                {props.content}
            </Grid>
        </>
    )

}
import { Grid, View, Alert, Loader } from "@aws-amplify/ui-react";
import { NavBarHeaderNL, NavBarHeaderL, IlustracionLogin, FormularioLogin, Login, SideBar } from "../../ui-components";
import store from "../../store/store";
import { useNavigate } from "react-router";
import { Routes } from "../../shared/constants/routes";

export default function DesktopTemplate({props}) {

    var navBar = (<NavBarHeaderNL width="100%" btnClassName="btn-sec-cust" />);
    var templateCols = "1fr 1fr";
    var sideBar = (<></>);
    const history = useNavigate();

    let loginState = store.getState().login;

    // var onExitClick = (e) => {
    //     console.log("sasd")
    //     history(Routes.HOME);
    // };

    if (loginState?.state) {
        navBar = (<NavBarHeaderL width="100%" btnClassName="btn-sec-cust" />);
        templateCols = { base: "9fr 1fr", xxl: "8fr 2fr" };
        sideBar = (
            <View columnStart="2" columnEnd="-1" rowStart="2" rowEnd="-1">
                <SideBar height="100%" />
            </View>
        );
    }

    return (
        <>
            <Grid
                columnGap="0rem"
                rowGap="0rem"
                templateColumns={templateCols}
                templateRows="7fr 93fr"
                width="100%"
                height={"100vh"}
            >
            <View
                columnStart="1"
                columnEnd="-1" 
            >
                {navBar}
                { props.alertMessage?.state? <Alert variation={props.alertMessage.type}>{props.alertMessage.msg}</Alert>:<></> }
                { props.alert? <Alert variation="warning">Datos incorrectos!</Alert>:<></> }
                { props.loader? <Loader size="large" variation="linear"/>:<></> }
            </View>
            {props.content}
            {sideBar}
            </Grid>
        </>
    )

}
import { useNavigate } from "react-router";
import store from "../../store/store";

function Guards() {
  const history = useNavigate();

  if (!store.getState()) {
    setTimeout(() => {
      history("/");
    }, 50);
  }
}

export default Guards;

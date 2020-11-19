import { connect } from "react-redux";
import PizzaListScreen from "./component";
import { initPizzas } from "../pizzas/actions";

const mapDispatchToProps = { initPizzas };

export default connect(null, mapDispatchToProps)(PizzaListScreen);

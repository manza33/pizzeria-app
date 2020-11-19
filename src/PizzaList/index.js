import { connect } from "react-redux";
import PizzaList from "./component";

const mapStateToProps = (state) => ({ pizzas: state.pizzas });

export default connect(mapStateToProps)(PizzaList);

import { connect } from "react-redux";
import * as pageActions from "../../../_redux/pokedex/actions/page";
import Page from "../components/page";

function mapStateToProps(state) {
  const { displayedPokemons, isFetched, error } = state.page;

  return {
    displayedPokemons,
    isFetched,
    error
  };
}

const mapDispatchToProps = {
  getPokemons: pageActions.getPokemons,
  filterPokemons: pageActions.filterPokemons
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

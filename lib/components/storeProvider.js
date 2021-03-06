import React from "react";
import PropTypes from "prop-types";

const storeProvider = (extraProps) => (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    render() {
      return (
        <Component
          {...extraProps(this.context.store, this.props)}
          {...this.props}
          store={this.context.store}
        />
      );
    }
  };
};

export default storeProvider;

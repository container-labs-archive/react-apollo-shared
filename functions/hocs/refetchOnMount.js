"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function refetchOnMount(WrappedComponent) {
  return class HOCWaitingOnData extends _react.default.Component {
    componentWillMount() {
      const {
        data
      } = this.props; // cheap way at the cost of a network call to get updates to lists without
      // writing to the local store the 'right way'
      // TODO: 'the right way' is to use apollo to update the local store

      data.refetch();
    }

    render() {
      return _react.default.createElement(WrappedComponent, this.props);
    }

  };
}

var _default = refetchOnMount;
exports.default = _default;
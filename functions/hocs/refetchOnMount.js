"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

function refetchOnMount(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(HOCWaitingOnData, _React$Component);

      function HOCWaitingOnData() {
        return _React$Component.apply(this, arguments) || this;
      }

      var _proto = HOCWaitingOnData.prototype;

      _proto.componentWillMount = function componentWillMount() {
        var data = this.props.data; // cheap way at the cost of a network call to get updates to lists without
        // writing to the local store the 'right way'
        // TODO: 'the right way' is to use apollo to update the local store

        data.refetch();
      };

      _proto.render = function render() {
        return _react.default.createElement(WrappedComponent, this.props);
      };

      return HOCWaitingOnData;
    }(_react.default.Component)
  );
}

var _default = refetchOnMount;
exports.default = _default;
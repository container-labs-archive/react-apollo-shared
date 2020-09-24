"use strict";

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-names");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }

function refetchOnMount(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(HOCWaitingOnData, _React$Component);

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
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, this.props);
    };

    return HOCWaitingOnData;
  }(_react["default"].Component);
}

var _default = refetchOnMount;
exports["default"] = _default;
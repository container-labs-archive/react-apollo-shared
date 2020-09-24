"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-names");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticated = authenticated;
exports.requireAdmin = requireAdmin;
exports.checkPermission = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _connectedReactRouter = require("connected-react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function authenticated(WrappedComponent) {
  var _dec, _class, _temp;

  return (// hocs.... hocs all the way down
    _dec = (0, _reactRedux.connect)(function (store) {
      return {
        isAuthenticated: store.auth.isAuthenticated
      };
    }), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(HOCLoader, _React$Component);

      function HOCLoader() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _defineProperty(_assertThisInitialized(_this), "redirectIfNotAuthenticated", function () {
          var _this$props = _this.props,
              isAuthenticated = _this$props.isAuthenticated,
              dispatch = _this$props.dispatch;

          if (!isAuthenticated) {
            dispatch((0, _connectedReactRouter.push)('/login'));
          }
        });

        return _this;
      }

      var _proto = HOCLoader.prototype;

      _proto.componentWillMount = function componentWillMount() {
        this.redirectIfNotAuthenticated();
      };

      _proto.render = function render() {
        this.redirectIfNotAuthenticated();
        return /*#__PURE__*/_react["default"].createElement(WrappedComponent, this.props);
      };

      return HOCLoader;
    }(_react["default"].Component), _temp)) || _class
  );
}

function requireAdmin(WrappedComponent) {
  var _dec2, _class3, _temp2;

  return _dec2 = (0, _reactRedux.connect)(function (store) {
    return {
      isAccessed: checkPermission(store)
    };
  }), _dec2(_class3 = (_temp2 = /*#__PURE__*/function (_React$Component2) {
    _inheritsLoose(HOCLoader, _React$Component2);

    function HOCLoader() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this2), "redirectIfPermissionDenied", function () {
        var _this2$props = _this2.props,
            isAccessed = _this2$props.isAccessed,
            dispatch = _this2$props.dispatch;

        if (!isAccessed) {
          dispatch((0, _connectedReactRouter.push)('/app-home'));
        }
      });

      return _this2;
    }

    var _proto2 = HOCLoader.prototype;

    _proto2.componentWillMount = function componentWillMount() {
      this.redirectIfPermissionDenied();
    };

    _proto2.render = function render() {
      this.redirectIfPermissionDenied();
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, this.props);
    };

    return HOCLoader;
  }(_react["default"].Component), _temp2)) || _class3;
}

var checkPermission = function checkPermission(store, permission) {
  var users = store.users;
  if (!users || !users.selectedUserId) return false;
  return true;
};

exports.checkPermission = checkPermission;
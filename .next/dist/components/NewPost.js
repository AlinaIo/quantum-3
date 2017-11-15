'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\quantum-3\\components\\NewPost.js';


var NewPosts = function (_React$Component) {
    (0, _inherits3.default)(NewPosts, _React$Component);

    function NewPosts(props) {
        (0, _classCallCheck3.default)(this, NewPosts);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewPosts.__proto__ || (0, _getPrototypeOf2.default)(NewPosts)).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    (0, _createClass3.default)(NewPosts, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('A post was submitted!' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'New Post!'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Title:', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('input', {
                type: 'text',
                name: 'title',
                value: this.state.value,
                onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Category:', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement('input', {
                type: 'text',
                name: 'category',
                value: this.state.value,
                onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), 'Content:', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement('input', {
                type: 'textarea',
                name: 'content',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Submit', onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })));
        }
    }]);

    return NewPosts;
}(_react2.default.Component);

exports.default = NewPosts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5ld1Bvc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIk5ld1Bvc3RzIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRUQ7c0NBQ0Y7O3NCQUFBLEFBQVksT0FBTzs0Q0FBQTs7OElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7bUJBRlUsQUFFZixBQUFhLEFBQ0Y7QUFERSxBQUNUO2VBRVA7Ozs7O3FDQUVZLEEsT0FBTyxBQUNoQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUE1QixBQUFjLEFBQXFCLEFBQ3RDOzs7O3FDLEFBRVksT0FBTyxBQUNoQjtrQkFBTSwwQkFBMEIsS0FBQSxBQUFLLE1BQXJDLEFBQTJDLEFBQzNDO2tCQUFBLEFBQU0sQUFDVDs7OztpQ0FDUSxBQUNMO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ1U7OzhCQUFBO2dDQURWLEFBQ1UsQUFDTjtBQURNO0FBQUE7c0JBQ04sQUFDUyxBQUNMO3NCQUZKLEFBRVMsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUsS0FKZCxBQUltQjs4QkFKbkI7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBOzs4QkFDSTtnQ0FESixBQUNJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNhOzs4QkFBQTtnQ0FIakIsQUFFSSxBQUNhLEFBRWI7QUFGYTtBQUFBO3NCQUViLEFBQ1MsQUFDTDtzQkFGSixBQUVTLEFBQ0w7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLEtBSmQsQUFJbUI7OEJBSm5CO2dDQWZSLEFBVUksQUFLSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQTs7OEJBQ0k7Z0NBREosQUFDSTtBQUFBO0FBQUEsZ0JBQ1E7OzhCQUFBO2dDQUZaLEFBRVksQUFDUjtBQURRO0FBQUE7c0JBQ1IsQUFDUyxBQUNMO3NCQUZKLEFBRVM7OzhCQUZUO2dDQXpCUixBQXNCSSxBQUdJLEFBS0o7QUFMSTtBQUNJOzs4QkFJUjtnQ0E5QkosQUE4QkksQUFDQTtBQURBO0FBQUE7OzhCQUNBO2dDQS9CSixBQStCSSxBQUNBO0FBREE7QUFBQSx5REFDTyxNQUFQLEFBQVksVUFBUyxPQUFyQixBQUEyQixVQUFTLFVBQVUsS0FBOUMsQUFBbUQ7OEJBQW5EO2dDQW5DWixBQUNJLEFBRUksQUFnQ0ksQUFJZjtBQUplOzs7Ozs7RUFwREcsZ0JBQU0sQSxBQTJEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmV3UG9zdC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9xdWFudHVtLTMifQ==
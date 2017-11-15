webpackHotUpdate(7,{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(350);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Projects\\quantum-3\\components\\NewPost.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\quantum-3\\components\\NewPost.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy42NjVlMTQ4YWRlMzEzODBmY2VjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdQb3N0LmpzP2VmMGMyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBOZXdQb3N0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBhbGVydCgnQSBwb3N0IHdhcyBzdWJtaXR0ZWQhJyArIHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5OZXcgUG9zdCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5Ojxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnQ6PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3RzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3UG9zdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUdBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7Ozs7OztBQXBEQTtBQUNBO0FBMERBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
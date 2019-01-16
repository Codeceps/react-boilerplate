"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namePrinter = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function delayedPrint(delay, cb) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      cb();
      resolve();
    }, delay);
  });
}

var namePrinter =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(name, delay) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Printing delayed name...");
            _context.next = 3;
            return delayedPrint(delay, function () {
              console.log("Name: ".concat(name));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function namePrinter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.namePrinter = namePrinter;

"use strict";
(self["webpackChunkpokemon"] = self["webpackChunkpokemon"] || []).push([["src_Store_js-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
/* harmony import */ var _components_CoverPage_CoverPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CoverPage/CoverPage */ "./src/components/CoverPage/CoverPage.js");
/* harmony import */ var _components_PokemonPicker_PokemonPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PokemonPicker/PokemonPicker */ "./src/components/PokemonPicker/PokemonPicker.js");
/* harmony import */ var _components_PokemonPicker_PickerModal_PickerModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PokemonPicker/PickerModal/PickerModal */ "./src/components/PokemonPicker/PickerModal/PickerModal.js");
/* harmony import */ var _components_Battle_Battle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Battle/Battle */ "./src/components/Battle/Battle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function App() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var handleView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    if (id === 'picker') return viewSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PokemonPicker_PokemonPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleView: handleView,
      data: _data_json__WEBPACK_IMPORTED_MODULE_1__
    }));
    if (id === 'battle') return viewSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Battle_Battle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      handleView: handleView
    }));
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CoverPage_CoverPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleView: handleView
  })),
      _useState2 = _slicedToArray(_useState, 2),
      view = _useState2[0],
      viewSet = _useState2[1];

  var handleBattle = function handleBattle() {
    handleView('battle');
    dispatch({
      type: 'battle',
      value: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var battle = localStorage.getItem('battle');

    if (JSON.parse(battle) === true) {
      var party = localStorage.getItem('party');
      var player = localStorage.getItem('player');
      var gym = localStorage.getItem('gym');
      var opponent = localStorage.getItem('opponent');
      var gymleaders = localStorage.getItem('gymleaders');
      dispatch({
        type: 'party-storage',
        value: JSON.parse(party)
      });
      dispatch({
        type: 'player',
        value: JSON.parse(player)
      });
      dispatch({
        type: 'gym-storage',
        value: JSON.parse(gym)
      });
      dispatch({
        type: 'opponent',
        value: JSON.parse(opponent)
      });
      dispatch({
        type: 'gymleaders-storag',
        value: JSON.parse(gymleaders)
      });
      viewSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Battle_Battle__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleView: handleView
      }));
    }
  }, [dispatch, handleView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: 'root'
  }, view, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalnopokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PokemonPicker_PickerModal_PickerModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    back: "modalnopokemon",
    message: "You need to have at least one Pokemon in your part."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalsubsix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PokemonPicker_PickerModal_PickerModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    back: "modalsubsix",
    message: "You have less than six Pokemon in your party. Are you sure you want to continue?",
    continue: handleBattle
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/reducers */ "./src/reducers/reducers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");







var store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_reducers_reducers__WEBPACK_IMPORTED_MODULE_4__.rootReducer);

var Store = function Store() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./src/components/Battle/Battle.js":
/*!*****************************************!*\
  !*** ./src/components/Battle/Battle.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Battle/Header/Header.js");
/* harmony import */ var _Opponent_Opponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Opponent/Opponent */ "./src/components/Battle/Opponent/Opponent.js");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player/Player */ "./src/components/Battle/Player/Player.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Battle/Footer/Footer.js");
/* harmony import */ var _PokemonList_PokemonList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PokemonList/PokemonList */ "./src/components/Battle/PokemonList/PokemonList.js");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battle.css */ "./src/components/Battle/battle.css");








function Battle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "battle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleView: props.handleView
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "players"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Opponent_Opponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleView: props.handleView
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Player_Player__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Battle);

/***/ }),

/***/ "./src/components/Battle/BattleModal/BattleModal.js":
/*!**********************************************************!*\
  !*** ./src/components/Battle/BattleModal/BattleModal.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _battlemodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battlemodal.css */ "./src/components/Battle/BattleModal/battlemodal.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function BattleModal(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      continueBtn = _useState2[0],
      continueBtnSet = _useState2[1];

  var handleBack = function handleBack() {
    document.getElementById(props.back).style.display = 'none';
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.action !== undefined) {
      continueBtnSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        id: "modalcontinue",
        className: "modalbtn",
        onClick: function onClick() {
          return props.action();
        }
      }, "Yes"));
    }
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "battlemodal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalmesssage"
  }, props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalbtncontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleBack();
    },
    id: "modalback",
    className: "modalbtn"
  }, "Back"), continueBtn)));
}

/* harmony default export */ __webpack_exports__["default"] = (BattleModal);

/***/ }),

/***/ "./src/components/Battle/Footer/Footer.js":
/*!************************************************!*\
  !*** ./src/components/Battle/Footer/Footer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PokemonList_PokemonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PokemonList/PokemonList */ "./src/components/Battle/PokemonList/PokemonList.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.css */ "./src/components/Battle/Footer/footer.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Footer(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var party = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.party;
  });
  var player = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.player;
  });
  var gym = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.gymLeaders;
  });
  var o = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.opponent;
  });
  var g = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.gym;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('What would you like to do?'),
      _useState2 = _slicedToArray(_useState, 2),
      dialog = _useState2[0],
      dialogSet = _useState2[1];

  var attack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (move, o) {
    dispatch({
      type: 'gymleaders',
      value: {
        pokemon: party[player],
        attack: move,
        opponent: o,
        gym: g
      }
    });
    var attackDialog = dialog;
    dialogSet('WAITING FOR OPPONENT TO ATTACK');
    document.getElementById('optionsbox').style.pointerEvents = 'none';
    setTimeout(function () {
      dispatch({
        type: 'party-attacked',
        value: {
          pokemon: gym[g].pokemon[o],
          player: player
        }
      });
      document.getElementById('optionsbox').style.pointerEvents = 'auto';
      dialogSet(attackDialog);
    }, 1000);
  }, [dispatch, g, gym, party, player]);
  var handleFight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (o) {
    var result = [];

    var _loop = function _loop(i) {
      result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: party[player].attacks[i].name,
        onClick: function onClick() {
          return attack(party[player].attacks[i], o);
        }
      }, party[player].attacks[i].name));
    };

    for (var i = 0; i < 4; i++) {
      _loop(i);
    }

    dialogSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "attacks"
    }, result));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "attacks"
    }, result);
  }, [attack, party, player]);

  var handlePokemon = function handlePokemon() {
    document.getElementById('pokemonlist-container-none').id = 'pokemonlist-container';
  };

  var handleBag = function handleBag() {
    dialogSet('SORRY THAT HAS NOT BEEN BUILT OUT YET, JUST ATTACK!');
  };

  var handleRun = function handleRun() {
    dialogSet("YOU CAN'T RUN FROM A GYM LEADER, THATS EMBARRASSING...");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('footer');

    if (party[player].health <= 0) {
      var test = false;

      for (var i = 0; i < party.length; i++) {
        if (party[i].health > 0) {
          test = true;
        }
      }

      if (test) handlePokemon();
    } else {
      setTimeout(function () {
        handleFight(o);
      }, 500);
    }
  }, [party, o, player, handleFight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "battlefooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PokemonList_PokemonList__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "attackbox"
  }, dialog), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "optionsbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "optionsbox-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "fight",
    onClick: function onClick() {
      return handleFight(o);
    },
    className: "option"
  }, "Fight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick() {
      return handleBag();
    },
    className: "option"
  }, "Bag")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "optionsbox-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick() {
      return handlePokemon();
    },
    className: "option"
  }, "Pokemon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick() {
      return handleRun();
    },
    className: "option"
  }, "Run"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Battle/Header/Header.js":
/*!************************************************!*\
  !*** ./src/components/Battle/Header/Header.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BattleModal_BattleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BattleModal/BattleModal */ "./src/components/Battle/BattleModal/BattleModal.js");
/* harmony import */ var _images_gym_heads_Brock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/gym-heads/Brock.png */ "./src/images/gym-heads/Brock.png");
/* harmony import */ var _images_gym_heads_Misty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/gym-heads/Misty.png */ "./src/images/gym-heads/Misty.png");
/* harmony import */ var _images_gym_heads_Lt_Surge_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/gym-heads/Lt._Surge.png */ "./src/images/gym-heads/Lt._Surge.png");
/* harmony import */ var _images_gym_heads_Erika_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/gym-heads/Erika.png */ "./src/images/gym-heads/Erika.png");
/* harmony import */ var _images_gym_heads_Koga_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/gym-heads/Koga.png */ "./src/images/gym-heads/Koga.png");
/* harmony import */ var _images_gym_heads_Sabrina_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/gym-heads/Sabrina.png */ "./src/images/gym-heads/Sabrina.png");
/* harmony import */ var _images_gym_heads_Blaine_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/gym-heads/Blaine.png */ "./src/images/gym-heads/Blaine.png");
/* harmony import */ var _images_gym_heads_Giovanni_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/gym-heads/Giovanni.png */ "./src/images/gym-heads/Giovanni.png");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.css */ "./src/components/Battle/Header/header.css");













function Header(props) {
  var g = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.gym;
  });

  var handleCurrentGym = function handleCurrentGym(g) {
    if (g > 0) {
      document.getElementById('gym-' + (g - 1)).style.filter = 'blur(3px)';
    }

    document.getElementById('gym-' + g).style.filter = 'blur(0px)';
  };

  var handleBack = function handleBack() {
    props.handleView('picker');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleCurrentGym(g);
  }, [g]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "battle-modal-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BattleModal_BattleModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    back: "battle-modal-hidden",
    message: "Going back will erase all of your progress. Are you sure?",
    action: handleBack
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "back",
    onClick: function onClick() {
      return document.getElementById('battle-modal-hidden').style.display = 'flex';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    id: "arrow"
  }), "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "header-images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-0",
    alt: "gym-0",
    className: "gym-head",
    src: _images_gym_heads_Brock_png__WEBPACK_IMPORTED_MODULE_3__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-1",
    alt: "gym-1",
    className: "gym-head",
    src: _images_gym_heads_Misty_png__WEBPACK_IMPORTED_MODULE_4__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-2",
    alt: "gym-2",
    className: "gym-head",
    src: _images_gym_heads_Lt_Surge_png__WEBPACK_IMPORTED_MODULE_5__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-3",
    alt: "gym-3",
    className: "gym-head",
    src: _images_gym_heads_Erika_png__WEBPACK_IMPORTED_MODULE_6__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-4",
    alt: "gym-4",
    className: "gym-head",
    src: _images_gym_heads_Koga_png__WEBPACK_IMPORTED_MODULE_7__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-5",
    alt: "gym-5",
    className: "gym-head",
    src: _images_gym_heads_Sabrina_png__WEBPACK_IMPORTED_MODULE_8__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-6",
    alt: "gym-6",
    className: "gym-head",
    src: _images_gym_heads_Blaine_png__WEBPACK_IMPORTED_MODULE_9__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "gym-7",
    alt: "gym-7",
    className: "gym-head",
    src: _images_gym_heads_Giovanni_png__WEBPACK_IMPORTED_MODULE_10__
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Battle/HealthBar/HealthBar.js":
/*!******************************************************!*\
  !*** ./src/components/Battle/HealthBar/HealthBar.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _healthbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./healthbar.css */ "./src/components/Battle/HealthBar/healthbar.css");



function HealthBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemondetail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemontitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonname"
  }, props.pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonlvl"
  }, "Lv50")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonhealthbgr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonhealth",
    style: {
      width: props.pokemon.health * 100 + '%'
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (HealthBar);

/***/ }),

/***/ "./src/components/Battle/Opponent/Opponent.js":
/*!****************************************************!*\
  !*** ./src/components/Battle/Opponent/Opponent.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HealthBar_HealthBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HealthBar/HealthBar.js */ "./src/components/Battle/HealthBar/HealthBar.js");
/* harmony import */ var _opponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opponent.css */ "./src/components/Battle/Opponent/opponent.css");
/* harmony import */ var _images_gym_leaders_Brock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/gym-leaders/Brock.png */ "./src/images/gym-leaders/Brock.png");
/* harmony import */ var _images_gym_leaders_Misty_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/gym-leaders/Misty.png */ "./src/images/gym-leaders/Misty.png");
/* harmony import */ var _images_gym_leaders_Lt_Surge_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/gym-leaders/Lt._Surge.png */ "./src/images/gym-leaders/Lt._Surge.png");
/* harmony import */ var _images_gym_leaders_Blaine_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/gym-leaders/Blaine.png */ "./src/images/gym-leaders/Blaine.png");
/* harmony import */ var _images_gym_leaders_Erika_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/gym-leaders/Erika.png */ "./src/images/gym-leaders/Erika.png");
/* harmony import */ var _images_gym_leaders_Koga_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/gym-leaders/Koga.png */ "./src/images/gym-leaders/Koga.png");
/* harmony import */ var _images_gym_leaders_Giovanni_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/gym-leaders/Giovanni.png */ "./src/images/gym-leaders/Giovanni.png");
/* harmony import */ var _images_gym_leaders_Sabrina_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../images/gym-leaders/Sabrina.png */ "./src/images/gym-leaders/Sabrina.png");













function Opponent(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var gyms = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.gymLeaders;
  });
  var g = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.gym;
  });
  var o = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.opponent;
  });
  var leader = [_images_gym_leaders_Brock_png__WEBPACK_IMPORTED_MODULE_4__, _images_gym_leaders_Misty_png__WEBPACK_IMPORTED_MODULE_5__, _images_gym_leaders_Lt_Surge_png__WEBPACK_IMPORTED_MODULE_6__, _images_gym_leaders_Erika_png__WEBPACK_IMPORTED_MODULE_8__, _images_gym_leaders_Koga_png__WEBPACK_IMPORTED_MODULE_9__, _images_gym_leaders_Sabrina_png__WEBPACK_IMPORTED_MODULE_11__, _images_gym_leaders_Blaine_png__WEBPACK_IMPORTED_MODULE_7__, _images_gym_leaders_Giovanni_png__WEBPACK_IMPORTED_MODULE_10__];

  var handleLeaderAnmation = function handleLeaderAnmation() {
    document.getElementById('pokemon-img-opp').id = 'pokemon-img-opp-none';
    document.getElementById('gym-leader-none').id = 'gym-leader';
    setTimeout(function () {
      document.getElementById('pokemon-img-opp-none').id = 'pokemon-img-opp';
      document.getElementById('gym-leader').id = 'gym-leader-none';
    }, 2900);
  };

  var updatePokemon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (gyms, o, g) {
    if (o !== gyms[g].pokemon.length - 1 && gyms[g].pokemon[o].health === 0) {
      dispatch({
        type: 'opponent',
        value: 1
      });
    }
  }, [dispatch]);
  var updateGym = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (gyms, o, g) {
    if (gyms[g].pokemon[o].health === 0 && o === gyms[g].pokemon.length - 1) {
      if (g === gyms.length - 1) {
        console.log('reset');
        props.handleView('picker');
      } else {
        dispatch({
          type: 'gym',
          value: g
        });
        dispatch({
          type: 'opponent',
          value: 0
        });
        dispatch({
          type: 'party-health',
          value: 0
        });
        handleLeaderAnmation();
      }
    }
  }, [dispatch, props]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleLeaderAnmation();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updatePokemon(gyms, o, g);
    updateGym(gyms, o, g);
  }, [gyms, o, g, updatePokemon, updateGym]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "opponent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HealthBar_HealthBar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pokemon: gyms[g].pokemon[o]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "opponentpokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "opponentimagewrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "opponentsprite",
    id: "pokemon-img-opp",
    alt: "enemies pokemon",
    src: gyms[g].pokemon[o].images
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "enemies gym leader",
    className: "gym-leader",
    id: "gym-leader-none",
    src: leader[g]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    id: "opponentground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
    id: "opponentgroundellipse",
    cx: "235",
    cy: "25",
    rx: "200",
    ry: "25"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Opponent);

/***/ }),

/***/ "./src/components/Battle/Player/Player.js":
/*!************************************************!*\
  !*** ./src/components/Battle/Player/Player.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HealthBar_HealthBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HealthBar/HealthBar.js */ "./src/components/Battle/HealthBar/HealthBar.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.css */ "./src/components/Battle/Player/player.css");





function Player() {
  var party = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.party;
  });
  var player = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.player;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "player"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "playerpokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    id: "playerground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
    id: "playergroundellipse",
    cx: "215",
    cy: "140",
    rx: "200",
    ry: "25"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "playerimagewrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "players pokemon",
    className: "playersprite",
    src: party[player].images.back
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HealthBar_HealthBar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pokemon: party[player]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/components/Battle/PokemonList/PokemonList.js":
/*!**********************************************************!*\
  !*** ./src/components/Battle/PokemonList/PokemonList.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pokemonlist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemonlist.css */ "./src/components/Battle/PokemonList/pokemonlist.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function PokemonList() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var party = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.party;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      listSet = _useState2[1];

  var hideView = function hideView() {
    document.getElementById('pokemonlist-container').id = 'pokemonlist-container-none';
  };

  var handlePokemonChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (i, party) {
    if (party[i].health !== 0) {
      dispatch({
        type: 'player',
        value: i
      });
      hideView();
    }
  }, [dispatch]);
  var handleList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (party) {
    var result = [];

    var _loop = function _loop(i) {
      result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: 'pokemonlist' + i,
        onClick: function onClick() {
          handlePokemonChange(i, party);
        },
        className: "pokemonlist-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        alt: "pokemon",
        className: "pokemonlist-img",
        key: i,
        src: party[i].images.front
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "pokemonlist-name"
      }, party[i].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "pokemonhealthbgr-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "pokemonhealth-list",
        style: {
          width: party[i].health * 100 + '%'
        }
      }))));
    };

    for (var i = 0; i < party.length; i++) {
      _loop(i);
    }

    return result;
  }, [handlePokemonChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('list');
    listSet(handleList(party));
  }, [party, handleList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonlist-container-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, list)));
}

/* harmony default export */ __webpack_exports__["default"] = (PokemonList);

/***/ }),

/***/ "./src/components/CoverPage/CoverPage.js":
/*!***********************************************!*\
  !*** ./src/components/CoverPage/CoverPage.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _coverpage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coverpage.css */ "./src/components/CoverPage/coverpage.css");




function CoverPage(props) {
  var handleClick = function handleClick() {
    document.getElementById('coverpage').id = 'coverpage-animation';
    setTimeout(function () {
      document.getElementById('coverpage-animation').id = 'coverpage-none';
      props.handleView('picker');
    }, 950);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "coverpage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "logo",
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "coverpage-btn",
    onClick: function onClick() {
      return handleClick();
    }
  }, "START"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoverPage);

/***/ }),

/***/ "./src/components/PokemonPicker/PickerFooter/PickerFooter.js":
/*!*******************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerFooter/PickerFooter.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pickerfooter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickerfooter.css */ "./src/components/PokemonPicker/PickerFooter/pickerfooter.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




function PickerFooter(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var party = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.party;
  });

  var handleClick = function handleClick(count) {
    if (count === 0) return handleNoPokemon();
    if (count < 6) return handleSubSix();
    return handleBattle();
  };

  var handleNoPokemon = function handleNoPokemon() {
    document.getElementById('modalnopokemon').style.display = 'block';
  };

  var handleSubSix = function handleSubSix() {
    document.getElementById('modalsubsix').style.display = 'block';
  };

  var handleBattle = function handleBattle() {
    props.handleView('battle');
    dispatch({
      type: 'battle',
      value: true
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pickerfooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick(party.length);
    },
    id: "footerbtn"
  }, "Next"));
}

/* harmony default export */ __webpack_exports__["default"] = (PickerFooter);

/***/ }),

/***/ "./src/components/PokemonPicker/PickerHeader/PickerHeader.js":
/*!*******************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerHeader/PickerHeader.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pickerheader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickerheader.css */ "./src/components/PokemonPicker/PickerHeader/pickerheader.css");




function PickerHeader() {
  var countDown = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.party;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pickerheader"
  }, 'Select ' + (6 - countDown.length) + ' Pokemon');
}

/* harmony default export */ __webpack_exports__["default"] = (PickerHeader);

/***/ }),

/***/ "./src/components/PokemonPicker/PickerModal/PickerModal.js":
/*!*****************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerModal/PickerModal.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pickermodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickermodal.css */ "./src/components/PokemonPicker/PickerModal/pickermodal.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function PickerModal(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      continueBtn = _useState2[0],
      continueBtnSet = _useState2[1];

  var handleBack = function handleBack() {
    document.getElementById(props.back).style.display = 'none';
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.continue !== undefined) {
      continueBtnSet( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        id: "modalcontinue",
        className: "modalbtn",
        onClick: function onClick() {
          props.continue();
          document.getElementById(props.back).style.display = 'none';
        }
      }, "Yes"));
    }
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pickermodal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalmesssage"
  }, props.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "modalbtncontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleBack();
    },
    id: "modalback",
    className: "modalbtn"
  }, "Back"), continueBtn)));
}

/* harmony default export */ __webpack_exports__["default"] = (PickerModal);

/***/ }),

/***/ "./src/components/PokemonPicker/PokemonPicker.js":
/*!*******************************************************!*\
  !*** ./src/components/PokemonPicker/PokemonPicker.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PokemonSprite_PokemonSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonSprite/PokemonSprite */ "./src/components/PokemonPicker/PokemonSprite/PokemonSprite.js");
/* harmony import */ var _PickerHeader_PickerHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PickerHeader/PickerHeader */ "./src/components/PokemonPicker/PickerHeader/PickerHeader.js");
/* harmony import */ var _PickerFooter_PickerFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PickerFooter/PickerFooter */ "./src/components/PokemonPicker/PickerFooter/PickerFooter.js");
/* harmony import */ var _pokemonpicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemonpicker.css */ "./src/components/PokemonPicker/pokemonpicker.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function PokemonPicker(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      pokemonList = _useState2[0],
      pokemonListSet = _useState2[1];

  var createList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (array) {
    var result = [];
    var genArray = [];
    var gen = 1;

    var _iterator = _createForOfIteratorHelper(array),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var data = _step.value;

        if (data.generation === gen) {
          genArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PokemonSprite_PokemonSprite__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: data.num,
            data: data
          }));
          continue;
        }

        if (data.generation !== gen || data.num === array.length) {
          result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            key: gen,
            id: gen,
            className: "generation-list"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "generation-title-wrapper"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "generation-title"
          }, 'Generation ' + gen), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
            id: gen,
            onClick: function onClick(e) {
              return handleExpand('display' + e.target.id);
            },
            className: "generation-btn"
          }, "Expand")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            id: 'display' + gen,
            className: "generation-display"
          }, genArray)));
          gen++;
          genArray = [];
          genArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PokemonSprite_PokemonSprite__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: data.num,
            data: data
          }));
          continue;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  }, []);

  var handleExpand = function handleExpand(id) {
    if (document.getElementById(id).style.display === 'none' || document.getElementById(id).style.display === '') {
      document.getElementById(id).style.display = 'inline-flex';
    } else {
      document.getElementById(id).style.display = 'none';
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    pokemonListSet(createList(props.data));
  }, [props.data, createList]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: 'battle',
      value: false
    });
    dispatch({
      type: 'player',
      value: 0
    });
    dispatch({
      type: 'gym',
      value: 7
    });
    dispatch({
      type: 'opponent',
      value: 0
    });
    dispatch({
      type: 'party-reset',
      value: []
    });
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonpicker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonpickerwrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PickerHeader_PickerHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pokemonlistcontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, pokemonList)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PickerFooter_PickerFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleView: props.handleView
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PokemonPicker);

/***/ }),

/***/ "./src/components/PokemonPicker/PokemonSprite/PokemonSprite.js":
/*!*********************************************************************!*\
  !*** ./src/components/PokemonPicker/PokemonSprite/PokemonSprite.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pokemonsprite_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemonsprite.css */ "./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css");




function PokemonSprite(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: 'sprite' + props.data.num,
    id: 'sprite' + props.data.num,
    className: "sprite",
    onClick: function onClick() {
      return dispatch({
        type: 'party',
        value: props.data
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "pokemon",
    className: "sprite-title",
    id: props.data.num,
    src: props.data.images.front
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sprite-title"
  }, props.data.name));
}

/* harmony default export */ __webpack_exports__["default"] = (PokemonSprite);

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battle": function() { return /* binding */ battle; },
/* harmony export */   "gym": function() { return /* binding */ gym; },
/* harmony export */   "gymLeaders": function() { return /* binding */ gymLeaders; },
/* harmony export */   "opponent": function() { return /* binding */ opponent; },
/* harmony export */   "party": function() { return /* binding */ party; },
/* harmony export */   "player": function() { return /* binding */ player; },
/* harmony export */   "rootReducer": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _gyms_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gyms.json */ "./src/gyms.json");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/*
party: 
	1. As the user clicks pokemon their information gets added to an array(background will also get darker)
	2. An additional click on the same pokemon will remove them for array(background will go back to original color)
player:
	1. Numerical value that identifies the current pokemon you are battling with


gymLeaders:
	1. Array of objects holding all gym leaders and their pokemon
	2. Pokemons health bar information is held here
gym:
	1. Numerical value that identifies the current gym you are battling
opponent:
	1. Numerical value that identifies the current gym leaders currently active pokemon

*/
// state = [data[5], data[0], data[75], data[148], data[86], data[25]],

var party = function party() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'party' && action.value !== undefined && action.value !== null) {
    var result = _toConsumableArray(state);

    var duplicates = true;

    for (var i = 0; i < result.length; i++) {
      if (result[i].num === action.value.num) {
        duplicates = false;
        result.splice(i, 1);
        document.getElementById('sprite' + action.value.num).style.backgroundColor = 'inherit';
      }
    }

    if (duplicates && result.length < 6) {
      action.value.health = 1;
      result.push(action.value);
      document.getElementById('sprite' + action.value.num).style.backgroundColor = 'grey';
    }

    localStorage.setItem('party', JSON.stringify(result));
    return result;
  }

  if (action.type === 'party-attacked' && action.value !== undefined) {
    var pokemon = action.value.pokemon;
    var attack = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)];

    var _result = _toConsumableArray(state);

    var _player = _result[action.value.player];
    var attackPower = pokemon.stats.attack * (attack.power / 100);
    var attackDmg = attackPower / _player.stats.defense * 10;
    var attackResult = _player.health - attackDmg / _player.stats.hp;
    _player.health = attackResult <= 0 ? 0 : attackResult;
    localStorage.setItem('party', JSON.stringify(_result));
    return _result;
  }

  if (action.type === 'party-health' && action.value !== undefined) {
    var _result2 = _toConsumableArray(state);

    for (var _i = 0; _i < _result2.length; _i++) {
      _result2[_i].health = 1;
    }

    localStorage.setItem('party', JSON.stringify(_result2));
    return _result2;
  }

  if (action.type === 'party-storage' && action.value !== undefined) {
    return action.value;
  }

  if (action.type === 'party-reset' && action.value !== undefined) {
    return [];
  }

  return state;
};
var player = function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'player' && action.value !== undefined && action.value !== null) {
    localStorage.setItem('player', JSON.stringify(action.value));
    return action.value;
  }

  return state;
};
var gym = function gym() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'gym' && action.value !== undefined && action.value !== null) {
    var result = action.value + 1;

    if (result === 8) {
      result = 0;
    }

    localStorage.setItem('gym', JSON.stringify(result));
    return result;
  }

  if (action.type === 'gym-storage' && action.value !== undefined && action.value !== null) {
    if (action.value === 8) {
      action.value = 0;
      localStorage.setItem('gym', JSON.stringify(state));
    }

    return action.value;
  }

  return state;
};
var opponent = function opponent() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'opponent' && action.value !== undefined && action.value !== null) {
    if (action.value === 0) {
      state = 0;
    } else {
      state = state + 1;
    }

    localStorage.setItem('opponent', JSON.stringify(state));
    return state;
  }

  return state;
};
var gymLeaders = function gymLeaders() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _gyms_json__WEBPACK_IMPORTED_MODULE_0__;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'gymleaders' && action.value !== undefined && action.value !== null) {
    var result = _toConsumableArray(state);

    var attack = action.value.attack;
    var pokemon = action.value.pokemon;
    var _opponent = result[action.value.gym].pokemon[action.value.opponent];
    var attackPower = pokemon.stats.attack * (attack.power / 100);
    var attackDmg = attackPower / _opponent.stats.defense * 10;
    var attackResult = _opponent.health - attackDmg / _opponent.stats.hp;
    _opponent.health = attackResult <= 0 ? 0 : attackResult;
    localStorage.setItem('gymleaders', JSON.stringify(result));
    return result;
  }

  if (action.type === 'gymleaders-storage' && action.value !== undefined && action.value !== null) {
    return action.value;
  }

  return state;
};
var battle = function battle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'battle' && action.value !== undefined && action.value !== null) {
    localStorage.setItem('battle', JSON.stringify(action.value));
    return action.value;
  }

  return state;
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  party: party,
  player: player,
  gym: gym,
  opponent: opponent,
  gymLeaders: gymLeaders,
  battle: battle
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["#app {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/BattleModal/battlemodal.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/BattleModal/battlemodal.css ***!
  \*************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#battlemodal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0px;\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  color: black;\n}\n\n#modalform {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 10px;\n  /* width: 30vw; */\n  padding: 10px;\n  width: 30%;\n}\n\n#modalbtncontainer {\n  display: flex;\n  justify-content: space-around;\n}\n\n.modalbtn {\n  color: white;\n  font-weight: bold;\n  font-size: 14pt;\n  border: none;\n  padding: 5px;\n  /* width: 10vw; */\n  height: 3vh;\n  border-radius: 10px;\n}\n\n#modalback {\n  background-color: #dc0b2d;\n}\n\n#modalcontinue {\n  background: rgb(255, 203, 3);\n}\n\n#modalmesssage {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  margin: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/BattleModal/battlemodal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;AACd","sourcesContent":["#battlemodal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0px;\n  position: fixed;\n  height: 100vh;\n  width: 100%;\n  color: black;\n}\n\n#modalform {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 10px;\n  /* width: 30vw; */\n  padding: 10px;\n  width: 30%;\n}\n\n#modalbtncontainer {\n  display: flex;\n  justify-content: space-around;\n}\n\n.modalbtn {\n  color: white;\n  font-weight: bold;\n  font-size: 14pt;\n  border: none;\n  padding: 5px;\n  /* width: 10vw; */\n  height: 3vh;\n  border-radius: 10px;\n}\n\n#modalback {\n  background-color: #dc0b2d;\n}\n\n#modalcontinue {\n  background: rgb(255, 203, 3);\n}\n\n#modalmesssage {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  margin: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Footer/footer.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Footer/footer.css ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#battlefooter {\n  background-color: khaki;\n  border: 4px solid black;\n  width: calc(100% - 8px);\n  height: 150px;\n  display: flex;\n}\n\n#attackbox {\n  cursor: pointer;\n  font-size: 22pt;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  /* width: 75vw; */\n  width: 75%;\n  border: 4px solid black;\n  text-transform: uppercase;\n}\n\n#optionsbox {\n  /* width: 25vw; */\n  width: 25%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border: 4px solid black;\n  text-transform: uppercase;\n}\n\n.optionsbox-line {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.option {\n  cursor: pointer;\n  font-size: 18pt;\n  font-weight: bold;\n  margin: 10px;\n}\n\n.option:hover {\n  border-bottom: 4px solid black;\n}\n\n#attacks {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: auto;\n  row-gap: 25px;\n  margin-left: 10%;\n  text-transform: uppercase;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/Footer/footer.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,wBAAwB;EACxB,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B","sourcesContent":["#battlefooter {\n  background-color: khaki;\n  border: 4px solid black;\n  width: calc(100% - 8px);\n  height: 150px;\n  display: flex;\n}\n\n#attackbox {\n  cursor: pointer;\n  font-size: 22pt;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  /* width: 75vw; */\n  width: 75%;\n  border: 4px solid black;\n  text-transform: uppercase;\n}\n\n#optionsbox {\n  /* width: 25vw; */\n  width: 25%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border: 4px solid black;\n  text-transform: uppercase;\n}\n\n.optionsbox-line {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.option {\n  cursor: pointer;\n  font-size: 18pt;\n  font-weight: bold;\n  margin: 10px;\n}\n\n.option:hover {\n  border-bottom: 4px solid black;\n}\n\n#attacks {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: auto;\n  row-gap: 25px;\n  margin-left: 10%;\n  text-transform: uppercase;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Header/header.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Header/header.css ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n  display: flex;\n  background-color: #dc0b2d;\n  color: whitesmoke;\n  height: 100px;\n}\n\n#header-images {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-right: 170px;\n}\n\n#back {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 32pt;\n  font-weight: bolder;\n  width: auto;\n  max-width: 170px;\n  min-width: 170px;\n}\n\n#arrow {\n  border: solid whitesmoke;\n  border-width: 0 6px 6px 0;\n  display: inline-block;\n  padding: 6px;\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.head-wrapper {\n  background-color: whitesmoke;\n  transform: skew(-15deg);\n  transform-origin: top;\n  padding: 2px;\n  margin: 2px;\n}\n\n.gym-head {\n  background-color: grey;\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  filter: blur(3px);\n}\n\n#battle-modal-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/Header/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;EACZ,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf","sourcesContent":["#header {\n  display: flex;\n  background-color: #dc0b2d;\n  color: whitesmoke;\n  height: 100px;\n}\n\n#header-images {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-right: 170px;\n}\n\n#back {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 32pt;\n  font-weight: bolder;\n  width: auto;\n  max-width: 170px;\n  min-width: 170px;\n}\n\n#arrow {\n  border: solid whitesmoke;\n  border-width: 0 6px 6px 0;\n  display: inline-block;\n  padding: 6px;\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.head-wrapper {\n  background-color: whitesmoke;\n  transform: skew(-15deg);\n  transform-origin: top;\n  padding: 2px;\n  margin: 2px;\n}\n\n.gym-head {\n  background-color: grey;\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  filter: blur(3px);\n}\n\n#battle-modal-hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/HealthBar/healthbar.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/HealthBar/healthbar.css ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pokemondetail {\n\tborder-radius: 10px;\n\tpadding: 10px;\n\twidth: 300px;\n\theight: 70px;\n\tmargin: 10px;\n\tmargin-top: 30px;\n\tbackground-color: wheat;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#pokemontitle {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: baseline;\n\tpadding: 10px;\n\tfont-weight: bold;\n}\n\n#pokemonname {\n\tfont-size: 16pt;\n}\n\n#pokemonlvl {\n}\n\n#pokemonhealth {\n\theight: 10px;\n\tborder-radius: 10px;\n\tbackground-color: green;\n}\n\n#pokemonhealthbgr {\n\tmargin: 10px;\n\tmargin-left: auto;\n\tmargin-top: auto;\n\twidth: 50%;\n\theight: 10px;\n\tborder-radius: 10px;\n\tbackground-color: #444857;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/HealthBar/healthbar.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,aAAa;CACb,YAAY;CACZ,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,qBAAqB;CACrB,aAAa;CACb,iBAAiB;AAClB;;AAEA;CACC,eAAe;AAChB;;AAEA;AACA;;AAEA;CACC,YAAY;CACZ,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,UAAU;CACV,YAAY;CACZ,mBAAmB;CACnB,yBAAyB;AAC1B","sourcesContent":["#pokemondetail {\n\tborder-radius: 10px;\n\tpadding: 10px;\n\twidth: 300px;\n\theight: 70px;\n\tmargin: 10px;\n\tmargin-top: 30px;\n\tbackground-color: wheat;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#pokemontitle {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: baseline;\n\tpadding: 10px;\n\tfont-weight: bold;\n}\n\n#pokemonname {\n\tfont-size: 16pt;\n}\n\n#pokemonlvl {\n}\n\n#pokemonhealth {\n\theight: 10px;\n\tborder-radius: 10px;\n\tbackground-color: green;\n}\n\n#pokemonhealthbgr {\n\tmargin: 10px;\n\tmargin-left: auto;\n\tmargin-top: auto;\n\twidth: 50%;\n\theight: 10px;\n\tborder-radius: 10px;\n\tbackground-color: #444857;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Opponent/opponent.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Opponent/opponent.css ***!
  \*******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#opponent {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-top: 40px;\n}\n\n#opponentpokemon {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin-top: 50px;\n  margin-left: 200px;\n  width: 600px;\n}\n\n#opponentground {\n  z-index: 0;\n  width: 1000px;\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n#opponentgroundellipse {\n  stroke: #c18605;\n  stroke-width: 6px;\n  fill: #ffbf0f;\n}\n\n#opponentimagewrapper {\n  z-index: 1;\n  margin-right: 50px;\n  margin-top: -50px;\n  position: absolute;\n}\n\n.opponentsprite {\n  z-index: 1;\n  width: 300px;\n  height: 200px;\n}\n\n#pokemon-img-opp {\n  display: block;\n}\n\n#pokemon-img-opp-none {\n  display: none;\n}\n\n#gym-leader-wrapper-none {\n  display: none;\n}\n\n#gym-leader-wrapper {\n  position: relative;\n}\n\n#gym-leader {\n  overflow: hidden;\n  position: fixed;\n  z-index: 1;\n  width: 300px;\n  height: 300px;\n  animation-name: gym-leader;\n  animation-duration: 3s;\n  animation-timing-function: linear;\n}\n\n@keyframes gym-leader {\n  0% {\n    right: -500px;\n  }\n  40% {\n    right: 200px;\n  }\n  60% {\n    right: 200px;\n  }\n  100% {\n    right: -1000px;\n  }\n}\n\n#gym-leader-none {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/Opponent/opponent.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,cAAc;EAChB;AACF;;AAEA;EACE,aAAa;AACf","sourcesContent":["#opponent {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-top: 40px;\n}\n\n#opponentpokemon {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin-top: 50px;\n  margin-left: 200px;\n  width: 600px;\n}\n\n#opponentground {\n  z-index: 0;\n  width: 1000px;\n  margin-top: 50px;\n  margin-left: 50px;\n}\n\n#opponentgroundellipse {\n  stroke: #c18605;\n  stroke-width: 6px;\n  fill: #ffbf0f;\n}\n\n#opponentimagewrapper {\n  z-index: 1;\n  margin-right: 50px;\n  margin-top: -50px;\n  position: absolute;\n}\n\n.opponentsprite {\n  z-index: 1;\n  width: 300px;\n  height: 200px;\n}\n\n#pokemon-img-opp {\n  display: block;\n}\n\n#pokemon-img-opp-none {\n  display: none;\n}\n\n#gym-leader-wrapper-none {\n  display: none;\n}\n\n#gym-leader-wrapper {\n  position: relative;\n}\n\n#gym-leader {\n  overflow: hidden;\n  position: fixed;\n  z-index: 1;\n  width: 300px;\n  height: 300px;\n  animation-name: gym-leader;\n  animation-duration: 3s;\n  animation-timing-function: linear;\n}\n\n@keyframes gym-leader {\n  0% {\n    right: -500px;\n  }\n  40% {\n    right: 200px;\n  }\n  60% {\n    right: 200px;\n  }\n  100% {\n    right: -1000px;\n  }\n}\n\n#gym-leader-none {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Player/player.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Player/player.css ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#player {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n\n#playerpokemon {\n  display: flex;\n  justify-content: flex-end;\n  width: 500px;\n  margin-right: 200px;\n}\n\n#playerground {\n  position: absolute;\n  z-index: 0;\n  width: 500px;\n}\n\n#playergroundellipse {\n  stroke: #c18605;\n  stroke-width: 6px;\n  fill: #ffbf0f;\n}\n\n#playerimagewrapper {\n  position: sticky;\n  margin-right: 150px;\n}\n\n.playersprite {\n  z-index: 1;\n  width: 300px;\n  height: 200px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/Player/player.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;AACf","sourcesContent":["#player {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n\n#playerpokemon {\n  display: flex;\n  justify-content: flex-end;\n  width: 500px;\n  margin-right: 200px;\n}\n\n#playerground {\n  position: absolute;\n  z-index: 0;\n  width: 500px;\n}\n\n#playergroundellipse {\n  stroke: #c18605;\n  stroke-width: 6px;\n  fill: #ffbf0f;\n}\n\n#playerimagewrapper {\n  position: sticky;\n  margin-right: 150px;\n}\n\n.playersprite {\n  z-index: 1;\n  width: 300px;\n  height: 200px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/PokemonList/pokemonlist.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/PokemonList/pokemonlist.css ***!
  \*************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pokemonlist-container {\n  position: fixed;\n  width: 110vw;\n  height: 110vh;\n  top: 0px;\n  margin: -10vh;\n  background-color: rgba(84, 91, 96, 0.7);\n}\n\n#pokemonlist-container-none {\n  display: none;\n}\n\n#pokemonlist {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px;\n  /* width: 55vw; */\n  width: 55%;\n  height: auto;\n  margin-top: 15vh;\n  background-color: white;\n}\n\n.pokemonlist-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n\n.pokemonlist-img {\n  margin: 10px;\n  width: 100px;\n  height: 100px;\n}\n\n.pokemonlist-name {\n  font-weight: bolder;\n  font-size: 18pt;\n}\n\n.pokemonhealthbgr-list {\n  margin: 10px;\n  width: 30%;\n  height: 10px;\n  border-radius: 10px;\n  background-color: #444857;\n}\n\n.pokemonhealth-list {\n  height: 10px;\n  border-radius: 10px;\n  background-color: green;\n}\n\n#pokemonlist-close {\n  cursor: pointer;\n  padding: 20px;\n  width: 200px;\n  font-size: 18pt;\n  font-weight: bolder;\n  margin-left: auto;\n  margin-right: auto;\n  border: none;\n  border-radius: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/PokemonList/pokemonlist.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["#pokemonlist-container {\n  position: fixed;\n  width: 110vw;\n  height: 110vh;\n  top: 0px;\n  margin: -10vh;\n  background-color: rgba(84, 91, 96, 0.7);\n}\n\n#pokemonlist-container-none {\n  display: none;\n}\n\n#pokemonlist {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px;\n  /* width: 55vw; */\n  width: 55%;\n  height: auto;\n  margin-top: 15vh;\n  background-color: white;\n}\n\n.pokemonlist-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n\n.pokemonlist-img {\n  margin: 10px;\n  width: 100px;\n  height: 100px;\n}\n\n.pokemonlist-name {\n  font-weight: bolder;\n  font-size: 18pt;\n}\n\n.pokemonhealthbgr-list {\n  margin: 10px;\n  width: 30%;\n  height: 10px;\n  border-radius: 10px;\n  background-color: #444857;\n}\n\n.pokemonhealth-list {\n  height: 10px;\n  border-radius: 10px;\n  background-color: green;\n}\n\n#pokemonlist-close {\n  cursor: pointer;\n  padding: 20px;\n  width: 200px;\n  font-size: 18pt;\n  font-weight: bolder;\n  margin-left: auto;\n  margin-right: auto;\n  border: none;\n  border-radius: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/battle.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Battle/battle.css ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#battle {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #d8f0d8;\n}\n\n#players {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#footer {\n}\n", "",{"version":3,"sources":["webpack://./src/components/Battle/battle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;AACA","sourcesContent":["#battle {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #d8f0d8;\n}\n\n#players {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#footer {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CoverPage/coverpage.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CoverPage/coverpage.css ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#coverpage {\n  z-index: 1;\n  display: flex;\n  /* position: absolute; */\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #dc0b2d;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#coverpage-none {\n  display: none;\n}\n\n#coverpage-animation {\n  overflow: hidden;\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  /* height: 100vh;\n  width: 100%; */\n  background-color: #dc0b2d;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation-name: coverpage;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n}\n\n@keyframes coverpage {\n  from {\n    opacity: 100%;\n  }\n  to {\n    opacity: 0%;\n  }\n}\n\n#logo {\n  overflow: hidden;\n  width: 75%;\n  /* width: 75vw; */\n  animation: logo ease 3s;\n}\n\n@keyframes logo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#coverpage-btn {\n  overflow: hidden;\n  cursor: pointer;\n  /* width: 20vw; */\n  width: 20%;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 4em;\n  font-weight: bolder;\n  text-shadow: 1px 3px #444857;\n  border-radius: 20px;\n  border: none;\n  background: rgb(255, 203, 3);\n  color: whitesmoke;\n  animation: logo ease 3s;\n}\n\n#coverpage-btn:hover {\n  animation: coverpage-btn 0.5s 2;\n}\n\n@keyframes coverpage-btn {\n  0%,\n  100% {\n    -webkit-transform: translateY(0);\n  }\n  50% {\n    -webkit-transform: translateY(-10px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/CoverPage/coverpage.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,aAAa;EACb,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX;gBACc;EACd,yBAAyB;EACzB,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,oCAAoC;EACpC,cAAc;EACd,mBAAmB;EACnB,4BAA4B;EAC5B,mBAAmB;EACnB,YAAY;EACZ,4BAA4B;EAC5B,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE;;IAEE,gCAAgC;EAClC;EACA;IACE,oCAAoC;EACtC;AACF","sourcesContent":["#coverpage {\n  z-index: 1;\n  display: flex;\n  /* position: absolute; */\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #dc0b2d;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#coverpage-none {\n  display: none;\n}\n\n#coverpage-animation {\n  overflow: hidden;\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  /* height: 100vh;\n  width: 100%; */\n  background-color: #dc0b2d;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation-name: coverpage;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n}\n\n@keyframes coverpage {\n  from {\n    opacity: 100%;\n  }\n  to {\n    opacity: 0%;\n  }\n}\n\n#logo {\n  overflow: hidden;\n  width: 75%;\n  /* width: 75vw; */\n  animation: logo ease 3s;\n}\n\n@keyframes logo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#coverpage-btn {\n  overflow: hidden;\n  cursor: pointer;\n  /* width: 20vw; */\n  width: 20%;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 4em;\n  font-weight: bolder;\n  text-shadow: 1px 3px #444857;\n  border-radius: 20px;\n  border: none;\n  background: rgb(255, 203, 3);\n  color: whitesmoke;\n  animation: logo ease 3s;\n}\n\n#coverpage-btn:hover {\n  animation: coverpage-btn 0.5s 2;\n}\n\n@keyframes coverpage-btn {\n  0%,\n  100% {\n    -webkit-transform: translateY(0);\n  }\n  50% {\n    -webkit-transform: translateY(-10px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerFooter/pickerfooter.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerFooter/pickerfooter.css ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pickerfooter {\n  display: flex;\n  justify-content: center;\n  position: sticky;\n  margin: 25px;\n}\n\n#footerbtn {\n  font-size: 46pt;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-weight: bold;\n  background: rgb(255, 203, 3);\n  color: #444857;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PokemonPicker/PickerFooter/pickerfooter.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;EAC5B,cAAc;AAChB","sourcesContent":["#pickerfooter {\n  display: flex;\n  justify-content: center;\n  position: sticky;\n  margin: 25px;\n}\n\n#footerbtn {\n  font-size: 46pt;\n  font-weight: bold;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-weight: bold;\n  background: rgb(255, 203, 3);\n  color: #444857;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerHeader/pickerheader.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerHeader/pickerheader.css ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pickerheader {\n\tcolor: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\tfont-size: 56pt;\n\tfont-weight: bold;\n\tmargin: 25px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PokemonPicker/PickerHeader/pickerheader.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,eAAe;CACf,iBAAiB;CACjB,YAAY;AACb","sourcesContent":["#pickerheader {\n\tcolor: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\tfont-size: 56pt;\n\tfont-weight: bold;\n\tmargin: 25px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerModal/pickermodal.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerModal/pickermodal.css ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pickermodal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0px;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n#modalnopokemon {\n  display: none;\n  top: 0;\n  position: absolute;\n  /* height: 100%;\n  width: 100%; */\n}\n\n#modalsubsix {\n  display: none;\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PokemonPicker/PickerModal/pickermodal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,MAAM;EACN,kBAAkB;EAClB;gBACc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,YAAY;EACZ,WAAW;AACb","sourcesContent":["#pickermodal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0px;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n#modalnopokemon {\n  display: none;\n  top: 0;\n  position: absolute;\n  /* height: 100%;\n  width: 100%; */\n}\n\n#modalsubsix {\n  display: none;\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css ***!
  \************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sprite {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tmargin: 3px;\n}\n\n.sprite-title {\n\tfont-weight: 500;\n\tcursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,mBAAmB;CACnB,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB","sourcesContent":[".sprite {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tmargin: 3px;\n}\n\n.sprite-title {\n\tfont-weight: 500;\n\tcursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/pokemonpicker.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/pokemonpicker.css ***!
  \**********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#display1 {\n  display: none;\n}\n\n#display2 {\n  display: none;\n}\n\n#display3 {\n  display: none;\n}\n\n#display4 {\n  display: none;\n}\n\n#display5 {\n  display: none;\n}\n\n#display6 {\n  display: none;\n}\n\n#pokemonpicker {\n  background-color: #dc0b2d;\n  width: 100%;\n  height: 100%;\n}\n\n#pokemonpickerwrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#pokemonlistcontainer {\n  background-color: white;\n  height: auto;\n  /* max-height: 75vh; */\n  width: 95%;\n  border-radius: 10px;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n#pokemonlistcontainer::-webkit-scrollbar {\n  width: 0px;\n}\n\n.generation-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  background-color: rgba(175, 175, 175, 0.5);\n  border-radius: 10px;\n}\n\n.generation-list::-webkit-scrollbar {\n  width: 0px;\n}\n\n.generation-title-wrapper {\n  position: sticky;\n  margin: 20px;\n  width: 90%;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.generation-title {\n  font-size: 24pt;\n  font-weight: bold;\n}\n.generation-btn {\n  font-size: 20pt;\n}\n\n.generation-display {\n  border-top: 3px solid white;\n  border-radius: 0px 0px 10px 10px;\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: inherit;\n  height: 500px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  scrollbar-width: none;\n}\n\n.generation-display::-webkit-scrollbar {\n  width: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PokemonPicker/pokemonpicker.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;EACtB,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,gCAAgC;EAChC,oBAAoB;EACpB,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ","sourcesContent":["#display1 {\n  display: none;\n}\n\n#display2 {\n  display: none;\n}\n\n#display3 {\n  display: none;\n}\n\n#display4 {\n  display: none;\n}\n\n#display5 {\n  display: none;\n}\n\n#display6 {\n  display: none;\n}\n\n#pokemonpicker {\n  background-color: #dc0b2d;\n  width: 100%;\n  height: 100%;\n}\n\n#pokemonpickerwrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#pokemonlistcontainer {\n  background-color: white;\n  height: auto;\n  /* max-height: 75vh; */\n  width: 95%;\n  border-radius: 10px;\n  overflow: auto;\n  overflow-x: hidden;\n}\n\n#pokemonlistcontainer::-webkit-scrollbar {\n  width: 0px;\n}\n\n.generation-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  background-color: rgba(175, 175, 175, 0.5);\n  border-radius: 10px;\n}\n\n.generation-list::-webkit-scrollbar {\n  width: 0px;\n}\n\n.generation-title-wrapper {\n  position: sticky;\n  margin: 20px;\n  width: 90%;\n  display: inline-flex;\n  justify-content: space-between;\n}\n\n.generation-title {\n  font-size: 24pt;\n  font-weight: bold;\n}\n.generation-btn {\n  font-size: 20pt;\n}\n\n.generation-display {\n  border-top: 3px solid white;\n  border-radius: 0px 0px 10px 10px;\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: inherit;\n  height: 500px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  scrollbar-width: none;\n}\n\n.generation-display::-webkit-scrollbar {\n  width: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100%;\n}\n\nbody {\n  width: 100%;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["html {\n  width: 100%;\n}\n\nbody {\n  width: 100%;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nnav ul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqEE,SAAS;EACT,UAAU;EACV,SAAS;EACT,UAAU;EACV,eAAe;EACf,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;;EAIE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;EACV,eAAe;EACf,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA,sCAAsC;AACtC;EACE,sBAAsB;EACtB,WAAW;EACX,qBAAqB;AACvB;;AAEA,sCAAsC;AACtC;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,4CAA4C;AAC5C;EACE,cAAc;EACd,WAAW;EACX,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,UAAU;AACZ;;AAEA;;EAEE,sBAAsB;AACxB","sourcesContent":["html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nnav ul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/BattleModal/battlemodal.css":
/*!***********************************************************!*\
  !*** ./src/components/Battle/BattleModal/battlemodal.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battlemodal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./battlemodal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/BattleModal/battlemodal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battlemodal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_battlemodal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_battlemodal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_battlemodal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/Footer/footer.css":
/*!*************************************************!*\
  !*** ./src/components/Battle/Footer/footer.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/Header/header.css":
/*!*************************************************!*\
  !*** ./src/components/Battle/Header/header.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/HealthBar/healthbar.css":
/*!*******************************************************!*\
  !*** ./src/components/Battle/HealthBar/healthbar.css ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_healthbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./healthbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/HealthBar/healthbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_healthbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_healthbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_healthbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_healthbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/Opponent/opponent.css":
/*!*****************************************************!*\
  !*** ./src/components/Battle/Opponent/opponent.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_opponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./opponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Opponent/opponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_opponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_opponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_opponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_opponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/Player/player.css":
/*!*************************************************!*\
  !*** ./src/components/Battle/Player/player.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./player.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/Player/player.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_player_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/PokemonList/pokemonlist.css":
/*!***********************************************************!*\
  !*** ./src/components/Battle/PokemonList/pokemonlist.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pokemonlist_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pokemonlist.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/PokemonList/pokemonlist.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pokemonlist_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pokemonlist_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pokemonlist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pokemonlist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Battle/battle.css":
/*!******************************************!*\
  !*** ./src/components/Battle/battle.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./battle.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Battle/battle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CoverPage/coverpage.css":
/*!************************************************!*\
  !*** ./src/components/CoverPage/coverpage.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_coverpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./coverpage.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CoverPage/coverpage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_coverpage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_coverpage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_coverpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_coverpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPicker/PickerFooter/pickerfooter.css":
/*!********************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerFooter/pickerfooter.css ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pickerfooter_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pickerfooter.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerFooter/pickerfooter.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pickerfooter_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pickerfooter_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pickerfooter_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pickerfooter_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPicker/PickerHeader/pickerheader.css":
/*!********************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerHeader/pickerheader.css ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pickerheader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pickerheader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerHeader/pickerheader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pickerheader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pickerheader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pickerheader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pickerheader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPicker/PickerModal/pickermodal.css":
/*!******************************************************************!*\
  !*** ./src/components/PokemonPicker/PickerModal/pickermodal.css ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pickermodal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pickermodal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PickerModal/pickermodal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pickermodal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pickermodal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pickermodal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pickermodal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css":
/*!**********************************************************************!*\
  !*** ./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pokemonsprite_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pokemonsprite.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/PokemonSprite/pokemonsprite.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pokemonsprite_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pokemonsprite_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pokemonsprite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pokemonsprite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PokemonPicker/pokemonpicker.css":
/*!********************************************************!*\
  !*** ./src/components/PokemonPicker/pokemonpicker.css ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pokemonpicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./pokemonpicker.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PokemonPicker/pokemonpicker.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pokemonpicker_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_pokemonpicker_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pokemonpicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pokemonpicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/images/gym-heads/Blaine.png":
/*!*****************************************!*\
  !*** ./src/images/gym-heads/Blaine.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f221c53fef9f72d0ef17.png";

/***/ }),

/***/ "./src/images/gym-heads/Brock.png":
/*!****************************************!*\
  !*** ./src/images/gym-heads/Brock.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "30bb3a15595e2bf1d4d8.png";

/***/ }),

/***/ "./src/images/gym-heads/Erika.png":
/*!****************************************!*\
  !*** ./src/images/gym-heads/Erika.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cec050298c08e4e317ea.png";

/***/ }),

/***/ "./src/images/gym-heads/Giovanni.png":
/*!*******************************************!*\
  !*** ./src/images/gym-heads/Giovanni.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "017c3ec9508d60955c10.png";

/***/ }),

/***/ "./src/images/gym-heads/Koga.png":
/*!***************************************!*\
  !*** ./src/images/gym-heads/Koga.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c2ce3f6412831a4274b.png";

/***/ }),

/***/ "./src/images/gym-heads/Lt._Surge.png":
/*!********************************************!*\
  !*** ./src/images/gym-heads/Lt._Surge.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2746ce08f26dc7a95be0.png";

/***/ }),

/***/ "./src/images/gym-heads/Misty.png":
/*!****************************************!*\
  !*** ./src/images/gym-heads/Misty.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bdaef75946a55775c166.png";

/***/ }),

/***/ "./src/images/gym-heads/Sabrina.png":
/*!******************************************!*\
  !*** ./src/images/gym-heads/Sabrina.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d43c98884b788615c31.png";

/***/ }),

/***/ "./src/images/gym-leaders/Blaine.png":
/*!*******************************************!*\
  !*** ./src/images/gym-leaders/Blaine.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "942a8cdb644bad266f65.png";

/***/ }),

/***/ "./src/images/gym-leaders/Brock.png":
/*!******************************************!*\
  !*** ./src/images/gym-leaders/Brock.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac60f6bab4f76402f029.png";

/***/ }),

/***/ "./src/images/gym-leaders/Erika.png":
/*!******************************************!*\
  !*** ./src/images/gym-leaders/Erika.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "90c98536a7aa9af2756b.png";

/***/ }),

/***/ "./src/images/gym-leaders/Giovanni.png":
/*!*********************************************!*\
  !*** ./src/images/gym-leaders/Giovanni.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a546d3335cff000fd7c9.png";

/***/ }),

/***/ "./src/images/gym-leaders/Koga.png":
/*!*****************************************!*\
  !*** ./src/images/gym-leaders/Koga.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "130bf68151b6ea7ce507.png";

/***/ }),

/***/ "./src/images/gym-leaders/Lt._Surge.png":
/*!**********************************************!*\
  !*** ./src/images/gym-leaders/Lt._Surge.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b717cda93f58d09f4110.png";

/***/ }),

/***/ "./src/images/gym-leaders/Misty.png":
/*!******************************************!*\
  !*** ./src/images/gym-leaders/Misty.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a084880ea4592e48fea6.png";

/***/ }),

/***/ "./src/images/gym-leaders/Sabrina.png":
/*!********************************************!*\
  !*** ./src/images/gym-leaders/Sabrina.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e7f83743fd05a49f798.png";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e1660a931177c23721e.svg";

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ (function(module) {


/***/ }),

/***/ "./src/gyms.json":
/*!***********************!*\
  !*** ./src/gyms.json ***!
  \***********************/
/***/ (function(module) {

module.exports = JSON.parse('[{"leader":"Brock","pokemon":[{"num":74,"name":"Geodude","health":1,"types":["Rock","Ground"],"stats":{"total":300,"hp":40,"attack":80,"defense":100,"speedAttack":30,"speedDefense":30,"speed":20},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":16,"type":"rock","power":50,"pp":15,"accuracy":90,"class":"physical"},{"name":31,"type":"ground","power":100,"pp":10,"accuracy":100,"class":"physical"},{"name":26,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":11,"type":"normal","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":21,"type":"normal","power":200,"pp":5,"accuracy":100,"class":"physical"},{"name":36,"type":"normal","power":250,"pp":5,"accuracy":100,"class":"physical"},{"name":31,"type":"rock","power":30,"pp":20,"accuracy":90,"class":"physical"},{"name":16,"type":"ground","power":50,"pp":30,"accuracy":100,"class":"physical"},{"name":6,"type":"ground","power":50,"pp":15,"accuracy":null,"class":"status"},{"name":31,"type":"rock","power":25,"pp":10,"accuracy":90,"class":"physical"},{"name":8,"type":"rock","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":39,"type":"rock","power":100,"pp":5,"accuracy":80,"class":"physical"},{"name":25,"type":"rock","power":50,"pp":15,"accuracy":100,"class":"physical"},{"name":32,"type":"ground","power":60,"pp":20,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"},{"num":95,"name":"Onix","health":1,"types":["Rock","Ground"],"stats":{"total":385,"hp":35,"attack":45,"defense":160,"speedAttack":30,"speedDefense":45,"speed":70},"moves":[{"name":15,"type":"normal","power":15,"pp":20,"accuracy":85,"class":"physical"},{"name":33,"type":"normal","power":80,"pp":20,"accuracy":75,"class":"physical"},{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":19,"type":"rock","power":50,"pp":15,"accuracy":90,"class":"physical"},{"name":25,"type":"normal","power":20,"pp":20,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":85,"class":"status"},{"name":43,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":36,"type":"rock","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":30,"type":"dragon","power":60,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"ground","power":50,"pp":15,"accuracy":null,"class":"status"},{"name":49,"type":"ground","power":35,"pp":15,"accuracy":85,"class":"physical"},{"name":30,"type":"rock","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":49,"type":"rock","power":100,"pp":5,"accuracy":80,"class":"physical"},{"name":22,"type":"rock","power":50,"pp":15,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"}]},{"leader":"Misty","pokemon":[{"num":120,"name":"Staryu","health":1,"types":["Water"],"stats":{"total":340,"hp":30,"attack":45,"defense":55,"speedAttack":70,"speedDefense":55,"speed":85},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":17,"type":"water","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":47,"type":"water","power":110,"pp":5,"accuracy":80,"class":"special"},{"name":27,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":22,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":37,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":40,"type":"ghost","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":42,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":32,"type":"normal","power":60,"pp":20,"accuracy":null,"class":"special"},{"name":13,"type":"normal","power":20,"pp":40,"accuracy":100,"class":"physical"},{"name":19,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":42,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":37,"type":"steel","power":50,"pp":5,"accuracy":100,"class":"physical"},{"name":46,"type":"rock","power":80,"pp":20,"accuracy":100,"class":"special"},{"name":46,"type":"normal","power":50,"pp":15,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"},{"num":121,"name":"Starmie","health":1,"types":["Water","Psychic"],"stats":{"total":520,"hp":60,"attack":75,"defense":85,"speedAttack":100,"speedDefense":85,"speed":115},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"water","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":1,"type":"water","power":110,"pp":5,"accuracy":80,"class":"special"},{"name":1,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":37,"type":"ghost","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":20,"pp":40,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":15,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"}]},{"leader":"Lt. Surge","pokemon":[{"num":100,"name":"Voltorb","health":1,"types":["Electric"],"stats":{"total":330,"hp":40,"attack":30,"defense":50,"speedAttack":55,"speedDefense":55,"speed":100},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":17,"type":"normal","power":50,"pp":20,"accuracy":90,"class":"special"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":85,"class":"status"},{"name":29,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":22,"type":"normal","power":200,"pp":5,"accuracy":100,"class":"physical"},{"name":36,"type":"normal","power":60,"pp":20,"accuracy":null,"class":"special"},{"name":43,"type":"normal","power":250,"pp":5,"accuracy":100,"class":"physical"},{"name":29,"type":"rock","power":30,"pp":20,"accuracy":90,"class":"physical"},{"name":21,"type":"electric","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":41,"type":"psychic","power":50,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"electric","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":40,"type":"steel","power":50,"pp":5,"accuracy":100,"class":"physical"},{"name":36,"type":"electric","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":37,"type":"electric","power":80,"pp":15,"accuracy":100,"class":"special"},{"name":26,"type":"electric","power":50,"pp":10,"accuracy":90,"class":"special"},{"name":29,"type":"electric","power":50,"pp":10,"accuracy":100,"class":"special"},{"name":10,"type":"electric","power":50,"pp":15,"accuracy":100,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"},{"num":25,"name":"Pikachu","health":1,"types":["Electric"],"stats":{"total":320,"hp":35,"attack":55,"defense":40,"speedAttack":50,"speedDefense":50,"speed":90},"moves":[{"name":20,"type":"normal","power":80,"pp":20,"accuracy":75,"class":"physical"},{"name":6,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":100,"class":"status"},{"name":1,"type":"electric","power":40,"pp":30,"accuracy":100,"class":"special"},{"name":9,"type":"electric","power":50,"pp":20,"accuracy":90,"class":"status"},{"name":43,"type":"electric","power":110,"pp":10,"accuracy":70,"class":"special"},{"name":33,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":16,"type":"normal","power":40,"pp":30,"accuracy":100,"class":"physical"},{"name":50,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":26,"type":"normal","power":60,"pp":20,"accuracy":null,"class":"special"},{"name":26,"type":"electric","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":29,"type":"normal","power":30,"pp":10,"accuracy":100,"class":"physical"},{"name":37,"type":"electric","power":80,"pp":15,"accuracy":100,"class":"special"},{"name":18,"type":"electric","power":50,"pp":10,"accuracy":100,"class":"special"},{"name":7,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":23,"type":"electric","power":20,"pp":20,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},{"num":26,"name":"Raichu","health":1,"types":["Electric"],"stats":{"total":485,"hp":60,"attack":90,"defense":55,"speedAttack":90,"speedDefense":80,"speed":110},"moves":[{"name":1,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":100,"class":"status"},{"name":1,"type":"electric","power":40,"pp":30,"accuracy":100,"class":"special"},{"name":1,"type":"electric","power":50,"pp":20,"accuracy":90,"class":"status"},{"name":1,"type":"normal","power":40,"pp":30,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"}]},{"leader":"Erika","pokemon":[{"num":71,"name":"Victreebel","health":1,"types":["Grass","Poison"],"stats":{"total":490,"hp":80,"attack":105,"defense":65,"speedAttack":100,"speedDefense":70,"speed":70},"moves":[{"name":1,"type":"grass","power":45,"pp":25,"accuracy":100,"class":"physical"},{"name":13,"type":"normal","power":15,"pp":20,"accuracy":90,"class":"physical"},{"name":1,"type":"poison","power":40,"pp":30,"accuracy":100,"class":"special"},{"name":1,"type":"grass","power":55,"pp":25,"accuracy":95,"class":"physical"},{"name":15,"type":"poison","power":50,"pp":35,"accuracy":75,"class":"status"},{"name":1,"type":"grass","power":50,"pp":30,"accuracy":75,"class":"status"},{"name":1,"type":"grass","power":50,"pp":15,"accuracy":75,"class":"status"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"normal","power":50,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":47,"type":"grass","power":90,"pp":15,"accuracy":100,"class":"physical"},{"name":47,"type":"grass","power":130,"pp":5,"accuracy":90,"class":"special"},{"name":27,"type":"grass","power":65,"pp":10,"accuracy":90,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"},{"num":114,"name":"Tangela","health":1,"types":["Grass"],"stats":{"total":435,"hp":65,"attack":55,"defense":115,"speedAttack":100,"speedDefense":40,"speed":60},"moves":[{"name":1,"type":"normal","power":15,"pp":20,"accuracy":85,"class":"physical"},{"name":45,"type":"normal","power":80,"pp":20,"accuracy":75,"class":"physical"},{"name":29,"type":"grass","power":45,"pp":25,"accuracy":100,"class":"physical"},{"name":29,"type":"grass","power":20,"pp":25,"accuracy":100,"class":"special"},{"name":49,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":32,"type":"poison","power":50,"pp":35,"accuracy":75,"class":"status"},{"name":36,"type":"grass","power":50,"pp":30,"accuracy":75,"class":"status"},{"name":39,"type":"grass","power":50,"pp":15,"accuracy":75,"class":"status"},{"name":1,"type":"normal","power":10,"pp":35,"accuracy":100,"class":"physical"},{"name":33,"type":"rock","power":60,"pp":5,"accuracy":100,"class":"special"},{"name":1,"type":"grass","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":36,"type":"dark","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":46,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":40,"type":"normal","power":50,"pp":15,"accuracy":100,"class":"physical"},{"name":50,"type":"normal","power":50,"pp":5,"accuracy":100,"class":"special"},{"name":54,"type":"grass","power":120,"pp":10,"accuracy":85,"class":"physical"},{"name":48,"type":"grass","power":50,"pp":10,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"},{"num":45,"name":"Vileplume","health":1,"types":["Grass","Poison"],"stats":{"total":490,"hp":75,"attack":80,"defense":85,"speedAttack":110,"speedDefense":90,"speed":50},"moves":[{"name":1,"type":"poison","power":40,"pp":30,"accuracy":100,"class":"special"},{"name":1,"type":"grass","power":20,"pp":25,"accuracy":100,"class":"special"},{"name":15,"type":"poison","power":50,"pp":35,"accuracy":75,"class":"status"},{"name":1,"type":"grass","power":50,"pp":30,"accuracy":75,"class":"status"},{"name":1,"type":"grass","power":50,"pp":15,"accuracy":75,"class":"status"},{"name":1,"type":"grass","power":120,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":1,"type":"grass","power":50,"pp":5,"accuracy":null,"class":"status"},{"name":50,"type":"grass","power":90,"pp":15,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"}]},{"leader":"Koga","pokemon":[{"num":109,"name":"Koffing","health":1,"types":["Poison"],"stats":{"total":340,"hp":40,"attack":65,"defense":95,"speedAttack":60,"speedDefense":45,"speed":35},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":37,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":45,"type":"ice","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":40,"type":"normal","power":200,"pp":5,"accuracy":100,"class":"physical"},{"name":1,"type":"poison","power":30,"pp":20,"accuracy":70,"class":"special"},{"name":32,"type":"poison","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"poison","power":50,"pp":40,"accuracy":90,"class":"status"},{"name":48,"type":"normal","power":250,"pp":5,"accuracy":100,"class":"physical"},{"name":45,"type":"ghost","power":50,"pp":5,"accuracy":null,"class":"status"},{"name":49,"type":"dark","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":33,"type":"steel","power":50,"pp":5,"accuracy":100,"class":"physical"},{"name":15,"type":"dark","power":60,"pp":10,"accuracy":100,"class":"physical"},{"name":19,"type":"poison","power":50,"pp":15,"accuracy":null,"class":"special"},{"name":42,"type":"poison","power":120,"pp":10,"accuracy":90,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"},{"num":109,"name":"Koffing","health":1,"types":["Poison"],"stats":{"total":340,"hp":40,"attack":65,"defense":95,"speedAttack":60,"speedDefense":45,"speed":35},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":37,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":45,"type":"ice","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":40,"type":"normal","power":200,"pp":5,"accuracy":100,"class":"physical"},{"name":1,"type":"poison","power":30,"pp":20,"accuracy":70,"class":"special"},{"name":32,"type":"poison","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"poison","power":50,"pp":40,"accuracy":90,"class":"status"},{"name":48,"type":"normal","power":250,"pp":5,"accuracy":100,"class":"physical"},{"name":45,"type":"ghost","power":50,"pp":5,"accuracy":null,"class":"status"},{"name":49,"type":"dark","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":33,"type":"steel","power":50,"pp":5,"accuracy":100,"class":"physical"},{"name":15,"type":"dark","power":60,"pp":10,"accuracy":100,"class":"physical"},{"name":19,"type":"poison","power":50,"pp":15,"accuracy":null,"class":"special"},{"name":42,"type":"poison","power":120,"pp":10,"accuracy":90,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"},{"num":89,"name":"Muk","health":1,"types":["Poison"],"stats":{"total":500,"hp":105,"attack":105,"defense":75,"speedAttack":65,"speedDefense":100,"speed":50},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":53,"type":"normal","power":50,"pp":40,"accuracy":85,"class":"status"},{"name":45,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":33,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":37,"type":"poison","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"poison","power":50,"pp":40,"accuracy":90,"class":"status"},{"name":60,"type":"poison","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":60,"type":"poison","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":61,"type":"dark","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":28,"type":"dark","power":50,"pp":10,"accuracy":100,"class":"physical"},{"name":23,"type":"ground","power":65,"pp":10,"accuracy":85,"class":"special"},{"name":54,"type":"poison","power":120,"pp":5,"accuracy":80,"class":"physical"},{"name":50,"type":"poison","power":95,"pp":10,"accuracy":100,"class":"special"},{"name":53,"type":"poison","power":120,"pp":10,"accuracy":90,"class":"special"},{"name":38,"type":"poison","power":50,"pp":20,"accuracy":100,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"},{"num":110,"name":"Weezing","health":1,"types":["Poison"],"stats":{"total":490,"hp":65,"attack":90,"defense":120,"speedAttack":85,"speedDefense":70,"speed":60},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":39,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":49,"type":"ice","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":43,"type":"normal","power":200,"pp":5,"accuracy":100,"class":"physical"},{"name":1,"type":"poison","power":30,"pp":20,"accuracy":70,"class":"special"},{"name":1,"type":"poison","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"poison","power":50,"pp":40,"accuracy":90,"class":"status"},{"name":53,"type":"normal","power":250,"pp":5,"accuracy":100,"class":"physical"},{"name":51,"type":"ghost","power":50,"pp":5,"accuracy":null,"class":"status"},{"name":58,"type":"dark","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":15,"type":"dark","power":60,"pp":10,"accuracy":100,"class":"physical"},{"name":33,"type":"normal","power":35,"pp":10,"accuracy":90,"class":"physical"},{"name":19,"type":"poison","power":50,"pp":15,"accuracy":null,"class":"special"},{"name":50,"type":"poison","power":120,"pp":10,"accuracy":90,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"}]},{"leader":"Sabrina","pokemon":[{"num":64,"name":"Kadabra","health":1,"types":["Psychic"],"stats":{"total":400,"hp":40,"attack":35,"defense":30,"speedAttack":120,"speedDefense":70,"speed":105},"moves":[{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":27,"type":"psychic","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":50,"pp":25,"accuracy":100,"class":"special"},{"name":38,"type":"psychic","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":31,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":42,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":15,"accuracy":80,"class":"status"},{"name":31,"type":"psychic","power":120,"pp":10,"accuracy":100,"class":"special"},{"name":43,"type":"psychic","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":33,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":22,"type":"psychic","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":34,"type":"psychic","power":70,"pp":20,"accuracy":100,"class":"physical"},{"name":34,"type":"psychic","power":50,"pp":15,"accuracy":null,"class":"status"},{"name":24,"type":"psychic","power":50,"pp":15,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"},{"num":122,"name":"Mr. Mime","health":1,"types":["Psychic","Fairy"],"stats":{"total":460,"hp":40,"attack":45,"defense":65,"speedAttack":100,"speedDefense":120,"speed":90},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":31,"type":"normal","power":15,"pp":10,"accuracy":85,"class":"physical"},{"name":36,"type":"psychic","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":50,"pp":25,"accuracy":100,"class":"special"},{"name":39,"type":"psychic","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":23,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":47,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":46,"type":"normal","power":50,"pp":25,"accuracy":null,"class":"status"},{"name":41,"type":"normal","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":31,"type":"normal","power":50,"pp":5,"accuracy":100,"class":"status"},{"name":37,"type":"psychic","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":41,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":33,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":22,"type":"grass","power":60,"pp":20,"accuracy":null,"class":"special"},{"name":4,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":1,"type":"rock","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":1,"type":"fighting","power":50,"pp":15,"accuracy":null,"class":"status"},{"name":1,"type":"fairy","power":50,"pp":10,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"},{"num":49,"name":"Venomoth","health":1,"types":["Bug","Poison"],"stats":{"total":450,"hp":70,"attack":65,"defense":60,"speedAttack":90,"speedDefense":75,"speed":90},"moves":[{"name":31,"type":"flying","power":40,"pp":35,"accuracy":100,"class":"special"},{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":55,"class":"status"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":38,"type":"psychic","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"poison","power":50,"pp":35,"accuracy":75,"class":"status"},{"name":30,"type":"grass","power":50,"pp":30,"accuracy":75,"class":"status"},{"name":43,"type":"grass","power":50,"pp":15,"accuracy":75,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":25,"accuracy":100,"class":"special"},{"name":50,"type":"psychic","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"bug","power":80,"pp":10,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":47,"type":"poison","power":50,"pp":15,"accuracy":100,"class":"physical"},{"name":1,"type":"bug","power":60,"pp":5,"accuracy":100,"class":"special"},{"name":37,"type":"bug","power":75,"pp":15,"accuracy":100,"class":"special"},{"name":59,"type":"bug","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":41,"type":"psychic","power":80,"pp":15,"accuracy":90,"class":"physical"},{"name":63,"type":"bug","power":50,"pp":20,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"},{"num":65,"name":"Alakazam","health":1,"types":["Psychic"],"stats":{"total":500,"hp":55,"attack":50,"defense":45,"speedAttack":135,"speedDefense":95,"speed":120},"moves":[{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":27,"type":"psychic","power":65,"pp":20,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":50,"pp":25,"accuracy":100,"class":"special"},{"name":38,"type":"psychic","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":31,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":42,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":15,"accuracy":80,"class":"status"},{"name":31,"type":"psychic","power":120,"pp":10,"accuracy":100,"class":"special"},{"name":43,"type":"psychic","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":33,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":22,"type":"psychic","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":34,"type":"psychic","power":70,"pp":20,"accuracy":100,"class":"physical"},{"name":34,"type":"psychic","power":50,"pp":15,"accuracy":null,"class":"status"},{"name":24,"type":"psychic","power":50,"pp":15,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"}]},{"leader":"Blaine","pokemon":[{"num":58,"name":"Growlithe","health":1,"types":["Fire"],"stats":{"total":350,"hp":55,"attack":70,"defense":45,"speedAttack":70,"speedDefense":50,"speed":60},"moves":[{"name":30,"type":"normal","power":90,"pp":20,"accuracy":85,"class":"physical"},{"name":23,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":1,"type":"dark","power":60,"pp":25,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":18,"type":"fire","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":50,"type":"fire","power":90,"pp":15,"accuracy":100,"class":"special"},{"name":39,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":34,"type":"fire","power":60,"pp":25,"accuracy":100,"class":"physical"},{"name":25,"type":"fighting","power":50,"pp":15,"accuracy":100,"class":"physical"},{"name":43,"type":"dragon","power":120,"pp":10,"accuracy":100,"class":"physical"},{"name":37,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":19,"type":"normal","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":48,"type":"fire","power":120,"pp":15,"accuracy":100,"class":"physical"},{"name":28,"type":"fire","power":65,"pp":15,"accuracy":95,"class":"physical"},{"name":31,"type":"fire","power":70,"pp":15,"accuracy":100,"class":"special"},{"name":48,"type":"normal","power":70,"pp":5,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"},{"num":77,"name":"Ponyta","health":1,"types":["Fire"],"stats":{"total":410,"hp":50,"attack":85,"defense":55,"speedAttack":65,"speedDefense":65,"speed":90},"moves":[{"name":32,"type":"normal","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":43,"type":"normal","power":90,"pp":20,"accuracy":85,"class":"physical"},{"name":30,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":35,"type":"normal","power":50,"pp":40,"accuracy":100,"class":"status"},{"name":1,"type":"fire","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":39,"type":"fire","power":35,"pp":15,"accuracy":85,"class":"special"},{"name":48,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":45,"type":"flying","power":85,"pp":5,"accuracy":85,"class":"physical"},{"name":48,"type":"fire","power":120,"pp":15,"accuracy":100,"class":"physical"},{"name":21,"type":"fire","power":50,"pp":20,"accuracy":100,"class":"physical"},{"name":33,"type":"fire","power":100,"pp":5,"accuracy":50,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"},{"num":78,"name":"Rapidash","health":1,"types":["Fire"],"stats":{"total":500,"hp":65,"attack":100,"defense":70,"speedAttack":80,"speedDefense":80,"speed":105},"moves":[{"name":1,"type":"normal","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":40,"type":"normal","power":15,"pp":20,"accuracy":85,"class":"physical"},{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":47,"type":"normal","power":90,"pp":20,"accuracy":85,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":100,"class":"status"},{"name":1,"type":"fire","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":39,"type":"fire","power":35,"pp":15,"accuracy":85,"class":"special"},{"name":55,"type":"psychic","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":1,"type":"normal","power":40,"pp":30,"accuracy":100,"class":"physical"},{"name":15,"type":"fire","power":60,"pp":25,"accuracy":100,"class":"physical"},{"name":1,"type":"bug","power":120,"pp":10,"accuracy":85,"class":"physical"},{"name":50,"type":"flying","power":85,"pp":5,"accuracy":85,"class":"physical"},{"name":58,"type":"fire","power":120,"pp":15,"accuracy":100,"class":"physical"},{"name":1,"type":"poison","power":80,"pp":20,"accuracy":100,"class":"physical"},{"name":21,"type":"fire","power":50,"pp":20,"accuracy":100,"class":"physical"},{"name":33,"type":"fire","power":100,"pp":5,"accuracy":50,"class":"special"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"},{"num":59,"name":"Arcanine","health":1,"types":["Fire"],"stats":{"total":555,"hp":90,"attack":110,"defense":80,"speedAttack":100,"speedDefense":80,"speed":95},"moves":[{"name":1,"type":"normal","power":90,"pp":20,"accuracy":85,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":1,"type":"dark","power":60,"pp":25,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"fire","power":40,"pp":25,"accuracy":100,"class":"special"},{"name":1,"type":"fire","power":60,"pp":25,"accuracy":100,"class":"physical"},{"name":50,"type":"normal","power":80,"pp":5,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":1,"type":"electric","power":65,"pp":15,"accuracy":95,"class":"physical"},{"name":1,"type":"fire","power":65,"pp":15,"accuracy":95,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"}]},{"leader":"Giovanni","pokemon":[{"num":51,"name":"Dugtrio","health":1,"types":["Ground"],"stats":{"total":425,"hp":35,"attack":100,"defense":50,"speedAttack":50,"speedDefense":70,"speed":120},"moves":[{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":24,"type":"ground","power":50,"pp":15,"accuracy":100,"class":"status"},{"name":1,"type":"normal","power":50,"pp":40,"accuracy":100,"class":"status"},{"name":47,"type":"ground","power":100,"pp":10,"accuracy":100,"class":"physical"},{"name":1,"type":"ground","power":80,"pp":10,"accuracy":100,"class":"physical"},{"name":21,"type":"normal","power":18,"pp":15,"accuracy":80,"class":"physical"},{"name":1,"type":"normal","power":80,"pp":10,"accuracy":100,"class":"special"},{"name":35,"type":"normal","power":70,"pp":20,"accuracy":100,"class":"physical"},{"name":1,"type":"ground","power":50,"pp":30,"accuracy":100,"class":"physical"},{"name":7,"type":"ghost","power":30,"pp":15,"accuracy":100,"class":"physical"},{"name":26,"type":"ground","power":35,"pp":15,"accuracy":85,"class":"physical"},{"name":23,"type":"dark","power":70,"pp":5,"accuracy":100,"class":"physical"},{"name":1,"type":"dark","power":70,"pp":15,"accuracy":100,"class":"physical"},{"name":28,"type":"ground","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":33,"type":"ground","power":65,"pp":10,"accuracy":85,"class":"special"},{"name":18,"type":"ground","power":60,"pp":20,"accuracy":100,"class":"physical"},{"name":1,"type":"ground","power":50,"pp":10,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"},{"num":34,"name":"Nidoking","health":1,"types":["Poison","Ground"],"stats":{"total":505,"hp":81,"attack":102,"defense":77,"speedAttack":85,"speedDefense":75,"speed":85},"moves":[{"name":12,"type":"fighting","power":30,"pp":30,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":65,"pp":25,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":40,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":120,"pp":10,"accuracy":100,"class":"physical"},{"name":1,"type":"poison","power":15,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"flying","power":35,"pp":35,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":43,"type":"bug","power":120,"pp":10,"accuracy":85,"class":"physical"},{"name":43,"type":"ground","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":23,"type":"normal","power":70,"pp":20,"accuracy":100,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"},{"num":112,"name":"Rhydon","health":1,"types":["Ground","Rock"],"stats":{"total":485,"hp":105,"attack":130,"defense":120,"speedAttack":45,"speedDefense":45,"speed":40},"moves":[{"name":1,"type":"normal","power":65,"pp":20,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":65,"pp":25,"accuracy":100,"class":"physical"},{"name":1,"type":"normal","power":15,"pp":20,"accuracy":85,"class":"physical"},{"name":48,"type":"normal","power":50,"pp":5,"accuracy":30,"class":"physical"},{"name":64,"type":"normal","power":90,"pp":20,"accuracy":85,"class":"physical"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":55,"type":"normal","power":50,"pp":30,"accuracy":100,"class":"status"},{"name":31,"type":"normal","power":50,"pp":10,"accuracy":100,"class":"status"},{"name":66,"type":"bug","power":120,"pp":10,"accuracy":85,"class":"physical"},{"name":29,"type":"rock","power":25,"pp":10,"accuracy":90,"class":"physical"},{"name":42,"type":"fighting","power":100,"pp":10,"accuracy":90,"class":"physical"},{"name":45,"type":"rock","power":100,"pp":5,"accuracy":80,"class":"physical"},{"name":34,"type":"normal","power":70,"pp":20,"accuracy":100,"class":"physical"},{"name":30,"type":"ground","power":60,"pp":20,"accuracy":100,"class":"physical"},{"name":47,"type":"ground","power":80,"pp":10,"accuracy":95,"class":"physical"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"},{"num":150,"name":"Mewtwo","health":1,"types":["Psychic"],"stats":{"total":680,"hp":106,"attack":110,"defense":90,"speedAttack":154,"speedDefense":90,"speed":130},"moves":[{"name":1,"type":"normal","power":50,"pp":20,"accuracy":100,"class":"status"},{"name":75,"type":"ice","power":50,"pp":30,"accuracy":null,"class":"status"},{"name":1,"type":"psychic","power":50,"pp":25,"accuracy":100,"class":"special"},{"name":1,"type":"psychic","power":90,"pp":10,"accuracy":100,"class":"special"},{"name":70,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":63,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":1,"type":"normal","power":60,"pp":20,"accuracy":null,"class":"special"},{"name":81,"type":"psychic","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":99,"type":"normal","power":50,"pp":25,"accuracy":null,"class":"status"},{"name":33,"type":"normal","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":44,"type":"psychic","power":120,"pp":10,"accuracy":100,"class":"special"},{"name":36,"type":"psychic","power":50,"pp":40,"accuracy":null,"class":"status"},{"name":79,"type":"normal","power":50,"pp":20,"accuracy":null,"class":"status"},{"name":64,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":64,"type":"psychic","power":50,"pp":10,"accuracy":null,"class":"status"},{"name":100,"type":"fighting","power":80,"pp":20,"accuracy":null,"class":"special"},{"name":50,"type":"psychic","power":70,"pp":20,"accuracy":100,"class":"physical"},{"name":100,"type":"psychic","power":100,"pp":10,"accuracy":100,"class":"special"},{"name":1,"type":"normal","power":50,"pp":30,"accuracy":null,"class":"status"}],"images":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"}]}]');

/***/ })

}]);
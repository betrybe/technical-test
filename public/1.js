(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Currency.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Currency.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      errors: '',
      currencies: [],
      currencies_model: [],
      currency: '',
      current_value: '',
      value: ''
    };
  },
  mounted: function mounted() {
    this.fetchCurrencies();
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.axios.put("crypto/btc", {
        currency: this.currency,
        value: this.value
      }).then(function (response) {
        _this.currency = '';
        _this.value = '';
        _this.current_value = '';

        _this.$toastr.s("Taxa de conversão atualizada com sucesso!", "Sucesso");

        _this.handleSubmit();
      })["catch"](function (error) {
        _this.has_error = true;

        if (error.response.status === 422) {
          _this.$toastr.w("Verifique os dados preenchidos e tente novamente", "Existem erros no formulário");

          _this.errors = error.response.data.errors || {};
        }

        if (error.response.status === 500) {
          _this.$toastr.e("Caso o problema persista entre em contato com o Administrador", "Erro ao tentar cadastrar uma disciplina");
        }
      });
    },
    fetchCurrencies: function fetchCurrencies() {
      var _this2 = this;

      this.axios.get("currencies").then(function (response) {
        _this2.currencies = response.data.data;
        _this2.currencies_model = response.data.currencies;
      });
    },
    handleSubmit: function handleSubmit() {
      this.$router.push({
        name: "currency"
      });
    },
    onChange: function onChange(value) {
      this.current_value = this.currencies_model[this.currency];
    },
    redirectToHome: function redirectToHome() {
      var redirectTo;
      redirectTo = 'home';
      this.$router.push({
        name: redirectTo
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "flex-center position-ref full-height" }, [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "title m-b-md" }, [
          _vm._v("\n                BeTryBe\n            ")
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card card-primary" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: { autocomplete: "off" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currency,
                            expression: "currency"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.errors.currency },
                        attrs: { id: "currency" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.currency = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.onChange()
                            }
                          ]
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "", disabled: "", selected: "" } },
                          [_vm._v("Selecione")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.currencies, function(currencie) {
                          return _c(
                            "option",
                            { domProps: { value: currencie.currency } },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(currencie.currency) +
                                  "\n                                    "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "pt-6" }, [
                      _vm._v(
                        "\n                                    Valor Atual: " +
                          _vm._s(_vm.current_value) +
                          "\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 form-group" }, [
                    _c("label", { attrs: { for: "room" } }, [
                      _vm._v(
                        "\n                                    Novo Valor\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "room", placeholder: "Valor" },
                      domProps: { value: _vm.value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.value = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn float-left",
                    staticStyle: { background: "#38c172", color: "#ffffff" },
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        return _vm.redirectToHome()
                      }
                    }
                  },
                  [_vm._v("Voltar\n                        ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary float-right",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Atualizar")]
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticStyle: { "font-size": "30px" } }, [
        _vm._v("Taxa de conversão de Bitcoins")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Atualização de valor monetário")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "currency" } }, [
      _vm._v("Moeda "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Currency.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Currency.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currency.vue?vue&type=template&id=5000ebcc& */ "./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc&");
/* harmony import */ var _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currency.vue?vue&type=script&lang=js& */ "./resources/js/pages/Currency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Currency.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Currency.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Currency.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Currency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Currency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Currency.vue?vue&type=template&id=5000ebcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Currency.vue?vue&type=template&id=5000ebcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_5000ebcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
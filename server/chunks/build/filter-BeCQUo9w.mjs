import __nuxt_component_0$2 from './Icon--TZmBuOU.mjs';
import { _ as __nuxt_component_2$1 } from './TransitionExpand-1LcTUCjo.mjs';
import { u as useRouter, a as useI18n, _ as __nuxt_component_2$2, b as useRoute } from './server.mjs';
import { DatePicker } from 'v-calendar';
import { useSSRContext, ref, resolveDirective, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, isRef, toDisplayString, Fragment, renderList, withDirectives, vModelRadio } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
import { useScreens } from 'vue-screen-utils';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Carousel, Slide } from 'vue3-carousel/dist/carousel.js';
import { format, addDay } from '@formkit/tempo';
import './index-C89mM8N_.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@morev/vue-transitions';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$7 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { locale } = useI18n();
    ref([
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]);
    const { mapCurrent } = useScreens({
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px"
    });
    const columns = mapCurrent({ lg: 2 }, 1);
    const expanded = mapCurrent({ lg: false }, true);
    const range = ref({
      start: Date.now(),
      end: Date.now()
    });
    const cancelAndResetCalender = () => {
      firstDate.value = false;
      range.value = {
        start: new Date(Date.now()),
        end: new Date(Date.now())
      };
    };
    const Passenger = ref(false);
    const clickOutFirstOrigin = () => {
      if (Passenger.value) {
        Passenger.value = false;
      }
    };
    const date = ref(false);
    const clickOutDate = () => {
      if (date.value) {
        date.value = false;
      }
    };
    const way = ref(false);
    const clickOutWay = () => {
      if (way.value) {
        way.value = false;
      }
    };
    const financial = ref(false);
    const clickOutfinancial = () => {
      if (financial.value) {
        financial.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0$2;
      const _component_TransitionExpand = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_2$2;
      const _component_VDatePicker = DatePicker;
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex justify-center bg-blue-500 w-full h-28" }, _attrs))} data-v-831c8cb3><section class="bg-white gap-5 absolute top-1/2 p-5 max-w-6xl w-full mx-auto rounded-xl flex flex-col" data-v-831c8cb3><div class="flex gap-6" data-v-831c8cb3><div${ssrRenderAttrs(mergeProps({ class: "flex cursor-pointer relative items-center gap-2" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutWay)))} data-v-831c8cb3><div data-v-831c8cb3><span data-v-831c8cb3>\u06CC\u06A9 \u0637\u0631\u0641\u0647</span>`);
      _push(ssrRenderComponent(_component_icon, { name: "icon-park-outline:down" }, null, _parent));
      _push(`</div><div class="absolute bottom-0 left-0 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-831c8cb3>`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(way)) {
              _push2(`<div class="flex flex-col gap-2 rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0" data-v-831c8cb3${_scopeId}><span class="border-b py-2" data-v-831c8cb3${_scopeId}>\u06CC\u06A9 \u0637\u0631\u0641\u0647</span><span class="border-b py-2" data-v-831c8cb3${_scopeId}>\u0631\u0641\u062A \u0648 \u0628\u0631\u06AF\u0634\u062A</span><span class="border-b py-2" data-v-831c8cb3${_scopeId}>\u0686\u0646\u062F \u0645\u0633\u06CC\u0631\u0647</span><div class="flex items-center gap-2" data-v-831c8cb3${_scopeId}><button class="btn-outline w-full" data-v-831c8cb3${_scopeId}>\u0627\u0646\u0635\u0631\u0627\u0641</button><button class="btn-primary w-full" data-v-831c8cb3${_scopeId}>\u062A\u0627\u06CC\u06CC\u062F</button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(way) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col gap-2 rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0"
              }, [
                createVNode("span", { class: "border-b py-2" }, "\u06CC\u06A9 \u0637\u0631\u0641\u0647"),
                createVNode("span", { class: "border-b py-2" }, "\u0631\u0641\u062A \u0648 \u0628\u0631\u06AF\u0634\u062A"),
                createVNode("span", { class: "border-b py-2" }, "\u0686\u0646\u062F \u0645\u0633\u06CC\u0631\u0647"),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("button", { class: "btn-outline w-full" }, "\u0627\u0646\u0635\u0631\u0627\u0641"),
                  createVNode("button", { class: "btn-primary w-full" }, "\u062A\u0627\u06CC\u06CC\u062F")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "flex cursor-pointer relative items-center gap-2" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutfinancial)))} data-v-831c8cb3><span data-v-831c8cb3>\u0627\u0642\u062A\u0635\u0627\u062F\u06CC</span>`);
      _push(ssrRenderComponent(_component_icon, { name: "icon-park-outline:down" }, null, _parent));
      _push(`<div class="absolute bottom-0 left-0 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-831c8cb3>`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(financial)) {
              _push2(`<div class="flex flex-col rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0" data-v-831c8cb3${_scopeId}><span class="border-b py-2" data-v-831c8cb3${_scopeId}>\u0627\u0642\u062A\u0635\u0627\u062F\u06CC</span><span class="border-b py-2" data-v-831c8cb3${_scopeId}>\u067E\u0631\u06CC\u0645\u06CC\u0648\u0645</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(financial) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0"
              }, [
                createVNode("span", { class: "border-b py-2" }, "\u0627\u0642\u062A\u0635\u0627\u062F\u06CC"),
                createVNode("span", { class: "border-b py-2" }, "\u067E\u0631\u06CC\u0645\u06CC\u0648\u0645")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex flex-col lg:flex-row gap-2" data-v-831c8cb3><div class="justify-center flex flex-col gap-5 lg:gap-0 lg:flex-row relative" data-v-831c8cb3><input type="text" placeholder="\u0645\u0628\u062F\u0627" class="border border-[#DCDFE4] px-6 py-[10px] rounded-2xl outline-blue-300" data-v-831c8cb3><button type="button" class="h-full" data-v-831c8cb3>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "humbleicons:exchange-horizontal",
        class: "w-[50px] rotate-90 lg:rotate-0 h-[50px] rounded-[50%] absolute bg-white border-2 left-5 lg:-translate-x-1/2 lg:left-1/2 -translate-y-1/2 top-1/2 p-3 flex justify-center items-center"
      }, null, _parent));
      _push(`<input class="border h-full border-[#DCDFE4] px-5 placeholder:px-3 py-[10px] w-full rounded-2xl outline-blue-300" type="text" placeholder="\u0645\u0642\u0635\u062F" data-v-831c8cb3></button></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer flex-grow" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutDate)))} data-v-831c8cb3><div data-v-831c8cb3><p class="text-sm text-[#938F96]" data-v-831c8cb3>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A - \u0628\u0631\u06AF\u0634\u062A</p><p class="font-bold" data-v-831c8cb3>25 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 - 14 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A</p></div><div class="absolute bottom-0 right-0 top-16 z-50 h-max w-max bg-white shadow-xl rounded-lg px-4" data-v-831c8cb3>`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(date)) {
              _push2(`<div class="flex flex-col" data-v-831c8cb3${_scopeId}><div class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center" data-v-831c8cb3${_scopeId}><h6 class="text-xl font-bold" data-v-831c8cb3${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A</h6><div class="flex items-center gap-3" data-v-831c8cb3${_scopeId}><span class="text-blue-500 font-semibold cursor-pointer" data-v-831c8cb3${_scopeId}>\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632</span><div class="flex items-center gap-2" data-v-831c8cb3${_scopeId}><div class="checkbox-wrapper-34" data-v-831c8cb3${_scopeId}><input class="tgl tgl-ios" id="toggle-34" type="checkbox" data-v-831c8cb3${_scopeId}><label class="tgl-btn" for="toggle-34" data-v-831c8cb3${_scopeId}></label></div><p class="text-gray-600" data-v-831c8cb3${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u06AF\u0634\u062A</p></div></div></div><div class="m-2 border-b" data-v-831c8cb3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col lg:flex-row justify-between mb-2 items-center" data-v-831c8cb3${_scopeId}><div class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg" data-v-831c8cb3${_scopeId}><button class="text-gray-700" data-v-831c8cb3${_scopeId}>\u0645\u06CC\u0644\u0627\u062F\u06CC</button><button class="text-blue-500 bg-white p-2 rounded-lg" data-v-831c8cb3${_scopeId}> \u0634\u0645\u0633\u06CC </button></div><div class="flex items-center gap-2 p-2.5" data-v-831c8cb3${_scopeId}><button class="btn-outline px-8 py-3" data-v-831c8cb3${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button><button class="btn-primary px-8 py-3" data-v-831c8cb3${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(date) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col"
              }, [
                createVNode("div", { class: "flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center" }, [
                  createVNode("h6", { class: "text-xl font-bold" }, "\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A"),
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("span", { class: "text-blue-500 font-semibold cursor-pointer" }, "\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632"),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "checkbox-wrapper-34" }, [
                        createVNode("input", {
                          class: "tgl tgl-ios",
                          id: "toggle-34",
                          type: "checkbox"
                        }),
                        createVNode("label", {
                          class: "tgl-btn",
                          for: "toggle-34"
                        })
                      ]),
                      createVNode("p", { class: "text-gray-600" }, "\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u06AF\u0634\u062A")
                    ])
                  ])
                ]),
                createVNode("div", { class: "m-2 border-b" }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_VDatePicker, {
                        locale: unref(locale),
                        modelValue: unref(range),
                        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                        modelModifiers: { range: true },
                        columns: unref(columns),
                        expanded: unref(expanded)
                      }, null, 8, ["locale", "modelValue", "onUpdate:modelValue", "columns", "expanded"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex flex-col lg:flex-row justify-between mb-2 items-center" }, [
                  createVNode("div", { class: "flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg" }, [
                    createVNode("button", { class: "text-gray-700" }, "\u0645\u06CC\u0644\u0627\u062F\u06CC"),
                    createVNode("button", { class: "text-blue-500 bg-white p-2 rounded-lg" }, " \u0634\u0645\u0633\u06CC ")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 p-2.5" }, [
                    createVNode("button", {
                      onClick: cancelAndResetCalender,
                      class: "btn-outline px-8 py-3"
                    }, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
                    createVNode("button", {
                      onClick: ($event) => _ctx.firstDate = !_ctx.firstDate,
                      class: "btn-primary px-8 py-3"
                    }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutFirstOrigin)))} data-v-831c8cb3><div data-v-831c8cb3><p class="text-sm text-[#938F96]" data-v-831c8cb3>\u0645\u0633\u0627\u0641\u0631\u0627\u0646</p><p class="font-bold" data-v-831c8cb3>2 \u0628\u0632\u0631\u06AF\u0633\u0627\u0644 - 1 \u06A9\u0648\u062F\u06A9</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-831c8cb3>`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(Passenger)) {
              _push2(`<div class="flex flex-col rounded-lg z-50 bg-white shadow w-[15rem] absolute right-0 top-0" data-v-831c8cb3${_scopeId}><div class="flex items-center border-b p-2.5 justify-between" data-v-831c8cb3${_scopeId}><span class="font-semibold" data-v-831c8cb3${_scopeId}>\u0628\u0632\u06AF\u0633\u0627\u0644</span><div class="flex items-center gap-2" data-v-831c8cb3${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-831c8cb3${_scopeId}></path></svg></button><span data-v-831c8cb3${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-831c8cb3${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-831c8cb3${_scopeId}><span class="font-semibold" data-v-831c8cb3${_scopeId}>\u06A9\u0648\u062F\u06A9</span><div class="flex items-center gap-2" data-v-831c8cb3${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-831c8cb3${_scopeId}></path></svg></button><span data-v-831c8cb3${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-831c8cb3${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-831c8cb3${_scopeId}><span class="font-semibold" data-v-831c8cb3${_scopeId}>\u0646\u0648\u0632\u0627\u062F</span><div class="flex items-center gap-2" data-v-831c8cb3${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-831c8cb3${_scopeId}></path></svg></button><span data-v-831c8cb3${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-831c8cb3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-831c8cb3${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-831c8cb3${_scopeId}></path></svg></button></div></div><div class="flex items-center gap-2 p-2.5" data-v-831c8cb3${_scopeId}><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500" data-v-831c8cb3${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500" data-v-831c8cb3${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(Passenger) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col rounded-lg z-50 bg-white shadow w-[15rem] absolute right-0 top-0"
              }, [
                createVNode("div", { class: "flex items-center border-b p-2.5 justify-between" }, [
                  createVNode("span", { class: "font-semibold" }, "\u0628\u0632\u06AF\u0633\u0627\u0644"),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        })
                      ]))
                    ]),
                    createVNode("span", null, "0"),
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 256 256"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center border-b p-2.5 justify-between" }, [
                  createVNode("span", { class: "font-semibold" }, "\u06A9\u0648\u062F\u06A9"),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        })
                      ]))
                    ]),
                    createVNode("span", null, "0"),
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 256 256"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center border-b p-2.5 justify-between" }, [
                  createVNode("span", { class: "font-semibold" }, "\u0646\u0648\u0632\u0627\u062F"),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        })
                      ]))
                    ]),
                    createVNode("span", null, "0"),
                    createVNode("button", { class: "rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 256 256"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 p-2.5" }, [
                  createVNode("button", {
                    onClick: ($event) => Passenger.value = false,
                    class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                  }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"]),
                  createVNode("button", {
                    onClick: ($event) => Passenger.value = false,
                    class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                  }, " \u0627\u0646\u0635\u0631\u0627\u0641 ", 8, ["onClick"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><button class="btn-primary px-10" data-v-831c8cb3>\u062C\u0633\u062A\u062C\u0648</button></div></section></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Booking/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-831c8cb3"]]);
const _sfc_main$6 = {
  __name: "filter",
  __ssrInlineRender: true,
  setup(__props) {
    const stop = ref(false);
    const flightType = ref(false);
    const ticketType = ref(false);
    const period = ref(false);
    const airLine = ref(false);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_TransitionExpand = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "lg:flex hidden flex-col gap-5" }, _attrs))}><main class="shadow rounded-xl bg-white p-2 w-64"><div class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"><div class="flex gap-2 items-center"><button type="button"><span class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("filter.stop.title"))}</span></button></div><div class="${ssrRenderClass([{ "rotate-180": unref(stop) }, "text-xl transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:down-line" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(stop)) {
              _push2(`<div class="flex mt-2.5 flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.stop.non_stop"))}</span></div><div class="flex gap-10"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.stop.stops1"))}</span></div><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.stop.stops2"))}</span></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(stop) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex mt-2.5 flex-col"
              }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("input", {
                    type: "checkbox",
                    class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                  }),
                  createVNode("span", null, toDisplayString(_ctx.$t("filter.stop.non_stop")), 1)
                ]),
                createVNode("div", { class: "flex gap-10" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.stop.stops1")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.stop.stops2")), 1)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><main class="shadow rounded-xl bg-white p-2 w-64"><div class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"><div class="flex gap-2 items-center"><button type="button"><span class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("filter.flight_type.title"))}</span></button></div><div class="${ssrRenderClass([{ "rotate-180": unref(flightType) }, "text-xl transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:down-line" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(flightType)) {
              _push2(`<div class="flex mt-2.5 flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.flight_type.op1"))}</span></div><div class="flex gap-10"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.flight_type.op2"))}</span></div><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.flight_type.op3"))}</span></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(flightType) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex mt-2.5 flex-col"
              }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("input", {
                    type: "checkbox",
                    class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                  }),
                  createVNode("span", null, toDisplayString(_ctx.$t("filter.flight_type.op1")), 1)
                ]),
                createVNode("div", { class: "flex gap-10" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.flight_type.op2")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.flight_type.op3")), 1)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><main class="shadow rounded-xl bg-white p-2 w-64"><div class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"><div class="flex gap-2 items-center"><button type="button"><span class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("filter.ticket_type.title"))}</span></button></div><div class="${ssrRenderClass([{ "rotate-180": unref(ticketType) }, "text-xl transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:down-line" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(ticketType)) {
              _push2(`<div class="flex mt-2.5 flex-col"${_scopeId}><div class="flex gap-10"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.ticket_type.op1"))}</span></div><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.ticket_type.op2"))}</span></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(ticketType) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex mt-2.5 flex-col"
              }, [
                createVNode("div", { class: "flex gap-10" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.ticket_type.op1")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.ticket_type.op2")), 1)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><main class="shadow rounded-xl bg-white p-2 w-64"><div class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"><div class="flex gap-2 items-center"><button type="button"><span class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("filter.period.title"))}</span></button></div><div class="${ssrRenderClass([{ "rotate-180": unref(period) }, "text-xl transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:down-line" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(period)) {
              _push2(`<div class="flex mt-2.5 flex-col"${_scopeId}><div class="flex justify-between items-center gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.period.op1"))}</span></div><span${_scopeId}>0-6</span></div><div class="flex justify-between items-center gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.period.op2"))}</span></div><span${_scopeId}>6-12</span></div><div class="flex justify-between items-center gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.period.op3"))}</span></div><span${_scopeId}>12-18</span></div><div class="flex justify-between items-center gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.period.op4"))}</span></div><span${_scopeId}>18-24</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(period) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex mt-2.5 flex-col"
              }, [
                createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.period.op1")), 1)
                  ]),
                  createVNode("span", null, "0-6")
                ]),
                createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.period.op2")), 1)
                  ]),
                  createVNode("span", null, "6-12")
                ]),
                createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.period.op3")), 1)
                  ]),
                  createVNode("span", null, "12-18")
                ]),
                createVNode("div", { class: "flex justify-between items-center gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("filter.period.op4")), 1)
                  ]),
                  createVNode("span", null, "18-24")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><main class="shadow rounded-xl bg-white p-2 w-64"><div class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"><div class="flex gap-2 items-center"><button type="button"><span class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("filter.airline.title"))}</span></button></div><div class="${ssrRenderClass([{ "rotate-180": unref(airLine) }, "text-xl transition-all duration-500"])}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:down-line" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(airLine)) {
              _push2(`<div class="flex mt-2.5 flex-col gap-2.5"${_scopeId}><!--[-->`);
              ssrRenderList(6, (item, index) => {
                _push2(`<div class="flex justify-between items-center gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input type="checkbox" class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("filter.airline.op1"))}</span></div><main class="bg-orange-100 rounded-full p-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, { name: "emojione:airplane" }, null, _parent2, _scopeId));
                _push2(`</main></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(airLine) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex mt-2.5 flex-col gap-2.5"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(6, (item, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "flex justify-between items-center gap-2"
                  }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("input", {
                        type: "checkbox",
                        class: "relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("filter.airline.op1")), 1)
                    ]),
                    createVNode("main", { class: "bg-orange-100 rounded-full p-2" }, [
                      createVNode(_component_Icon, { name: "emojione:airplane" })
                    ])
                  ]);
                }), 64))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/filter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Date",
  __ssrInlineRender: true,
  props: {
    date: [Object]
  },
  setup(__props) {
    const breakpoints = ref({
      // 700px and up
      0: {
        itemsToShow: 7
      },
      700: {
        itemsToShow: 7
      },
      // 1024 and up
      1024: {
        itemsToShow: 7
      }
    });
    const openTab = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[1000px] mt-52 lg:mt-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Carousel, {
        dir: "rtl",
        breakpoints: unref(breakpoints)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.date, (item, index) => {
              _push2(ssrRenderComponent(_component_Slide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<label class="${ssrRenderClass([{
                      "!text-[#0A77FF] !border-[#0A77FF] !bg-[#E4F0FF]": item === unref(openTab)
                    }, "select flex-col bg-white rounded-lg text-center border border-transparent transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[129px] h-14 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center"])}"${_scopeId2}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(openTab), item)) ? " checked" : ""}${ssrRenderAttr("value", item)}${ssrIncludeBooleanAttr(item === unref(openTab)) ? " checked" : ""} class="hidden"${_scopeId2}><span class="text"${_scopeId2}>${ssrInterpolate(item.date)}</span><span class="font-semibold"${_scopeId2}>${ssrInterpolate(item.day)}</span></label>`);
                  } else {
                    return [
                      createVNode("label", {
                        class: ["select flex-col bg-white rounded-lg text-center border border-transparent transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[129px] h-14 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center", {
                          "!text-[#0A77FF] !border-[#0A77FF] !bg-[#E4F0FF]": item === unref(openTab)
                        }]
                      }, [
                        withDirectives(createVNode("input", {
                          type: "radio",
                          "onUpdate:modelValue": ($event) => isRef(openTab) ? openTab.value = $event : null,
                          value: item,
                          checked: item === unref(openTab),
                          class: "hidden"
                        }, null, 8, ["onUpdate:modelValue", "value", "checked"]), [
                          [vModelRadio, unref(openTab)]
                        ]),
                        createVNode("span", { class: "text" }, toDisplayString(item.date), 1),
                        createVNode("span", { class: "font-semibold" }, toDisplayString(item.day), 1)
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.date, (item, index) => {
                return openBlock(), createBlock(_component_Slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("label", {
                      class: ["select flex-col bg-white rounded-lg text-center border border-transparent transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[129px] h-14 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center", {
                        "!text-[#0A77FF] !border-[#0A77FF] !bg-[#E4F0FF]": item === unref(openTab)
                      }]
                    }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        "onUpdate:modelValue": ($event) => isRef(openTab) ? openTab.value = $event : null,
                        value: item,
                        checked: item === unref(openTab),
                        class: "hidden"
                      }, null, 8, ["onUpdate:modelValue", "value", "checked"]), [
                        [vModelRadio, unref(openTab)]
                      ]),
                      createVNode("span", { class: "text" }, toDisplayString(item.date), 1),
                      createVNode("span", { class: "font-semibold" }, toDisplayString(item.day), 1)
                    ], 2)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Date.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5 mb-4 items-center rounded-xl bg-white" }, _attrs))}><div class="flex divide-x rtl:divide-x-reverse gap-5 items-center text-sm"><div class="border-b-2 border-[#0A77FF] flex items-center cursor-pointer p-5"><div><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC</p></div><p class="mt-1">7,500,000 \u062A\u0648\u0645\u0627\u0646</p></div></div><div class="lg:flex hidden items-center cursor-pointer p-5"><div><div class="flex items-center gap-2"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.11475 9.55307C6.11475 10.4131 6.77475 11.1064 7.59475 11.1064H9.26808C9.98141 11.1064 10.5614 10.4997 10.5614 9.75307C10.5614 8.93973 10.2081 8.65307 9.68141 8.4664L6.99475 7.53307C6.46808 7.3464 6.11475 7.05973 6.11475 6.2464C6.11475 5.49973 6.69475 4.89307 7.40808 4.89307H9.08141C9.90141 4.89307 10.5614 5.5864 10.5614 6.4464" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.3335 4V12" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33366 14.6668C12.0156 14.6668 15.0003 11.6821 15.0003 8.00016C15.0003 4.31826 12.0156 1.3335 8.33366 1.3335C4.65176 1.3335 1.66699 4.31826 1.66699 8.00016C1.66699 11.6821 4.65176 14.6668 8.33366 14.6668Z" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold">\u0627\u0631\u0632\u0627\u0646 \u062A\u0631\u06CC\u0646</p></div><p class="mt-1">6\u060C000\u060C000 \u062A\u0648\u0645\u0627\u0646</p></div></div><div class="lg:flex hidden items-center cursor-pointer p-5"><div><div class="flex items-center gap-2"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.11475 9.55307C6.11475 10.4131 6.77475 11.1064 7.59475 11.1064H9.26808C9.98141 11.1064 10.5614 10.4997 10.5614 9.75307C10.5614 8.93973 10.2081 8.65307 9.68141 8.4664L6.99475 7.53307C6.46808 7.3464 6.11475 7.05973 6.11475 6.2464C6.11475 5.49973 6.69475 4.89307 7.40808 4.89307H9.08141C9.90141 4.89307 10.5614 5.5864 10.5614 6.4464" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.3335 4V12" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33366 14.6668C12.0156 14.6668 15.0003 11.6821 15.0003 8.00016C15.0003 4.31826 12.0156 1.3335 8.33366 1.3335C4.65176 1.3335 1.66699 4.31826 1.66699 8.00016C1.66699 11.6821 4.65176 14.6668 8.33366 14.6668Z" stroke="#1D1B20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold">\u06AF\u0631\u0627\u0646 \u062A\u0631\u06CC\u0646</p></div><p class="mt-1">12\u060C000\u060C000 \u062A\u0648\u0645\u0627\u0646</p></div></div><div class="lg:flex hidden items-center cursor-pointer p-5"><div><div class="flex items-center gap-2"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.87996 8.85331H8.93995V13.6533C8.93995 14.36 9.81995 14.6933 10.2866 14.16L15.3333 8.42665C15.7733 7.92665 15.42 7.14665 14.7533 7.14665H12.6933V2.34665C12.6933 1.63998 11.8133 1.30665 11.3466 1.83998L6.29996 7.57331C5.86663 8.07331 6.21996 8.85331 6.87996 8.85331Z" stroke="#1D1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.33317 2.6665H1.6665" stroke="#1D1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.6665 13.3335H1.6665" stroke="#1D1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.6665 8H1.6665" stroke="#1D1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="font-bold">\u0633\u0631\u06CC\u0639 \u062A\u0631\u06CC\u0646</p></div><p class="mt-1">12:25</p></div></div><div class="flex lg:hidden items-center cursor-pointer p-5"><div><div class="flex items-center gap-2"><p class="font-bold">\u0641\u06CC\u0644\u062A\u0631 \u0647\u0627</p></div><p class="mt-1">\u0646\u0627\u0645 \u0641\u06CC\u0644\u062A\u0631 \u0627\u0646\u062A\u062E\u0627\u0628\u06CC</p></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/Recomend.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "Ticket",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    ref([]);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl hidden lg:flex flex-col w-full h-max px-5 py-3 shadow gap-7" }, _attrs))}><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="text-orange-500">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</span><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex items-center gap-5"><span class="text-pink-500">6 \u0635\u0646\u062F\u0644\u06CC \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647</span><div class="flex items-end gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<span>\u0642\u0648\u0627\u0646\u06CC\u0646 \u067E\u0631\u0648\u0627\u0632</span></div><div class="flex items-end gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<span>\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0627\u0632</span></div></div></div><div class="flex items-center justify-between"><div class="flex flex-col"><div><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:airplane-24-filled",
        class: "rtl:rotate-180",
        color: "gray"
      }, null, _parent));
      _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p><p class="text-center text-xs text-[#605D64]">MHD</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex flex-col gap-2"><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="text-blue-500 font-bold">16,200,000</span></div><button class="btn-outline">\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u0648\u0627\u0632</button></div></div></main>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/Ticket.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "TicketMobile",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    ref([]);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl lg:hidden flex flex-col w-full h-max px-5 py-3 shadow gap-7" }, _attrs))}><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="text-orange-500">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</span><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex"><div class="flex items-center flex-row-reverse gap-1"><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div></div><div class="flex flex-col items-center justify-between"><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:airplane-24-filled",
        class: "rtl:rotate-180",
        color: "gray"
      }, null, _parent));
      _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p><p class="text-center text-xs text-[#605D64]">MHD</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex justify-between w-full"><span class="text-pink-500">6 \u0635\u0646\u062F\u0644\u06CC \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647</span><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="text-blue-500 font-bold">16,200,000</span></div></div></div></main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/TicketMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const { locale } = useI18n();
    const date = ref([]);
    for (let i = 0; i < 20; i++) {
      const tt = format(addDay("2013-03-15", i), "dddd", locale.value);
      const dd = format(addDay("2013-03-15", i), "MM/DD", locale.value);
      date.value.push({
        day: tt,
        date: dd
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FilterBooking = __nuxt_component_0$1;
      const _component_UtilsFilter = __nuxt_component_1;
      const _component_FilterDate = __nuxt_component_2;
      const _component_FilterRecomend = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$2;
      const _component_UtilsTicket = __nuxt_component_5;
      const _component_UtilsTicketMobile = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_FilterBooking, null, null, _parent));
      _push(`<section class="max-w-7xl relative w-full mx-auto mb-20 mt-40"><div class="flex gap-5">`);
      _push(ssrRenderComponent(_component_UtilsFilter, null, null, _parent));
      _push(`<div class="flex flex-col w-full gap-5">`);
      _push(ssrRenderComponent(_component_FilterDate, { date: unref(date) }, null, _parent));
      _push(ssrRenderComponent(_component_FilterRecomend, null, null, _parent));
      _push(`<div class="flex flex-col w-full gap-5"><div class="p-1 hidden lg:inline bg-pink-600 rounded-xl"><h5 class="text-white p-3 text-2xl font-semibold">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</h5><main class="bg-white rounded-xl flex flex-col w-full h-max px-5 py-3 shadow gap-7"><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="text-orange-500">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</span><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex items-center gap-5"><span class="text-pink-500">6 \u0635\u0646\u062F\u0644\u06CC \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647</span><div class="flex items-end gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<span>\u0642\u0648\u0627\u0646\u06CC\u0646 \u067E\u0631\u0648\u0627\u0632</span></div><div class="flex items-end gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<span>\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0627\u0632</span></div></div></div><div class="flex items-center justify-between"><div class="flex flex-col"><div><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:airplane-24-filled",
        class: "rtl:rotate-180",
        color: "gray"
      }, null, _parent));
      _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p><p class="text-center text-xs text-[#605D64]">MHD</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex flex-col gap-2"><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="text-blue-500 font-bold">16,200,000</span></div><button class="btn-outline">\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u0648\u0627\u0632</button></div></div></main></div><div class="p-1 lg:hidden bg-pink-600 rounded-xl"><h5 class="text-white p-3 text-2xl font-semibold">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</h5><main class="bg-white rounded-xl flex flex-col w-full h-max px-5 py-3 shadow gap-7"><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="text-orange-500">\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u0647</span><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex"><div class="flex items-center flex-row-reverse gap-1"><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div></div><div class="flex flex-col items-center justify-between"><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:airplane-24-filled",
        class: "rtl:rotate-180",
        color: "gray"
      }, null, _parent));
      _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p><p class="text-center text-xs text-[#605D64]">MHD</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex justify-between w-full"><span class="text-pink-500">6 \u0635\u0646\u062F\u0644\u06CC \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647</span><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="text-blue-500 font-bold">16,200,000</span></div></div></div></main></div><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(ssrRenderComponent(_component_UtilsTicket, { key: index }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(ssrRenderComponent(_component_UtilsTicketMobile, { key: index }, null, _parent));
      });
      _push(`<!--]--></div><div class="p-1 flex flex-col gap-5"><h5 class="p-3 text-2xl font-semibold">\u067E\u0631\u0648\u0627\u0632 \u0647\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644 \u0638\u0631\u0641\u06CC\u062A</h5><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<main class="bg-white rounded-xl hidden lg:flex flex-col w-full h-max px-5 py-3 shadow gap-7"><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex items-center gap-5"><div class="flex items-end gap-1">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mingcute:down-line",
          size: "1rem"
        }, null, _parent));
        _push(`<span>\u0642\u0648\u0627\u0646\u06CC\u0646 \u067E\u0631\u0648\u0627\u0632</span></div><div class="flex items-end gap-1">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mingcute:down-line",
          size: "1rem"
        }, null, _parent));
        _push(`<span>\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0627\u0632</span></div></div></div><div class="flex items-center justify-between"><div class="flex flex-col"><div><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fluent:airplane-24-filled",
          class: "rtl:rotate-180",
          color: "gray"
        }, null, _parent));
        _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex flex-col gap-2"><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="font-bold">16,200,000</span></div><button class="btn-outline text-black border-gray-300 border-2"> \u062A\u06A9\u0645\u06CC\u0644 \u0638\u0631\u0641\u06CC\u062A </button></div></div></main>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<main class="bg-white rounded-xl lg:hidden flex flex-col w-full h-max px-5 py-3 shadow gap-7"><div class="flex items-center justify-between"><div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse"><span class="pr-3">\u0633\u06CC\u0633\u062A\u0645\u06CC</span></div><div class="flex"><div class="flex items-center flex-row-reverse gap-1"><div class="flex items-center justify-center"><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"></div><div class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"></div></div><p class="text-xs text-[#938F96]">THR , MHD</p></div></div></div><div class="flex flex-col items-center justify-between"><div class="flex items-center gap-5"><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div><div class="flex flex-col justify-center items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fluent:airplane-24-filled",
          class: "rtl:rotate-180",
          color: "gray"
        }, null, _parent));
        _push(`<p class="text-center text-xs text-[#605D64]">\u0628\u062F\u0648\u0646 \u062A\u0648\u0642\u0641</p><p class="text-center text-xs text-[#605D64]">MHD</p></div><div><div><p class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"> 08:25 <span class="text-gray-500">PM</span></p><p class="text-[#7D8590]">IMK Mon Apr 01 2024</p></div></div></div><div class="flex justify-end w-full"><div class="flex items-center gap-2"><p class="font-bold text-lg text-gray-400">\u062A\u0648\u0645\u0627\u0646</p><span class="font-bold">16,200,000</span></div></div></div></main>`);
      });
      _push(`<!--]--></div><p class="mx-auto">\u0628\u0647 \u0627\u0646\u062A\u0647\u0627\u06CC \u0644\u06CC\u0633\u062A \u0631\u0633\u06CC\u062F\u06CC\u062F</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Filter = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Filter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const filter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { filter as default };
//# sourceMappingURL=filter-BeCQUo9w.mjs.map

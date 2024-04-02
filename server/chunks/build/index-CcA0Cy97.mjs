import __nuxt_component_0$1 from './Icon--TZmBuOU.mjs';
import { _ as __nuxt_component_2$1 } from './TransitionExpand-1LcTUCjo.mjs';
import { p as publicAssetsURL, u as useRouter, _ as __nuxt_component_2$2, a as useI18n } from './server.mjs';
import { DatePicker } from 'v-calendar';
import { useSSRContext, ref, resolveDirective, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, isRef, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useScreens } from 'vue-screen-utils';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CNmbBEz5.mjs';
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

const _imports_0 = publicAssetsURL("/img/head.jpg");
const _sfc_main$5 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const step = ref(1);
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
    const PassengerAir = ref(false);
    const clickOutPassengerAir = () => {
      if (PassengerAir.value) {
        PassengerAir.value = false;
      }
    };
    const dateAir = ref(false);
    const clickOutdateAir = () => {
      if (dateAir.value) {
        dateAir.value = false;
      }
    };
    const destinationHotel = ref(false);
    const clickOutdestinationHotel = () => {
      if (destinationHotel.value) {
        destinationHotel.value = false;
      }
    };
    const PassengerHotel = ref(false);
    const clickOutPassengerHotel = () => {
      if (PassengerHotel.value) {
        PassengerHotel.value = false;
      }
    };
    const dateHotelOrigin = ref(false);
    const clickOutdateHotelOrigin = () => {
      if (dateHotelOrigin.value) {
        dateHotelOrigin.value = false;
      }
    };
    const dateHotelDest = ref(false);
    const clickOutdateHotelDest = () => {
      if (dateHotelDest.value) {
        dateHotelDest.value = false;
      }
    };
    const PassengerVisa = ref(false);
    const clickOutPassengerVisa = () => {
      if (PassengerVisa.value) {
        PassengerVisa.value = false;
      }
    };
    const CountryBimeh = ref(false);
    const clickOutCountryBimeh = () => {
      if (CountryBimeh.value) {
        CountryBimeh.value = false;
      }
    };
    const TimeTravelBimeh = ref(false);
    const clickOutTimeTravelBimeh = () => {
      if (TimeTravelBimeh.value) {
        TimeTravelBimeh.value = false;
      }
    };
    const PassengerBimeh = ref(false);
    const clickOutPassengerBimeh = () => {
      if (PassengerBimeh.value) {
        PassengerBimeh.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_icon = __nuxt_component_0$1;
      const _component_TransitionExpand = __nuxt_component_2$1;
      const _component_ClientOnly = __nuxt_component_2$2;
      const _component_VDatePicker = DatePicker;
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex justify-center w-full h-max lg:h-96" }, _attrs))} data-v-d2a8e4f7><div class="w-full relative flex justify-center" data-v-d2a8e4f7><img${ssrRenderAttr("src", _imports_0)} class="w-full relative object-cover" alt="" data-v-d2a8e4f7><h1 class="text-white absolute right-32 top-56 text-4xl font-bold" data-v-d2a8e4f7> \u0628\u0644\u06CC\u0637 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627 </h1><section class="bg-white overflow-hidden gap-5 shadow absolute top-3/4 p-5 max-w-7xl w-full mx-auto rounded-xl flex flex-col" data-v-d2a8e4f7><div class="flex items-center overflow-auto no-scrollbar gap-10 justify-center border-b" data-v-d2a8e4f7><button class="${ssrRenderClass([{ "border-blue-500 border-b text-blue-500": unref(step) == 1 }, "flex gap-2 items-center pb-2 w-max"])}" data-v-d2a8e4f7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ic:twotone-local-airport" }, null, _parent));
      _push(`<span data-v-d2a8e4f7>\u0647\u0648\u0627\u067E\u06CC\u0645\u0627</span></button><button class="${ssrRenderClass([{ "border-blue-500 border-b text-blue-500": unref(step) == 2 }, "flex items-center gap-2 pb-2 w-max"])}" data-v-d2a8e4f7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "mingcute:hotel-line" }, null, _parent));
      _push(`<span data-v-d2a8e4f7>\u0647\u062A\u0644</span></button><button class="${ssrRenderClass([{ "border-blue-500 border-b text-blue-500": unref(step) == 3 }, "flex items-center gap-2 pb-2 w-max"])}" data-v-d2a8e4f7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "streamline:cards" }, null, _parent));
      _push(`<span data-v-d2a8e4f7>\u0648\u06CC\u0632\u0627</span></button><button class="${ssrRenderClass([{ "border-blue-500 border-b text-blue-500": unref(step) == 4 }, "flex items-center gap-2 pb-2 w-max"])}" data-v-d2a8e4f7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "teenyicons:shield-tick-outline" }, null, _parent));
      _push(`<span data-v-d2a8e4f7>\u0628\u06CC\u0645\u0647</span></button></div>`);
      if (unref(step) == 1) {
        _push(`<div class="flex flex-col gap-5" data-v-d2a8e4f7><div class="flex gap-6" data-v-d2a8e4f7><div${ssrRenderAttrs(mergeProps({ class: "flex cursor-pointer relative items-center gap-2" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutWay)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><span data-v-d2a8e4f7>\u06CC\u06A9 \u0637\u0631\u0641\u0647</span>`);
        _push(ssrRenderComponent(_component_icon, { name: "icon-park-outline:down" }, null, _parent));
        _push(`</div><div class="absolute bottom-0 left-0 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(way)) {
                _push2(`<div class="flex flex-col gap-2 rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u06CC\u06A9 \u0637\u0631\u0641\u0647</span><span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u0631\u0641\u062A \u0648 \u0628\u0631\u06AF\u0634\u062A</span><span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u0686\u0646\u062F \u0645\u0633\u06CC\u0631\u0647</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="btn-outline w-full" data-v-d2a8e4f7${_scopeId}>\u0627\u0646\u0635\u0631\u0627\u0641</button><button class="btn-primary w-full" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u06CC\u06CC\u062F</button></div></div>`);
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
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "flex cursor-pointer relative items-center gap-2" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutfinancial)))} data-v-d2a8e4f7><span data-v-d2a8e4f7>\u0627\u0642\u062A\u0635\u0627\u062F\u06CC</span>`);
        _push(ssrRenderComponent(_component_icon, { name: "icon-park-outline:down" }, null, _parent));
        _push(`<div class="absolute bottom-0 left-0 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(financial)) {
                _push2(`<div class="flex flex-col rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u0627\u0642\u062A\u0635\u0627\u062F\u06CC</span><span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u067E\u0631\u06CC\u0645\u06CC\u0648\u0645</span></div>`);
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
        _push(`</div></div></div><div class="flex flex-col lg:flex-row gap-2" data-v-d2a8e4f7><div class="justify-center flex flex-col gap-5 lg:gap-0 lg:flex-row relative" data-v-d2a8e4f7><input type="text" placeholder="\u0645\u0628\u062F\u0627" class="border border-[#DCDFE4] px-6 py-[10px] rounded-2xl outline-blue-300" data-v-d2a8e4f7><button type="button" class="h-full" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "humbleicons:exchange-horizontal",
          class: "w-[50px] rotate-90 lg:rotate-0 h-[50px] rounded-[50%] absolute bg-white border-2 left-5 lg:-translate-x-1/2 lg:left-1/2 -translate-y-1/2 top-1/2 p-3 flex justify-center items-center"
        }, null, _parent));
        _push(`<input class="border h-full border-[#DCDFE4] w-full px-5 lg:placeholder:px-3 py-[10px] rounded-2xl outline-blue-300" type="text" placeholder="\u0645\u0642\u0635\u062F" data-v-d2a8e4f7></button></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] relative flex-grow border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutdateAir)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A - \u0628\u0631\u06AF\u0634\u062A</p><p class="font-bold" data-v-d2a8e4f7>25 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 - 14 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A</p></div><div class="absolute bottom-0 right-0 top-16 z-50 h-max w-max bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(dateAir)) {
                _push2(`<div class="flex flex-col" data-v-d2a8e4f7${_scopeId}><div class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center" data-v-d2a8e4f7${_scopeId}><h6 class="text-xl font-bold" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A</h6><div class="flex items-center gap-3" data-v-d2a8e4f7${_scopeId}><span class="text-blue-500 font-semibold cursor-pointer" data-v-d2a8e4f7${_scopeId}>\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><div class="checkbox-wrapper-34" data-v-d2a8e4f7${_scopeId}><input class="tgl tgl-ios" id="toggle-34" type="checkbox" data-v-d2a8e4f7${_scopeId}><label class="tgl-btn" for="toggle-34" data-v-d2a8e4f7${_scopeId}></label></div><p class="text-gray-600" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u06AF\u0634\u062A</p></div></div></div><div class="m-2 border-b" data-v-d2a8e4f7${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-col lg:flex-row justify-between mb-2 items-center" data-v-d2a8e4f7${_scopeId}><div class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg" data-v-d2a8e4f7${_scopeId}><button class="text-gray-700" data-v-d2a8e4f7${_scopeId}>\u0645\u06CC\u0644\u0627\u062F\u06CC</button><button class="text-blue-500 bg-white p-2 rounded-lg" data-v-d2a8e4f7${_scopeId}> \u0634\u0645\u0633\u06CC </button></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="btn-outline px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button><button class="btn-primary px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(dateAir) ? (openBlock(), createBlock("div", {
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
                          locale: "fa",
                          modelValue: unref(range),
                          "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                          modelModifiers: { range: true },
                          columns: unref(columns),
                          expanded: unref(expanded)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "columns", "expanded"])
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
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] relative border flex-grow border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutPassengerAir)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u0633\u0627\u0641\u0631\u0627\u0646</p><p class="font-bold" data-v-d2a8e4f7>2 \u0628\u0632\u0631\u06AF\u0633\u0627\u0644 - 1 \u06A9\u0648\u062F\u06A9</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(PassengerAir)) {
                _push2(`<div class="flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0628\u0632\u06AF\u0633\u0627\u0644</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u06A9\u0648\u062F\u06A9</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0646\u0648\u0632\u0627\u062F</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(PassengerAir) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0"
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
                      onClick: ($event) => PassengerAir.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                    }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => PassengerAir.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                    }, " \u0627\u0646\u0635\u0631\u0627\u0641 ", 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><button class="btn-primary px-10" data-v-d2a8e4f7>\u062C\u0633\u062A\u062C\u0648</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) == 2) {
        _push(`<div class="flex flex-col gap-5" data-v-d2a8e4f7><div class="flex flex-col lg:flex-row gap-2" data-v-d2a8e4f7><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] relative border flex-grow border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutdestinationHotel)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u0642\u0635\u062F \u06CC\u0627 \u0647\u062A\u0644</p><p class="font-bold" data-v-d2a8e4f7>\u062A\u0647\u0631\u0627\u0646</p></div><div class="absolute bottom-0 right-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(destinationHotel)) {
                _push2(`<div class="flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><!--[-->`);
                ssrRenderList(6, (item, index2) => {
                  _push2(`<span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u062F\u0628\u06CC</span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(destinationHotel) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (item, index2) => {
                    return createVNode("span", {
                      key: index2,
                      class: "border-b py-2"
                    }, "\u062F\u0628\u06CC");
                  }), 64))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="flex flex-grow items-center" data-v-d2a8e4f7><div${ssrRenderAttrs(mergeProps({ class: "rounded-r-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutdateHotelOrigin)))} data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u062A\u0627\u0631\u06CC\u062E \u0648\u0631\u0648\u062F</p><p class="font-bold" data-v-d2a8e4f7>14 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646</p><div class="absolute bottom-0 right-0 top-16 z-50 h-max w-max bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(dateHotelOrigin)) {
                _push2(`<div class="flex flex-col" data-v-d2a8e4f7${_scopeId}><div class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center" data-v-d2a8e4f7${_scopeId}><h6 class="text-xl font-bold" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A</h6><div class="flex items-center gap-3" data-v-d2a8e4f7${_scopeId}><span class="text-blue-500 font-semibold cursor-pointer" data-v-d2a8e4f7${_scopeId}>\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><div class="checkbox-wrapper-34" data-v-d2a8e4f7${_scopeId}><input class="tgl tgl-ios" id="toggle-34" type="checkbox" data-v-d2a8e4f7${_scopeId}><label class="tgl-btn" for="toggle-34" data-v-d2a8e4f7${_scopeId}></label></div><p class="text-gray-600" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u06AF\u0634\u062A</p></div></div></div><div class="m-2 border-b" data-v-d2a8e4f7${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-col lg:flex-row justify-between mb-2 items-center" data-v-d2a8e4f7${_scopeId}><div class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg" data-v-d2a8e4f7${_scopeId}><button class="text-gray-700" data-v-d2a8e4f7${_scopeId}>\u0645\u06CC\u0644\u0627\u062F\u06CC</button><button class="text-blue-500 bg-white p-2 rounded-lg" data-v-d2a8e4f7${_scopeId}> \u0634\u0645\u0633\u06CC </button></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="btn-outline px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button><button class="btn-primary px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(dateHotelOrigin) ? (openBlock(), createBlock("div", {
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
                          modelValue: unref(range),
                          "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                          modelModifiers: { range: true },
                          columns: unref(columns),
                          expanded: unref(expanded)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "columns", "expanded"])
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
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-l-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutdateHotelDest)))} data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u062A\u0627\u0631\u06CC\u062E \u062E\u0631\u0648\u062C</p><p class="font-bold" data-v-d2a8e4f7>14 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A</p><div class="absolute bottom-0 right-0 top-16 z-50 h-max w-max bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(dateHotelDest)) {
                _push2(`<div class="flex flex-col" data-v-d2a8e4f7${_scopeId}><div class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center" data-v-d2a8e4f7${_scopeId}><h6 class="text-xl font-bold" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0631\u0641\u062A</h6><div class="flex items-center gap-3" data-v-d2a8e4f7${_scopeId}><span class="text-blue-500 font-semibold cursor-pointer" data-v-d2a8e4f7${_scopeId}>\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><div class="checkbox-wrapper-34" data-v-d2a8e4f7${_scopeId}><input class="tgl tgl-ios" id="toggle-34" type="checkbox" data-v-d2a8e4f7${_scopeId}><label class="tgl-btn" for="toggle-34" data-v-d2a8e4f7${_scopeId}></label></div><p class="text-gray-600" data-v-d2a8e4f7${_scopeId}>\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u06AF\u0634\u062A</p></div></div></div><div class="m-2 border-b" data-v-d2a8e4f7${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
                _push2(`</div><div class="flex flex-col lg:flex-row justify-between mb-2 items-center" data-v-d2a8e4f7${_scopeId}><div class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg" data-v-d2a8e4f7${_scopeId}><button class="text-gray-700" data-v-d2a8e4f7${_scopeId}>\u0645\u06CC\u0644\u0627\u062F\u06CC</button><button class="text-blue-500 bg-white p-2 rounded-lg" data-v-d2a8e4f7${_scopeId}> \u0634\u0645\u0633\u06CC </button></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="btn-outline px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button><button class="btn-primary px-8 py-3" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(dateHotelDest) ? (openBlock(), createBlock("div", {
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
                          modelValue: unref(range),
                          "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                          modelModifiers: { range: true },
                          columns: unref(columns),
                          expanded: unref(expanded)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "columns", "expanded"])
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
        _push(`</div></div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutPassengerHotel)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u0633\u0627\u0641\u0631\u0627\u0646</p><p class="font-bold" data-v-d2a8e4f7>2 \u0628\u0632\u0631\u06AF\u0633\u0627\u0644 - 1 \u06A9\u0648\u062F\u06A9</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(PassengerHotel)) {
                _push2(`<div class="flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0628\u0632\u06AF\u0633\u0627\u0644</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u06A9\u0648\u062F\u06A9</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0646\u0648\u0632\u0627\u062F</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(PassengerHotel) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0"
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
                      onClick: ($event) => PassengerHotel.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                    }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => PassengerHotel.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                    }, " \u0627\u0646\u0635\u0631\u0627\u0641 ", 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><button class="btn-primary px-10" data-v-d2a8e4f7>\u062C\u0633\u062A\u062C\u0648</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) == 3) {
        _push(`<div class="flex flex-col gap-5" data-v-d2a8e4f7><div class="flex flex-col lg:flex-row gap-2" data-v-d2a8e4f7><div class="justify-center flex flex-col gap-5 lg:gap-0 lg:flex-row relative" data-v-d2a8e4f7><input type="text" placeholder="\u0645\u0628\u062F\u0627" class="border border-[#DCDFE4] px-6 py-[10px] rounded-2xl outline-blue-300" data-v-d2a8e4f7><button type="button" class="h-full" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "humbleicons:exchange-horizontal",
          class: "w-[50px] rotate-90 lg:rotate-0 h-[50px] rounded-[50%] absolute bg-white border-2 left-5 lg:-translate-x-1/2 lg:left-1/2 -translate-y-1/2 top-1/2 p-3 flex justify-center items-center"
        }, null, _parent));
        _push(`<input class="border h-full border-[#DCDFE4] px-5 placeholder:px-3 w-full py-[10px] rounded-2xl outline-blue-300" type="text" placeholder="\u0645\u0642\u0635\u062F" data-v-d2a8e4f7></button></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutPassengerVisa)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u0633\u0627\u0641\u0631\u0627\u0646</p><p class="font-bold" data-v-d2a8e4f7>2 \u0628\u0632\u0631\u06AF\u0633\u0627\u0644 - 1 \u06A9\u0648\u062F\u06A9</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(PassengerVisa)) {
                _push2(`<div class="flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0628\u0632\u06AF\u0633\u0627\u0644</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u06A9\u0648\u062F\u06A9</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0646\u0648\u0632\u0627\u062F</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(PassengerVisa) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0"
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
                      onClick: ($event) => PassengerVisa.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                    }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => PassengerVisa.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                    }, " \u0627\u0646\u0635\u0631\u0627\u0641 ", 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><button class="btn-primary px-10" data-v-d2a8e4f7>\u062C\u0633\u062A\u062C\u0648</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) == 4) {
        _push(`<div class="flex flex-col gap-5" data-v-d2a8e4f7><div class="flex flex-col lg:flex-row gap-2" data-v-d2a8e4f7><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutCountryBimeh)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u06A9\u0634\u0648\u0631 \u0645\u0642\u0635\u062F</p><p class="font-bold" data-v-d2a8e4f7>\u0646\u062C\u0641,\u0639\u0631\u0627\u0642</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(CountryBimeh)) {
                _push2(`<div class="flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><!--[-->`);
                ssrRenderList(6, (item, index2) => {
                  _push2(`<span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>\u062F\u0628\u06CC</span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(CountryBimeh) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (item, index2) => {
                    return createVNode("span", {
                      key: index2,
                      class: "border-b py-2"
                    }, "\u062F\u0628\u06CC");
                  }), 64))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutTimeTravelBimeh)))} data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u062F\u062A \u0633\u0641\u0631</p><p class="font-bold" data-v-d2a8e4f7>14 \u0631\u0648\u0632</p><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(TimeTravelBimeh)) {
                _push2(`<div class="flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><!--[-->`);
                ssrRenderList(6, (item, index2) => {
                  _push2(`<span class="border-b py-2" data-v-d2a8e4f7${_scopeId}>1 \u062A\u0627 4 \u0631\u0648\u0632</span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(TimeTravelBimeh) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg px-5 w-full z-50 bg-white shadow absolute right-0 top-0"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (item, index2) => {
                    return createVNode("span", {
                      key: index2,
                      class: "border-b py-2"
                    }, "1 \u062A\u0627 4 \u0631\u0648\u0632");
                  }), 64))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "rounded-[16px] flex-grow relative border border-[#DCDFE4] px-6 py-[10px] cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickOutPassengerBimeh)))} data-v-d2a8e4f7><div data-v-d2a8e4f7><p class="text-sm text-[#938F96]" data-v-d2a8e4f7>\u0645\u0633\u0627\u0641\u0631\u0627\u0646</p><p class="font-bold" data-v-d2a8e4f7>2 \u0628\u0632\u0631\u06AF\u0633\u0627\u0644 - 1 \u06A9\u0648\u062F\u06A9</p></div><div class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4" data-v-d2a8e4f7>`);
        _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(PassengerBimeh)) {
                _push2(`<div class="flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0" data-v-d2a8e4f7${_scopeId}><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0628\u0632\u06AF\u0633\u0627\u0644</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u06A9\u0648\u062F\u06A9</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center border-b p-2.5 justify-between" data-v-d2a8e4f7${_scopeId}><span class="font-semibold" data-v-d2a8e4f7${_scopeId}>\u0646\u0648\u0632\u0627\u062F</span><div class="flex items-center gap-2" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" data-v-d2a8e4f7${_scopeId}></path></svg></button><span data-v-d2a8e4f7${_scopeId}>0</span><button class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50" data-v-d2a8e4f7${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-d2a8e4f7${_scopeId}><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" data-v-d2a8e4f7${_scopeId}></path></svg></button></div></div><div class="flex items-center gap-2 p-2.5" data-v-d2a8e4f7${_scopeId}><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500" data-v-d2a8e4f7${_scopeId}> \u062A\u0627\u06CC\u06CC\u062F </button><button class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500" data-v-d2a8e4f7${_scopeId}> \u0627\u0646\u0635\u0631\u0627\u0641 </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(PassengerBimeh) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0"
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
                      onClick: ($event) => PassengerBimeh.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                    }, " \u062A\u0627\u06CC\u06CC\u062F ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => PassengerBimeh.value = false,
                      class: "rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                    }, " \u0627\u0646\u0635\u0631\u0627\u0641 ", 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><button class="btn-primary px-10" data-v-d2a8e4f7>\u062C\u0633\u062A\u062C\u0648</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/Booking/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d2a8e4f7"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl w-full mx-auto space-y-6 mt-[26rem] lg:mt-44" }, _attrs))}><div class="flex items-center gap-5"><div class="flex items-center whitespace-nowrap gap-1">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ep:refresh-left" }, null, _parent));
  _push(`<span>${ssrInterpolate(_ctx.$t("main.history.title"))}:</span></div><div class="box-content overflow-auto no-scrollbar flex gap-3 items-center"><!--[-->`);
  ssrRenderList(5, (item, index2) => {
    _push(`<main class="rounded-full border px-4 py-2 bg-white flex items-end gap-1"><span>\u062A\u0647\u0631\u0627\u0646</span><p class="text-gray-400">\u0628\u0647</p><span>\u0645\u0634\u0647\u062F</span><button>`);
    _push(ssrRenderComponent(_component_Icon, { name: "uim:multiply" }, null, _parent));
    _push(`</button></main>`);
  });
  _push(`<!--]--></div></div><div class="grid lg:grid-cols-2 gap-5"><div class="bg-white hidden lg:inline h-64 rounded-xl"></div><div class="bg-white h-64 rounded-xl"></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/History.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "NewService",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_icon = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl my-20 w-full mx-auto space-y-6" }, _attrs))}><h1 class="text-2xl font-bold block">\u062E\u062F\u0645\u0627\u062A \u062C\u062F\u06CC\u062F \u0645\u0627</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${unref(locale)}`,
        class: "flex justify-between bg-white border rounded-xl px-5 py-3 items-center w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><main class="rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ri:shield-check-fill",
              size: "2.5rem"
            }, null, _parent2, _scopeId));
            _push2(`</main><div class="flex flex-col"${_scopeId}><h6 class="font-semibold text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_1.title"))}</h6><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_1.body"))}</p></div></div>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "uim:angle-left" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("main", { class: "rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center" }, [
                  createVNode(_component_icon, {
                    name: "ri:shield-check-fill",
                    size: "2.5rem"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("h6", { class: "font-semibold text-lg" }, toDisplayString(_ctx.$t("main.new_service.option_1.title")), 1),
                  createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("main.new_service.option_1.body")), 1)
                ])
              ]),
              createVNode(_component_Icon, { name: "uim:angle-left" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4 flex-col lg:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${unref(locale)}`,
        class: "flex bg-white justify-between border rounded-xl px-5 py-3 items-center w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><main class="rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "streamline:cards-solid",
              size: "2.5rem"
            }, null, _parent2, _scopeId));
            _push2(`</main><div class="flex flex-col"${_scopeId}><h6 class="font-semibold text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_2.title"))}</h6><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_2.body"))}</p></div></div>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "uim:angle-left" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("main", { class: "rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center" }, [
                  createVNode(_component_icon, {
                    name: "streamline:cards-solid",
                    size: "2.5rem"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("h6", { class: "font-semibold text-lg" }, toDisplayString(_ctx.$t("main.new_service.option_2.title")), 1),
                  createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("main.new_service.option_2.body")), 1)
                ])
              ]),
              createVNode(_component_Icon, { name: "uim:angle-left" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${unref(locale)}`,
        class: "flex bg-white justify-between border rounded-xl px-5 py-3 items-center w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><main class="rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "mage:building-tree-fill",
              size: "2.5rem"
            }, null, _parent2, _scopeId));
            _push2(`</main><div class="flex flex-col"${_scopeId}><h6 class="font-semibold text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_3.title"))}</h6><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("main.new_service.option_3.body"))}</p></div></div>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "uim:angle-left" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("main", { class: "rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center" }, [
                  createVNode(_component_icon, {
                    name: "mage:building-tree-fill",
                    size: "2.5rem"
                  })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("h6", { class: "font-semibold text-lg" }, toDisplayString(_ctx.$t("main.new_service.option_3.title")), 1),
                  createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("main.new_service.option_3.body")), 1)
                ])
              ]),
              createVNode(_component_Icon, { name: "uim:angle-left" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/NewService.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl w-full mx-auto space-y-6" }, _attrs))}><h1 class="text-2xl font-bold block">${ssrInterpolate(_ctx.$t("main.about_travel.title"))}</h1><div class="flex flex-col gap-2.5"><h4 class="text-lg font-bold">${ssrInterpolate(_ctx.$t("main.about_travel.second_title"))}</h4><p class="text-gray-500 lg:w-3/4">${ssrInterpolate(_ctx.$t("main.about_travel.description"))}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/AboutTravel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "feature",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const items = ref([
      {
        icon: "iconoir:percentage-circle-solid",
        title: t("main.feature.best_price.title"),
        description: t("main.feature.best_price.description")
      },
      {
        icon: "streamline:customer-support-1-solid",
        title: t("main.feature.support.title"),
        description: t("main.feature.support.description")
      },
      {
        icon: "ph:cpu-bold",
        title: t("main.feature.cpu.title"),
        description: t("main.feature.cpu.description")
      },
      {
        icon: "bxs:happy-alt",
        title: t("main.feature.ux.title"),
        description: t("main.feature.ux.description")
      },
      {
        icon: "bxs:bookmark-alt-minus",
        title: t("main.feature.services.title"),
        description: t("main.feature.services.description")
      },
      {
        icon: "solar:card-bold",
        title: t("main.feature.payment.title"),
        description: t("main.feature.payment.description")
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl my-20 w-full bg-white mx-auto shadow border rounded-xl grid lg:grid-cols-3 lg:grid-rows-2 divide-y divide-x rtl:divide-x-reverse" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(items), (item, index2) => {
        _push(`<div class="flex gap-2 justify-center py-8 items-center flex-col text-center"><main class="rounded-full w-max p-2 bg-blue-100 text-blue-500 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_icon, {
          name: item.icon,
          size: "2.5rem"
        }, null, _parent));
        _push(`</main><h6 class="font-semibold">${ssrInterpolate(item.title)}</h6><p class="text-gray-600 w-3/4">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/feature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainBooking = __nuxt_component_0;
  const _component_MainHistory = __nuxt_component_1;
  const _component_MainNewService = __nuxt_component_2;
  const _component_MainAboutTravel = __nuxt_component_3;
  const _component_MainFeature = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MainBooking, null, null, _parent));
  _push(ssrRenderComponent(_component_MainHistory, null, null, _parent));
  _push(ssrRenderComponent(_component_MainNewService, null, null, _parent));
  _push(ssrRenderComponent(_component_MainAboutTravel, null, null, _parent));
  _push(ssrRenderComponent(_component_MainFeature, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CcA0Cy97.mjs.map

import { defineComponent, useSSRContext, mergeProps, withCtx, createVNode, renderSlot, ref, resolveDirective, unref, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CNmbBEz5.mjs';
import __nuxt_component_0$1 from './Icon--TZmBuOU.mjs';
import { _ as __nuxt_component_2$1 } from './TransitionExpand-1LcTUCjo.mjs';
import { p as publicAssetsURL, a as useI18n } from './server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@unhead/shared';
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
import 'vue-router';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _imports_1 = publicAssetsURL("/img/Black-orange 1.png");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const showLang = ref(false);
    const clickShowLang = () => {
      if (showLang.value) {
        showLang.value = false;
      }
    };
    const showProfile = ref(false);
    const clickshowProfile = () => {
      if (showProfile.value) {
        showProfile.value = false;
      }
    };
    const showService = ref(false);
    const clickshowService = () => {
      if (showService.value) {
        showService.value = false;
      }
    };
    const { setLocale, locale } = useI18n();
    const handleRtlProject = (lang) => {
      setLocale(lang);
      (void 0).documentElement.setAttribute("dir", "rtl");
      (void 0).documentElement.setAttribute("lang", lang);
    };
    const handleLtrProject = (lang) => {
      setLocale(lang);
      (void 0).documentElement.setAttribute("dir", "ltr");
      (void 0).documentElement.setAttribute("lang", lang);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_TransitionExpand = __nuxt_component_2$1;
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white z-30 sticky lg:static top-0 border-b" }, _attrs))}><div class="max-w-7xl w-fll mx-auto"><div class="flex justify-between items-center lg:container px-5 lg:px-0 mx-auto py-4 lg:py-6"><div class="flex gap-10 items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${unref(locale)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="logo"${ssrRenderAttr("src", _imports_1)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "logo",
                src: _imports_1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:flex hidden gap-10 items-center"><main${ssrRenderAttrs(mergeProps({ class: "flex cursor-pointer relative items-end" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickshowService)))}><span>${ssrInterpolate(_ctx.$t("navBar.service.title"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<div class="absolute">`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(showService)) {
              _push2(`<div class="flex flex-col w-72 gap-5 py-5 z-50 h-max -right-5 top-5 px-5 absolute bg-white rounded-lg shadow"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "icons8:airport",
                size: "2rem"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xl"${_scopeId}>\u0647\u0648\u0627\u067E\u06CC\u0645\u0627</span></div><p class="text-gray-500"${_scopeId}> \u0622\u0633\u0627\u0646 \u062A\u0631\u06CC\u0646 \u0631\u0627\u0647 \u0628\u0631\u0627\u06CC \u0631\u0632\u0631\u0648 \u0628\u0644\u06CC\u0637 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627. </p></div><div class="flex flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ri:hotel-line",
                size: "2rem"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xl"${_scopeId}>\u0647\u062A\u0644</span></div><p class="text-gray-500"${_scopeId}> \u0631\u0632\u0631\u0648 \u0627\u0642\u0627\u0645\u062A\u06AF\u0627\u0647 \u062F\u0631 \u0647\u0645\u0647 \u062C\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646. </p></div><div class="flex flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "streamline:cards",
                size: "2rem"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xl"${_scopeId}>\u0648\u06CC\u0632\u0627</span></div><p class="text-gray-500"${_scopeId}>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648\u06CC\u0632\u0627 \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0628\u0647 \u0622\u0633\u0627\u0646\u06CC</p></div><div class="flex flex-col"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "iconamoon:shield-yes-light",
                size: "2rem"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xl"${_scopeId}>\u0628\u06CC\u0645\u0647</span></div><p class="text-gray-500"${_scopeId}> \u0628\u0627 \u0628\u06CC\u0645\u0647 \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0633\u0641\u0631\u06CC \u0627\u06CC\u0645\u0646 \u0648 \u0645\u0637\u0645\u0626\u0646 \u0631\u0627 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0646\u06CC\u062F. </p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(showService) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col w-72 gap-5 py-5 z-50 h-max -right-5 top-5 px-5 absolute bg-white rounded-lg shadow"
              }, [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "icons8:airport",
                      size: "2rem"
                    }),
                    createVNode("span", { class: "text-xl" }, "\u0647\u0648\u0627\u067E\u06CC\u0645\u0627")
                  ]),
                  createVNode("p", { class: "text-gray-500" }, " \u0622\u0633\u0627\u0646 \u062A\u0631\u06CC\u0646 \u0631\u0627\u0647 \u0628\u0631\u0627\u06CC \u0631\u0632\u0631\u0648 \u0628\u0644\u06CC\u0637 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627. ")
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "ri:hotel-line",
                      size: "2rem"
                    }),
                    createVNode("span", { class: "text-xl" }, "\u0647\u062A\u0644")
                  ]),
                  createVNode("p", { class: "text-gray-500" }, " \u0631\u0632\u0631\u0648 \u0627\u0642\u0627\u0645\u062A\u06AF\u0627\u0647 \u062F\u0631 \u0647\u0645\u0647 \u062C\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646. ")
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "streamline:cards",
                      size: "2rem"
                    }),
                    createVNode("span", { class: "text-xl" }, "\u0648\u06CC\u0632\u0627")
                  ]),
                  createVNode("p", { class: "text-gray-500" }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648\u06CC\u0632\u0627 \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0628\u0647 \u0622\u0633\u0627\u0646\u06CC")
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "iconamoon:shield-yes-light",
                      size: "2rem"
                    }),
                    createVNode("span", { class: "text-xl" }, "\u0628\u06CC\u0645\u0647")
                  ]),
                  createVNode("p", { class: "text-gray-500" }, " \u0628\u0627 \u0628\u06CC\u0645\u0647 \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0633\u0641\u0631\u06CC \u0627\u06CC\u0645\u0646 \u0648 \u0645\u0637\u0645\u0626\u0646 \u0631\u0627 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0646\u06CC\u062F. ")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main><span>${ssrInterpolate(_ctx.$t("navBar.support"))}</span><span>${ssrInterpolate(_ctx.$t("navBar.contact"))}</span><span>${ssrInterpolate(_ctx.$t("navBar.about"))}</span></div></div><div class="lg:flex hidden items-center gap-5"><div class="flex relative items-center gap-4 ml-auto">`);
      if (unref(locale) == "en") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative items-center gap-3 cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickShowLang)))}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2333 7.7418L9.99998 10.9751L6.76665 7.7418C6.44165 7.4168 5.91665 7.4168 5.59165 7.7418C5.26665 8.0668 5.26665 8.5918 5.59165 8.9168L9.41665 12.7418C9.74165 13.0668 10.2667 13.0668 10.5917 12.7418L14.4167 8.9168C14.7417 8.5918 14.7417 8.0668 14.4167 7.7418C14.0917 7.42513 13.5583 7.4168 13.2333 7.7418Z" fill="#1D1B20"></path></svg><p>${ssrInterpolate(_ctx.$t("navBar.language.en"))}</p>`);
        _push(ssrRenderComponent(_component_Icon, { name: "emojione:flag-england" }, null, _parent));
        _push(`</div>`);
      } else if (unref(locale) == "fa") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative items-center gap-3 cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickShowLang)))}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2333 7.7418L9.99998 10.9751L6.76665 7.7418C6.44165 7.4168 5.91665 7.4168 5.59165 7.7418C5.26665 8.0668 5.26665 8.5918 5.59165 8.9168L9.41665 12.7418C9.74165 13.0668 10.2667 13.0668 10.5917 12.7418L14.4167 8.9168C14.7417 8.5918 14.7417 8.0668 14.4167 7.7418C14.0917 7.42513 13.5583 7.4168 13.2333 7.7418Z" fill="#1D1B20"></path></svg><p>${ssrInterpolate(_ctx.$t("navBar.language.fa"))}</p>`);
        _push(ssrRenderComponent(_component_Icon, { name: "emojione:flag-for-iran" }, null, _parent));
        _push(`</div>`);
      } else if (unref(locale) == "ar") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative items-center gap-3 cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickShowLang)))}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2333 7.7418L9.99998 10.9751L6.76665 7.7418C6.44165 7.4168 5.91665 7.4168 5.59165 7.7418C5.26665 8.0668 5.26665 8.5918 5.59165 8.9168L9.41665 12.7418C9.74165 13.0668 10.2667 13.0668 10.5917 12.7418L14.4167 8.9168C14.7417 8.5918 14.7417 8.0668 14.4167 7.7418C14.0917 7.42513 13.5583 7.4168 13.2333 7.7418Z" fill="#1D1B20"></path></svg><p>${ssrInterpolate(_ctx.$t("navBar.language.ar"))}</p>`);
        _push(ssrRenderComponent(_component_Icon, { name: "emojione:flag-for-saudi-arabia" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_TransitionExpand, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(showLang)) {
              _push2(`<div class="flex flex-col gap-5 py-5 z-50 top-10 px-5 justify-center items-center absolute bg-white rounded-lg shadow"${_scopeId}><div class="flex cursor-pointer items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("navBar.language.en"))}</span>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "emojione:flag-england" }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex cursor-pointer items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("navBar.language.fa"))}</span>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "emojione:flag-for-iran" }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex cursor-pointer items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("navBar.language.ar"))}</span>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "emojione:flag-for-saudi-arabia" }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(showLang) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col gap-5 py-5 z-50 top-10 px-5 justify-center items-center absolute bg-white rounded-lg shadow"
              }, [
                createVNode("div", {
                  onClick: ($event) => handleLtrProject("en"),
                  class: "flex cursor-pointer items-center gap-2"
                }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("navBar.language.en")), 1),
                  createVNode(_component_Icon, { name: "emojione:flag-england" })
                ], 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => handleRtlProject("fa"),
                  class: "flex cursor-pointer items-center gap-2"
                }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("navBar.language.fa")), 1),
                  createVNode(_component_Icon, { name: "emojione:flag-for-iran" })
                ], 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => handleRtlProject("ar"),
                  class: "flex cursor-pointer items-center gap-2"
                }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("navBar.language.ar")), 1),
                  createVNode(_component_Icon, { name: "emojione:flag-for-saudi-arabia" })
                ], 8, ["onClick"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="border h-6"></p><div${ssrRenderAttrs(mergeProps({ class: "border-2 relative cursor-pointer px-3 py-1 gap-2 rounded-full flex items-center" }, ssrGetDirectiveProps(_ctx, _directive_click_outside, clickshowProfile)))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:down-line",
        size: "1rem"
      }, null, _parent));
      _push(`<span>09184720235</span><div class="absolute">`);
      _push(ssrRenderComponent(_component_TransitionExpand, { duration: 500 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(showProfile)) {
              _push2(`<div class="flex flex-col w-60 gap-5 py-5 z-50 h-max -right-5 top-5 px-5 absolute bg-white rounded-lg shadow"${_scopeId}><div class="flex border-b pb-2 justify-between"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><span class="text-gray-500"${_scopeId}>\u06A9\u06CC\u0641 \u067E\u0648\u0644</span><div class="flex items-center gap-3"${_scopeId}><span${_scopeId}>12,000,000</span><p class="text-gray-500"${_scopeId}>\u062A\u0648\u0645\u0627\u0646</p></div></div><button${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "ic:outline-plus" }, null, _parent2, _scopeId));
              _push2(`</button></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "fluent:person-24-regular" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC</span></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "icon-park-outline:transaction" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627</span></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "f7:tickets" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0628\u0644\u06CC\u0637 \u0647\u0627</span></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "mage:building-b" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0627\u0642\u0627\u0645\u062A\u06AF\u0627\u0647 \u0647\u0627</span></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "teenyicons:shield-tick-outline" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0628\u06CC\u0645\u0647 \u0647\u0627</span></div><div class="flex cursor-pointer items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "mingcute:headphone-line" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC</span></div><div class="flex cursor-pointer text-red-500 items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "tabler:logout-2" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(showProfile) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col w-60 gap-5 py-5 z-50 h-max -right-5 top-5 px-5 absolute bg-white rounded-lg shadow"
              }, [
                createVNode("div", { class: "flex border-b pb-2 justify-between" }, [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("span", { class: "text-gray-500" }, "\u06A9\u06CC\u0641 \u067E\u0648\u0644"),
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", null, "12,000,000"),
                      createVNode("p", { class: "text-gray-500" }, "\u062A\u0648\u0645\u0627\u0646")
                    ])
                  ]),
                  createVNode("button", null, [
                    createVNode(_component_Icon, { name: "ic:outline-plus" })
                  ])
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "fluent:person-24-regular" }),
                  createVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC")
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "icon-park-outline:transaction" }),
                  createVNode("span", null, "\u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627")
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "f7:tickets" }),
                  createVNode("span", null, "\u0628\u0644\u06CC\u0637 \u0647\u0627")
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "mage:building-b" }),
                  createVNode("span", null, "\u0627\u0642\u0627\u0645\u062A\u06AF\u0627\u0647 \u0647\u0627")
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "teenyicons:shield-tick-outline" }),
                  createVNode("span", null, "\u0628\u06CC\u0645\u0647 \u0647\u0627")
                ]),
                createVNode("div", { class: "flex cursor-pointer items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "mingcute:headphone-line" }),
                  createVNode("span", null, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC")
                ]),
                createVNode("div", { class: "flex cursor-pointer text-red-500 items-center gap-4" }, [
                  createVNode(_component_Icon, { name: "tabler:logout-2" }),
                  createVNode("span", null, "\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><button class="lg:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:hamburger-menu-linear",
        size: "2rem"
      }, null, _parent));
      _push(`</button></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[--><div class="border-t bg-white"><footer class="max-w-7xl w-full mx-auto px-5 py-1 pb-5"><div class="grid gap-5 lg:gap-0 lg:grid-flow-col py-10"><main class="space-y-5"><h4 class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("footer.title.services"))}</h4><ul class="flex lg:flex-col justify-between lg:justify-start lg:gap-3"><li>${ssrInterpolate(_ctx.$t("footer.services.airTicket"))}</li><li>${ssrInterpolate(_ctx.$t("footer.services.residence"))}</li><li>${ssrInterpolate(_ctx.$t("footer.services.travel_insurance"))}</li><li>${ssrInterpolate(_ctx.$t("footer.services.tourist_visa"))}</li></ul></main><main class="space-y-5"><h4 class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("footer.title.tourist_visa"))}</h4><ul class="grid grid-rows-4 grid-cols-2 gap-3"><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.azarbaijan"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.qatar"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.canada"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.russia"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.dubai"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.oman"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.jordan"))}</li><li>${ssrInterpolate(_ctx.$t("footer.tourist_visa.armania"))}</li></ul></main><main class="space-y-5"><h4 class="font-semibold text-lg">${ssrInterpolate(_ctx.$t("footer.title.ticket_air"))}</h4><div class="flex gap-5"><ul class="grid grid-rows-4 grid-cols-2 gap-3"><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.thr_mhd"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.mhd_njf"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.thr_kish"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.thr_istb"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.njf_mhd"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.thr_mqt"))}</li><li>${ssrInterpolate(_ctx.$t("footer.ticket_air.ttr_thr"))}</li></ul></div></main></div><div class="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center"><div class="flex gap-5 flex-col"><h5>${ssrInterpolate(_ctx.$t("footer.title.contact"))}</h5><div class="flex gap-3 flex-col lg:flex-row"><div class="flex items-center gap-3">`);
  _push(ssrRenderComponent(_component_Icon, { name: "mage:phone-call" }, null, _parent));
  _push(`<p class="rtl:flex-row-reverse flex gap-2"><span class="flex rtl:flex-row-reverse"><span>+</span>964</span><span>780</span><span>814</span><span>3063</span></p></div><div class="flex items-center gap-3">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ic:outline-email" }, null, _parent));
  _push(`<p>CrsTrip.com@gmail.com</p></div></div></div><div class="flex gap-4 items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "p-2.5 rounded-lg bg-blue-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "mdi:instagram",
          color: "white",
          size: "2rem"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "mdi:instagram",
            color: "white",
            size: "2rem"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "p-2.5 rounded-lg bg-blue-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "mingcute:telegram-fill",
          color: "white",
          size: "2rem"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "mingcute:telegram-fill",
            color: "white",
            size: "2rem"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "p-2.5 rounded-lg bg-blue-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ic:baseline-whatsapp",
          color: "white",
          size: "2rem"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ic:baseline-whatsapp",
            color: "white",
            size: "2rem"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer></div><div class="flex bg-white items-center rtl:flex-row-reverse justify-center gap-2 py-5 border-t w-full">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ic:baseline-copyright" }, null, _parent));
  _push(`<p class="text-sm text-end lg:text-center text-wrap text-[#1D1B20]">${ssrInterpolate(_ctx.$t("footer.copyright"))}</p></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Body = Body;
  const _component_LayoutHeader = __nuxt_component_1;
  const _component_LayoutFooter = __nuxt_component_2;
  _push(ssrRenderComponent(_component_Body, mergeProps({ class: "bg-gray-100" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LayoutHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="px-4 lg:px-0"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_LayoutFooter, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LayoutHeader),
          createVNode("div", { class: "px-4 lg:px-0" }, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createVNode(_component_LayoutFooter)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BHWIDVK2.mjs.map

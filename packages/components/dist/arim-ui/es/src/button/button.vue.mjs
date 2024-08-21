import { defineComponent as r, computed as a, openBlock as u, createElementBlock as s, normalizeClass as p, createTextVNode as c, renderSlot as l } from "vue";
/* empty css                  */
const f = /* @__PURE__ */ r({
  name: "ar-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = a(() => ({ [`ar-button--${t.type}`]: t.type }));
    return (n, m) => (u(), s("button", {
      class: p(["ar-button", o.value])
    }, [
      c(" dadwa "),
      l(n.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};

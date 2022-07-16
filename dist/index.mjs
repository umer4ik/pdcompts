// src/components/Button/Button.tsx
import * as React from "react";

// src/css-utils.ts
var prefix = "pdcomp-";
function cls(className) {
  return `${prefix}${className}`;
}

// src/components/Button/Button.tsx
function Button({ label }) {
  return /* @__PURE__ */ React.createElement("button", {
    className: cls("button")
  }, label);
}
export {
  Button
};
//# sourceMappingURL=index.mjs.map
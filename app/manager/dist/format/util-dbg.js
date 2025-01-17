"use strict";

sap.ui.define(["sap/ui/core/message/MessageType"], function (MessageType) {
  "use strict";

  var Urgency = /*#__PURE__*/function (Urgency) {
    Urgency["High"] = "H";
    Urgency["Medium"] = "M";
    Urgency["Low"] = "L";
    return Urgency;
  }(Urgency || {});
  function formatHighlightColor(urgency) {
    if (urgency === Urgency.High) {
      return MessageType.Error;
    } else if (urgency === Urgency.Medium) {
      return MessageType.Warning;
    }
    return MessageType.Information;
  }
  function formatDaysAgo(createdAt) {
    const today = new Date();
    const since = new Date(createdAt);
    const diff = Math.abs(since.getTime() - today.getTime());
    const diffD = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (diffD <= 1) return `${diffD} day ago`;
    return `${diffD} days ago`;
  }
  var __exports = {
    __esModule: true
  };
  __exports.Urgency = Urgency;
  __exports.formatHighlightColor = formatHighlightColor;
  __exports.formatDaysAgo = formatDaysAgo;
  return __exports;
});
//# sourceMappingURL=util-dbg.js.map

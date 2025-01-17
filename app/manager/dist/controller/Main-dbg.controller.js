"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"], function (Controller, UIComponent) {
  "use strict";

  /**
   * @namespace ns.manager.controller
   */
  const Main = Controller.extend("ns.manager.controller.Main", {
    /*eslint-disable @typescript-eslint/no-empty-function*/onInit: function _onInit() {},
    navToSpotStatus: function _navToSpotStatus(event) {
      const spotIndex = event.getSource().getBindingContext("spotModel")?.getProperty("customerID");
      UIComponent.getRouterFor(this).navTo("RouteSpotStatus", {
        index: spotIndex
      });
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map

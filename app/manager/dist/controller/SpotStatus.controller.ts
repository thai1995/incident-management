import Controller from "sap/ui/core/mvc/Controller";
import Filter from "sap/ui/model/Filter";
import { Urgency } from "../format/util";
import FilterOperator from "sap/ui/model/FilterOperator";
import IconTabBar, { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import UIComponent from "sap/ui/core/UIComponent";
import History from "sap/ui/core/routing/History";
import { Route$MatchedEvent } from "sap/ui/core/routing/Route";
import ListBinding from "sap/ui/model/ListBinding";

/**
 * @namespace ns.manager.controller
 */
export default class SpotStatus extends Controller {
    private defaultFilter: Filter;

    getUrgencyFilter(key: String): Filter[] {
        return (Object.values(Urgency) as Array<String>).includes(key) ? [new Filter("urgency", FilterOperator.EQ, key, false)] : [];
    }

    onFilterSelect(event: IconTabBar$SelectEvent): void {
        const key = event.getParameter("key");
        this.setFilter(key)
    }

    navToMain() {
        const previousHash = History.getInstance().getPreviousHash();
        if (previousHash !== undefined) {
            window.history.go(-1);
        } else {
            UIComponent.getRouterFor(this).navTo("RouteMain", {}, true);
        }
    }

    onInit() {
        const oRouter = (this.getOwnerComponent() as UIComponent)?.getRouter();
        oRouter.getRoute("RouteSpotStatus")!.attachMatched(this.onRouteMatched, this);
    }

    private onRouteMatched(event: Route$MatchedEvent): void {
        const oParameters: any = event.getParameters();
        const customerId = oParameters.arguments.index;
        this.defaultFilter = new Filter("customerID", FilterOperator.EQ, customerId, false);
        this.setFilter((this.getView()?.byId("iconTabBar") as IconTabBar)?.getSelectedKey());
    }

    private setFilter(key: string | undefined): void {
        let statusFilters: Filter[] = [];
        const listBinding = this.getView()?.byId("incidentList")?.getBinding("items") as ListBinding;      
        if (key) {
            statusFilters = this.getUrgencyFilter(key);
        }
        listBinding.filter([this.defaultFilter, ...statusFilters]);        
    }
}
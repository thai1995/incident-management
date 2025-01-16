using { sap.capire.incidents as db} from '../db/schema';

/**
 * Service used by support personell, i.e the incidents: 'processors'
 */
service ProcessorService {
    entity Incidents as projection on db.Incidents;

    @readonly
    entity Customers as projection on db.Customers;
}

annotate ProcessorService.Incidents with @odata.draft.enabled;
annotate ProcessorService with @(requires: 'support');

/**
 * Service used by administrators to manage customers and incidents
 */
service AdminService {
    entity Customers as projection on db.Customers;
    entity Incidents as projection on db.Incidents;
}

annotate AdminService with @(requires: 'admin');
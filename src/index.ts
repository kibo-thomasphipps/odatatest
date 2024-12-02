export * from './lib/async';
export * from './lib/number';
import { createQueryBuilderV4 } from "@odata2ts/odata-query-builder"
import { qOrder } from './odata/QChannelAdvisorRestApiV1Models'
import { OrderService } from './odata/ChannelAdvisorRestApiV1ModelsService';

const q = createQueryBuilderV4("Order", qOrder)
    .select("CheckoutStatus") // => typesafe: only model attributes are allowed
    .filter(qOrder.CheckoutStatus.eq("Completed")) // => typesafe: only model attributes are allowed
    .expand("Items") // => typesafe: only expandable properties are allowed
    .build();
// const client = OData.New4({ serviceEndpoint: "/odata" })
// const service = new OrderService(fetch, "/odata", "name", { headers: {}});

console.log(q)
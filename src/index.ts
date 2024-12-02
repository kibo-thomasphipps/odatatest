export * from './lib/async';
export * from './lib/number';
import { FetchClient } from "@odata2ts/http-client-fetch";
import { createQueryBuilderV4 } from "@odata2ts/odata-query-builder"

import { OrderService } from './odata/ChannelAdvisorRestApiV1ModelsService';
import { qOrder } from './odata/QChannelAdvisorRestApiV1Models'

const BASE_URL = "https://api.channeladvisor.com/v1";
const httpClient = new FetchClient();
const q = createQueryBuilderV4("Order", qOrder)
    .select("CheckoutStatus") // => typesafe: only model attributes are allowed
    .filter(qOrder.CheckoutStatus.eq("Completed")) // => typesafe: only model attributes are allowed
    .expand("Items") // => typesafe: only expandable properties are allowed
    .build();
// const client = OData.New4({ serviceEndpoint: "/odata" })
// const service = new OrderService(fetch, "/odata", "name", { headers: {}});
const service = new OrderService(httpClient, BASE_URL,"Orders");

async function main() {

    const res = await service.query((builder)=>{
        return builder.select("CheckoutStatus")
    });
    console.log(res)    
}


console.log(q)
main().then(() => {
    console.log("done")
});
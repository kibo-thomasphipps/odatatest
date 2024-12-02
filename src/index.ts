export * from './lib/async';
export * from './lib/number';
import axios from 'axios';
import { FetchClient } from "@odata2ts/http-client-fetch";
import { createQueryBuilderV4 } from "@odata2ts/odata-query-builder"

import { OrderService } from './odata/ChannelAdvisorRestApiV1ModelsService';
import { qOrder } from './odata/QChannelAdvisorRestApiV1Models'

const BASE_URL = "https://api.channeladvisor.com/v1";

const q = createQueryBuilderV4("Order", qOrder)
    .select("CheckoutStatus") // => typesafe: only model attributes are allowed
    .filter(qOrder.CheckoutStatus.eq("Completed")) // => typesafe: only model attributes are allowed
    .expand("Items") // => typesafe: only expandable properties are allowed
    .build();
// const client = OData.New4({ serviceEndpoint: "/odata" })
// const service = new OrderService(fetch, "/odata", "name", { headers: {}});


async function main() {
    const access_token= await foo();
    const httpClient = new FetchClient({ headers: { Authorization: `Bearer ${access_token}` } });

    const service = new OrderService(httpClient, BASE_URL,"Orders");
    const res = await service.query((builder)=>{
        return builder.expand("Items");
    });
    console.log(res)    
}
async function foo (){


    const clientId = 'bmk83yj24b2qc4k8q7p1h4l32ke9nsa7';
    const clientSecret = 'xxx';
    const refreshToken = 'xxx';
    const orderId = '123456'; // Replace with an actual order ID

const response = await axios.post(
    'https://api.channeladvisor.com/oauth2/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }
  );

  return  response.data.access_token;

};

console.log(q)
main().then(() => {
    console.log("done")
}).catch((e) => {
    console.error(e)
});
## **Adding new assets to the catalog**

The asset list is controlled to avoid fake or spam listings -- no reasonable requests will be denied<br>
Please read and take care with your addition to ensure quick integration<br>

## **Requirements and listing process**

Any native IBC token, CW20 or otherwise that can be sent to Juno chain can be added.

-Fork this repo<br>
-Add token information to [*tokens.js*](https://github.com/cac-group/front-end-utils/blob/main/tokens.js) [*information must be complete - resources included at end of page*]<br>
-Upload a clear, 400x400 .png image labelled by-denom to [*/front-end-utils/logos/*](https://github.com/cac-group/front-end-utils/tree/main/logos)

<br>

# Token list formatting

```
#This is an EXAMPLE
#Tokens each appear twice in the list. All tokens are listed in the first section followed by a separate section for either "native" IBC or CW20 tokens
#Append to the end of relevant section(s) only

export default {
    "tokens": [
        {
            "name": "ATOM",
            "denom": "uatom",
            "denomJuno": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exp": "1000000"
        },
        {
            "name": "JUNO",
            "denom": "ujuno",
            "denomJuno": "ujuno",
            "exp": "1000000"
        },
    ],
    "cw20": [
        {
            "name": "WYND",
            "contract": "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
        },
    ],
    "ibc": [
        {
            "name": "ATOM",
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "chain_id": "cosmoshub-4",
            "channelto": "channel-1",
            "channelfrom": "channel-207",
            "gas_fees": "200",
            "rpc": "https://rpc-cosmoshub.blockapsis.com"
        },
        {
            "name": "MARS",
            "denom": "ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384",
            "chain_id": "mars-1",
            "channelto": "channel-209",
            "channelfrom": "channel-3",
            "gas_fees": "0",
            "rpc": "https://rpc.mars.coldyvalidator.net"
        }
    ]
}
```
<br>

## RESOURCES

**IBC token info**<br>
https://www.mintscan.io/juno/assets<br>
https://www.mintscan.io/juno/relayers<br>
https://github.com/CosmosContracts/junoswap-asset-list *[recently deprecated]*<br>

**CW20 token info**<br>
https://www.mintscan.io/juno/wasm<br>

**RPC, token logo and more++**<br>
https://github.com/cosmostation/chainlist/tree/main/chain<br>
https://cosmos.directory/<br>

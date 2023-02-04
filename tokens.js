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
        {
            "name": "OSMO",
            "denom": "uosmo",
            "denomJuno": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exp": "1000000"
        },
        {
            "name": "MARS",
            "denom": "umars",
            "denomJuno": "ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384",
            "exp": "1000000"
        },
        {
            "name": "axlUSDC",
            "denom": "usdc",
            "denomJuno": "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
            "exp": "1000000"
        },
        {
            "name": "WYND",
            "denomJuno": "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
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
            "name": "OSMO",
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "chain_id": "osmosis-1",
            "channelto": "channel-0",
            "channelfrom": "channel-42",
            "gas_fees": "0",
            "rpc": "https://rpc.osl.zone/"
        },
        {
            "name": "axlUSDC",
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

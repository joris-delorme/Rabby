var Y=Object.defineProperty,K=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var S=(t,f,a)=>f in t?Y(t,f,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[f]=a,A=(t,f)=>{for(var a in f||(f={}))W.call(f,a)&&S(t,a,f[a]);if(M)for(var a of M(f))Z.call(f,a)&&S(t,a,f[a]);return t},k=(t,f)=>K(t,J(f));import{R as U,j as e,F as q,r as m,a as r,b,p as $,W as _,C as f0,c as e0,f as t0,d as a0,e as L,g as c0,h as r0,P as n0}from"./vendor.5c86b812.js";const s0=function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerpolicy&&(n.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?n.credentials="include":c.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(c){if(c.ep)return;c.ep=!0;const n=a(c);fetch(c.href,n)}};s0();var Q="data:image/png;base64,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";const o0=({title:t,classprops:f})=>e("li",{className:`mx-4 text-white block font-bold cursor-pointer ${f}`,children:t}),i0=()=>(U.useState(!1),e(q,{children:e(m.Fade,{top:!0,cascade:!0,children:r("nav",{className:"w-full flex justify-around items-center p-10",children:[e("div",{className:"flex-initial justify-center items-center",children:e("img",{src:Q,alt:"logo",className:"w-16 cursor-pointer"})}),e("ul",{className:" md:flex hidden list-none flex-row justify-between items-center flex-initial",children:["About","Dashboard","Contact"].map((t,f)=>e(o0,{title:t},t+f))}),e("div",{className:"bg-[#fff] py-2 px-7 mx-4 rounded-full cursor-pointer text-black font-bold hover:opacity-80",children:"Connect"})]})})})),b0=()=>r("footer",{className:"mb-20 px-20",children:[e("div",{className:"h-[1px] my-20 bg-[rgba(255,255,255,0.5)] mx-auto"}),e("div",{className:"flex",children:e("img",{src:Q,className:"w-32",alt:"logo"})})]}),l0=()=>e("h1",{children:"Services"}),d0="hh-sol-artifact-1",m0="Transactions",u0="contracts/Transactions.sol",p0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b2bd14d2aabb02a1e772e1e3ec607976df9019991d82db5c2fa93debf2e6ecbb64736f6c63430008000033",x0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b2bd14d2aabb02a1e772e1e3ec607976df9019991d82db5c2fa93debf2e6ecbb64736f6c63430008000033",g0={},A0={};var y0={_format:d0,contractName:m0,sourceName:u0,abi:p0,bytecode:h0,deployedBytecode:x0,linkReferences:g0,deployedLinkReferences:A0};const N0=y0.abi,v0="0x6A0Cd646732818C08Af3F60a22E9680D718BDfDd",y=U.createContext(),{ethereum:l}=window,N=()=>{const f=new _(l).getSigner();return new f0(v0,N0,f)},T0=({children:t})=>{const[f,a]=b.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[o,c]=b.exports.useState(""),[n,i]=b.exports.useState(!1),[u,I]=b.exports.useState(localStorage.getItem("transactionCount")),[D,F]=b.exports.useState([]),[O,w]=b.exports.useState(!1),R=(s,p)=>{a(h=>k(A({},h),{[p]:s.target.value}))},z=()=>{w(!1)},X=async()=>{try{if(l){const h=(await N().getAllTransactions()).map(d=>({addressTo:d.receiver,addressFrom:d.sender,timestamp:new Date(d.timestamp.toNumber()*1e3).toLocaleString(),message:d.message,keyword:d.keyword,amount:parseInt(d.amount._hex)/10**18}));console.log(h),F(h)}else console.log("Ethereum is not present")}catch(s){console.log(s)}},B=async()=>{try{if(!l)return alert("Please install MetaMask.");const s=await l.request({method:"eth_accounts"});s.length?(c(s[0]),X()):console.log("No accounts found")}catch(s){console.log(s)}},G=async()=>{try{if(l){const p=await N().getTransactionCount();window.localStorage.setItem("transactionCount",p)}}catch(s){throw console.log(s),new Error("No ethereum object")}},P=async()=>{try{if(!l)return alert("Please install MetaMask.");const s=await l.request({method:"eth_requestAccounts"});c(s[0])}catch(s){throw console.log(s),new Error("No ethereum object")}},V=async()=>{try{if(l){const{addressTo:s,amount:p,keyword:h,message:d}=f,E=N(),C=$(p);await l.request({method:"eth_sendTransaction",params:[{from:o,to:s,gas:"0x5208",value:C._hex}]});const g=await E.addToBlockchain(s,C,d,h);i(!0),console.log(`Loading - ${g.hash}`),await g.wait(),console.log(`Success - ${g.hash}`),i(!1),w(!0);const j=await E.getTransactionCount();I(j.toNumber())}else console.log("No ethereum object")}catch(s){throw console.log(s),new Error("No ethereum object")}};return b.exports.useEffect(()=>{B(),G()},[u]),e(y.Provider,{value:{transactionCount:u,connectWallet:P,transactions:D,currentAccount:o,isLoading:n,sendTransaction:V,handleChange:R,formData:f,closeSuccessPage:z,transactionSuccess:O},children:t})},w0="Y7lS73vZnYWOxlLGChdHbDaw7QtzTYr5",E0=({keyword:t})=>{const[f,a]=b.exports.useState(""),o=async()=>{var c,n;try{const i=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${w0}&q=${t.split(" ").join("")}&limit=1`),{data:u}=await i.json();a((n=(c=u[0])==null?void 0:c.images)==null?void 0:n.downsized_medium.url)}catch{a("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return b.exports.useEffect(()=>{t&&o()},[t]),f},v=({address:t})=>e("span",{children:`${t.substring(0,7)}...${t.substring(t.length-1,t.length-8)}`}),C0=({addressFrom:t,addressTo:f,timestamp:a,keyword:o,message:c,amount:n,url:i})=>{const u=E0({keyword:o});return r("div",{className:"text-white p-5 rounded-[10px] flex flex-col items-center white-glassmorphism",children:[r("div",{className:"flex w-full justify-between mb-5",children:[e("p",{children:a}),e("p",{className:"font-bold",children:`${n} ETH`})]}),r("div",{className:"flex w-full justify-between mb-5",children:[r("a",{href:`https://ropsten.etherscan.io/address/${t}`,children:[e("p",{className:"font-bold",children:"From : "}),e(v,{address:t})]}),r("a",{href:`https://ropsten.etherscan.io/address/${f}`,children:[e("p",{className:"font-bold",children:"To : "}),e(v,{address:f})]})]}),e("div",{className:"w-[200px] h-[200px] rounded-[10px] overflow-hidden flex justify-center",children:e("img",{src:u||"https://media0.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=ecf05e47znhto2gvi7ubh7xv96pebg5j5zq7pdixiun5m50z&rid=giphy.gif&ct=g",alt:"gif",className:"h-full max-w-fit"})}),e("p",{className:"mt-5",children:c&&`Message : ${c}`})]})},M0=()=>{const{transactions:t,currentAccount:f}=b.exports.useContext(y);return console.log(t),r("section",{className:"w-[100vw]",children:[e("h2",{className:"text-center text-white text-5xl font-black",children:"All your transaction, enjoy !"}),e("div",{className:"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-20 p-3 gap-5",children:[...t].reverse().map((a,o)=>e(C0,A({},a),o))})]})},S0=()=>e(m.Fade,{bottom:!0,cascade:!0,children:r("div",{className:"text-white mb-5 px-10 max-w-[820px] mx-auto mt-20",children:[e(m.Fade,{bottom:!0,cascade:!0,children:e("h1",{className:"sm:text-5xl text-[40px] font-black text-center mb-5 sm:mb-10",children:"We centralize a decentralized world to make crypto currency easier"})}),e(m.Fade,{bottom:!0,cascade:!0,children:e("p",{className:"text-center mb-10 max-w-[500px] mx-auto",children:"The last crypto currency news in real time, send crypto white gif genrate by AI, view your transaction with gif and message and more..."})}),e(m.Fade,{bottom:!0,cascade:!0,children:r("div",{className:"flex justify-center flex-col items-center sm:flex-row",children:[e("button",{className:"py-3 px-5 rounded-[10px] border-[1px] transition duration-300 font-bold sm:mb-0  sm:mr-5 mb-5 hover:bg-white hover:text-black",children:"Start to send crypto"}),e("button",{className:"py-3 px-5 rounded-[10px] bg-[#9A4AFF] transition duration-300 hover:opacity-70 font-bold",children:"Joint us on Disscord"})]})})]})});var k0="/assets/welcomeGradient.68d1aaf6.png",U0="/assets/welcomeGradientMobile.a82e9a19.png",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUXSURBVHgB7Z3tdds2FIYf+/R/vUHRCepOEHaCegOzE9QbiJ0g7gRSJ0g2oDtBkgnITGBtwBCmkNCy+CWBxAWI55xXlnRk8QIvLgGQIAURcVwhn5taqtbtQb8cXpv3uygP2tf6enj++aA9gpFoiq5sXfl3td4dnttGG/N/raeDRJvkCm1EWiuv9VyrWlgfDtu/IUJS6xE3RnRpe4hrdSQ0WSHFiFP6RJM9wZMg34xjFQRqToJ/ZpwyRxEAuuN8j1+VP6QtHpuT0LQuHyr6nKxJ8YzQsqNLupzih9GKZmLmU8XayBqFUPTMWwfoQ0XOYUyCMO7xqxLn0gNC2OBXxc2tDY7Z4F+lBW3MBn8rLUhj/sbvCgvOmFugihqte2ZGsd5h77nSpyXmOFH3gp65FkAVNVkFM83813LoZC59wDIpUEVdLGuTS0XcbdnSM5aOk+2AKsqaci7kDqiirOuOHobWfRUEcgpUGGWt3+lYb3bd848p0ZC5UPR0+n2ZErNkXnSW/MqJbOnKlJRoyNzoyeTJbOnKlJgly3AyW3468cEUOYboYP/lxwr6OVE0x6j+ZLnymzXUj0MfzJExbHSVrYplJ8v5mIBcm2GU4o6EZcuatDd+3NH3TmoW5iPu+Myy9Na7XmkuJVNcL3JbsqzP7Q23M0Ux48mYM5AUy9zoBpiYF21TEmSxxW5HL315aWKetIfE98hC0YxMnmiuTxyLuUD1Z5psM2b8gexrG9+delPSJW42pTttxXRcxPrSgMzuq92iQuILzW6hxA9e+tG2KaHxH40hPl2OHbQp2pCUYUOk7R1+0w/X7ReB8A/jjgbcI68xvopH0qTxEmWMw5zm7jPFRfzPrgNwZcgtP0aafbsvV+V4ienGYQBLG6J4PfTvw1VZlAm08lgZ41C8PiRfDHzeVXmSa/w+w6g79WzE5xTN0QHVeq9EJjfX+MslhkjGW1NsGFIiFB9NCTVDvuObKcEbUrPXppT4wRoM0ex9yZS1GPKKSrAyxqEnwVPuC7Md+D5X5VUmAKknuDLGMdUQyaZ87+hL5DF2l6UNeSKMI92lfjCmfEEWazREU+oHY8rSi8/6WKshmlfJkeBuH7pUH3KsvOf7Xd1V4+64kJVjZYzDhiFGqmMbO0vfP1VvTrq5PPuYMQ6bhmgVvDVmY/H7p8byhkdHwWSMw7YhbekGmeN2avDxVKETB4FsGcechkhR2lXwpVvKmNUkazBES3VVwG7hQIZYiyE5PSQLB6N6YlmLIVopAyy5C3vfEcOaDKkYsVIzWzigzdH2E9ZlyPao/Cevozcd/tKUh7+KdaGvoy/HfHCHX63NV+VMQAGuA16DEiayA1wHHbJyOriiG0Vz+CHEK7wk0NmX9C2cKGnuixKxz44LzvbGexHbV8HACHNoidG+1l9EbGLuynQxrg7rh6Yci8Td2OUqmGFinABV1NlKmYkHoIqarIyZif3LNFn/4YEucqCKGlTBgpNvvaFQrr2f0xDFwijiiEyUIQZFNEaUIYa4KxNmSJu1j8pyhB5Rz/CrIm3pEeHoleMFflXqudJrGR7wBEX4c5lz703pHN2KCvyq7DHZkeE5inDO9+cEtgRKL+b2deicI+9m2lZJ8cecHLe/TrE4CXJ3azmBZ8YQiqY1Frg1wnTgcUnVEbrf0SM23VKXyogMYVlxhVx0i9UmJTQ35zevz6WkmVt8pbn+XmuPQCSbcgrziw/mr+r5bElT6WXruRd8A/CR0LkoWTCrAAAAAElFTkSuQmCC";const L0={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"b9d539d7aamsh44b37f98aa766abp1b9fb4jsn8bcdf0736723"},Q0=t=>({url:t,headers:L0}),T=e0({reducerPath:"cryptoNewsApi",baseQuery:t0({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:t=>({getCryptoNews:t.query({query:({newsCategory:f,count:a})=>Q0(`/news/search?q=${f}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${a}`)})})}),{useGetCryptoNewsQuery:H0}=T,I0=()=>{const{data:t}=H0({newsCategory:"Cryptocurrency",count:6});return(t==null?void 0:t.value)?(console.log(t),r("section",{className:"mt-20",children:[e(m.Fade,{bottom:!0,cascade:!0,children:r("h1",{className:"text-white block font-black text-5xl px-10 text-center w-full",children:["Get the last news about the crypto",e("br",{}),"currency in real time "]})}),r("div",{className:"lg:p-20 p-3 flex-col",children:[e("div",{className:"mr-5",children:t.value.slice(0,3).map((f,a)=>{var o,c,n,i;return r("article",{className:"flex justify-between max-w-[100vw] bg-[#fff] items-center rounded-[10px] mb-5",children:[e("div",{className:"overflow-hidden h-full w-[220px]",children:e("img",{className:"h-full w-fit rounded-[10px]",src:((c=(o=f==null?void 0:f.image)==null?void 0:o.thumbnail)==null?void 0:c.contentUrl)&&((i=(n=f==null?void 0:f.image)==null?void 0:n.thumbnail)==null?void 0:i.contentUrl),alt:""})}),r("div",{className:"py-10",children:[e("h4",{className:" lg:px-10 max-w-[420px] font-bold font-[30px] min-w-[300px] sm:min-w-[450px] mb-2",children:(f==null?void 0:f.name.length)>80?`${f==null?void 0:f.name.substring(0,80)}...`:f==null?void 0:f.name}),e("p",{className:" lg:px-10 max-w-[420px]",style:{fontSize:15+"px"},children:(f==null?void 0:f.description.length)>100?`${f==null?void 0:f.description.substring(0,100)}...`:f==null?void 0:f.description})]}),e("a",{href:f==null?void 0:f.url,target:"_blank",className:"p-5 transition-delay-300 hover:opacity-50",children:e("img",{src:H,alt:"open button",className:"w-[60px]"})})]},a)})}),e("div",{className:"flex flex-col justify-between",children:t.value.slice(3,5).map((f,a)=>r("article",{className:"bg-[#fff] items-center rounded-[10px] mb-5",children:[r("div",{className:"py-10",children:[e("h4",{className:"text-center px-10 max-w-[420px] font-bold font-[30px] min-w-[300px] sm:min-w-[450px] mb-2",children:(f==null?void 0:f.name.length)>80?`${f==null?void 0:f.name.substring(0,80)}...`:f==null?void 0:f.name}),e("p",{className:"text-center px-10 max-w-[420px]",children:(f==null?void 0:f.description.length)>100?`${f==null?void 0:f.description.substring(0,100)}...`:f==null?void 0:f.description})]}),e("a",{href:f==null?void 0:f.url,target:"_blank",className:"p-5 w-full transition delay-300 hover:opacity-50",children:e("img",{src:H,alt:"open button",className:"mx-auto w-[60px]"})})]},a))})]})]})):e("p",{children:"Loading..."})};var D0="data:image/png;base64,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",F0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAArCAYAAABPa2dBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7Zvxdds2EMY/9/X/qhMUG0SdIPIEcSaoMoHlCeJM0HQCKRPYnUDIBLEmEDqB3QkQnAg6NEwSdyCOSd7z7z2GNHWCwPuAwwFEgBdeeOEHwXu/93K+hOMmHOtwGObvfPHlLJOyVl7O0TfPusnV2ct9cu+b59v6xieLnjKvOQV17Ndse18mYhd6gPfIi3jvy7moIGLK3g+I6af75OgTn4S/L5jfNdF+w7C9/wV1oFZHrYxa4iJjN+U3arMKxzHU+S/Ux6DxydF/ayh3kMF55rtaIrZQyLvp+8AzQ+4IGiK27HzS0ytiwrGnxn12dubC9QPjO4vkPMahtogEhblNz32DaRjoss1EkSmYcLQ++cywl4hoNUQk3is45DfoQvXdQI/L6BPHsDXx/F3CKTo/noYng2n8Dn0uoQf5ZB0OK/hOruE+UIjWEpF4nfxtMI0/oM+iwtg9xgq85IYbxU5lSUSkAfk8HO/AG5yXKKvYEKXfv0JTb8u0X4KP1CevmMkNd0w8ja+/gg91XUsXvpl450KPQX/FSjEo447q7Zs58YphL6ln1yercMpNVUw8k/PfIF+HXF3EPbGLJE1umRwOJyZLDj8OLvN5OxaqilhCjWxVc644J5ZpN/a8DzE0zyqiwXQM9OFEmVJcPOeSG8OIOo9laIqYOuNn6YkOejj6h5HcLMBMaghNER9bSsW0XXvt1QUHc6YApfzbuR5bueGIOEtPPHSua/Ugg3I4UweLcjiJ223n2mVscz6z7YWmiLZzzRHxlmFT0hjoTcI2nP9m2H6ADFocoDXXPfLTl12biETsiK3BOBQxHsOxZJ54Ig64ufkQ/citoFLEJzxfqkspWT99jeerR338kziZQ7uUloMcnjaQXNgea3TdKCcSkTKmI3jxOq2wQR7HsDHQwQYBN9DjKm0g9HfwJ4k75Mux8P+kAUjDqUFewEOo4C65xwmDnNTeoC6nHhLqew4dbDjOe/zRwnktNVTuI+JwmsGhPyRyRXSYZy5IfEQjoMa88LSmysh0HcqY1BOHcGhC6J8D40o2c2M606AeFD5pO8ka9VnEsreZ6ZWFHJf6qoaIVOC7UPD1iBDVJumVXxUZNG/0t9BhjUbMoUSwZE56SG/UEJEE2icbgvpsxnDJeW7WikLSs+/iW44nCPbcdHkmfM15okHT6pYDn41+N2a+S/B+RwI9tEXeWeuBvUE5LHhhcWgPj7Q32vRG7ck+VfKmW1nB6yMDXtg1kHEVs8+3DFvp3iAan85j+Z8ytgb9e3gOkDGpJ7YTVmllDepSNL62L28ZZa9RhmPY9L1Il/TEu768QyRiTF7WyAt52WnR1ZIapfJSVtBj0TM2WvD5r+9maTh1mc+7u90M6qK9YYqzRDeFJ+O+MLmxfTfn2O1Wu+dob11cKG4iJl713OOG1F47TRFX8VzbIdqbiAlNEfsaITe5mV3E1hEGdTH4uelrhKxwOrSYUnvttEsrImcMs2gWgynUXDDLFaG8KVjC/6iMpogSPlPmGzO32iJeRAHfcL8QXxNxTBdx7ZXzjrXFoTJziGgYNg4ChL1K+v8rJPM2Ek+6XCddockyx5ZFI7B1TDvNxKP0HR8Xi8qoiihI1R1kGOjxEXrsCraAZNHcxk+soINWT/yg4eRIu2xZHW0RRc4WOFBDRNpWcg09rrQaiLaIhmnnIMOgLrQWvIIO7UvzHZTQWjttYaf1wrJrrdpQpviWFvWV9trs0GxZ2UGRr9yCLzoZloUUAAAAAElFTkSuQmCC";const O0=({handler:t})=>{const{width:f,height:a}=window,[o,c]=b.exports.useState(!1),n=()=>{c(!0),setTimeout(()=>{t()},3500)};return r("div",{className:`fixed z-[99] bg-[rgba(0,0,0,0.8)] items-center top-0 left-0 w-full h-[100vh] flex align-item-center transition duration-350 ease-out justify-center ${o&&" opacity-0 "}`,children:[e("div",{className:"fixed top-0 left-0",children:e(a0,{width:f,height:a})}),e(m.Fade,{top:!0,children:r("div",{className:"flex z-[99]  flex-col px-20 py-10 bg-[#14223A] h-fit justify-center items-center rounded-[20px]",children:[r("svg",{id:"successAnimation",class:"animated mb-5",xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 70 70",children:[e("path",{id:"successAnimationResult",fill:"#D8D8D8",d:"M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"}),e("circle",{id:"successAnimationCircle",cx:"35",cy:"35",r:"24",stroke:"#979797","stroke-width":"2","stroke-linecap":"round",fill:"transparent"}),e("polyline",{id:"successAnimationCheck",stroke:"#979797","stroke-width":"2",points:"23 34 34 43 47 27",fill:"transparent"})]}),r(m.Fade,{cascade:!0,children:[r("h3",{className:"font-black text-center text-3xl text-white mb-10",children:["Your ethereum are send",e("br",{}),"white success"]}),e("button",{onClick:()=>n(),className:"py-3 px-5 success-transaction-gradient font-black text-white",children:"Show gif transaction"})]})]})})]})},x=({type:t="text",name:f,placeholder:a,value:o,handleChange:c})=>e("input",{type:t,placeholder:a,step:"0.0001",value:o,onChange:n=>c(n,f),className:"my-2 w-full rounded-[10px] p-4 outline-none bg-[#0B111C] text-white border-none text-sm"}),R0=()=>{const{connectWallet:t,currentAccount:f,handleChange:a,sendTransaction:o,closeSuccessPage:c,transactionSuccess:n}=b.exports.useContext(y);return r("div",{className:"lg:p-5 w-[100vw] flex items-center justify-around lg:flex-row flex-col lg:items-start",children:[n&&e(O0,{handler:c}),e(L,{cascade:!0,children:r("div",{className:"p-10 lg:sticky top-40",children:[e("div",{children:r("h1",{className:"w-full text-center lg:text-left whitespace-nowrap mb-5 bg-transparent text-gradient sm:text-5xl text-4xl font-black uppercase",children:["Send crypto, ",e("br",{})," across the world"]})}),r("p",{className:"text-white text-xl text-center lg:text-left font-bold mb-10",children:["Explore the crypto world. Buy and sell",e("br",{})," cryptocurrencies easily on Rabby."]}),e("div",{children:e("button",{onClick:t,className:"gradient-button w-fit mx-auto lg:mx-0 font-bold rounded-[15px] p-4",children:e("span",{className:"gradient-button-span",children:"Connect Wallet"})})})]})}),e("div",{className:"p-10",children:r(L,{bottom:!0,children:[r("div",{className:"rounded-[20px] mx-auto p-5 mb-20 eth-card min-h-[170px] sm:min-h-[250px] max-w-[400px] sm:max-w-[500px] flex flex-col justify-between",children:[r("div",{className:"flex w-full justify-between  mb-30",children:[e("img",{src:D0,alt:"etherum logo",className:"w-16"}),e("img",{src:F0,alt:"Rabby logo",className:"h-[28px] mt-[15px]"})]}),r("div",{children:[e("p",{className:"text-white",children:f?e(v,{address:f}):"Adress"}),e("p",{className:"text-white font-bold text-xl",children:"Ethereum"})]})]}),r("div",{className:"blue-glassmorphism p-10 rounded-[15px] sm:max-w-[500px] blue-glassmorphism",children:[e(x,{name:"addressTo",placeholder:"Address To...",handleChange:a}),e(x,{name:"amount",placeholder:"Amount (ETH)...",type:"number",handleChange:a}),e(x,{name:"keyword",placeholder:"Keyword (Gif)...",handleChange:a}),e(x,{name:"message",placeholder:"Enter Message...",handleChange:a}),e("div",{className:"h-[1px] w-[90%] bg-white my-10 mx-auto"}),e("button",{type:"button",onClick:o,className:"w-full py-4 text-white transition duration-300 hover:bg-white hover:text-black  font-bold border rounded-[10px]",children:"Send Now"})]})]})})]})},z0=()=>r("div",{className:"main-h-screen",children:[e("img",{src:k0,alt:"gradient",className:"fixed bg-gradient hidden sm:block  z-[-1]"}),e("img",{src:U0,alt:"gradient",className:"fixed sm:hidden w-[100vw] z-[-1]"}),e(i0,{}),e(S0,{}),e(R0,{}),e(I0,{}),e(l0,{}),e(M0,{}),e(b0,{})]});var X0=c0({reducer:{[T.reducerPath]:T.reducer}});r0.render(e(n0,{store:X0,children:e(T0,{children:e(z0,{})})}),document.getElementById("root"));
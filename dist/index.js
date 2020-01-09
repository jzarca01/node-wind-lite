"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var axios=_interopDefault(require("axios")),faker=_interopDefault(require("faker"));class Wind{constructor(){this.clientId=faker.random.uuid(),this.headers={"X-App-Version":"4.10.0","X-Req-Id":this.clientId,"X-MCC":"510","X-Package-Name":"com.zen.zbike","X-MNCMCC":"510_10","X-MNC":"10","X-Adv-Id":faker.random.uuid(),Authentication:`clientId=${this.clientId};`},this.request=axios.create({baseURL:"https://api-prod.ibyke.io",headers:this.headers,...options})}async getOperatingCountries(){try{return(await this.request({method:"GET",url:"/v2/operatingCountries/info",responseType:"json"})).data}catch(e){return console.log("error with getOperatingCountries",e),e}}async getOperatingAreas(){try{return(await this.request({method:"GET",url:"/v2/operatingAreas",responseType:"json"})).data}catch(e){return console.log("error with getOperatingAreas",e),e}}async getBoardsNearby({latitude:e,longitude:t}){try{return(await this.request({method:"GET",url:"/v2/boards",params:{latitude:e,longitude:t},responseType:"json"})).data}catch(e){return console.log("error with getBoardsNearby",e),e}}async getBikesNearby({latitude:e,longitude:t}){try{return(await this.request({method:"GET",url:"/v2/bikes",params:{latitude:e,longitude:t},responseType:"json"})).data}catch(e){return console.log("error with getBikesNearby",e),e}}async getParkingPortsNearby({latitude:e,longitude:t}){try{return(await this.request({method:"GET",url:"/v2/parkingPorts",params:{latitude:e,longitude:t},responseType:"json"})).data}catch(e){return console.log("error with getParkingPortsNearby",e),e}}}module.exports=Wind;

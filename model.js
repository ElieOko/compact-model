// const axios = require('axios');
// require('dotenv').config();

// class CompactRemoteConnexion {
//     configClient = {
//         baseURL :"",
//         headers :{
//             accept :"",
//             ContentType:"",
//             XRequestedWith:"",
//             Authorization:""
//         }
//     };
//     request(configAxios){  
//       const method =  {
//          _request   : this.#axiosRequestServer(configAxios),
//         }
//         return method;
//     }
//     getAllData(model,token){
//       return  this.#axiosRequestServer(token).get(model);
//     }
//     createData(model,token,data){
//         return this.#axiosRequestServer(token).post(model,data);
//     }
//     #axiosRequestServer(config={}){
//         axios.defaults.withCredentials = true;
//         axios.defaults.withXSRFToken = true;
//         return axios.create(this.configAxios(config));
//     }
    
//     watchUrlTrafic(){
//         const protocole = `${process.env.PROTOCOLE??"http"}://`;
//         const domaine = `${process.env.DOMAINE??"127.0.0.1"}`;
//         const port = `${process.env.PORT?`:${process.env.PORT}`:""}`;
//         let apiRoute = `${process.env.API_ROUTE??"/api/"}`;
//         return protocole+domaine+port+apiRoute;
//     }
//     configAxios(token=""){
//         const url = this.configClient.baseURL?this.configClient.baseURL: this.watchUrlTrafic();
//         return {
//             baseURL             :url,
//             headers : {
//             accept              :`${this.configClient.headers.accept?object.headers.accept:'application/json'}`,
//             "Content-type"      :`${this.configClient.headers.ContentType?object.headers.ContentType:"application/json"}`,
//             "X-Requested-With"  :`${this.configClient.headers.XRequestedWith?object.headers.XRequestedWith:"XMLHttpRequest"}`,
//             "Authorization"     :`${this.configClient.headers.Authorization?`${object.headers.Authorization} ${token}`:`Bearer ${token}`}`       
//             }
//         }
//     }
// }
// class CompactModelProxy extends CompactRemoteConnexion{
//     list = "/all";
//     detail = "/detail/:id";
//     create = "/store";
//     destory = "/delete/:id";
//     update = "/update/:id";
//     model = this.#getChildName().toLocaleLowerCase();
//     #getChildName() {return this.constructor.name;}
//     #_create(){return `${this.#compress(this.model)}${this.create}`}
//     #_list(){return `${this.#compress(this.model)}${this.list}`}
//     #_destroy(){return `${this.#compress(this.model)}${this.destory}`}
//     #_update(){return `${this.#compress(this.model)}${this.update}`}
//     currentModelDefaut(){return this.#getChildName();}
//     getAll(model){
//         const url = this.#_list(model);
//         return this.getAllData(url)
//     }
//     method(config,data){
//        const allRequest = {
//           post   : this.request(config)._request.post(this.#_create(),data),
//           get    : this.request(config)._request.get(this.#_list()),
//           delete : this.request(config)._request.delete(this.#_destroy()),
//           update : this.request(config)._request.put(this.#_update(),data)
//         }
//         return allRequest
//     }
//     #compress(model){return `/${model ? model : this.#getChildName().toLocaleLowerCase()}`}
//     modelEventRouting(){
//         return {create : this.#_create(),list : this.#_list(),destory : this.#_destroy()}
//     }
// }
// module.exports ={CompactModelProxy}
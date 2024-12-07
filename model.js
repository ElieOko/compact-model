const axios = require('axios');
require('dotenv').config();

class  CompactRemoteConnexion {
    getAllData(model,token){
      return  this.axiosRequestServer(token).get(model);
    }

    createData(model,token,data){
        return this.axiosRequestServer(token).post(model,data);
    }
    
    axiosRequestServer(token=""){
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        return  axios.create({
            baseURL             :`${process.env.MY_SERVER}${process.env.API_ROUTE}`,
            headers : {
            accept              :   'application/json',
            "Content-type"      :   "application/json",
            "X-Requested-With"  :   "XMLHttpRequest",
            "Authorization"     :   `Bearer ${token}`       
                }
        })  
    }
}

class CompactModelProxy extends CompactRemoteConnexion{
    list = "/all";
    detail = "/detail/:id";
    create = "/store";
    destory = "/delete/:id";
    update = "/update/:id";
    
    #getChildName() {
        return this.constructor.name;
    }
    #_create(model){
        const compress = model ? model : this.#getChildName().toLocaleLowerCase()
        return `/${compress}${this.create}`
    }
    #_list(model){
        const compress = model ? model : this.#getChildName().toLocaleLowerCase()
        return `/${compress}${this.list}`
    }
    #_detail(model){
        const compress = model ? model : this.#getChildName().toLocaleLowerCase()
        return `/${compress}${this.detail}`
    }
    #_destroy(model){
        const compress = model ? model : this.#getChildName().toLocaleLowerCase()
        return `/${compress}${this.destory}`
    }
    
    currentModelDefaut(){
        return this.#getChildName();
    }
    getAll(model){
        const url = this.#_list(model);
        return this.getAllData(url)
    }

    modelEventRouting(model){
        return {
            create : this.#_create(model),
            list : this.#_list(model),
            detail :this.#_detail(model),
            destory : this.#_destroy(model)
        }
    }
}
module.exports ={CompactModelProxy}
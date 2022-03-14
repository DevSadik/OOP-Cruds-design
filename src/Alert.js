class Alerts{

    static danger(msg){
        return `<p class="alert alert-danger d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`
    }
    static warnnig(msg){
        return `<p class="alert alert-warnnig d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`
    }
    static info(msg){
        return `<p class="alert alert-info d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`
    }

}

export default Alerts;
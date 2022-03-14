

class Storage{
    /**
     * Local Storage Check Data Function
     * @param {*} key 
     * @returns 
     */
    static has(key){
        return localStorage.getItem(key) ? localStorage.getItem(key) : false ;
    }
    /**
     * Local Storage Set Data Function
     * @param {*} key 
     * @param {*} arr 
     */
    static set( key , arr ){

        let setData = [];

        if( this.has( key )){
            setData = JSON.parse( this.has(key) );
        }
        setData.push(arr);

        localStorage.setItem( key , JSON.stringify( setData ));
        
    }
    
    static get( key ){
        if( this.has(key) ){
            return JSON.parse( this.has(key) );
        }else{
            return " NO Data Found "
        }
    }
};

export default Storage;
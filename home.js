class house {
    constructor(type, bedRooms){
        this._type = type;
        this._bedRooms = bedRooms;
        this._bathRooms = 3;
        this._windows = 5;
        
    }
    get type() {

        console.log(`This is a ${this._type} house.`);
        return this._type;
    
}
construction(x){
    this._windows +=x;
    console.log(`The windows will increase to ${this._windows} during construction.`);
}
reconstruction(){
    this._bathRooms -=2;
    console.log(`The bathrooms will decrease to ${this._bathRooms} during reconstructon.`);
}



get bathRooms() {
    console.log(`There are ${this._bathRooms} bath rooms`);
    return this._bathRooms;

}

get bedRooms() {
 console.log(`There are ${this._bedRooms} bed rooms.`);
    return this._bedRooms;
    
}

}
var home = new house("ranch", "5");
console.log(home.bedRooms);
console.log(home.type);


home.construction(10);
home.reconstruction();

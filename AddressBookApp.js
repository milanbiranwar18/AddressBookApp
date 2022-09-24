class AddressBookApp
{
    

    get name(){
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name=name;
        else
        throw 'name is incorrenct';
    }

     get address()
     {
        return this._address;
     }

     set address(address)
    {
        this._address=address;
    }

    get city()
     {
        return this._city;
     }

     set city(city)
    {
        this._city=city;
    }

    get state()
     {
        return this._state;
     }

     set state(state)
    {
        this._state=state;
    }

    get zipcode()
     {
        return this._zipcode;
     }

     set zipcode(zipcode)
    {
        this._zipcode=zipcode;
    }

    get phonenumber()
    {
       return this._phonenumber;
    }

    set phonenumber(phonenumber)
   {
       this._phonenumber=phonenumber;
   }
     

    toString()
    {
        
        return "name= "+this.name+ ", city= "+this.city + ", state= "+this.state
        +" , address= "+this.address + " , zipcode = "+ this.zipcode 
        +" , phonenumber = "+ this.phonenumber ;
    }
}
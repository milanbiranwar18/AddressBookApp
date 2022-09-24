let isUpdate=false;
let addressBookobj=
{};


window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name.value))
        {
            textError.textContent="";
            return;  
        }
        try{
            (new AddressBookApp()).name=name.value;
            textError.textContent="";
        }catch(e)
        {
            textError.textContent=e;
        }
      
        

    }
    );

    checkForUpdate();
});



const checkForUpdate=()=>
{
    const addressBookJSON=localStorage.getItem('editaddress');
    isUpdate=addressBookJSON?true:false;
    if(!isUpdate) return;
    addressBookobj=JSON.parse(addressBookJSON);
    setForm();
}

const setForm=()=>
{
    setValue('#name',addressBookobj._name);
    setValue('#notes',addressBookobj._address);
    setValue('#city',addressBookobj._city);
    setValue('#state',addressBookobj._state);
    setValue('#code',addressBookobj._zipcode);
    setValue('#input',addressBookobj._phonenumber);
    
    
}

const setSelectedValues=(propertValue,value)=>
{
    let allItems=document.querySelectorAll(propertValue);
    allItems.forEach(item =>
        {
            if(Array.isArray(value))
            {
                if(value.includes(item.value))
                {
                    item.checked=true;
                }
               
            }
            else if(item.value===value)
            item.checked=true;
        });
}

const setValue=(id,value)=>
{
const element=document.querySelector(id);
element.value=value;
}


function createAndUpdateStorage(employeePayRollData)
{
    let employeePayRollList=JSON.parse(localStorage.getItem("AddressBookList"));

    if (employeePayRollList!=undefined)
    {
        employeePayRollList.push(employeePayRollData);
    }
    else
    {
        employeePayRollList=[employeePayRollData]
    }
    alert(employeePayRollList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(employeePayRollList));
}



const save=()=>
{
    
    try{
        if(isUpdate)
        {
        let employeePayRollData=createEmployeePayRoll();
        createAndUpdateStorage(employeePayRollData);
   
        window.location.replace(site_properties.home_page);
    }
    else{
        setValue();
    }
    }catch(e)
    {
        console.log(e);
        return;
    }
}






const createEmployeePayRoll=()=>
{
    let addressBookData=new AddressBookApp();
    try{
        addressBookData.name=getInputValurById('#name');
    }catch(e)
    {
        setTextValue('.text-error', e);
        throw e;
    }
    
    
    
    addressBookData.address=getInputValurById('#notes');
    addressBookData.city=getInputValurById('#city');
    addressBookData.state=getInputValurById('#state');
    addressBookData.zipcode=getInputValurById('#code');
    addressBookData.phonenumber=getInputValurById('#input');
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValurById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id)=>
{
    let value=document.getElementById(id).value;
    return value;
}

const getSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>
        {
            if(item.checked)
            selItems.push(item.value);
        });
        return selItems;
}

const resetform=()=>
{
    setValue('#name', '');
    setValue('#notes','');
    setValue('#city', '');
    setValue('#code','');
    setValue('#input','');
}

const unsetSelectedValues=(propertyValue)=>
{
    let allItems=document.querySelector(propertyValue);
    allItems.forEach(item=>
        {
            item.checked=false;
        });
}

const setTextValue=(id, value)=>{
const element = document.querySelector(id);
element.textContent = value;
}
/*
const setValue=(id,value)=>
{
    const element=document.querySelector(id);
   element.value=value;
}
*/
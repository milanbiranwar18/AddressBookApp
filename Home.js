let addressBookList;

window.addEventListener('DOMContentLoaded',(event)=>
{
   addressBookList=getEmployeePayrollDataFromStorage();
    createInnerHtml();
   
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('AddressBookList')?
    JSON.parse(localStorage.getItem('AddressBookList')):[];
}

const createInnerHtml=()=>
{
    const headerHTml="<th>FullName</th><th>Address</th><th>City</th>"+
    "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Delete/Edit</th>";

   if(addressBookList.length==0) 
    { let innerHtml=`${headerHTml}`;
    document.querySelector('#display').innerHTML=innerHtml;
    return;}


    let innerHtml=`${headerHTml}`;
     //addressBookList=createEmployeePayrollJSON();
    for(const addressBookData of addressBookList)
     { 

        innerHtml=`${innerHtml}

  
    <tr>
   
    <td>${addressBookData._name}</td>
    <td>${addressBookData._address}</td>  
    
    <td>${getDepthtml(addressBookData._city)}</td>
    
    <td>${addressBookData._state}</td>
    
    <td>${addressBookData._zipcode}</td>
    <td>${addressBookData._phonenumber}</td>
    <td>
        <img name="${addressBookData._name}" onclick = "remove(this)" src="images.png" alt="delete">
        <img name="${addressBookData._name}" onclick = "update(this)" src="download.png" alt="edit"> 
          
    </td>  
    </tr>
    
    
    `};
    document.querySelector('#display').innerHTML=innerHtml;
     
}

const getDepthtml=(depList)=>
{
    let depHtml='';
    for(const dept of depList)
    {
        depHtml=`${depHtml}<div class ='dept-label'>${dept}</div>`

    }
    return depHtml;
}



const remove=(node)=>
{
    let addressbookData=addressBookList.find(addressData=>addressData._name==node.name);
    if(!addressbookData)return;
    const index=addressBookList
    .map(addressData=>addressData._name)
    .indexOf(addressbookData._name);
    addressBookList.splice(index,1);
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
    
createInnerHtml();
}

const update=(node)=>{
    let addressbookData=addressBookList.find(addressData=>addressData._name==node.name);
    if(!addressbookData)return;
    localStorage.setItem('editaddress',JSON.stringify(addressbookData))
    window.location.replace(site_properties.add_emp_payroll_page);
}


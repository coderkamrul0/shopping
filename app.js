

let serial = 0
document.getElementById('first-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("first-item")
})
document.getElementById('second-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("second-item")
})
document.getElementById('third-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("third-item")
})
document.getElementById('four-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("four-item")
})
document.getElementById('five-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("five-item")
})
document.getElementById('six-item').addEventListener("click",function(e){
    serial = serial + 1;
    const pd  = getData(e);
    const total = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
    setData(serial,pd.pName,pd.pPrice,pd.pQuantity,total)
    const allTotalFind = document.getElementById('all-total').innerText;
    const allTotal = parseInt(total) + parseInt(allTotalFind) 
    document.getElementById('all-total').innerText = allTotal;
    disabled("six-item")
})


function getData(e){
    const pName = e.target.parentNode.parentNode.children[1].children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const pd = {
        pName: pName,
        pPrice: pPrice,
        pQuantity: pQuantity
    }
    return pd;
}
function setData(serial,pName,pPrice,pQuantity,total){
    const container = document.getElementById('table-container');
    let tr = document.createElement('tr');
    tr.innerHTML = `

    <td>${serial}</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${total}</td>
    
    `;
    

    container.appendChild(tr)

}
function disabled(btnId){
    document.getElementById(btnId).setAttribute('disabled', true)
}

document.getElementById('deleted').addEventListener('click',function(){
    console.log('ok');
})










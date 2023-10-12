import { https } from "../../../service/service.js"
import { clearModal, getDataForm, renderFoodList, showDataForm, turnOffLoading, turnOnLoading } from "./controller-v2.js"


document.getElementById('selLoai').onchange = () => {
    turnOnLoading()
    let selectedLoai = document.getElementById('selLoai').value
    https
    .get('/food')
    .then((res)=>{
        let monChay = res.data.filter(food => food.loai === 'Chay')
        let monMan = res.data.filter(food => food.loai === 'Mặn')
        if(selectedLoai === 'Chay'){     
            renderFoodList(monChay)
            } else if(selectedLoai === 'Mặn'){
            renderFoodList(monMan)
            } else{
            renderFoodList(res.data)
            }
        turnOffLoading()
    })
    .catch((err) => {
        console.log(err)
        turnOffLoading()
    })
}

let fetchFoodList = () => {
    turnOnLoading()
    https
    .get("/food") 
    .then((res) => {
        renderFoodList(res.data)
        turnOffLoading()
    })
    .catch((err) => {
        console.log(err)
        turnOffLoading()
    })
}

fetchFoodList()

let deleteFood = (id) => {
    turnOnLoading()
    https
    .delete(`/food/${id}`)
    .then((res)=>{
        fetchFoodList()
        turnOffLoading()
    })
    .catch((err)=>{
        console.log(err)
        turnOffLoading()
    })
}
window.deleteFood = deleteFood;


document.getElementById('btnThem').onclick = () => {
    clearModal()
    document.getElementById('foodID').removeAttribute('readonly')
}

document.getElementById('btnThemMon').onclick = () => {
    turnOnLoading()
    let data = getDataForm();
    https
    .post('/food', data)
    .then((res) => {
        fetchFoodList()
        $('#exampleModal').modal('hide')
        clearModal()
        turnOffLoading()
    })
    .catch((err) => {
        console.log(err)
        turnOffLoading()
    })
}

let editFood = (id) => {
    turnOnLoading()
   https
   .get(`/food/${id}`)
   .then((res) => {
    showDataForm(res.data)
    $('#exampleModal').modal('show')
    document.getElementById('foodID').setAttribute('readonly','')
    turnOffLoading()
   })
   .catch((err) => {
    console.log(err)
    turnOffLoading()
   })
}
window.editFood = editFood

document.getElementById('btnCapNhat').onclick = () => {
    turnOnLoading()
    let id = document.getElementById('foodID').value;
    let data = getDataForm()
    https
    .put(`/food/${id}`,data)
    .then((res)=>{
        $('#exampleModal').modal('hide')
        document.getElementById('foodID').removeAttribute('readonly')
        clearModal()
        fetchFoodList()
        turnOffLoading()
    })
    .catch((err)=>{
        console.log(err)
        turnOffLoading()
    })
}










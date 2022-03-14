import Alerts from "./src/Alert.js";
import Storage from "./src/Storage.js";

// Get Elements

const data_add = document.getElementById('data_add');
const massage = document.getElementById('msg');
const staffs_data_list = document.getElementById('staffs_data_list');

data_add.addEventListener( 'submit', function (e){
    e.preventDefault();

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let { name, email, cell, location, photo} = data;

    if( name == '' || email == '' || cell == '' || location == ''){
        massage.innerHTML = Alerts.danger('All feilds are requried');
    }else{

        massage.innerHTML = Alerts.info('Data Stable');
        Storage.set( 'staffs' , data )
        getAllStaffs();
        data_add.reset();
       
    };

});


getAllStaffs();
function getAllStaffs(){
   let data = Storage.get('staffs');
   let list = '';

   data.map( (data , index ) =>{

    let { name , email , cell , location , photo } = data;

    let avatar = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';

    list += `
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${cell}</td>
            <td>${location}</td>
            <td><img style="width: 50px; height: 50px; object-fit: cover;" src="${ photo ? photo : avatar }" alt=""></td>
            <td>
                <button class="btn btn-primary btn-sm"><i class="fa-solid fa-eye"></i></button>
                <button class="btn btn-info btn-sm"><i class="fa-solid fa-pen-to-square"></i></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `
   });

   staffs_data_list.innerHTML = list;
   
}
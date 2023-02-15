import Swal from "sweetalert2";
import axios from "axios";

export function show_alert(message, icon, focus=''){
    if (focus !==''){
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title:message,
        icon:icon,
        customClass: {confirmButton:'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

export function confirm(id, name){
    let url = 'http://localhost:7070/api/todos/'+id;
    const swalWithBoostrapButtons = Swal.mixin({
        customClass:{confirmButton: 'btn btn-success me-3', cancelButton:'btn btn-danger'}
        , buttonsStyling:false
    });
    swalWithBoostrapButtons.fire({
        title:'Are you sure to delete the todo '+ name + '?',
        icon: 'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Delete',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancel'
    }).then((result) => {
        if (result.isConfirmed){
            sendRequest('DELETE', {id:id}, url, 'Todo deleted');
        } else {
            show_alert('Operation cancelled', 'info')
        }
    })
}

export function sendRequest(method, params, url, message){
    axios({method:method, url:url, data:params})
        .then(response => {
        let status = response['status'];
        if (status === 200) {
            show_alert(message, 'success');
            window.setTimeout(function(){
                window.location.href='/';
            },1000);
        }
    }).catch(error => {
        show_alert('Error with the request', 'error');
    })
}

export function editTodo(url, params) {
    axios({method:'PUT', url:url, data:params})
        .then(response => {
            let status = response['status'];
            if (status === 200) {
                show_alert('Todo status changed', 'info');
                window.setTimeout(function(){
                    window.location.href='/';
                },1000);
            }
        }).catch(error => {
        show_alert('Error with the request', 'error');
    })
}


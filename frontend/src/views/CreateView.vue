<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Create Todo</div>
                <div class="card-body">
                    <form v-on:submit="save()">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-book"></i></span>
                            <input type="text" class="form-control" id="title"
                            placeholder="Todo title" required v-model="title">
                        </div>
                        <div>
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { show_alert, sendRequest} from "@/utils";
export default {
    data(){
        return{
            title:'', completed:'false', url:'http://localhost:7070/api/todos/'
        }
    },
    methods:{
        save(){
            event.preventDefault();
            if (this.title.trim() === ''){
                show_alert('Todo title cannot be blank', 'warning')
            } else {
                let params = {title:this.title, completed:this.completed}
                sendRequest('POST', params, this.url, 'Todo saved');
            }
        }
    }
}
</script>


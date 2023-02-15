<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Edit Todo</div>
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
import {useRoute} from "vue-router";
import axios from "axios";

export default {
    data(){
        return{
            id:0,title:'', completed:false, url:'http://localhost:7070/api/todos/'
        }
    },
    mounted() {
        const route = useRoute();
        this.id = route.params.id;
        this.url = this.url+this.id;
        this.getTodo();
    },
    methods:{
        getTodo(){
            axios.get(this.url).then(
                response => (
                    this.title = response.data['title'],
                    this.completed = response.data['completed']
                )
            )
        },
        save(){
            event.preventDefault();
            if (this.title.trim() === ''){
                show_alert('Todo title cannot be blank', 'warning')
            } else {
                let params = {title:this.title, completed:this.completed}
                sendRequest('PUT', params, this.url, 'Todo updated');
            }
        }
    }
}
</script>


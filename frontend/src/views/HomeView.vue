<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead><tr>
                        <th>#</th>
                        <th>Todo</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody class="table-group-divider" id="content">
                        <tr v-for="todo, i in todos" :key="todo.id">
                            <td>{{i+1}}</td>
                            <td>{{todo.title}}</td>
                            <td v-if="todo.completed">
                                <i class="fa-solid fa-check"></i>
                            </td>
                            <td v-else>
                                <i class="fa-solid fa-x"></i>
                            </td>
                            <td class="text-center">
                                <router-link :to="{path:'/edit/'+todo.id}" class="btn btn-warning mx-1">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                <button class="btn btn-danger" v-on:click="this.delete(todo.id, todo.title)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button class="btn btn-success mx-1" v-on:click="checkTodo(todo.id)">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import {confirm, editTodo} from "@/utils";

    export default{
        data(){
            return{ todos:null, todo:null, title:'', completed:null}
        },
        mounted(){
            this.getTodos()
        },
        methods:{
            getTodos(){
                axios.get('http://localhost:7070/api/todos').then(
                    response => (
                        this.todos = response.data
                    )
                );
            },
            delete(id, name){
                confirm(id, name);
            },
            checkTodo(id){
                let url = 'http://localhost:7070/api/todos/'+id
                let params = {}
                    axios.get(url).then(
                    response => (
                        this.todo = response.data,
                            this.completed = response.data['completed']
                    )
                ).then(() => {
                    this.completed = this.completed === false;
                    params = {title:this.todo['title'], completed:this.completed}
                    editTodo(url, params);
                    })

            },
        }
    }
</script>

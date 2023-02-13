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
                            <td>{{todo.tittle}}</td>
                            <td>{{todo.completed}}</td>
                            <td>
                                <router-link :to="{path:'/edit'+todo.id}" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                <button class="btn btn-danger" v-on:click="this.delete(todo.id, todo.tittle)">
                                    <i class="fa-solid fa-trash"></i>
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
    import {confirm} from "@/utils";
    export default{
        data(){
            return{ todos:null }
        },
        mounted(){
            this.getTodos();
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
            }
        }
    }
</script>

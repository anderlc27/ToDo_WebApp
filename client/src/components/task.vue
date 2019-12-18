<template>
    <div class="container">
        <div class="task_card"
             v-for="task in tasks"
             v-bind:item="task"
             v-bind:key="task.TaskName">
            <div style="padding-top: 10px; margin-left:380px;">
                <input type="button" value="Edit">
                <input type="button" value="Delete">
            </div>
            <div style="border-bottom: solid lightgrey 1px; width: 490px; margin: 0px auto;">
                <h1>{{task.TaskName}}</h1>
                <h2>Due: {{task.DueDate}}</h2>
            </div>
        </div>
        <!-- {{ stuff }} -->
    </div>
</template>

<script>
import axios from 'axios'
//import TaskService from '../TaskService.js';
export default {
    name: 'tasks',
    data() {
        return {
            tasks: null,
            error_msg: ''
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            axios.get('http://localhost:3000/api/tasks')
            .then((response) => this.tasks = response.data)
            .catch((error) => this.error_msg = error.message)
        }
    }
}
</script>

<style scoped>
    h1, h2, h3 {
        margin: 5px 0px;
    }
    p {
        display: inline;
        word-wrap: break-word;
    }
    .task_card {
        border: 1px solid black;
        width: 500px;
        /* height: 260px; */
        height: 150px;
        margin: 20px auto;
        border-radius: 10px;
    }

    .slider {
        -webkit-appearance: none;
        height: 10px;
        width: 300px;
        border-radius: 5px;  
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%; 
        background: #4CAF50;
        cursor: pointer;
    }

</style>
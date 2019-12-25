<template>
    <div class="container">
        <div class="task_card"
             v-for="task in tasks"
             v-bind:item="task"
             v-bind:key="task.ID">
            <div style="grid-column: 1; height: 100px; margin: auto;">
                <h3>{{task.TaskName}}</h3>
                <h3>Due: </h3>
                <h3>{{task.DueDate}}</h3>
            </div>
            <div style="grid-column: 2;">
                <button style="margin-top:10px; margin-left: 280px; border: lightgrey solid 1px; border-radius: 25px;; background-color: red; color: white; font-size: 10px;" v-on:click="removeTask(task.ID)">X</button>        
                <h3>Implementation</h3>
                <p style="margin-right: 230px;">Easy</p>
                <p>Hard</p>
                <br/>
                <input type="range" name="Implementation" class="slider" min="1" max="5" v-model="task.Implementation">
                <br/>

                <h3>Impact</h3>
                <p style="margin-right: 235px;">Low</p>
                <p>High</p>
                <br/>
                <input type="range" name="Impact" class="slider" min="1" max="5" v-model="task.Impact">
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
        /* eslint-disable no-alert, no-console */
        fetch() {
            axios.get('http://localhost:3000/api/tasks')
            .then((response) => this.tasks = response.data)
            .catch((error) => this.error_msg = error.message)
        },
        removeTask(taskID) {
           axios.delete(`http://localhost:3000/api/delete/${taskID}`)
           .catch((error) => this.error_msg = error.message)

           this.fetch()
            // console.log("Request Received to remove");
            // console.log(taskID)
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
        width: 600px;
        height: 180px;
        /* height: 150px; */
        display: grid;
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
<template>
    <div class="task_card">
        <div style="padding-top: 10px; margin-left:380px;">
            <input type="button" value="Edit">
            <input type="button" value="Delete">
        </div>
        <div style="border-bottom: solid lightgrey 1px; width: 490px; margin: 0px auto;">
            <h1>{{Task_Name}}</h1>
            <h2>Due: {{Due_Date}}</h2>
        </div>
        <h3>Implementation</h3>
        <p style="margin-right: 230px;">Easy</p>
        <p>Hard</p>
        <br/>
        <input type="range" name="Implementation" class="slider" min="1" max="5" value="3">
        <br/>
        <h3>Impact</h3>
        <p style="margin-right: 235px;">Low</p>
        <p>High</p>
        <br/>
        <input type="range" name="Impact" class="slider" min="1" max="5" value="3">
    </div>
</template>

<script>
export default {
    name: 'tasks',
    props: {
        Task_Name: String,
        Due_Date: String
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
        height: 260px;
        margin: 0 auto;
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
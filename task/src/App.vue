<template>
  <div id="app">
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,userid) in users" :key="userid">
      <td>{{user.id}}</td>
      <td>{{user.Task}}</td>
      <td :class="{'orange':(user.Status === 'In Progress'),'green':(user.Status === 'Done'),'blue':(user.Status === 'ToDo')}">{{user.Status}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return{
      users : [
        {Task: "Complete the work", Status: "In Progress", id: 1},
        {Task: "Clear Home", Status: "Done", id: 2},
        {Task: "Water my plants", Status: "ToDo", id: 3},
        {Task: "Complete home work", Status: "ToDo", id: 4}
      ]
    }
  }
}
</script>

<style>
.orange {
  color: orange
}
.green{
  color: green
}
.blue{
  color: blue
}
/* .table {
   margin: auto;
   margin-top: 10%;
   width: 50% !important; 
} */
table  {
   text-align: center; 
   margin-top: 12%
}



</style>

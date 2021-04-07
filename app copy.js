const app = new Vue({
    el: '#app',
    data:{
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});


window.addEventListener('load', function () {

    var app = new Vue({
        el: '#app',
        data: {
            message: "abdelaziz",
            liste:["lemon","banana","pomme"],
            newItem:""
        },
        methods:{
            deleteItem:function(item){
                var index =this.liste.indexOf(item);
                this.liste.splice(index,1)
            },
            addNew:function(){
                this.liste.push(this.newItem);
                this.newItem = "" ;
            }
        }
    })

})
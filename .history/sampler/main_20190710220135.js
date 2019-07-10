new Vue({
    el: '#app',
    data: {
        name: '',
        hp: '',
        list: []
    },
    methods: {
        doAdd: function() {
            var max = this.list.reduce(function(a,b) {
                return a > b.id ? a : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: this.hp
            })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        },
        doAttack: function(index) {
            this.list[index].hp -= 50
        }
    },
    created: function(){
        axios.get('./list.json').then(function(response) {
            this.list = response.data
        }.bind(this)).catch(function(e) {
                console.error(e)
        })
    }
})
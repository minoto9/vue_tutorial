new Vue({
    el: '#app',
    data: {
        name: '',
        hp: '',
        list: [
            {id: 1, name: "Dragon", hp: 500},
            {id: 2, name: "Slime", hp: 200},
            {id: 3, name: "Babble", hp: 300}
        ]
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
        axios.get('list.json').then(function(response) {
            this.list = response.data
        }.bind(this)).catch(function(e) {
                console.error(e)
        })
    }
})
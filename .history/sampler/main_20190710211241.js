new Vue({
    el: '#app',
    data: {
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
        }
    }
})
var vm = new Vue ({
    el: '#app',
    data: {
        messagePrefix: 'hello'
    },
    computed: {
        message: function() {
            var timestamp = Date.now()
            return this.messagePrefix + ', ' + timestamp
        }
    }
})
window.vm = vm
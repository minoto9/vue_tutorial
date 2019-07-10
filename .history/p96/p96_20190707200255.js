Vue.component('fruits-item-name', {
    props: {
        fruitsItem: {
            type: Object,
            required: true
        }
    },
    template: '<li>{{ fruitsItem }}</li>'
})

new Vue({
    el: '#fruit-component',
    data: {
        fruitsItems: [
            {name: '梨'},
            {name: 'イチゴ'}
        ]
    }
})
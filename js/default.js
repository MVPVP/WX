/**
 * Created by user on 2016/11/30.
 */
//Vue.component=('my-item',{
//    template:'<li>khkhjkjjjkh</li>'
//});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date(),
        vif:true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods:{
        UpperCase: function () {
            this.message= 'v-on:click=function(){}';
        }
    }
})
var appInput=new Vue({
    el:'#login-form',
    data:{
        mobileVal:'请输入手机号码'
    }
});
Vue.component('li-item', {
    props:['pos'],
    template: ' <li><i style="border-width: 5px;border-color: #ff9800 transparent transparent transparent;border-style: dashed dashed dashed solid;;"></i><span>{{pos.text}}</span> </li>'
});
Vue.component('my-item', {
    template: '<li>mymymymymymymymymy</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: 'Vegetables' },
            { text: 'Cheese' },
            { text: 'Whatever else humans are supposed to eat' }
        ],
        aaa:5,
        bbb:9
    },
    computed:{
        countss:function(){
            return this.aaa+this.bbb;
        }
    }
});
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})


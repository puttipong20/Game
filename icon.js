var sum = new Vue({
    el: "#icon",
    data: {
        counter : 0,
        heart: 0,
        wow : 0,
        smile : 0,
        sad : 0,
        cry : 0,
        sumary : 0,
    },
    methods: {
        sound:function(){

        },
        plus: function (n) {
            if(n == 1){
                this.heart += 10;
                this.sumary += 10;
            }
            else if(n == 2){
                this.wow += 5;
                this.sumary +=5;
            }
            else if(n == 3){
                this.smile += 1;
                this.sumary += 1;
            }
        },
        minus:function(m){
            if(m == 1){
                this.sad -=1;
                this.sumary -= 1;
            }
            else if(m == 2){
                this.cry -= 5;
                this.sumary -=5;
            }
        },
    }
})

var popCat = new Vue({
    el:"#popCat",
    data:{
        time:0
    },
    methods:{
        pop:function(){
            this.time++
        }
    }
})

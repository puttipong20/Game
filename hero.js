var game = new Vue({
    el: "#HERO",
    data: {
        hpH: 100,
        hpM: 100,
        status: false,
    },
    methods: {
        atk: function (n) {
            if (this.hpH > 0 && this.hpM > 0) {
                if (n == 1) {
                    this.hpM -= this.randomATK(10, 15);
                    this.hpH -= this.randomATK(8, 12);
                }
                else if (n == 2) {
                    this.hpM -= this.randomATK(20, 25);
                    this.hpH -= this.randomATK(5, 10);
                }
                if(this.hpM<=0) {
                    this.hpM=0;
                    alert("Hero win")
                }
            }
            if(n==3){
                this.hpH = 100;
                this.hpM = 100;
                this.status = false;
            }
            if (this.hpH <= 50) {
                this.status = true;
            }
        },
        randomATK: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        alert: function (p) {
            p.preventDefalt()
            alert('Hero win');
        }
    }
})

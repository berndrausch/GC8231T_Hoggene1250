var app = new Vue({ 
    el: '#app',
    data: {
        A: '',
        A1: '',
        B: '',
        B1: '',        
        C: '',
        C1: '',
        D: '',
        D1: '',
        E: '',
        E1: '',
        F: '',
        F1: '',
        G: '',
        G1: '',
        H: '',
        H1: '',
        I: '',
        I1: '',
        J: '',
        J1: '',
        K: '',
        K1: '',
        L: '',
        L1: '',
        M: '',
        M1: '',
        N: '',
        N1: '',
        O: '',
        O1: '',
        Y: '',
        Z: '',
        Date1970: '',
        Date1990: '',
        North: '',
        East: '',
        NorthDisplay: '',
        EastDisplay: '',
    },
    methods:
    {
        update: function () {
            this.A1 = parseInt(this.A);
            this.B1 = this.digitSum(this.B);
            this.C1 = parseInt(this.C);
            this.D1 = parseInt(this.D);
            this.E1 = this.digitSum(this.E);
            this.F1 = this.wordValue(this.F);
            this.G1 = this.digitSum(this.G);
            this.H1 = this.wordValue(this.H);
            this.I1 = this.wordValue(this.I);
            this.J1 = this.wordValue(this.J);
            this.K1 = this.wordValue(this.K);
            this.L1 = parseInt(this.L);
            this.M1 = parseInt(this.M);
            this.N1 = parseInt(this.N);
            this.O1 = this.wordValue(this.O);
            this.Y = this.A1+this.B1+this.C1+this.D1+this.E1+this.F1+this.G1;
            this.Z = this.Y+this.H1+this.I1+this.J1+this.K1+this.L1+this.M1+this.N1+this.O1;
            this.North = parseInt(this.Date1970.replace('.',''))+this.Y-138;
            this.East = parseInt(this.Date1990.replace('.',''))+this.Z+this.Y+this.Y-66;
            this.NorthDisplay = this.formatCoord(this.North);
            this.EastDisplay = this.formatCoord(this.East);         
        },
        digitSum: function(digits) {
            var z = digits.toString().split(''); 
            var sum = 0;
            for (var i=0; i < z.length; i++)
            {
                if (z[i] >= '0' && z[i] <= '9')
                {
                    sum += z[i] - 0;
                }
            }

            return sum;
        },
        wordValue: function(word) {
            var z = word.toString().toLowerCase().split(''); 
            var sum = 0;
            for (var i=0; i < z.length; i++)
            {
                if (z[i] >= 'a' && z[i] <= 'z')
                {
                    sum += z[i].charCodeAt(0) - 96;
                }
                if (z[i] >= '0' && z[i] <= '9')
                {
                    sum += z[i] - 0;
                }
            }

            return sum;
        },
        formatCoord: function(value){
            var txt1 = value.toString();
            return txt1.substring(0, 2) + "." + txt1.substring(2);
        }
    }

});
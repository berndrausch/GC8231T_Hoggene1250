var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        A: '12345',
        A1: '',
        A2: ''
    },
    methods:
    {
        test: function () {
            this.A1 = this.digitSum(this.A)
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
        }
    }

});
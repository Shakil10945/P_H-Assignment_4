function monthlySavings(arr , livingCost) {
    if (!(Array.isArray(arr)) && !(typeof(livingCost) == 'number')){
        return 'invalid input'
    }
    else{
        income = 0;
        for (let i=0;i<arr.length; i++){
            if(arr[i]>=3000){
                income += arr[i] - ((0.2)*arr[i]);

            }
            else{
                income +=arr[i];

            }

        }
        if(income-livingCost<0){
            return 'earn more';
        }
        else{
            return income-livingCost;
        }
    }
}


console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
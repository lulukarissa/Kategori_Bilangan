function bilangan(x){
    var arr = []
        if(x >= 0 || x < 0){
            arr.push('bulat')
        }
        if(x >= 0 ){
            arr.push('cacah')
        }
        if(x < 0){
            arr.push('negatif')
        }
        if(x == 0){
            arr.push('nol')
        }
        if(x > 0){
            arr.push('asli')
        }
        if(x % 2 == 0){
            arr.push('genap')
        }
        if(x % 2 != 0){
            arr.push('ganjil')
        }
        
        for(i=2; i<=x; i++){
            if(i>=2){
                var prima = true

                for(j=2; j<i; j++){
                    if(i%j==0){
                        var prima = false
                    }
                }
            }
        }
        if(prima == true){
            arr.push('prima')
        }
        if(prima == false){
            arr.push('komposit')
        }

    return arr
}

console.log(bilangan(3))
console.log(bilangan(5))
console.log(bilangan(-5))
console.log(bilangan(10))
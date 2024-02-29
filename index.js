

const data = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
let res = []

function sortString(word) {

    var sorted = word.split("");

    for (let i=0; i<sorted.length; i++ ){
        for (let j = 0; j < sorted.length; j++) {
            if (sorted[j] > sorted[i]) {
                temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }        
    }

    return sorted.join("")
}


for (let i=0; i<data.length; i++) {    
    if (res.length == 0) {
        res[0] = [data[i]]
    }else{
        
        let same = false
        for(let x=0; x<res.length; x++){
            res[x][0]
            if(sortString(res[x][0]) == sortString(data[i])){
                res[x][res[x].length] = data[i]
                same = true
            }            
        }
        if(!same) {
            res[res.length] = [data[i]]
        }
        
    }
}

// hasil
console.log(res)
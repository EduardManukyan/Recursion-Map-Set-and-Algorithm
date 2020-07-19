let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

// const difference=(setA, setC)=>{
//     const _difference= new Set();
//     for(let item of setA.values()){
//         if(!setC.has(item)){
//             _difference.add(item)
//         }
//     }

// return _difference
// }

// console.log(difference(setA,setC))

const symmetricDifference = (setA, setC) => {
    const _symmetricDifference = new Set();
    for (let item of setA.values()) {
        if (!setC.has(item)) {
            _symmetricDifference.add(item)
        }

    }
    for (let itemC of setC.values()) {
        if (!setA.has(itemC)) {
            _symmetricDifference.add(itemC)
        }
    }
    return _symmetricDifference
}
console.log(symmetricDifference(setA, setC))
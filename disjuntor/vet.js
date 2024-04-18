let v1 = ['1.2','1.3','1.4','1.5']

let v2 = [1.2, 1.3, 1.4, 1.5]

if(v1 == v2) {
    console.log('ok')
}

v2.forEach(el => {
    console.log(el * 2)
})

console.log('______')
v1.forEach(el => {
    console.log(el * 2)
})
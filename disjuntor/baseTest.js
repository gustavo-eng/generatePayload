const obj2 = {
    "pressureSf6_phase_1_u_s_stat": [3.5,5,6.243], //3, 
    "pressureSf6_phase_2_u_s_stat": [], //3, 
    "pressureSf6_phase_3_u_s_stat": ['3.34'], //3, 
    "status_blocker_status_s_inst": [], //false,
    "status_breakdownFailure_status_s_inst" : [], //true, 
    "status_closedCoil1_status_s_inst" : [], // true, 
    "status_closedCoil2_status_s_inst" : [], //true, 
    "status_mainContact_status_s_inst" : [], // true, 
    "status_motor_status_s_inst" : [], //true, 
    "status_openCoil1_status_s_inst" :[],// true, 
    "status_openCoil2_status_s_inst" : [], // true, 
    "status_poleDiscordanceRelay_status_s_inst" : [], //true, 
    "status_reclosing_status_s_inst" :  true, 
    "status_voltageRelayAC_status_s_inst" : true, 
    "status_voltageRelayDC_status_s_inst" : true, 
    "temperatureSF6_phase_1_u_s_stat" : 1713302100000, 
    "temperatureSF6_phase_2_u_s_stat" : 1713302100000, 
    "temperatureSF6_phase_3_u_s_stat" : 1713302100000, 

}; 

let L = {
   "string": 23,
   "int":6,
   "float": 6.5,
   "bool": 1
}

let n_var ={
 "string": 4,
   "int":8,
   "float": 3,
   "bool": 22
}
let b = "XXXXX"*23
console.log(b)


let T = 0
let T_type = []
for (let i of Object.keys(n_var)){
    T = T + n_var[i]
    T_type.push([])
}
console.log('T', T)

Object.keys(n_var).forEach(key => {
    console.log('key')
    console.log(key)
})


let obj = {}

for (let i =  0; i < T; i++) {    

    obj["attribute_XXXXXXXXXXXXXXXXXXXXXXX_" + i] = "teste" 
}

console.log(obj)

// attribute_XXXXXXXXXXXXXXXXXXXXXXX_0: ['teste', 'teste'],

console.log(JSON.stringify(obj["pressureSf6_phase_1_u_s_stat"]))



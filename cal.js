function display_data(data){
    result.value=result.value+data
}
function all_clear(){
    result.value=""
}
function equal(){
    exp=result.value
    result.value=eval(exp)
}
function back_space(){
    data=result.value
    result.value=data.slice(0,-1)
}
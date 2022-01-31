
function getMaxPosition(list){
    var max = list[0];
    for (var i = 1; i < list.length ; i ++){
        
        if (list[i].pos > max.pos){
            max = list[i]
        }
    }
    return max;
}
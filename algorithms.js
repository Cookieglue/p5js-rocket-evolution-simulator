
function getMaxPosition(list){
    var max = list[0];
    for (var i = 1; i < list.length ; i ++){
        
        if (list[i].pos > max.pos){
            max = list[i]
        }
    }
    return max;
}

function partition(array, low, high){

    //set pivot as right of the array
    var pivot = array[high];
    
    var i = low-1;
    
    //loop through elements and compare them to the pivot
    for (var x = low ; x < high ; x++){
        
        if (array[x].pos <= pivot.pos){
            
            i++;
            //swap i with j
            var temp = array[i];
            array[i] = array[x];
            array[x] = temp;
            
        }
        
    }
    // swapt the pivot element with the greater element specified by i
    var temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    // return the position from where partition is done
    return (i + 1);
};
function quickSort (array, low, high){

    if (low < high){
        // find pivot element such that
      // elements smaller than pivot are on the left
      // elements greater than pivot are on the right
      var pi = partition(array, low, high);
      
      // recursive call on the left of pivot
      quickSort(array, low, pi - 1);

      // recursive call on the right of pivot
      quickSort(array, pi + 1, high);
    }
}
function evolve (array,noise){
    for (var i = 0 ; i < array.length/2 ; i ++){
        var parent = rocketList[array.length/2+i];
        array[i]=new rocket(
            constrain(parent.tipStrength+random(-noise,noise),0,1), 
            constrain(parent.tankStrength+random(-noise,noise),0,1), 
            constrain(parent.exhaustStrength+random(-noise,noise),0,1));
    }
    scene = a => drawOffspringMenu(rocketList);
}

function logDemographics (array, num){
    //Low
    poorRocketDemographics[num] = array[0].pos;
    //Average
    var mean = 0;
    for (var i = 0 ; i < array.length ; i ++){
        mean += array[i].pos;
    }
    mean /= array.length;
    meanRocketDemographics[num] = mean;
    //High
    goodRocketDemographics[num] = array[array.length-1].pos;
}

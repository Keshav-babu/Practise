


function swap(arr=[],i,j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp

}

function sort012(arr=[]){
    let left=0
    let right=arr.length-1
    let i=0
    while(i<=right){
        if (arr[i]==0){
            swap(arr,left,i)
            left++

        }else if(arr[i]==2){
            swap(arr,i,right)
            right--
            i--
        }
        i++
    }
    return arr
}

console.log("sort012",sort012([0,1,2,0,1,2]))
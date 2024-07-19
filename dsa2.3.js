class Stack{
    constructor(){
        this.item=[]
    }

    push(value){
        this.item.push(value)
    }

    pop(){
        if(this.item.length===0){
            return null
        }
        return this.item.pop()
    }
    get(){
        return this.item
    }

    isEmpty(){
        return this.item.length===0
    }
    size(){
        return this.item.length
    }
    display(){
        console.log(this.item.join(','));
    }
}

// function removeMiddle(stack){
//     const middle=math.floor(stack.size/2)
//     while(sta)
// }

const stack=new Stack()
stack.push(10)
stack.push(30)
stack.push(50)
stack.push(98)
stack.push(18)
stack.push(34)
stack.push(37)
// stack.display()
let a=stack.get()
let b=a.sort((a,b)=>a-b)
console.log(b);
// middle=Math.floor(a.length/2)
// console.log(middle);
let removed=[]
for(let i=0;i<a.length;i++){
    let middle=Math.floor(a.length/2)
    if(a[i]!==a[middle]){
        removed.push(a[i])
    }
}
console.log(removed);
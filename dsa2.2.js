// sort a stack

// class stack{
//     constructor(){
//         this.items=[]
//     }

//     push(value){
//         this.items.push(value)
//     }

//     getItem(){
//         return this.items
//     }

//     display(){
//         console.log(this.items.join(','))
//     }
// }

// const sta=new stack();

// sta.push(5)
// sta.push(1)
// sta.push(12)
// sta.push(2)
// sta.push(6);
// sta.display()

// const S=sta.getItem();
// let g=S.sort((a,b)=>a-b)
// console.log(g);


// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0    
//         for(let i=0;i<key.length;i++){
//             total=total+key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKey=bucket.find((item=>item[0]===key))
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }

//     gettable(){
//         return this.table
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
    
    // findMaxOccurance(arr){
    //    for(let i=0;i<arr.length;i++){
    //     const num=arr[i]
    //     const count=this.get(num.toString())
    //     this.set(num.toString(),count?count+1:1)
    //    }

    //    let maxCount=0
    //    let maxNum=null;
    //    for(let i=0;i<this.table.length;i++){
    //     if(this.table[i]){
    //         for(let j=0;j<this.table[i].length;j++){
    //             const [key,count]=this.table[i][j]
    //             if(count>maxCount){
    //                 maxCount=count
    //                 maxNum=key
    //             }
    //         }
    //     }
    //    }
    //    return maxNum?parseInt(maxNum):null
    // }



//     findMinOccurance(arr){
//         for(let i=0;i<arr.length;i++){
//             const num=arr[i]
//             const count=this.get(num.toString())
//             this.set(num.toString(),count?count+1:1)
//         }

//         let minCount=Infinity
//         let minNum=null
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 for(let j=0;j<this.table[i].length;j++){
//                     const [key,count]=this.table[i][j]
//                     if(count<minCount){
//                         minCount=count
//                         minNum=key
//                     }
//                 }
//             }
//         }
//         return minNum?parseInt(minNum):null
//     }
  



// findMinOccurances(arr){
//     for(let i=0;i<arr.length;i++){
//         let nums=arr[i]
//         let count=this.get(nums.toString())
//         this.set(nums.toString(),count?count+1:1)
//     }

//     let minCount=Infinity
//     let minNum=0
//     for(let i=0;i<this.table.length;i++){
//         if(this.table[i]){
//             for(let j=0;j<this.table[i].length;j++){
//                 const [key,count]=this.table[i][j]
//                 if(count<minCount){
//                     minCount=count
//                     minNum=[key]
//                 }else if(count===minCount){
//                     minNum.push(key)
//                 }
//             }
//         }
//     }
//     return minNum.map(num=>parseInt(num))
// }
//  }










// const table=new hashtable(20)
// table.set('age',1)
// table.set('mame',2)
// table.set('trt',3)
// table.set('yu',5)
// table.set('ty',3)
// table.set('tyufrdd',4)
// table.display()

// let b=table.gettable()
// console.log(b,'jkjk');


// const arr = [1, 3, 2, 3, 4, 3, 5, 2, 2, 2, 1];
// const maxOccurrence = table.findMaxOccurance(arr);
// console.log(`Number with maximum occurrence: ${maxOccurrence}`);

// const arr = [1, 3, 2, 3, 4, 4, 3, 5, 2, 2, 2, 1];
// const minOccurrence = table.findMinOccurance(arr);
// console.log(`Number with min occurrence: ${minOccurrence}`);


// const arr = [1, 3, 2, 3, 4, 3, 5, 2, 2, 2, 1];
// const minOccurrence = table.findMinOccurances(arr);
// console.log(`Number with min occurrence: ${minOccurrence}`);


//bubble sort

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]<arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// arr=[6,9,8,7,7,4,6,7,0]
// console.log(bubbleSort(arr));

// insertion sort

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         j=i-1
//         while(j>=0&& arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }


// arr=[6,9,8,7,7,4,6,7,0]
// console.log(insertionSort(arr));

//quick sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// arr=[6,9,8,7,7,4,6,7,0]
// console.log(quickSort(arr));


// merge sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     const left=arr.slice(0,mid)
//     const right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     const sorted=[]
//     while(left.length&&right.length){
//         if(left[0]>=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// arr=[6,9,8,7,7,4,6,7,0]
// console.log(mergeSort(arr));


// selection sort

// function selectionSort(arr){
//     let n=arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[minIndex]
//         arr[minIndex]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }

// arr=[6,9,8,7,7,4,6,7,0]
// console.log(selectionSort(arr));


// function selectionSort(arr){
//     let n=arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[minIndex]
//         arr[minIndex]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }

// arr=[6,9,4,7,3,4,5]
// console.log(selectionSort(arr));

// queue

// class Queue{
//     constructor(){
//         this.item=[]
//     }

//     enqueue(ele){
//         this.item.push(ele)
//     }

//     dequeue(){
//         return this.item.shift()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }

//     getSize(){
//         return this.item.length
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return null
//         }
//         return null
//     }
//     getItems(){
//         return this.item
//     }

//     print(){
//         console.log(this.item.join(","));
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(19)
// queue.enqueue(42)
// queue.enqueue(45)
// queue.enqueue(76)
// queue.enqueue(67)
// console.log(queue.getSize());
// queue.print()

// let s=queue.getItems()
// let sorted=s.sort((a,b)=>a-b)




// queue using linkedlist

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     enqueue(value){
//         const newNode=new Node(value)
//         if(!this.tail){
//             this.head=this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         if(!this.head){
//             return null
//         }
//         const removed=this.head.value
//         this.head=this.head.next
//         if(!this.head){
//             this.tail=null
//         }
//         this.size--
//         return removed
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//    display(){
//     let curr=this.head
//     let que=''
//     while(curr){
//         que=que+curr.value+(curr.next?",":'')
//         curr=curr.next
//     }
//     console.log(que);
// }

// }

// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// queue.dequeue();
// queue.display();
// console.log(queue.isEmpty()); 
// console.log(queue.getSize()); 




// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     enqueue(value){
//         const newNode=new Node(value)
//         if(!this.tail){
//             this.head=this.tail=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         if(!this.head){
//             return null
//         }
//         const removed=this.head.value
//         this.head=this.head.next
//         if(!this.head){
//             this.tail=null
//         }
//         this.size--
//         return removed
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     display(){
//         let curr=this.head
//         let que=''
//         while(curr){
//             que=que+curr.value+(curr.next?',':'')
//             curr=curr.next
//         }
//         console.log(que);
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty());
// console.log(queue.getSize());
// queue.enqueue(12)
// queue.enqueue(13)
// queue.enqueue(14)
// queue.enqueue(15)
// queue.enqueue(16)
// queue.enqueue(17)
// queue.display()
// console.log(queue.dequeue());
// queue.display()
// console.log(queue.isEmpty());
// console.log(queue.getSize());



//hashtable

// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total=total+key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                return sameKey[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }


//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table=new Hashtable(30)
// table.set('name','sahla')
// table.set('hjklki','ioiiuou')
// table.display()
// console.log(table.get('name'));
// table.remove('hjklki')
// table.display()


// stack inlinkedlist

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }


// class stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }


//     push(value){
//         const newNode=new Node(value)
//         if(this.top===null){
//             this.top=newNode
//         }else{
//             newNode.next=this.top
//             this.top=newNode
//         }
//         this.size++
//     }

//     pop(){
//         if(this.top===null){
//             return null
//         }
//         const removed=this.top
//         this.top=this.top.next
//         this.size--
//         return removed.value
//     }

//     peek(){
//         if(this.top===null){
//             return null
//         }
//         return this.top.value
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     print(){
//         let curr=this.top
//         let res=''
//         while(curr){
//             res=res+curr.value+','
//             curr=curr.next
//         }
//         console.log(res.trim());
//     }
// }

// const Stack=new stack()
// console.log(Stack.isEmpty());
// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// Stack.push(40)
// Stack.push(50)
// Stack.print()
// Stack.pop()
// Stack.print()
// console.log(Stack.getSize());


// class stack{
//     constructor(){
//         this.items=[]
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         if(this.items.length===0){
//             return null
//         }
//         return this.items.pop()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }
// }

// function reverse(str){
//     const Stack=new stack()

//     for(let char of str){
//         Stack.push(char)
//     }

//     let reversed=''
//     while(!Stack.isEmpty()){
//         reversed=reversed+Stack.pop()
//     }
//     return reversed
// }

// let str='sahla'
// console.log(reverse(str));



// class stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }

// }


// function reverse(str){
//     const Stack=new stack()
//     for(let char of str){
//         Stack.push(char)
//     }
//     let reversed=''
//     while(!Stack.isEmpty()){
//         reversed=reversed+Stack.pop()
//     }
//     return reversed
// }

// let str='sahla'
// console.log(reverse(str));



// class Stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }
// }

// function countEven(stack){
//     const temp=new Stack()
//         let count=0
//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele%2===0){
//             count++
//         }
//         temp.push(ele)
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
//     return count
// }

// const stack=new Stack()
// stack.push(12)
// stack.push(34)
// stack.push(18)
// stack.push(30)
// stack.push(14)
// stack.push(39)
// console.log(countEven(stack));


// class stack{
//     constructor(){
//         this.item=[]
//     }


//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

// function removeEven(Stack){
//     const temp=new stack()
//     while(!Stack.isEmpty()){
//         const ele=Stack.pop()
//         if(ele%2!==0){
//             temp.push(ele)
//         }
//     }

//     while(!temp.isEmpty()){
//         Stack.push(temp.pop())
//     }
// }


// const Stack=new stack()
// Stack.push(3)
// Stack.push(6)
// Stack.push(4)
// Stack.push(8)
// Stack.push(9)
// Stack.push(1)
// Stack.print()
// removeEven(Stack);
// Stack.print()



// find a target
// class Stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }

//     size(){
//         return this.item.length
//     }

//     print(){
//         console.log(this.item.toString());
//     }
// }

// function findTarget(stack,t){
//     const temp=new Stack()
//     let found=false

//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele===t){
//             found=true
//         }
//         temp.push(ele)
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
//     return found
// }


// const stack=new Stack()
// stack.push(10)
// stack.push(14)
// stack.push(16)
// stack.push(17)
// stack.push(13)
// const t=1
// console.log(findTarget(stack,t));


// class stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }

//     getSize(){
//         return this.item.length
//     }

//     getitems(){
//         return this.item
//     }

//     print(){
//         console.log(this.item.join(','));
//     }
// }

// function palindrome(str){
//     const Stack=new stack()
// }

// // const Stack=new stack()
// // Stack.push(13)
// // Stack.push(15)
// // Stack.push(17)
// // Stack.push(16)
// // Stack.push(19)
// // Stack.push(18)
// // Stack.print()
// // let a=Stack.getitems()
// // console.log(a.reverse());
// str='malayala'
// let a=palindrome(str);
// console.log(a);


// class Stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }
//     getItem(){
//         return this.item
//     }

//     getSize(){
//         return this.item.length
//     }

//     print(){
//         console.log(this.item.join(','));
//     }
// }

// function prime(number){
//     if(number<=1){
//         return false
//     }
//     const stack=new Stack()
//     for(let i=2;i<number;i++){
//         stack.push(i)
//     }
//     while(!stack.isEmpty()){
//         const factor=stack.pop()
//         if(number%factor===0){
//             return false
//         }
//     }
//     return true
// }

// const stack=new Stack()
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// let number=5
// console.log(prime(5));


// class Queue{
//     constructor(){
//         this.item=[]
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         this.item.shift()
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     getSize(){
//         return this.item.length
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.item[0]
//         }
//         return null
//     }
//     print(){
//         console.log(this.item.join(','));
//     }
//     get(){
//         return this.item
//     }
// }

// const queue=new Queue()
// queue.enqueue(18)
// queue.enqueue(23)
// queue.enqueue(78)
// queue.enqueue(38)
// queue.enqueue(11)
// console.log(queue.isEmpty());
// console.log(queue.getSize());
// queue.print()
// let s=queue.get()
// // console.log(s.reverse().toString());
// console.log(queue.peek());


// find number with maximum occurance using hash table


// function findMaxOccurrence(arr) {
//     const map = new Map();

//     // Count the occurrences of each number
//     for (let num of arr) {
//         if (map.has(num)) {
//             map.set(num, map.get(num) + 1);
//         } else {
//             map.set(num, 1);
//         }
//     }

//     // Find the number with the maximum occurrence
//     let maxCount = 0;
//     let maxNumber = null;
//     for (let [num, count] of map.entries()) {
//         if (count > maxCount) {
//             maxCount = count;
//             maxNumber = num;
//         }
//     }

//     return maxNumber;
// }

// // Example usage:
// const arr = [1, 3, 2, 3, 4, 3, 5, 2, 2, 2, 1];
// console.log(findMaxOccurrence(arr)); // Output: 3


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }


//     enqueue(value){
//         const newNode=new Node(value)
//         if(!this.tail){
//             this.tail=this.head=newNode
//         }else{
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         if(!this.head){
//             return null
//         }
//         const remove=this.head.value
//         this.head=this.head.next
//         if(!this.head){
//             this.tail=null
//         }
//         this.size--
//         return removed
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     display(){
//         let curr=this.head
//         let q=''
//         while(curr){
//             q=q+curr.value+(curr.next?',':'')
//             curr=curr.next
//         }
//         console.log(q);
//     }
// }

// const queue=new Queue()
// queue.enqueue(34)
// queue.enqueue(36)
// queue.enqueue(38)
// queue.enqueue(323)
// queue.display()


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

//      class stack{
//         constructor(){
//             this.top=null
//             this.size=0
//         }

//         push(value){
//             const newNode=new Node(value)
//             if(this.top===null){
//                 this.top=newNode
//             }else{
//                 newNode.next=this.top
//                 this.top=newNode
//             }
//             this.size++
//         }

//         pop(){
//             if(this.top===null){
//                 return null
//             }
//             const removed=this.top
//             this.top=this.top.next
//             this.size--
//             return removed.value
//         }

//         peek(){
//             if(this.top===null){
//                 return null
//             }
//             return this.top.value
//         }

//         getSize(){
//             return this.size
//         }


//         display(){
//             let curr=this.top
//             let res=''
//             while(curr){
//                 res=res+curr.value+(curr.next?',':'')
//                 curr=curr.next
//             }
//             console.log(res);
//         }
        
//     }


// const Stack=new stack()
// console.log(Stack.getSize());
// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// console.log(Stack.peek());
// console.log(Stack.getSize());
// Stack.display()
// console.log(Stack.pop());
// Stack.display()


// class Stack{
//     constructor(){
//         this.item=[]
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.item[this.item.length-1]
//     }
//     size(){
//         return this.item.length
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
// }

// class Queue{
//     constructor(){
//         this.stack1=new Stack()
//         this.stack2=new Stack()
//     }

//     enqueue(item){
//         this.stack1.push(item)
//     }

//     dequeue(){
//         if(this.stack2.isEmpty()){
//             if(this.stack1.isEmpty()){
//                 return null
//             }
//             while(!this.stack1.isEmpty()){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }

//     isEmpty(){
//         return this.stack1.isEmpty()&&this.stack2.isEmpty()
//     }

//     size(){
//         return this.stack1.size()+this.stack2.size
//     }

//     front(){
//         if(this.stack2.isEmpty()){
//             if(this.stack1.isEmpty()){
//                 return null
//             }
//             while(!this.stack1.isEmpty()){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.peek()
//     }

// }

// const q=new Queue()
// q.enqueue(56)
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(45)
// console.log(q.dequeue());
// console.log(q.front());
// console.log(q.isEmpty());


// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }


//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total=total+key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(Item=>Item[0]===key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(Item=>Item[0]===key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }


// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }

// let arr=[2,3,4,2,6,5,4,9,2,0]
// console.log(insertionSort(arr));

// function QuickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...QuickSort(left),pivot,...QuickSort(right)]
// }

// let arr=[2,3,4,2,6,5,4,9,2,0]
// console.log(QuickSort(arr));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     const sorted=[]
//     while(left.length&&right.length){
//     if(left[0]<=right[0]){
//         sorted.push(left.shift())
//     }else{
//         sorted.push(right.shift())
//     }
// }
// return [...sorted,...left,...right]
// }

// let arr=[2,3,4,2,6,5,4,9,2,0]
// console.log(mergeSort(arr));











































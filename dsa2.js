

// function bubblesort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

// let arr=[2,3,4,2,5,7]
// bubblesort(arr)
// console.log(arr);

// function bubblesort(arr){
// let swapped
// do{
//     swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
// }

// let arr=[2,3,4,2,5,7]
// bubblesort(arr)
// console.log(arr);


// function bubble(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)

// }

// let arr=[6,9,8,2,3,4,5,3]
// bubble(arr)
// console.log(arr);


// insertion sort

// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         const number=arr[i]
//         j=i-1
//         while(j>=0&&arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//     }
//     arr[j+1]=number
// }
// }

// let arr=[6,4,-8,5,-1,6,53]
// insertion(arr)
// console.log(arr);

// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         j=i-1
//         while(j>=0&&arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
// }
// let arr=[6,4,-8,5,-1,6,53]
// insertion(arr)
// console.log(arr);

// function quicksort(arr){
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
//     return [...quicksort(left),pivot,...quicksort(right)]
// }


// let arr=[6,4,-8,5,-1,6,53]
// console.log(quicksort(arr));


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     const left=arr.slice(0,middle)
//     const right=arr.slice(middle)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     const sorted=[]
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return[...sorted,...left,...right]
// }

// let arr=[6,4,-8,5,-1,6,53]
// console.log(mergeSort(arr));



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


// enqueue(value){
//     const newNode=new Node(value)
//     if(!this.tail){
//         this.head=this.tail=newNode
//     }else{
//         this.tail.next=newNode
//         this.tail=newNode
//     }
//     this.size++
// }

// dequeue(){
//     if(!this.head){
//         return null
//     }
//     const removedValue=this.head.value
//     this.head=this.head.next
//     if(!this.head){
//         this.tail=null
//     }
//     this.size--
//     return removedValue
// }

// isEmpty(){
//     return this.size===0
// }

// getSize(){
//     return this.size
// }

// display(){
//     let curr=this.head
//     let que=''
//     while(curr){
//         que=que+curr.value+(curr.next?'->':'')
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
// console.log(queue.dequeue());
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

//     enque(value){
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
//         let removed=this.head.value
//         this.head=this.head.next
//         if(!this.head){
//             this.tail=null
//         }
//         this.size--
//         return removed
//     }

//     isEmplty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     display(){
//         let curr=this.head
//         let q=''
//         while(curr){
//             q=q+curr.value+(curr.next?'->':'')
//             curr=curr.next
//         }
//         console.log(q);
//     }
// }

// const queue=new Queue()
// queue.enque(10)
// queue.enque(20)
// queue.enque(30)
// queue.display()
// console.log(queue.dequeue());
// queue.display();
// console.log(queue.isEmplty()); 
// console.log(queue.getSize()); 


// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(ele){
//         this.items.push(ele)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     getSize(){
//         return this.items.length
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.getSize());
// queue.print()

// console.log(queue.dequeue(),'hkhkj');
// console.log(queue.peek());


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
//             }
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
//                 return sameKey[1]
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
// table.set('mane','sahla')
// table.set('age','45677')
// table.set('gea','0909')
// console.log(table.get("mane"));
// table.display() 

// table.remove('age','45677')
// table.display() 



// stack in linkedlist

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
//        }


//        pop(){
//         if(this.top===null){
//             return null
//         }
//         const removed=this.top
//         this.top=this.top.next
//         this.size--
//         return removed.value
//        }

//        peek(){
//         if(this.top===null){
//             return null
//         }
//         return this.top.value
//        }

//        isEmpty(){
//         return this.size===0
//        }

//        getSize(){
//         return this.size
//        }

//        print(){
//         let curr=this.top
//         let result=''
//         while(curr){
//             result=result+curr.value+''
//             curr=curr.next
//         }
//         console.log(result.trim());
//        }
// }

// const Stack=new stack()
// console.log(Stack.isEmpty());
// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// console.log(Stack.peek());
// console.log(Stack.getSize());
// Stack.print()
// console.log(Stack.pop());
// Stack.print()



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
// }


// string reverse using stack

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

//     }


//     function reverse(str){
//         const Stack=new stack()

//         for(let char of str){
//             Stack.push(char)
//         }

//         let reversed=''
//         while(!Stack.isEmpty()){
//             reversed=reversed+Stack.pop()
//         }
//         return reversed
//     }

//     const input='sahla'
//     const reversed=reverse(input)
//     console.log(reversed);






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
//             return this.item.pop()
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

// const input='awer'
// const reversew=reverse(input)
// console.log(reversew);




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
//     return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }
// }

// function countEven(stack){
//     const temp=new Stack()
//     let count=0
//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele%2==0){
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
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// const evenNumber=countEven(stack)
// console.log(evenNumber);


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
//     let count=0
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
// stack.push(2)
// stack.push(2)
// stack.push(2)
// stack.push(4)
// stack.push(5)
// const evenNumber=countEven(stack)
// console.log(evenNumber);


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
//     print(){
//         console.log(this.item.toString());
//     }
// }


// function removeEven(stack){
//     const temp=new Stack()
//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele%2!==0){
//             temp.push(ele)
//         }
//     }

//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
// }


// const stack=new Stack()
// stack.push(2)
// stack.push(2)
// stack.push(2)
// stack.push(4)
// stack.push(5)
// stack.print();
// removeEven(stack)
// stack.print()




// function removeEven(stack){
//     const temp=new Stack()
//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele%2!==0){
//             temp.push(ele)
//         }
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
// }


// find A target

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
// stack.push(2)
// stack.push(2)
// stack.push(2)
// stack.push(4)
// stack.push(5)
// stack.print();

// const t=6
// const isFound=findTarget(stack,t)
// console.log(isFound);


// function palindrome(str){
//     const stack=new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }

//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// function palindrome(str){
//     const stack=new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// const str='malayalam'
// console.log(palindrome(str));

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

// let number=28
// console.log(prime(number));


// implement queue using stack

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

//     isEmpty(){
//         return this.item.length===0
//     }

//     size(){
//         return this.item.length
//     }
// }

// class QueueInStack{
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
//         return this.stack1.isEmpty() && this.stack2.isEmpty()
//     }

//     size(){
//         return this.stack1.size()+this.stack2.size()
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

// const q=new QueueInStack()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(45)
// // q.enqueue(34)
// console.log(q.dequeue());
// q.enqueue(5)
// console.log(q.dequeue());
// console.log(q.front());  
// console.log(q.dequeue()); 
// console.log(q.dequeue()); 
// console.log(q.isEmpty());



//selection sort

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
// }

// let arr2=[4,7,5,4,3,5,9]
// selectionSort(arr2)
// console.log(arr2);


// hashtable to find number with least occurances

// function find(arr){
//     const freqMap={}

//     for(let num of arr){
//         if(freqMap[num]){
//             freqMap[num]++
//         }else{
//             freqMap[num]=1
//         }
//     }

//     let minfreq=Infinity
//     let minfreqNumber=null

//     for(let num in freqMap){
//         if(freqMap[num]<minfreq){
//             minfreq=freqMap[num]
//             minfreqNumber=num
//         }
//     }
//     return minfreqNumber
// }


// const arr = [4, 3, 2, 3, 1, 2, 4, 5, 5, 5];
// const num=find(arr)
// console.log(num);


//bubble sort

// function bubblesort(arr){
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

//     }
//     while(swapped)
//         return arr
// }

// let arr=[3,5,6,4,3,2,5]
// let a=bubblesort(arr);
// console.log(a);

//insertion sort

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]<number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }

// let arr=[3,5,6,4,3,2,5]
// let a=insertionSort(arr);
// console.log(a);

// quick
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }

// let arr=[3,5,6,4,3,2,5]
// let a=quickSort(arr);
// console.log(a);


// merge

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

// let arr=[3,5,6,4,3,2,5]
// let a=mergeSort(arr);
// console.log(a);


// selection sort

// function selectionSort(arr){
//     let n=arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<n;j++){
//             if(arr[j]>arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         let temp=arr[minIndex]
//         arr[minIndex]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }

// let arr=[3,5,6,4,3,2,5]
// let a=selectionSort(arr);
// console.log(a);


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

// let arr=[3,5,6,4,3,2,5]
// let a=selectionSort(arr);
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
// }

// function reverse(str){
//     const stack=new Stack()
//     for(let char of str){
//         stack.push(char)
//     }
//     let reversed=''
//     while(!stack.isEmpty()){
//         reversed=reversed+stack.pop()
//     }
//     return reversed
// }

// function reverse(str){
//     const stack=new Stack()
//     let reversed=""
//     for(let char of str){
//         stack.push(char)
//     }
//     while(!stack.isEmpty()){
//         reversed=reversed+stack.pop()
//     }
//     return reversed
// }

// let str='qwertyuiop'
// console.log(reverse(str));


// class Stack{
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


// function palindrome(str){
//     const stack=new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//         }
//     }
//     return true

// }


// let str='malayala'
// console.log(palindrome(str));



// class Stack{
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


// function countEven(stack){
//     const temp=new Stack()
//     let count=0
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


//  const stack=new Stack()
//  stack.push(3)
//  stack.push(4)
//  stack.push(3)
//  stack.push(6)
//  stack.push(6)
//  stack.push(5)
//  console.log(countEven(stack));


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

//     print(){
//         console.log(this.item.toString());
//     }
// }


// function removeEven(stack){
//     const temp=new Stack()
//     while(!stack.isEmpty()){
//         const elem=stack.pop()
//         if(elem%2!==0){
//             temp.push(elem)
//         }
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
// }

//  const stack=new Stack()
//  stack.push(3)
//  stack.push(4)
//  stack.push(3)
//  stack.push(6)
//  stack.push(6)
//  stack.push(5)
//  stack.print()
//  removeEven(stack);
//  stack.print()




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
// stack.push(2)
// stack.push(2)
// stack.push(2)
// stack.push(4)
// stack.push(5)
// stack.print();
// const t=5
// const isFound=findTarget(stack,t)
// console.log(isFound);



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

// let number=29
// console.log(prime(number));


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
//     size(){
//         return this.item.length
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.item[this.item.length-1]
//     }
// }

// class qinStack{
//     constructor(){
//         this.stack1=new stack()
//         this.stack2=new stack()
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
//         return this.stack1.isEmpty()+this.stack2.isEmpty()
//     }

//     size(){
//         return this.stack1.size()+this.stack2.size()
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


// const q=new qinStack()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(45)
// // q.enqueue(34)
// console.log(q.dequeue());
// q.enqueue(5)
// console.log(q.dequeue());
// console.log(q.front());  
// console.log(q.dequeue()); 
// console.log(q.dequeue()); 
// console.log(q.isEmpty());


// class Node{
//     constructor(){
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
//         const node=new Node(value)
//         if(!this.tail){
//             this.head=this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
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
//         return remove
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     size(){
//         return this.size
//     }

//     display(){
//         let curr=this.head
//         let q=''
//         while(curr){
//             q=q+curr.value+(curr.next?"->":'')
//             curr=curr.next
//         }
//         console.log(q);   
//      }
// }

// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// console.log(queue.dequeue());
// queue.display();
// console.log(queue.isEmpty()); 
// console.log(queue.getSize()); 


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

//     peek(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item[0]
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.getSize());
// queue.print()

// console.log(queue.dequeue(),'hkhkj');
// console.log(queue.peek());

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
//             const samekey=bucket.find(item=>item[0]===key)
//             if(samekey){
//                 return samekey[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(Item=>Item===key)
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


// const table=new hashtable(30)
// table.set('name','sahla')
// table.set('mane','sahla')
// table.set('age','45677')
// table.set('gea','0909')
// console.log(table.get("mane"));
// table.display() 

// table.remove('age','45677')
// table.display() 

// function reverse(str){
//     const stack=new Stack()
//     let reversed=''
//     for(let char of str){
//         stack.push(char)
//     }
//     while(!stack.isEmpty()){
//         reversed=reversed+stack.pop()
//     }
//     return reversed
// }


// function palindrome(str){
//     const stack=new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// function reverse(str){
//     const stack=new String()
//     let reversed=''
//     for(let char of str){
//         stack.push(char)
//     }
//     while(!stack.isEmpty()){
//         reversed=reversed+stack.pop()
//     }
//     return reversed
// }

// function palindrome(str){
//     const stack=new Stack() 
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//     }
// }
//     return true
// }

// function count(stack){
//     const temp=new stack()
//     let count=0
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


// function remove(stack){
//     const temp=new stack()
//     while(!stack.isEmpty()){
//         const ele=stack.pop()
//         if(ele%2!==0){
//             temp.push(ele)
//         }
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
// }

// function findTarget(stack,t){
//     const temp=new stack()
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
//       }
//       return true
// }


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

// let a=[2,3,4,3,2,5,6]
// console.log(selectionSort(a));


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//   return arr  
// }

// let a=[2,3,4,3,2,5,6]
// console.log(bubbleSort(a));


// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         let j=i-1
//         while(j>=0&& arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }
// let a=[2,3,4,3,2,5,6]
// console.log(insertionSort(a));


// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }

// let a=[2,3,4,3,2,5,6]
// console.log(insertion(a));

// function quick(arr){
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
//     return[...quick(left),pivot,...quick(right)]
// }


// let a=[2,3,4,3,2,5,6]
// console.log(quick(a));



// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=arr.length/2
//     const left=arr.slice(0,mid)
//     const right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     const sorted=[]
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return[...sorted,...left,...right]
// }

// let a=[2,3,4,3,2,5,6]
// console.log(mergeSort(a));



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
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return[...sorted,...left,...right]
// }

// let a=[2,3,4,3,2,5,6]
// console.log(mergeSort(a));
















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
//     display(){
//         console.log(this.item.toString());
//     }
//     size(){
//         return this.item.length
//     }
// }

// const stack=new Stack()
// stack.push(2)
// stack.push(1)
// stack.push(7)
// stack.push(5)
// stack.push(4)
// stack.display()

// function sort(stack){
//     let swapped
//     do{
//         swapped=false
//         let temp=new Stack()
//         for(let i=0;i<stack.size-1;i++){
//             if(stack[i]>stack[i+1]){
//                 let temp=stack[i]
//                 stack[i]=stack[i+1]
//                 stack[i+1]=temp
//                 swapped=true
//             }
//         }

//     }while(swapped)
//         return stack
// }

// console.log(sort(stack));


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
// return total%this.size
       
//     }
// }


// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let number=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
//     return arr
// }

// let arr=[1,0,2,3,4,5]
// console.log(insertionSort(arr));


//bubble sort

// function bubblesort(arr){
// let swapped
// do{
//     swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped);
// }
// let arr=[-6,20,8,-2,4]
// bubblesort(arr)
// console.log(arr);

//insertion sort


// let arr=[-6,20,8,-2,4]
// insertionSort(arr)
// console.log(arr);

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         const number=arr[i]
//         j=i-1
//         while(j>=0 && arr[j]>number){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=number
//     }
// }


// quick sort

// function quicksort(arr){
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
//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// let arr=[-6,20,8,-2,4]
// arr=quicksort(arr)
// console.log(arr);


//merge sort

// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     const leftArray=arr.slice(0,mid)
//     const rightArray=arr.slice(mid)
//     return merge(mergesort(leftArray),mergesort(rightArray))

// }
    // function merge(leftArray,rightArray){
    //     const sortedArray=[]
    //     while(leftArray.length && rightArray.length){
    //         if(leftArray[0]<=rightArray[0]){
    //             sortedArray.push(leftArray.shift())
    //         }else{
    //             sortedArray.push(rightArray.shift())
    //         }
    //     }
    //     return [...sortedArray,...leftArray,...rightArray]

    // }


// let arr=[-6,20,8,-2,4]
// arr=mergesort(arr)
// console.log(arr);


//cartesian product

// function cartProd(arr1,arr2){
//     const res=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             res.push(arr1[i],arr2[j])
//         }
//     }

//     return res
// }

// arr1=[1,2]
// arr2=[3,4,5]
// console.log(cartProd(arr1,arr2));


//climbing stairs

// function climbingStair(n){
//    const noOfWays=[1,2] 
//     for(let i=2;i<=n;i++){
//         noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
//     }
//    return noOfWays[n-1]
// }

// console.log(climbingStair(1));
// console.log(climbingStair(2));
// console.log(climbingStair(3));
// console.log(climbingStair(4));
// console.log(climbingStair(5));
// console.log(climbingStair(6));


// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=next
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     add(data){
//         this.head=new Node(data,this.head)
//     }

//     dup(){
//     let curr=this.head
//     while(curr&&curr.next){
//         if(curr.data===curr.next.data){
//             curr.next=curr.next.next
//         }else{
//             curr=curr.next
//         }
//     }
// }

//         print(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.next
//         }
//     }
// }

// const ll=new linkedList()
// ll.add(3)
// ll.add(4)
// ll.add(3)
// ll.add(2)
// ll.add(2)
// ll.dup()
// ll.print()


//tower of hanoi

// function towerOfHanoi(n,fromRod,toRod,usingRod){
//     if(n===1){
//         console.log(`move disc 1 from ${fromRod} to ${toRod}`);
//         return
//     }
//     towerOfHanoi(n-1,fromRod,usingRod,toRod)
//         console.log(`move disc ${n} from ${fromRod} to ${toRod}`);
//         towerOfHanoi(n-1,usingRod,toRod,fromRod)
//     }

// towerOfHanoi(3,'A','C','B')


//Queue using array -it uses shift in dequeue

// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//        console.log(this.items.toString()); 
//     }
// }

// const queue=new Queue
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());


//Queue using object

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }

//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }

//     dequeue(){
//        const item= this.items[this.front]
//        delete this.items[this.front]
//        this.front++
//        return item
//     }

//     isEmpty(){
//        return this.rear-this.front===0 
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear-this.front
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());

// class circQueue{
//     constructor(capasity){
//         this.items=new Array(capasity)
//         this.capasity=capasity
//         this.currentLength=0;
//         this.rear=-1
//         this.front=-1
//     }

//     isFull(){
//         return this.currentLength===this.capasity
//     }

//     isEmpty(){
//         return this.currentLength===0
//     }

//     enqueue(element){
//         if(!this.isFull()){
//             this.rear=(this.rear+1)%this.capasity
//             this.items[this.rear]=element
//             this.currentLength+=1
//             if(this.front===-1){
//                 this.front=this.rear
//             }
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const item=this.items[this.front]
//         this.items[this.front]=null
//         this.front=(this.front+1)%this.capasity
//         this.currentLength =this.currentLength-1
//         if(this.isEmpty()){
//             this.front=-1
//             this.rear=-1
//         }
//         return item
//     }

//     peek(){
//        if(!this.isEmpty()){
//             return this.items[this.front]
//        }
//        return null
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("empty");
//         }else{
//             let i
//             let str=""
//             for(i=this.front;i!==this.rear;i= (i+1)% this.capasity){
//                 str=str+this.items[i]+' '
//             }
//             str=str+this.items[i]
//             console.log(str);
//         }
//     }
// }

// const queue=new circQueue(5)
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.isFull());
// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.print()
// queue.enqueue(20)
// queue.print()


// HashTable

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//with collision

    // set(key,value){
    //     const index=this.hash(key)
    //     this.table[index]=value
    // }

// set function with handling collisions

    // set(key,value){
    //     const index=this.hash(key)
    //     const bucket=this.table[index]
    //     if(!bucket){
    //         this.table[index]=[[key,value]]
    //     }else{
    //         const sameKeyItem=bucket.find(item=>item[0]===key)
    //         if(sameKeyItem){
    //             sameKeyItem[1]=value
    //         }else{
    //             bucket.push([key,value])
    //         }
    //     }
    // }


    //with collision

    // get(key){
    //     const index=this.hash(key)
    //     return this.table[index]
    // }

   // get function with handling collisions 

//    get(key){
//     const index=this.hash(key)
//     const bucket=this.table[index]
//     if(bucket){
//         const sameKeyItem=bucket.find(item=>item[0]===key)
//         if(sameKeyItem){
//             return sameKeyItem[1]
//         }
//     }
//     return undefined
//    }


   //with collision
    // remove(key){
    //     const index=this.hash(key)
    //     this.table[index]=undefined
    // }

    //remove function with handling collisions

//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKeyItem=bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
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

// const table=new HashTable(50)
// table.set("nama","sahla")
// table.set("agedwede","tytytdddede")
// table.set("age","0")
// console.log(table.get("nama")); 
// table.display()

// // table.remove("nama")
// table.set("mana","sahlayt")
// table.set("mana","saja")
// table.remove("mana","saja")
// table.display()


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
//             const samekey=bucket.find(item=>item[0]===key)
//             if(samekey){
//                 return samekey[1]
//             }
//         }
//         return undefined
//     }


//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(Item=>Item===key)
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




// const table=new hashtable(30)
// table.set('name','sahla')
// table.set('mane','sahla')
// table.set('age','45677')
// table.set('gea','0909')
// console.log(table.get("mane"));
// table.display()


// table.remove('age','45677')
// table.display()


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


//     peek(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item[0]
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }


// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()

// queue.dequeue()

// console.log(queue.peek());
// queue.print()



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


//     peek(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item[0]
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }


// const queue=new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()

// queue.dequeue()

// console.log(queue.peek());
// queue.print()


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
//     size(){
//         return this.item.length
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.item[this.item.length-1]
//     }
// }


// class qinStack{
//     constructor(){
//         this.stack1=new stack()
//         this.stack2=new stack()
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
//         return this.stack1.isEmpty()+this.stack2.isEmpty()
//     }


//     size(){
//         return this.stack1.size()+this.stack2.size()
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




// const q=new qinStack()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(45)
// // q.enqueue(34)
// console.log(q.dequeue());
// q.enqueue(5)
// console.log(q.dequeue());
// console.log(q.front());  
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());


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


//     print(){
//         console.log(this.item.toString());
//     }
// }




// function removeEven(stack){
//     const temp=new Stack()
//     while(!stack.isEmpty()){
//         const elem=stack.pop()
//         if(elem%2!==0){
//             temp.push(elem)
//         }
//     }
//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }
// }


//  const stack=new Stack()
//  stack.push(3)
//  stack.push(4)
//  stack.push(3)
//  stack.push(6)
//  stack.push(6)
//  stack.push(5)
//  stack.print()
//  removeEven(stack);
//  stack.print()


// class Stack{
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




// function countEven(stack){
//     const temp=new Stack()
//     let count=0
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




//  const stack=new Stack()
//  stack.push(3)
//  stack.push(4)
//  stack.push(3)
//  stack.push(6)
//  stack.push(6)
//  stack.push(5)
//  console.log(countEven(stack));




// class Stack{
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


// function palindrome(str){
//     const stack=new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }




// let str='malayalam'
// console.log(palindrome(str));




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


// function reverse(str){
//     const stack=new Stack()
//     for(let char of str){
//         stack.push(char)
//     }
//     let reversed=''
//     while(!stack.isEmpty()){
//         reversed=reversed+stack.pop()
//     }
//     return reversed
// }


// let str='asdfgh'
// console.log(reverse(str));


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


// let arr=[3,5,6,4,3,2,5]
// let a=selectionSort(arr);
// console.log(a);




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


// let arr=[3,5,6,4,3,2,5]
// let a=mergeSort(arr);
// console.log(a);

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
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }


// let arr=[3,5,6,4,3,2,5]
// let a=mergeSort(arr);
// console.log(a);


// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }


// let arr=[3,5,6,4,3,2,5]
// let a=quickSort(arr);
// console.log(a);

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
//     return[...quickSort(left),pivot,...quickSort(right)]
// }


// let arr=[3,5,6,4,3,2,5]
// let a=quickSort(arr);
// console.log(a);








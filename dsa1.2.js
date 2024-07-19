//while loop


// var count=100
// var i=0
// while(i<count){
//     console.log("*");
//     i++
// }


//array

// let a=new Array(1,2,3,4);  [ 1, 2, 3, 4 ]
// let a=new Array(5);   [ <5 empty items> ]
// let a=new Array('Sahla');   [ 'Sahla' ]

//string

// let a=new String('sahla') ;  [String: 'sahla']
// let a='sahla'; 
// console.log(a);
// console.log(a.length)
// console.log(a.indexOf("h"))

// let a='good morning'
// let b=['a','b','c']
// console.log(a.replace('good',b[0]));  a morning


//linkedList

// class Node{
//     constructor(element){
//         this.element=element
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

// //add element at end
//     add(element){
//         let node=new Node(element)
//         let current

//         if(this.head==null){
//             this.head=node
//         }else{
//         current=this.head


//         while(current.next){
//             current=current.next
//         }
//         current.next=node
//     }
//     this.size++
// }





// //insert at the position index

// insertAt(element, index) {
//         if (index < 0 || index > this.size)
//             return console.log("Please enter a valid index.");
//         else {
//         let node=new Node(element)
//         let curr,prev
//         curr=this.head

//         if(index==0){
//             node.next=this.head
//             this.head=node
//         }else{
//             curr=this.head
//             let it=0

//             while(it<index){
//                 it++
//                 prev=curr;
//                 curr=curr.next
//             }

//             node.next=curr
//             prev.next=node
//         }
//         this.size++
//     }
// }


// //remove an element from a specific location
// removeFrom(index){
//     if(index<0||index>=this.size)
//         return console.log("enter valid index");
//     else{
//         let curr,prev,it=0;
//         curr=this.head;
//         prev=curr;

//         if(index==0){
//             this.head=curr.next
//         }else{
//             while(it<index){
//                 it++;
//                 prev=curr
//                 curr=curr.next
//             }

//             prev.next=curr.next
//         }
//         this.size--
//         return curr.element
//     }
// }


// //remove given element from list
// removeElement(element){
//     let curr=this.head;
//     let prev=null
    
//     while(curr!=null){
//         if(curr.element===element){
//             if(prev==null){
//                 this.head=curr.next
//             }else{
//                 prev.next=curr.next
//             }
//             this.size--
//             return curr.element
//         }
//         prev=curr
//         curr=curr.next
//     }
//     return -1
// }


// //find index of element
// indexOf(element){
//     let count=0
//     let curr=this.head
//     while(curr!=null){
//         if(curr.element===element)
//             return count
//         count++
//         curr=curr.next
//     }
//     return -1
// }

// isEmpty(){
//     return this.size===0
// }

// getSize(){
//     return this.size;
// }




// printList(){
//     let curr=this.head
//     let str=""
//     while(curr){
//         str+=curr.element+" "
//         curr=curr.next
//     }
//     console.log(str);
// }
// }

// let ll=new LinkedList()
// ll.add(10)
// ll.add(20)
// ll.add(90)
// ll.insertAt(40,1)
// ll.removeFrom(2)
// ll.removeElement(90)
// ll.removeElement(100)
// ll.add(78)
// ll.add(23)
// ll.printList()
// console.log(ll.indexOf(78));
// console.log(ll.getSize());
// console.log(ll.isEmpty());


//easy way

// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=next
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     //insert frst node
//     insertFirst(data){
//     this.head=new Node(data,this.head)
//     }

//     //insert last node
//     insertLast(data){
//         let node=new Node(data)
//         let curr;

//         if(this.head==null){
//             this.head=node
//         }else{
//             curr=this.head

//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }

//     //insert at index

//     insertAt(data,index){
//         if(index>0 && index<this.size){
//             return
//         }

//         if(index==0){
//             this.head=new Node(data,this.head)
//         return;
//         }

//         const node=new Node(data)
//         let curr,prev;

//         curr=this.head
//         let count=0

//         while(count<index){
//             prev=curr
//             count++
//             curr=curr.next
//         }
//         node.next=curr
//         prev.next=node
//         this.size++
//     }

//     //get at index

//     getAt(index){
//         let curr=this.head;
//         let count=0

//         while(curr){
//             if(count==index){
//                 console.log(curr.data);
//             }
//             count++
//             curr=curr.next
//         }
//         return null;
//     }

//     //remove at index
//     removeAt(index){
//         if(index<0&&index>this.size){
//             return
//         }
//         let curr=this.head
//         let prev
//         let count=0

//         if(index===0){
//             this.head=curr.next
//         }else{
//            while(count<index) {
//                 count++
//                 prev=curr
//                 curr=curr.next
//            }
//            prev.next=curr.next
//         }
//         this.size--
//     }

//     //clear list
//     clearList(){
//         this.head=null
//         this.size=0
//     }

//     //print list
//     printlist(){
//        let curr=this.head
//        while(curr){
//         console.log(curr.data);
//         curr=curr.next
//        }
//     }
// }

// const ll=new LinkedList()
// ll.insertFirst(12)
// ll.insertFirst(125)
// ll.insertFirst(300)
// ll.insertLast(90)
// ll.insertAt(67,2)
// ll.getAt(2)
// ll.removeAt(2)
// ll.clearList()
// ll.printlist()

//array

// let a=[6,5,4,3,9,8,0]
// let t=10
// function number(a,t) {
//     for(let i=0;i<a.length-1;i++){
//         for(let j=i+1;j<a.length;j++){
//             if(a[i]+a[j]==t){
//                 console.log(a[i],a[j]);
//                 return [a[i],a[j]]; 
//             }
//         }
//     }
//     return null
// }
// console.log(number(a,t)); 


// let a=[6,5,4,3,9,8,0]
// let t=10
// function number(a,t) {
// let p=new Set()
// for(let i=0;i<a.length;i++){
//     let num=a[i]
//    let match=t-num
//     if(p.has(match)){
//         return [num,match]
//     }
//         p.add(num)
    
// }
// return null
// }
// console.log(number(a,t));


// let a=[6,1,6,8,10,4,15,6,3,9,6]
// let t=6
// function number(a,t) {
//     let n=a.length
//     end=a.length-1

//     for(let i=0;i<end;i++){
//         if(a[i]==t){
//             while(a[end]===t&&end>i){
//                 end--
//             }
//             if(i<end){
//                 let temp=a[i]
//                 a[i]=a[end]
//                 a[end]=temp
//                 end--
//             }
//         }
//     }

// }
// number(a,t);
// console.log(a);

//fibonacci series


// function fibonacci(n) {
//     const fib=[0,1]
//     for(let i=2;i<=n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(7));

//big-o-   O(n)



//factorial of a number

// function factorial(n) {
//     let res=1
//     for(let i=2;i<=n;i++){
//         res=res*i
//     }
//     return res
// }
// console.log(factorial(5));


//prime number

// function prime(n) {
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(5));
// console.log(prime(9));
// console.log(prime(13));

//cmplexty O(sqrt(n))

// power of two

// function powerOfTwo(n) {
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(powerOfTwo(6));
// console.log(powerOfTwo(8));


// complexity - O(logn)  within the while loop navigator,s size reducing

//recursion fibonacci

// function recursiveFibonacci(n){
//     if(n<2){
//         return n;
//     }
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(5));
// console.log(recursiveFibonacci(8));

// recursive factorial

// function factorial(n) {
//     if(n<1){
//         return 1;
//     }
//     return n*(factorial(n-1))   
// }

// console.log(factorial(5));
// console.log(factorial(4));


// linear search

// function check(arr,t) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===t){
//             return i
//         }
//     }
//     return -1
// }

// console.log(check([2,3,4,5,6],7));
// console.log(check([2,3,4,5,6],6));


//linear search

// function check(arr,t){
//     arr.sort()
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===t){
//             return i
//         }
//     }
//     return -1
// }
// console.log(check([1,3,4,5],5));


//binary search

// function check(arr,t) {
//     let leftIndex=0
//     let rightIndex=arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         if(t===arr[middleIndex]){
//             return middleIndex
//         }
//         if(t<arr[middleIndex]){
//            rightIndex=middleIndex-1 
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1
// }

// console.log(check([-5,2,4,6,10],10));
// console.log(check([-5,2,4,6,10],6));
// console.log(check([-5,2,4,6,10],20));



// //recursive binary search

// function recrsBinary(arr,t){
//   return search(arr,t,0,arr.length-1)   

//   function search(arr,t,left,right){
//     if(left>right){
//         return -1
//         }

//         let middle=Math.floor((left+right)/2)
//         if(t===arr[middle]){
//             return middle
//         }

//         if(t<arr[middle]){
//              return search(arr,t,left,middle-1)
//         }else{
//            return search(arr,t,middle+1,right)
//         }


//     }
//   }

//   console.log(recrsBinary([-5,2,4,6,10],10));
// console.log(recrsBinary([-5,2,4,6,10],6));
// console.log(recrsBinary([-5,2,4,6,10],20));


//sort

// arr=[-6,20,8,-2,4]
// function sort(arr) {
//     let b=arr.sort((a,b)=>a-b)
//     return b
// }
// console.log(sort(arr));



// arr=[-6,20,8,-2,4]
// function sort(arr) {
//     let temp
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
//  }
//  console.log(sort(arr));


// linkedlist

// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=next
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0   
//     }
// insertFirst(data){
//     this.head=new Node(data,this.head)
// }

// insertLast(data){
//     const node=new Node(data)

//     if(this.head==null){
//         this.head=node
//     }else{
//         let curr=this.head
//         while(curr.next){
//             curr=curr.next
//         }
//         curr.next=node
//     }
//     this.size++
// }

// insertAt(value,index){
//     if(index<0 && index>this.size){
//         return 
//     }
//     if (index===0){
//         this.head=new Node(data)
//         return
//     }

//     const node=new Node(data)
//     let curr,prev

//     curr=this.head
//     let count=0

//     while(count<index){
//         prev=curr
//         count++
//         curr=curr.next
//     }
//     node.next=curr
//     prev.next=node
//     this.size++

// }

// getAt(index){
//     let curr=this.head
//     let count=0

//     while(curr){
//         if(count==index){
//             console.log(curr.data);
//         }
//         count++
//         curr=curr.next
//     }
//     return null
// }

// removeAt(index){
//     if(index<0&& index>this.size){
//         return
//     }
//     let curr=this.head
//     let prev
//     let count=0

//     if(index===0){
//         this.head=curr.next
//     }else{
//         while(count<index){
//             count++
//             prev=curr
//             curr=curr.next
//         }
//         prev.next=curr.next
//     }
//     this.size--
// }

//  printList(){
//     let curr=this.head
//     while(curr){
//         console.log(curr.data);
//         curr=curr.next
//     }
//  }
//  getSize(){
//     return this.size
//  }
// }
// const ll=new LinkedList()
// ll.insertFirst(89)
// ll.insertFirst(45)
// ll.insertLast(55)
// ll.printList()
// console.log(ll.getSize());


//prime number

// let a=6
// let flag=0
// for(let i=2;i<a;i++){
//     if(a%i==0){
//         flag=1;
//     }
// }
//     if(flag==1){
//         console.log(false);
//     }else{
//         console.log(true);
//     };


// function fibonacci(n) {
//     if(n<2){
//         return n
//     }
//     return fibonacci(n-1)+fibonacci(n-2)    
// }
// console.log(fibonacci(6));



// function factorial(n){
//     if(n<1){
//         return 1
//     }
//     return n*(factorial(n-1))
// }
// console.log(factorial(5));



// function sum(arr){
//     if(arr.length<1){
//         return 0
//     }
//     return arr[0]+sum(arr.slice(1))
// }

// console.log(sum([1,2,3,4]));



// function binary(arr,t){
//     return search(0,arr.length-1,arr,t)

//     function search(left,right,arr,t){
//         if(left>right){
//             return -1
//         }

//         let middle=Math.floor((left+right)/2)

//         if(t===arr[middle]){
//             return middle
//         }else if(t<arr[middle]){
//             return search(left,middle-1,arr,t)
//         }else if(t>arr[middle]){
//             return search(middle+1,right,arr,t)
//         }else{
//             return -1
//         }

//         }    
//     }

//     console.log(binary([1,2,3,4,5,6],2));


// find a target and replace with zero

// function findAndReplace(arr,t,index=0){
//     if(index>=arr.length){
//         return
//     }
//     if(arr[index]===t){
//         arr[index]=0
//     }
//     findAndReplace(arr,t,index+1)
// }

// let arr=[1,2,3,4,5,6,5,4,3,2]
// findAndReplace(arr,5);
// console.log(arr);


//numbers from 10 to 1

// function descending(n){
//     if(n<1){
//         return
//     }
//     console.log(n);
//     descending(n-1)
// }
// descending(10)

//string reverse

// function strReverse(str){
//     if(str===" " ||str.length===1){
//         return str
//     }
//     return strReverse(str.substring(1))+str.charAt(0)
// }

// let str='hello'
// let reverse=strReverse(str)
// console.log(reverse);


//even numbers

// function even(arr,index){
//     if(index>=arr.length){
//         return
//     }

//     if(arr[index]%2===0){
//         console.log(arr[index]);
//     }
//     even(arr,index+1)
// }
// let arr=[1,2,3,4,5,6,5,4,3,2]

// even(arr,0);

// string palindrome

// function palindrome(str){
//     if(str===""){
//         return true
//     }
//     if(str.length===1){
//         return true
//     }
//     if(str[0]===str[str.length-1]){
//        return palindrome(str.slice(-1,1))
//     }else{
//         return false
//     }
// }

// let str='sahla'
// console.log(palindrome(str));

//binarySearcy

// function binary(arr,t){
//     return search(arr,t,0,arr.length-1)
// }
// function search(arr,t,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle=Math.floor((left+right)/2)
//     if(arr[middle]===t){
//         if(middle===0 || arr[middle-1]!==t){
//             return middle
//         }else{
//             return search(arr,t,left,middle-1)
//         }  
//     }

//     if(t<arr[middle]){
//         return search(arr,t,left,middle-1)
//     }else if(t>arr[middle]){
//         return search(arr,t,middle+1,right)
//     }else{
//         return -1
//     }    
//     }

//     let arr=[1,2,3,4,2,2,2,2,5,6]
//     let a=arr.sort((a,b)=>a-b)
//     console.log(binary(a,2));


    //palindrome

// function palindrom(str) {
//     if(str===''){
//         return true
//     }
//     if(str.length===1){
//         return true
//     }
//     if(str[0]===str[str.length-1]){
//         return palindrom(str.slice(-1,1))
//     }else{
//         return false
//     }
// }

// let str='malayalam'
// console.log(palindrom(str));

//single ll


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

//     insertFirst(data){
//         this.head=new Node(data,this.head)
//     }

//     insertLast(data){
//         let node=new Node(data)
//         let curr

//         if(this.head===null){
//             this.head=new Node(data,this.head)
//         }else{
//             curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }

//     insertAt(data,index){
//         if(index<0 || index>=this.size){
//             return ;
//         }
//         if(index===0){
//             this.data=new Node(data,this.head)
//         }
//         const node=new Node(data)
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }

//     getAt(index){
//         let curr=this.head
//         let count=0
//         while(curr){
//             if(count===index){
//                 return curr.data;
//             }
//             count++
//             curr=curr.next
//         }
//         return null
//     }

//     removeAt(index){
//         if(index<0 ||index>=this.size){
//             return null
//         }
//         let removed
//         if(index===0){
//             removed=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removed=prev.next
//             prev.next=removed.next
//         }
//         this.size--
//         return removed.data
//     }

//     removeValue(data){
//         if(this.head===null){
//             return null
//         }
//         if(this.head.data===data){
//             this.head=this.head.next
//             this.size--
//             return data
//         }else{
//             let prev=this.head
//             while(prev.next.data!==data){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let remove=prev.next
//                 prev.next=remove.next
//                 this.size--
//             }
//             return null
//         }
//     }

//     findNode(data){
//         if(this.head===null){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.data===data){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//     length(){
//         let count=0
//         let curr=this.head
//         while(curr){
//             count++
//             curr=curr.next
//         }
//         return count
//     }

//     sum(){
//         let curr=this.head
//         let sum=0
//         while(curr){
//             sum=sum+curr.data
//             curr=curr.next
//         }
       
//         return sum
//     }

//     printList(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.next
//         }
//     }
// }

// const ll= new linkedList()
// ll.insertLast(2)
// ll.insertLast(2)
// ll.insertLast(9)
// ll.insertLast(6)
// ll.insertLast(5)
// ll.insertLast(2)
// ll.insertAt(3,2)
// // ll.removeAt(2)
// ll.removeValue(3)
// ll.reverse()
// ll.printList()
// let a=ll.getAt(5);
// console.log(a);
// console.log(ll.length());
// console.log(ll.sum());


//title case string

// let str='sahala'
// let b=str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
// console.log(b);

// let str='this is my kingdom'
// let b=str.split(' ').map(word=>{
//     return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()
// }).join(' ')
// console.log(b);


//add fullstop


// let str='this is my kingdom'
// if(!str.endsWith('.')){
//    str= str+'.'
// }
// console.log(str);


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

//     addFirst(data){
//         this.head=new Node(data,this.head)
//     }

//     addLast(data){
//         if(this.head===null){
//             this.head=new Node(data,this.head)
//         }else{
//            let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=new Node(data)
//         }
//         this.size++
//     }

//     getAt(index){
//         let curr=this.head
//         let count=0
//         while(curr){
//             if(count===index){
//                 return curr.data;
//             }
//             curr=curr.next
//             count++
//         }
//         return null
//     }

//     insertAt(index,data){
//         if(index<0||index>=this.size){
//             return null
//         }
//         if(index===0){
//             this.head=new Node(data,this.head)
//         }
//         let node=new Node(data)
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }

//     removeAt(index){
//         if(index<0||index>=this.size){
//             return null
//         }
//         let removed
//         if(index===0){
//             let removed=this.head
//             this.head=this.head.next
//             this.size--
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//                  }
//                 removed=prev.next
//                 prev.next=removed.next
//             }
//             this.size--
//             return removed.data
//    
//     }

//     removeValue(data){
//         if(this.head===null){
//             return null
//         } 
//         if(this.head.data===data){
//             this.head=this.head.next
//             this.size--
//             return data
//         }else{
//             let prev=this.head
//             while(prev.next.data!==data){
//                 prev=prev.next
//                 }
//                 if(prev.next){
//                     let remove=prev.next
//                     prev.next=remove.next
//                     this.size--
                   
//                 }
//                 return null
//             }
//         }

//         findNode(data){
//             if(this.head===null){
//                 return-1
//             }
//             let i=0
//             let curr=this.head
//             while(curr){
//                 if(curr.data===data){
//                     return i
//                 }
//                 curr=curr.next
//                 i++
//             }
//             return -1
//         }

//         reverse(){
//             let prev=null
//             let curr=this.head
//             while(curr){
//                 let next=curr.next
//                 curr.next=prev
//                 prev=curr
//                 curr=next
//             }
//             this.head=prev
//         }
     


//     sum(){
//         let curr=this.head
//         let sum=0
//         while(curr){
//             sum=sum+curr.data
//             curr=curr.next
//         }
//         return sum
//     }

//     length(){
//         let count=0
//         let curr=this.head
//         while(curr){
//             curr=curr.next
//             count++
//         }
//         return count
//     }

//     printList(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.next
//         }
//     }
// }

// const ll=new linkedList()
// // console.log(ll.length());
// ll.addFirst(23)
// ll.addLast(44)
// ll.addLast(4)
// ll.addLast(90)
// ll.removeValue(23)
// console.log(ll.findNode(4),'kjkk');
// ll.reverse()
// ll.printList()

// // let a=ll.getAt(2);
// // console.log(a);
// console.log(ll.length());
// // console.log(ll.sum());


// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=next
//         this.prev=next
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     addfirst(data){
//        if(!this.head){
//         this.head=new Node(data)
//         this.tail=this.head
//        }else{
//         this.head=new Node(data,this.head)
//        }
//        this.size++
//     }

//     addlast(data){
//         if(!this.head){
//             this.head=new Node(data)
//             this.tail=this.head
//         }else{
//             this.tail.next=new Node(data)
//             this.tail=this.tail.next
//         }
//         this.size++
//     }

//     insertAt(index,data){
//         if(index<0||index>=this.size){
//             return;
//         }
//         if(index===0){
//             this.head=new Node(data,this.head)
//             if(!this.tail){
//                 this.tail=this.head
//             }
//         }else if(index===this.size){
//             this.tail.next=new Node(data)
//             this.tail=this.tail.next
//         }else{
//             const node=new Node(data)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }

//     getAt(index){
//         if(index<0||index>=this.size){
//             return null
//         }
//       let curr=this.head
//       let count=0
//       while(curr){
//         if(count===index){
//             console.log(curr.data);
//         }
//         curr=curr.next
//         count++
//       }
//       return null
//     }

//     removeAt(index){
//         if(index<0||index>=this.size){
//             return null
//         }
//         let removed
//         if(index===0){
//             removed=this.head
//             this.head=this.head.next
//             if(this.size===1){
//                 this.tail=null
//             }
//             }else{
//                 let prev=this.head
//                 for(let i=0;i<index-1;i++){
//                     prev=prev.next
//                 }
//                 removed=prev.next
//                 prev.next=removed.next
//                 if(removed===this.tail){
//                     this.tail=prev
//                 }
//             }
//             this.size--
//             return removed.data
//     }

//     removeValue(data) {
//         if (this.head === null) {
//             return null; 
//         }
    
//         if (this.head.data === data) { 
//             let removed = this.head;
//             this.head = this.head.next;
//             if (this.size === 1) {
//                 this.tail = null;
//             } else {
//                 this.head.prev = null; 
//             }
//             this.size--;
//             return data;
//         } else {
//             let prev = this.head;
//             while (prev.next && prev.next.data !== data) {
//                 prev = prev.next;
//             }
//             if (prev.next) { 
//                 let removed = prev.next;
//                 prev.next = removed.next;
//                 if (removed === this.tail) {
//                     this.tail = prev;
//                 }
//                 this.size--;
//                 return data;
//             }
//             return null; 
//         }
//     }

//     findNode(data){
//         if(this.head===null){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.data===data){
//                 console.log(i); 
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }



//     reverse(){
//         let prev=null
//         let curr=this.head
//         this.tail=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//     sum(){
//         let curr=this.head
//         let sum=0
//         while(curr){
//             sum=sum+curr.data
//             curr=curr.next
//         }
//         console.log(sum)
//     }
    


//     print(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.next
//         }
//     }
// }

// const ll=new linkedList()
// ll.addfirst(3)
// ll.addlast(4)
// ll.insertAt(1,30)
// ll.removeValue(30)
// ll.findNode(3)
// // ll.getAt(1)
// // ll.removeAt(1)
// ll.reverse()
// ll.sum()
// ll.print()


// function factorial(n){
//     if(n<1){
//         return 1
//     }
//     return n*(factorial(n-1));
// }
// console.log(factorial(5));


// function fibo(n){
//     if(n<2){
//         return n
//     }
//     return fibo(n-1)+fibo(n-2)
// }
// console.log(fibo(5));

// function binary(arr,t){
//     return search(arr,t,0,arr.length-1)
// }

// function search(arr,t,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle=Math.floor((left+right)/2)
//     if(t===arr[middle]){
//         if(arr[middle]===0||arr[middle-1]!==t)
//         return middle
//     }
//      if(t<arr[middle]){
//         return search(arr,t,left,middle-1)
//     }else if(t>arr[middle]){
//         return search(arr,t,middle+1,right)
//     }else{
//         return 1
//     }
// }

// a=arr.sort((a,b)=>a-b)

// function findAndReplace(arr,t,index=0){
//     if(index>=arr.length){
//         return -1
//     }
//     if(arr[index]===t){
//         arr[index]=0
//         findAndReplace(arr,t,index+1)
        
//     }
// }

// function decs(n){
//     if(n<1){
//         return
//     }
//     console.log(n);
//     decs(n-1)
// }


// function reverse(str){
//     if(str===" "||str.length===1){
//         return str
//     }
//     return reverse(str.substring(1)+str.charat(0))
// }

// function even(arr,index=0){
//     if(index>=arr.length){
//         return -1
//     }
//     if(arr[index]%2===0){
//         console.log(arr[index]);
//     }
//     even(arr,index+1)
// }

// function pal(str){
//     if(str===''||str.length===1){
//         return true
//     }
//     if(str[0]===str[str.length-1]){
//         return pal(str.slice(-1,1))
//     }else{
//         return false
//     }
// }

// dup(){
//     let curr=this.head
//     while(curr&&curr.next){
//         if(curr.data===curr.next.data){
//             curr.next=curr.next.next
//         }else{
//             curr=curr.next
//         }
//     }
// }

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
//     addLast(data){
//         if(this.head===null){
//             this.head=new Node(data,this.head)
//         }else{
//             curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=new Node(data)
//         }
//         this.size++
//     }

//     insertAt(index,data){
//         if(index<0||index>=this.size){
//             return
//         }
//         if(index===0){
//             this.head=new Node(data,this.head)
//         }
//             let node=new Node(data)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//      getAt(index){
//         let curr=this.head
//         let count=0

//         while(curr){
//         if(index===count){
//             return curr.data
//         }
//         count++
//         curr=curr.next
//         }
//         return null
//     }

//     removeAt(index){
//         if(index<0||index>=this.size){
//             return null
//         }
//         let removed
//         if(index===0){
//             removed=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removed=prev.next
//             prev.next=removed.next
//         }
//         return removed.data
//     }

//     removeValue(data){
//         if(this.head===null){
//             return null
//         }
//         if(this.head===data){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let prev=this.head
//             while(prev.next.data!==data){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let remove=prev.next
//                 prev.next=remove.next
//                 this.size--
//                 return data

//             }
//             return null
//         }
//     }
     

// }
// let arr=[2,3,4,3,2,5,6,1]
// let arr=[-6,20,8,-2,4]
// let b=arr.sort((a,b)=>a-b)
// console.log(b);


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

class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
//with collision

    // set(key,value){
    //     const index=this.hash(key)
    //     this.table[index]=value
    // }

// set function with handling collisions

    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }


    //with collision

    // get(key){
    //     const index=this.hash(key)
    //     return this.table[index]
    // }

   // get function with handling collisions 

   get(key){
    const index=this.hash(key)
    const bucket=this.table[index]
    if(bucket){
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            return sameKeyItem[1]
        }
    }
    return undefined
   }


   //with collision
    // remove(key){
    //     const index=this.hash(key)
    //     this.table[index]=undefined
    // }

    //remove function with handling collisions

    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }

    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table=new HashTable(50)
table.set("nama","sahla")
table.set("agedwede","tytytdddede")
table.set("age","0")
console.log(table.get("nama")); 
table.display()

// table.remove("nama")
table.set("mana","sahlayt")
table.set("mana","saja")
table.remove("mana","saja")
table.display()






























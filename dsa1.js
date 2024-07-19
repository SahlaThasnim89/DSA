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


//     //add
//     add(element){
//         let node= new Node(element)
//             let curr;

//             if(this.head==null)
//                 this.head=node
//             else{
//                 curr=this.head

//                 while(curr.next){
//                     curr=curr.next
//                 }
//                 curr.next=node
//             }
//         this.size++
//         }


//         insertAt(index,element){
//             if(index<0||index>this.size){
//                 console.log('invalid index');
//             }else{
//                 let node=new Node(element)
//                 let curr,prev
//                 curr=this.head

//                 if(index==0){
//                     node.next=this.head
//                     this.head=node
//                 }else{
//                     curr=this.head
//                     let it=0

//                     while(it<index){
//                         it++
//                         prev=curr
//                         curr=curr.next
//                     }
//                     node.next=curr
//                     prev.next=node

//                 }
//                 this.size++
//             }
//         }


//         removeFrom(index){
//             if(index<0||index>=this.size)
//                 console.log('invalid');
            
//         else{
//             let curr,prev,it=0
//             curr=this.head;
//             prev=curr

//             if(index==0){
//                 this.head=curr.next
//             }else{
//                 while(it<index){
//                     it++
//                     prev=curr
//                     curr=curr.next
//             }

//             prev.next=curr.next
//         }
//         this.size--
//         return curr.element
//     }
// }


// removeElement(element){
//     let curr=this.head
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

// indexOf(element){
//     let count=0
//     let curr=this.head
//     while(curr!=null){
//         if(curr.element===element)
//             return count
//             count++
//             curr=curr.next
//     }
//     return -1
// }

// isEmpty(){
//     return this.size===0
// }

// getSize(){
//     return this.size
// }



//         printList(){
//             let curr=this.head
//             let str=""
//             while(curr){
//                 str+=curr.element+" "
//                 curr=curr.next
//             }
//             console.log(str);
//         }
//     }

//     let ll =new LinkedList()
//     ll.add(10)
//     ll.add(12)
//     ll.add(14)
//     ll.add(15)
//     ll.insertAt(2,30)
//     ll.removeFrom(2)
//     ll.removeElement(15)
//     ll.add(111)
//     ll.add(90)
//     ll.add(33)
//     ll.printList()
//     console.log(ll.getSize());
//     console.log(ll.isEmpty());
//     console.log(ll.indexOf(14));


//remove repeated elements


    // let a=[[1,2],[1,2],[5,9],[6,7]]
    // let b=a.flat()
    // let d=[...new Set(b)]
    // let c=[]
    // for(let i=0;i<d.length;i++){
    //     let count=0
    //    for(let j=0;j<b.length;j++){
    //     if(d[i]==b[i] ){
    //         count++
    //     }
       
    //    }
    //    if(count==0)
    //     console.log(d[i]);
    //    }


       //missing number


    //    a=[1,2,3,5]
    //    n=5
    //    for(i=1;i<=n;i++){
    //     if(!a.includes(i)){
    //         console.log(i);
    //     }
    //    }
    
 
    //find duplicates


    // let a=[2,3,1,2,3]
    // let b=-1
    // let f=0
    // for(let i=0;i<a.length-1;i++){
    //     for(let j=i+1;j<a.length;j++){
    //         if(a[i]==a[j]&&i!=j){
    //             f=1
    //              console.log(a[i])
    //         }
    //     }
    // }
    // if(f==0){
    // console.log(b);
    // }



    //second largest


    // a=[1,7,6,4,5,3]
    // let l
    // a.sort()
    // for(let i=0;i<a.length;i++){
    //     l=a[a.length-2];
    // }
    // console.log(l);


    //equal array


//     a=[1,2,3,4,5]
//     b=[1,2,3,4,5,8]
//     let bool=false
// if(a.length==b.length){
//      bool=true
//     for(i=0;i<a.length;i++){
//             if(a[i]!==b[i]){
//                 bool=false
//             }
//         }
//         console.log(bool);
// }else{
//     console.log(bool);
// }



//singly linked 

// class Node{
//     constructor(element){
//         this.element=element
//         this.next=null
//     }
// } 

// class linkedList{
//     constructor(){
//         this.head=null
//     }
// }


//doubly linked

// class Node{
//     constructor(element){
//         this.element=element
//         this.next=null
//         this.prev=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
// }


//array to a linkedlist

// class Node{
//     constructor(element){
//         this.element=element
//         this.next=null
//     }
// }


// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }


//     add(element){
//         let node=new Node(element)
//         let current

//         if(this.head==null){
//             this.head=node
//         }else{
//             current=this.head
//             while(current.next){
//                 current=current.next
//             }
//             current.next=node
//         }
//         this.size++
//     }

//     printList(){
//         let current=this.head
//         let str=""
//       while (current){
//         str+=current.element+" "
//         current=current.next
//       }
//       console.log(str);
//     }
// }


// function convertArray(arr) {
//     const ll=new linkedList()
//         for(i=0;i<arr.length;i++){
//             ll.add(arr[i])
//         }
//         return ll
//     }


//     const arr=[1,2,3,4,5,6]
//     const linkedlist=convertArray(arr)
//     linkedlist.printList()


// // add element at the end & begginning

// class Node{
//     constructor(element){
//         this.element=element
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     add(element){
//         let node=new Node(element)
//         let curr

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

//     insertAt(index,element){

//         if(index<0||index>this.size)
//             return console.log('invalid');
//         else{
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
//                 prev=curr
//                 curr=curr.next
//             }

//             node.next=curr
//             prev.next=node
//         }
//         this.size++


//     }
// }

// printList(){
//     let curr=this.head
//     let str=''
//     while(curr){
//         str+=curr.element+' '
//         curr=curr.next
//     }
//     console.log(str);
// }
// }

// let ll=new linkedList()
// ll.add(10)
// ll.add(30)
// ll.insertAt(0,12)
// ll.add(45)
// ll.printList()


// //delete an elememnt its value specified

// // class Node{
// //     constructor(element){
// //         this.element=element
// //         this.next=null
// //     }
// // }

// // class linkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }

// //     add(element){
// //         let node=new Node(element)
// //         let curr

// //         if(this.head==null){
// //             this.head=node
// //         }else{
// //             curr=this.head

// //             while(curr.next){
// //                 curr=curr.next
// //             }
// //             curr.next=node
// //         }
// //         this.size++
// //     }



// //     removeElement(element){
// //         let curr=this.head
// //         let prev=null

// //         while(curr!=null){
// //             if(curr.element===element){
// //                 if(prev==null){
// //                     this.head=curr.next
// //                 }else{
// //                     prev.next=curr.next
                
// //             }this.size--
// //             return curr.element
// //         }
// //         prev=curr
// //         curr=curr.next
// //     }
// //     return -1
// // }

// // printList(){
// //     let curr=this.head
// //     let str=''
// //     while(curr){
// //         str+=curr.element+' '
// //         curr=curr.next
// //     }
// //     console.log(str);
// // }

// // }

// // let ll=new linkedList()
// // ll.add(10)
// // ll.add(30)
// // ll.add(8)
// // ll.removeElement(30)
// // ll.printList()


// // // insrt a node after and before a node with x data

// // class Node{
// // constructor(element){
// //     this.element=element
// //     this.next=null
// // }
// // }

// // class linkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }

// //     add(element){
// //         let node=new Node(element)
// //         let curr

// //         if(this.head==null){
// //             this.head=node
// //         }else{
// //             curr=this.head

// //             while(curr.next){
// //                 curr=curr.next
// //             }
// //             curr.next=node
// //         }
// //         this.size++
// //     }

// //     insertAt(element,index){
// //         if(index<0||index>this.size){
// //             console.log('invalid');
// //         }else{
// //             let node=new Node(element)
// //             let curr,prev
// //             curr=this.head

// //             if(index==0){
// //                 node.next=this.head
// //                 this.head=node
// //             }else{
// //                 curr=this.head
// //                 let it =0

// //                 while(it<index){
// //                     it++
// //                     prev=curr
// //                     curr=curr.next
// //                 }
// //                 node.next=curr
// //                 prev.next=node
// //             }
// //             this.size++

// //         }
// //     }

// //     printlist(){
// //         let curr=this.head
// //         let str=''
// //         while(curr){
// //         str+=curr.element+' '
// //         curr=curr.next
// //     }
// //     console.log(str);
// // }
// // }

// // let ll=new linkedList()
// // ll.add(1)
// // ll.add(23)
// // ll.insertAt(45,1)
// // ll.insertAt(45,3)
// // ll.printlist()


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
//         if(index<0 && index>this.size){
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




// function recrseBinary(arr,t){
//     return search(arr,t,0,arr.length-1)


//     function search(arr,t,left,right){
//         if(left>right){
//             return -1
//         }

//         let middle=Math.floor((left+right)/2)
//         if(t===arr[middle]){
//             return middle
//         }
//         if(t<arr[middle]){
//             return search(arr,t,middle-1,left)
//         }else{
//             return search(arr,t,middle+1,right)
//         }
//     }
// }

// function fibo(n){
//     if(n<2){
//         return n
//     }
//     return fibo(n-1)+fibo(n-2)
// }

// function fact(n){
//     if(n<1){
//         return 1
//     }
//     return n*fact(n-1)
// }



// arr=[1,2,3,4]
// function Sum(arr){
//     if(arr.length===0){
//         return 0
//     }else{
//         return arr[0]+Sum(arr.slice(1))
//     }
// }
// console.log(Sum(arr));

// class Node{
//     constructor(data){
//         data.element=element
//         data.next=null
//         data.prev=n
//     }
// }
// class DLinkedList{
//     constructor(){
//         this.head=null

//     }
// }
// removeElement(value){
//     let curr
//     let count=0
//     if(this.head===value){
//         curr=curr.next

//     }else{
//         curr=this.head
//         while(current){
            

//         }
//     }
// }


// class Node{
//     constructor(data,next=null){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     insertFirst(data){
//     this.head=new Node(data,this.head)
//     }

//     insertLast(data){
//         const node=new Node(data)
//         let curr;

//         if(this.head=null){
//             this.head=node
//         }else{
//              curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }


//     printList(){
//         let curr=this.head
//         while(curr){
//             console.log(curr.data);
//             curr=curr.data
//         }
//     }
// }

// const ll=new LinkedList()
// ll.insertFirst(10)
// ll.insertLast(23)
// ll.printList()





class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    insertFirst(data){
        this.head=new Node(data,this.head)
    }

    insertLast(data){
        let node=new Node(data)
        let curr

        if(this.head==null){
            this.head=new Node(data,this.head)
        }else{
            curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }

    insertAt(index,data){
        if(index<0 || index>this.size){
            return
        }

        if(index===0){
            this.head=new Node(data,this.head)
            return
        }

        const node=new Node(data)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
        }
        

    getAt(index){
        let curr=this.head
        let count=0

        while(curr){
            if(count===index){
                console.log(curr.data);
            }
            count++
            curr=curr.next
        }
        return null
    }

    removeAt(index){
        if(index<0 ||index>=this.size){
            return null
        }
       let removed
        if(index===0){
            removed=this.head
            this.head=this.head.next 
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removed=prev.next
            prev.next=removed.next
        }
        this.size--
        return removed.data
       
    }

    removeValue(data){
        if(this.head===null){
            return null
        }
        if(this.head.data===data){
            this.head=this.head.next
            this.size--
            return data
        }else{
            let prev=this.head
            while(prev.next&& prev.next.data!==data){
                prev=prev.next
            }
            if(prev.next){
                let remove=prev.next
                prev.next=remove.next
                this.size--
            }
            return null
        }
    }

    findNode(data){
        if(this.head===null){
            return -1;
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.data===data){
                return i
            }
            curr=curr.next
            i++
            }
            return -1
        }

        reverse(){
            let prev=null
            let curr=this.head
            while(curr){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr=next
            }
            this.head=prev
        }

        length(){
            let count=0
            let curr=this.head

            while(curr){
                count++
                curr=curr.next
            }
            return count
        }
        
    

    getSize(){
       return this.size
    }

    clearList(){
        this.head=null
        this.size=0
    }

    sum(){
        let curr=this.head
        let sum=0
        while(curr){
            sum=sum+curr.data
            curr=curr.next
        }
        return sum

    }


    printList(){
        let curr=this.head
        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}

const ll=new LinkedList()
ll.insertFirst(4)
ll.insertLast(90)
ll.insertLast(50)
ll.insertLast(10)
ll.insertAt(1,77)
ll.removeAt(2)
ll.insertLast(22)
ll.insertLast(33)
ll.insertLast(44)
// console.log(ll.getAt(3));
// ll.removeValue(44)
ll.printList()
// console.log(ll.getSize());
console.log(ll.findNode(33),'jkhkjhkjhk');
ll.reverse()
ll.printList()
console.log(ll.sum());



//with tail reference


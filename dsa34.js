// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         const newNode=new Node(value)
//         if(!this.root){
//             this.root=newNode
//             return
//         }
//         const queue=[this.root]
//         while(queue.length){
//             const node=queue.shift()
//             if(node.left===null){
//                 node.left=newNode
//                 break;
//             }else{
//                 queue.push(node.left)
//             }
//             if(node.right===null){
//                 node.right=newNode
//                 break;
//             }else{
//                 queue.push(node.right)
//             }
//         }
//     }

//     searchValue(value){
//         return this.search(this.root,value)
//     }
//     search(node,value){
//         if(!node){
//             return null
//         }
//         if(node.value===value){
//             return node
//         }
//         let found=this.search(node.left,value)
//         if(found){
//             return found
//         }
//         found=this.search(node.right,value)
//         if(found){
//             return found
//         }
//         return null
//     }

//     PowerOfTwo(){
//         let results=[]
//         this.PowerOf(this.root,results)
//         return results
//     }
//     PowerOf(root,results){
//         if(!root){
//             return null
//         }
//         if(this.Power(root.value)){
//             results.push(root.value)
//         }
//         this.PowerOf(root.left,results)
//         this.PowerOf(root.right,results)
//     }
//     Power(n){
//         if(n<=0){
//             return false
//         }
//         if(n===1){
//             return true
//         }
//         if(n%2!==0){
//             return false
//         }
//         return this.Power(n/2)
//     }

//     print(){
//         console.log(this.root);
//     }
// }

// const bt=new BinaryTree()
// bt.insert(78)
// bt.insert(68)
// bt.insert(16)
// bt.insert(8)
// console.log(bt.searchValue(18));
// console.log(bt.PowerOfTwo());
// bt.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     insert(value){
//         const newNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//         insertNode(root,newNode){
//             if(newNode.value<this.root.value){
//                 if(!root.left){
//                     root.left=newNode
//                 }else{
//                     this.insertNode(root.left,newNode)
//                 }
//             }else{
//                 if(!root.right){
//                     root.right=newNode
//                 }else{
//                     this.insertNode(root.right,newNode)
//                 }
//             }    
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return root
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }

//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     levelOrder(){
//         let queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         return this.min(root.left)
//     }
//     print(){
//         console.log(this.root);
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         return this.max(root.right)
//     }
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return null
//         }else if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.right&&!root.left){
//                 return null
//             }else if(!root.left){
//                 return root.right
//             }else if(!root.left){
//                 return root.right
//             }
//             root.value=this.min(root.right).value
//             root.right=this.deleteNode(root.right,root.value)
//         }
//     }

//     // findLargest

//     largest(root,arr){
//         if(root){
//             this.largest(root.left,arr)
//             arr.push(root.value);
//             this.largest(root.right,arr)
//         }
//     }

//     find(){
//         let arr=[]
//         this.largest(this.root,arr)
//         if(arr.length<2){
//             return 
//         }
//         return arr[arr.length-3]
//     }

//     makeArray(){
//         let arr=[]
//         this.largest(this.root,arr)
//         if(arr.length<=0){
//             return 
//         }
//         return arr
//     }

//     findClosest(target){
//         return this.findClosestValue(this.root,target,this.root.value)
//     }

//     findClosestValue(root,target,closest){
//         if(root===null){
//             return closest
//         }
//         if(Math.abs(target-closest)>Math.abs(target-root.value)){
//             closest=root.value
//         }
//         if(target<root.value){
//             return this.findClosestValue(root.left,target,closest)
//         }else if(target>root.value){
//             return this.findClosestValue(root.right,target,closest)
//         }else{
//             return closest
//         }
//     }

//     isBst(){
//         return this.bst(this.root,-Infinity,Infinity)
//     }
//     bst(root,min,max){
//         if(root===null){
//             return true
//         }
//         if(root.value<=min||root.value>=max){
//             return false
//         }
//         return (
//             this.bst(root.left,min,root.value)&&
//             this.bst(root.right,root.value,max)
//         )
//     }

//     maxDeapth(root){
//         if(root===null){
//             return 0
//         }
//         let leftD=this.maxDeapth(root.left)
//         let rightD=this.maxDeapth(root.right)
//         return Math.max(leftD,rightD)+1
//     }

//     height(root){
//         if(root===null){
//             return -1
//         }
//         let leftH=this.height(root.left)
//         let rightH=this.height(root.right)
//         return Math.max(leftH,rightH)+1
//     }

//     isBalanced(root){
//         function check(root){
//             if(root===null){
//                 return 0
//             }
//             const leftH=check(root.left)
//             if(leftH===-1){
//                 return -1
//             }
//             const rightH=check(root.right)
//             if(rightH===-1){
//                 return -1
//             }
//             if(Math.abs(leftH-rightH)>1){
//                 return -1
//             }
//             return Math.max(leftH,rightH)+1
//         }
//         return check(root)!==-1
//     }


// }

// const bst=new BinarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(89)
// bst.insert(56)
// bst.insert(85)
// // console.log(bst.search(35));
// // bst.print()
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// // bst.levelOrder()
// // console.log(bst.max(bst.root));
// // console.log(bst.find(bst.root));
// // // console.log();
// // console.log(bst.makeArray());
// // let d=bst.makeArray()
// // for(let i=0;i<d.length;i++){
// //     // console.log(d[d.length-2])
// //     // console.log(d[3])
// //     // console.log(true);
// //     if()
// // }
// // console.log(d[d.length-2])
// //     console.log(d[3])

// class Graph{
//     constructor(){
//         this.adjucencyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             this.adjucencyList[vertex]=new Set()
//         }
//     }

//     AddEdge(vertex1,vertex2){
//         if(!this.adjucencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjucencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjucencyList(vertex1).add(vertex2)
//         this.adjucencyList(vertex2).add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjucencyList[vertex1].has(vertex2)&&
//             this.adjucencyList[vertex2].has(vertex1)
//         )
//     }

//     edgeRemove(vertex1,vertex2){
//         this.adjucencyList[vertex1].delete(vertex2)
//         this.adjucencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjucencyList(vertex)){
//             return
//         }
//         for(let adjucennt of this.adjucencyList[vertex]){
//             this.edgeRemove(adjucennt,vertex)
//         }
//         delete this.adjucencyList[vertex]
//     }

//     // BFS

// bfs(start){
//     let queue=[start]
//     let visited=new Set()
//     let result=[]
//     let currentVertex

//     visited.add(start)
//     while(queue.length){
//         currentVertex=queue.shift()
//         result.push(currentVertex)

//         this.adjucencyList[vertex].forEach(e => {
//             if(!visited.has(e)){
//                 visited.add(e)
//                 queue.push(e)
//             }
//         });
//     }
//     return result
// }


// dfs(start){
//     let stack=[start]
//     let visited=new Set()
//     let result=[]
//     let currentVertex

//     visited.add(start)
//     while(stack.length){
//         currentVertex=stack.pop()
//         result.push(currentVertex)

//         this.adjucencyList[vertex].forEach(e=>{
//             if(!visited.has(e)){
//                 visited.add(e)
//                 stack.push(e)
//             }
//         })
//     }
//     return result
// }
// }

// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeft(index){
//         return index*2+1
//     }
//     getRight(index){
//         return index*2+2
//     }
//     getSize(index){
//         return this.heap.length
//     }
//     swap(index1,index2){
//         [this.heap[vertex1],this.heap[vertex2]]=[this.heap[vertex2],this.heap[vertex1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parent=this.getParent(index)
//             if(this.heap[index]>this.heap[parent]){
//                 this.swap[index,parent]
//             }else{
//                 break
//             }
//         }
//     }
//     removeMax(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }

//     heapifyDown(index){
//         let length=this.heap.length
//         let largest=index
//         while(index>0){
//             let left=this.getLeft(index)
//             let right=this.getRight(index)

//             if(left<length&&this.heap[left]>this.heap[largest]){
//                 largest=left
//             }
//             if(right<length&&this.heap[right]>this.heap[largest]){
//                 largest=right
//             }
//             if(largest!==index){
//                 this.swap(largest,index)
//                 index=largest
//             }else{
//                 break
//             }
//         }
//     }
// }

// function heapSort(array){
//     const maxHeap=new MaxHeap()
//     for(let i=0;i<array.length;i++){
//         maxHeap.insert(array[i])
//     }
//     for(let i=array.length-1;i>=0;i--){
//         array[i]=maxHeap.removeMax()
//     }
//     return array
// }

// const maxHeap = new MaxHeap();
// maxHeap.insert(4);
// maxHeap.insert(15);
// maxHeap.insert(3);
// maxHeap.insert(8);
// maxHeap.insert(5);


// class trieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new trieNode()
//     }

//     insert(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 node.children[char]=new trieNode()
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true
//     }

//     search(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }

//     startWith(letter){
//         let node=this.root
//         for(let i=0;i<letter.length;i++){
//             let char=letter[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
// }
console.log('iuyiuy');

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    inOrder(root,res){
        if(root){
            this.inOrder(root.left,res)
            res.push(root.value)
            this.inOrder(root.right,res)
        }
    }

    second(){
        let a=[]
        this.inOrder(this.root,a)
            if(a.length<2){
                return 
            }
            return a[a.length-2]
        }
    
}

let bst=new binarySearchTree()
bst.insert(34)
bst.insert(38)
bst.insert(35)
console.log(bst.second(bst.root));
// bst.second(bst.root)

levelorder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(root.left)
        }
        if(curr.right){
            queue.push(root.right)
        }
    }
}

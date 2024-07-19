//Binary Search Tree

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
//             if(newNode.value<root.value){
//                 if(root.left===null){
//                     root.left=newNode
//                 }else{
//                     this.insertNode(root.left,newNode)
//                 }
//             }else{
//                 if(root.right===null){
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
//            if(value===root.value){
//             return true
//            }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//            }
//         }
//     }

//     //DFS Traversal

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left)
//             console.log(root.value);
//             this.InOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);

//         }
//     }

//     //BFS Traversal

//     levelOrder(){
//         const queue=[]
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

//     //to Find node with minimum value
//     min(root){
//       if(!root.left){
//         return root.value
//       }else{
//         return this.min(root.left)
//       }
//     }


//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     // to delete a node

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }


// }

// const bst=new BinarySearchTree()
// console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)


// console.log(bst.search(bst.root,20));
// console.log(bst.search(bst.root,30));
// console.log(bst.search(bst.root,5));

// bst.preOrder(bst.root)
// bst.InOrder(bst.root)
// bst.postOrder(bst.root)
//  bst.levelOrder()

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.delete(5)
// bst.levelOrder()



//Graph
//Adjucency matrix

// const matrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(matrix[2][1]);

//adjacency list

// adjList={
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjList['B']);


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
//         this.adjucencyList[vertex1].add(vertex2)
//         this.adjucencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjucencyList[vertex1].has(vertex2) &&
//             this.adjucencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjucencyList[vertex1].delete(vertex2)
//         this.adjucencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjucencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjucencyList[vertex]
//     }
// }

// const graph=new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.AddEdge('A','B')
// graph.AddEdge('B','C')
// console.log(graph);



// console.log(graph.hasEdge('A','B'));
// // graph.removeEdge('A','B')
// console.log(graph.hasEdge('A','B'));
// graph.removeVertex('A')
// console.log(graph);

//min heap

// class Minheap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return Math.floor((index-1)/2)
//     }

//     getleft(index){
//         return index*2+1
//     }

//     getright(index){
//         return index*2+2
//     }

//     getSize(){
//         return this.heap.length
//     }

//     isEmpty(){
//         return this.heap.length===0
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let currentIndex=index
//         while(currentIndex>0){
//             const parent=this.getParent(currentIndex)
//             if(this.heap[currentIndex]<this.heap[parent]){
//                 this.swap(currentIndex,parent)
//                 currentIndex=parent
//             }else{
//                 break;
//             }
//         }
//     }

//     //remove the minimum
//     removeMin(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }

//         const min=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min;
//     }

//     heapifyDown(index){
//         let currentIndex=index
//         let length=this.heap.length
//         while(true){
//             const ieftChildIndex=this.getleft(currentIndex)
//             const rightChildIndex=this.getright(currentIndex)
//             let smallest=currentIndex

//             if(ieftChildIndex<length&&this.heap[ieftChildIndex]<this.heap[smallest]){
//                 smallest=ieftChildIndex
//             }

//             if(rightChildIndex<length&&this.heap[rightChildIndex]<this.heap[smallest]){
//                 smallest=rightChildIndex
//             }

//             if(smallest!==currentIndex){
//                 this.swap(currentIndex,smallest)
//                 currentIndex=smallest
//             }else{
//                 break
//             }
//         }
//     }



// }

// const minh=new Minheap()
// console.log(minh.isEmpty());
// minh.insert(4)
// minh.insert(15)
// minh.insert(3)
// minh.insert(8)
// minh.insert(5)
// console.log(minh);
// console.log(minh.isEmpty());
// console.log(minh.getSize());
// console.log(minh.removeMin());;


//max heap

// class Maxheap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return Math.floor((index-1)/2)
//     }

//     getleft(index){
//         return index*2+1
//     }

//     getright(index){
//         return index*2+2
//     }

//     getSize(){
//         return this.heap.length
//     }

//     isEmpty(){
//         return this.heap.length===0
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let currentIndex=index
//         while(currentIndex>0){
//             const parent=this.getParent(currentIndex)
//             if(this.heap[currentIndex]>this.heap[parent]){
//                 this.swap(currentIndex,parent)
//                 currentIndex=parent
//             }else{
//                 break;
//             }
//         }
//     }

//     //remove the maximum
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
//         return max;
//     }

//     heapifyDown(index){
//         let currentIndex=index
//         let length=this.heap.length
//         while(true){
//             const ieftChildIndex=this.getleft(currentIndex)
//             const rightChildIndex=this.getright(currentIndex)
//             let largest=currentIndex

//             if(ieftChildIndex<length&&this.heap[ieftChildIndex]>this.heap[largest]){
//                 largest=ieftChildIndex
//             }

//             if(rightChildIndex<length&&this.heap[rightChildIndex]>this.heap[largest]){
//                 largest=rightChildIndex
//             }

//             if(largest!==currentIndex){
//                 this.swap(currentIndex,largest)
//                 currentIndex=largest
//             }else{
//                 break
//             }
//         }
//     }

//     }




// const maxh=new ()
// console.log(maxh.isEmpty());
// maxh.insert(4)
// maxh.insert(15)
// maxh.insert(3)
// maxh.insert(8)
// maxh.insert(5)
// console.log(maxh);
// console.log(maxh.isEmpty());
// console.log(maxh.getSize());
// console.log(maxh.removeMax());


// Heap sort

// class HeapSort{
//     constructor(arr){
//         this.heap=arr
//     }

//     getparent(index){
//         return Math.floor((index-1)/2)
//     }

//     getleft(index){
//         return 2*index+1
//     }

//     getRight(index){
//         return 2*index+2
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     heapifyDown(index,heapSize){
//         let largest=index
//         const leftChildIndex=this.getleft(index)
//         const rightChildIndex=this.getRight(index)

//         if(leftChildIndex<heapSize&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }

//         if(rightChildIndex<heapSize&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=rightChildIndex
//         }

//         if(largest!==index){
//             this.swap(index,largest)
//             this.heapifyDown(largest,heapSize)
//         }
//     }

//     buildMaxHeap(){
//         const length=this.heap.length
//         for(let i=Math.floor(length/2)-1;i>=0;i--){
//             this.heapifyDown(i,length)
//         }
//     }

//     sort(){
//         this.buildMaxHeap()
//         for(let i=this.heap.length-1;i>0;i--){
//             this.swap(0,i)
//             this.heapifyDown(0,i)
//         }
//         return this.heap
//     }
// }

// const arr=[4,15,3,8,5]
// const hepSort=new HeapSort(arr)
// console.log(hepSort.sort());





// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchtree{
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

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(value===root.value){
//                 return true
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
//         let q=[]
//         q.push(this.root)
//         while(q.length){
//             let curr=q.shift()
//             console.log(curr.value);
//         if(curr.left){
//             q.push(curr.left)
//         }
//         if(curr.right){
//             q.push(curr.right)
//         }
//     }
// }

// min(root){
//     if(!root.left){
//         return root.value
//     }else{
//         return this.min(root.left)
//     }
// }

// max(root){
//     if(!root.left){
//         return root.value
//     }else{
//         return this.min(root.right)
//     }
// }

// delete(value){
//     this.root=this.deleteNode(this.root,value)
// }
// deleteNode(root,value){
//     if(root===null){
//         return null
//     }

//     if(value<root.value){
//         root.left=this.deleteNode(root.left,value)
//     }else if(value>root.value){
//         root.right=this.deleteNode(root.right,value)
//     }else{
//         if(!root.left&&root.right){
//             return null
//         }
//         if(!root.left){
//             return root.right
//         }
//         if(root.right){
//             return root.left
//         }
//         root.value=this.min(root.right)
//         root.right=this.deleteNode(root.right,root.value)
//     }
//     return root
// }


// findClosestValue(target){
//     return this.findClosest(this.root,target,this.root.value)
// }

// findClosest(root,target,closest){
//     if(root===null){
//         return closest
//     }
//     if(Math.abs(target-closest)>Math.abs(target-root.value)){
//         closest=root.value
//     }
//     if(target<root.value){
//         return this.findClosest(root.left,target,closest)
//     }else if(target>root.value){
//         return this.findClosest(root.right,target,closest)
//     }else{
//         return closest
//     }
// }


// print(){
//     console.log(this.root);
// }

// isBST(){
//     return this.BST(this.root,-Infinity,Infinity)
// }
// BST(root,min,max){
//     if(root===null){
//         return true;
//     }
//     if(root.value<=min||root.value>=max){
//         return false;
//     }
//     return (
//         this.BST(root.left,min,root.value)&&
//         this.BST(root.right,root.value,max)
//     )
// }

// findLargest(root){
//     while(root.right!==null){
//         root=root.right
//     }
//     return root
// }

// findSecondLargest(){
//     if(this.root===null||(this.root.left===null&&this.root.right===null)){
//         return null
//     }
//     let parent=null
//     let curr=this.root
//     while(curr.right!==null){
//         parent=curr
//         curr=curr.right
//     }
//     if(curr.left!==null){
//         return this.findLargest(curr.left).value
//     }
//     return parent.value
//     }  
// }

// const bst=new BinarySearchtree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(40)
// bst.insert(60)
// console.log(bst);
// console.log(bst.search(bst.root,20));
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)
// console.log(bst.max(bst.root));
// bst.delete(3);
// console.log(bst.min(bst.root));
// console.log(bst.findClosestValue(9));
// console.log(bst.isBST());
// console.log(bst.findSecondLargest());


// Graph

// class Graph{
//     constructor(){
//         this.adjucencyList={}
//     }

//     AddVertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             this.adjucencyList[vertex]=new Set()
//         }
//     }

//     AddEdge(vertex1,vertex2){
//         if(!this.adjucencyList[vertex1]){
//             this.AddVertex(vertex1)
//         }

//         if(!this.adjucencyList[vertex2]){
//             this.AddVertex(vertex2)
//         }

//         this.adjucencyList[vertex1].add(vertex2)
//         this.adjucencyList[vertex2].add(vertex1)
//     }


//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjucencyList[vertex1].has(vertex2)&&
//             this.adjucencyList[vertex2].has(vertex2)
//         )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjucencyList[vertex1].delete(vertex2)
//         this.adjucencyList[vertex2].delete(vertex1)
//     }

//     removevertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             return 
//         }
//         for(let adjucencyList of this.adjucencyList[vertex]){
//             this.removeEdge(vertex,adjucentVertex)
//         }
//         delete this.adjucencyList[vertex]
//     }

//     bfs(start){
//         const queue=[start]
//         const result=[]
//         const visited={}
//         let currentVertex;

//         visited[start]=true
//         while(queue.length){
//             currentVertex=queue.shift()
//             result.push(currentVertex)

//             this.adjucencyList[currentVertex].forEach(n=>{
//                 if(!visited[n]){
//                     visited[n]=true
//                     queue.push(n)
//                 }
//             })
//         }
//         return result
//     }
// }


// const graph=new Graph()
// graph.AddVertex(7)
// graph.AddVertex(5)
// graph.AddVertex(4)
// graph.AddEdge(7,5)
// graph.AddEdge(5,4)
// graph.AddEdge(7,4)
// console.log(graph);
// console.log(graph.hasEdge(5,4));
// // graph.removeEdge(5,4)
// console.log(graph.hasEdge(5,4));
// // graph.removevertex(4)
// console.log(graph);
// console.log(graph.bfs(5));

// maxheap

// class Maxheap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeft(index){
//         return index*2+1
//     }

//     getright(index){
//         return index*2+2
//     }

//     getSize(){
//         return this.heap.length
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let currentIndex=index
//         while(currentIndex){
//             const parent=this.getParent(currentIndex)
//             if(this.heap[currentIndex]>this.heap[parent]){
//                 this.swap(currentIndex,parent)
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
//         let currentIndex=index
//         let length=this.heap.length
//         while(true){
//             const leftChildIndex=this.getLeft(currentIndex)
//             const rightChildIndex=this.getright(currentIndex)
//             let largest=currentIndex

//         if(leftChildIndex<length&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }

//         if(rightChildIndex<length&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=rightChildIndex
//         }

//         if(largset!==currentIndex){
//             this.swap(currentIndex,largest)
//             currentIndex=largest
//         }else{
//             break
//         }
//     }
// }
// }


// class heapSort{
//     constructor(arr){
//     this.heap=arr
// }

// getParent(index){
//     return Math.floor((index-1)/2)
// }

// getLeft(index){
//     return index*2+1
// }

// getRight(index){
//     return index*2+2
// }

// swap(index1,index2){
//     [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
// }

// heapifyDown(index,heapSize){
//     let largest=index
//     let leftChildIndex=this.getLeft(index)
//     let rightChildIndex=this.getRight(index)

//     if(leftChildIndex<heapSize&&this.heap[leftChildIndex]>this.heap[largest]){
//         largest=leftChildIndex
//     }

//     if(rightChildIndex<heapSize&&this.heap[rightChildIndex]>this.heap[largest]){
//         largest=rightChildIndex
//     }

//     if(largest!==index){
//         this.swap(largest,index)
//         this.heapifyDown(largest,index)
//         }
//     }


//     buildMaxHeap(){
//         let length=this.heap.length
//         for(let i=Math.floor(length/2)-1;i>=0;i--){
//             this.heapifyDown(i,length)
//         }
//     }


//     sort(){
//         this.buildMaxHeap()
//         for(let i=this.heap.length-1;i>0;i--){
//             this.swap(0,i)
//             this.heapifyDown(0,i)
//         }
//         return this.heap
//     }
// }

// const arr=[4,15,7,8,4,9]
// const heap=new heapSort(arr)
// console.log(heap.sort());


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function isBalanced(root){
//     function checkBalance(node){
//         if(node===null){
//             return 0;
//         }

//         const leftHeight=checkBalance(node.left)
//         if(leftHeight===-1){
//             return -1
//         }

//         const rightHeight=checkBalance(node.right)
//             if(rightHeight===-1){
//                 return -1
//         }

//         if(Math.abs(leftHeight-rightHeight)>1){
//             return -1
//         }

//         return Math.max(leftHeight,rightHeight)+1
//     }
//     return checkBalance(root)!==-1
// }

// const root=new TreeNode(1) 
// root.left=new TreeNode(2)
// root.right=new TreeNode(5)
// root.left.left=new TreeNode(8)
// root.left.right=new TreeNode(4)
// console.log(isBalanced(root));


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

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(value===root.value){
//                 return true
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
//         const q=[]
//         q.push(this.root)
//         while(q.length){
//             let curr=q.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 q.push(curr.left)
//             }
//             if(curr.right){
//                 q.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return null
//         }
//         if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }if(!root.right){
//                 return root.left
//             }else if(!root.left){
//                 return root.right
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }

//     findClosestValue(target){
//         return this.findClosest(this.root,target,this.root.value)
//     }
//     findClosest(root,target,closest){
//         if(root===null){
//             return closest
//         }
//         if(Math.abs(target-closest)>Math.abs(target-root.value)){
//             closest=root.value
//         }

//         if(target<root.value){
//             return this.findClosest(root.left,target,closest)
//         }else if(target>root.value){
//             return this.findClosest(root.right,target,closest)
//         }else{
//             return closest
//         }
//     }

//     isBST(){
//         return this.BST(this.root,-Infinity,Infinity)
//     }
//     BST(root,min,max){
//         if(root===null){
//             return true
//         }
//         if(root.value<=min||root.value>=max){
//             return false
//         }
//         return (
//             this.BST(root.left,min,root.value)&&
//             this.BST(root.right,root.value,max)
//         )
//     }

//     findLargest(root){
//         if (!root) {
//             return null;
//         }
//         while(root.right!==null){
//             root=root.right
//         }
//         return root
//     }

//     findSecondLargest(){
//         if(this.root===null||(this.root.left===null&&this.root.right===null)){
//             return null
//         }
//         let parent=null
//         let curr=this.root
//         while(curr.right!==null){
//             parent=curr
//             curr=curr.right
//         }
//         if(curr.left!==null){
//             return this.findLargest(curr.left).value
//         }
//         return parent.value
//     }



// print(){
//     console.log(this.root);
// }
// }

// const bst=new BinarySearchTree()
// bst.insert(4)
// bst.insert(7)
// bst.insert(6)
// bst.insert(9)
// bst.print()
// console.log(bst.search(bst.root,6));
// // bst.preOrder(bst.root);
// // bst.inOrder(bst.root);
// // bst.postOrder(bst.root);
// // bst.levelOrder(bst.root);
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.delete(9)
// console.log(bst.search(bst.root,6));
// bst.levelOrder(bst.root);
// console.log(bst.findClosestValue(5));
// console.log(bst.isBST());
// console.log(bst.findSecondLargest());

// let arr=[]
// for(let i=1;i<10;i++){
//    for(let j=0;j<=10;j++){
//        let res=i+=j
//        arr.push(res)
//    }
// }
// console.log(arr);


//Graph

// class Graph{
//     constructor(){
//         this.adjucencyList={}
//     }

// AddVertex(vertex){
//     if(!this.adjucencyList[vertex]){
//         this.adjucencyList[vertex]=new Set()
//     }
// }

// AddEdge(vertex1,vertex2){
//     if(!this.adjucencyList[vertex1]){
//         this.AddVertex(vertex1)
//     }
//     if(!this.adjucencyList[vertex2]){
//         this.AddVertex(vertex2)
//     }
//     this.adjucencyList[vertex1].add(vertex2)
//     this.adjucencyList[vertex2].add(vertex1)
// }

// hasEdge(vertex1,vertex2){
//     return (
//         this.adjucencyList[vertex1].has(vertex2)&&
//     this.adjucencyList[vertex2].has(vertex1))
// }

// removeEdge(vertex1,vertex2){
//     this.adjucencyList[vertex1].delete(vertex2)
//     this.adjucencyList[vertex2].delete(vertex1)
// }

// removeVertex(vertex){
//     if(!this.adjucencyList[vertex]){
//         return
//     }
//     for(let adjucencyVertex of this.adjucencyList[vertex]){
//         this.removeEdge(vertex,adjucencyVertex)
//     }
//     delete this.adjucencyList[vertex]
// }


// bfs(start){
//     let queue=[start]
//     let result=[]
//     let visited=new Set()
//     let currentVertex

//     visited.add(start)
//     while(queue.length){
//         currentVertex=queue.shift()
//         result.push(currentVertex)

//         this.adjucencyList[currentVertex].forEach(element => {
//             if(!visited.has(element)){
//                 visited.add(element)
//                 queue.push(element)
//             }
//         });
//     }
//     return result
// }

// dfsearch(start){
//     const result=[]
//     const visited=new Set()

//     const dfs=(vertex)=>{
//         if(!vertex){
//             return null
//         }
//         visited.add(vertex)
//         result.push(vertex)
//         this.adjucencyList[vertex].forEach(element=>{
//             if(!visited.has(element)){
//                 dfs(element)
//             }
//         })
//     }
//     dfs(start)
//     return result
// }


// }

// const graph=new Graph()
// graph.AddVertex(5)
// graph.AddVertex(7)
// graph.AddVertex(9)
// graph.AddVertex(3)
// graph.AddEdge(3,7)
// graph.AddEdge(3,9)
// console.log(graph);
// graph.removeEdge(3,9)
// graph.removeVertex(9)
// console.log(graph);

// console.log(graph.bfs(7));
// console.log(graph.dfsearch(7));

//maxheap

// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     getParent(index){
//         return Math.floor(index-1/2)
//     }

//     getLeft(index){
//         return index*2+1
//     }
//     getRight(index){
//         return index*2+2
//     }
//     getSize(){
//         return this.heap.length
//     }

//     swap(index1,index2){
//     [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let currentIndex=index
//         while(currentIndex) {
//             const parent=this.getParent(currentIndex)
//             if(this.heap[currentIndex]>this.heap[parent]){
//                 this.swap(currentIndex,parent)
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
//         let currentIndex=index
//         let length=this.heap.length
//         while(true){
//             const leftChildIndex=this.getLeft(currentIndex)
//             const rightChildIndex=this.getRight(currentIndex)
//             let largest=currentIndex
        

//         if(leftChildIndex>length&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }

//         if(rightChildIndex>length&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=rightChildIndex
//         }

//         if(largest!==currentIndex){
//                 this.swap(currentIndex,largest)
//                 currentIndex=largest
//             }else{
//                 break
//             }
//         }
//     }

// }


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

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(value===root.value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)              
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     print(){
//         console.log(this.root);
//     }
// }

// const bst=new BinarySearchTree()
// bst.insert(3)
// bst.insert(5)
// bst.insert(8)
// bst.insert(56)
// bst.insert(2)
// bst.print()





// bfs(start){
//     let queue=[start]
//     let currentVertex
//     let result=[]
//     let visited=new Set()

//     visited.add(start)
//     while(queue.length){
//         currentVertex=queue.shift()
//         result.push(currentVertex)

//         this.adjucenCyList[currentVertex].forEach(element => {
//             if(!visited.has(element)){
//                 visited.add(element)
//                 queue.push(element)
//             }
//         });
//     }
//     return result
// }


// dfs(start){
//     const result=[]
//     const visited=new Set()

//     const dfs=(vertex)=>{
//         if(!vertex){
//             return null
//         }
//     }
//     visited.add(vertex)
//     result.push(vertex)
//     this.adjucenCyList[vertex].forEach(element=>{
//         if(!visited.has(element)){
//             dfs(element)
//         }
//     })
//     dfs(start)
//     return result

// }






// let a=12345,b=[];

// while(a){
//     b.push(a%10);
//     a=parseInt(a/10)
// }
// console.log(b)



// bfs(start){
//     let queue=[start]
//     let result=[]
//     let visited=new Set()
//     let currentVertex

//     while(queue.length){
//         currentVertex=queue.shift()
//         visited.push(currentVertex)

//         this.adjucencyList[currentVertex].forEach(e=>{
//             if(!visited.has(e)){
//                 visited.add(e)
//                 result.push(e)
//             }
//         })
//     }
//     return result
// }

// dfsearch(start){
//     let q=[start]
//     let visited=new Set()

//     dfs(vertex){
//         if(!visited){
//             return null
//         }
//     }
//     visited.add(start)
//     result.push(vertex)
//     this.adjucencyList[vertex].forEach(e=>{
//         if(!visited.has(e)){
//             dfs(e)
//         }
//     })
//     dfsearch(start)
//     return result;
// }



// let a = [1,2,3,1,2,3,1,6,2,3,4,5,3,2,3]
// let b = [...new Set(a)]
// let c = 0
// let d = 0
// let e = 0
// for(let i = 0; i < b.length; i++){
//     for(let j = 0; j < a.length; j++){
//         if(b[i] == a[j]){
//             c++
//         }
//     }
//     if(c >= d){
//         d = c
//         e = b[i]
//     }
//     c = 0
// }
// console.log(d)
// console.log(e)



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
//         if(this.root===null){
//             this.root=newNode
//             return;
//         }
//         const queue=[this.root]
//         while(queue.length>0){
//             const node=queue.shift()
//         }
//         if(node.left===null){
//             node.left=newNode
//             return
//         }else{
//             queue.push(node.left)
//         }
//         if(node.right===null){
//             node.right=newNode
//         }else{
//             queue.push(node.right)
//         }
//     }

//     preOrder(){
//         const result=[]
//         function dfs(node){
//             if(node){
//                 return;
//             }
//             result.push(node.value)
//             dfs(node.left)
//             dfs(node.right)
//         }
//         dfs(root)
//         return result
//     }



// Inorder(){
//     const result=[]
//     function dfs(node){
//         if(!node){
//             return
//         }
//         dfs(node.left)
//         result.push(node.value)
//         dfs(node.right)
//     }
//     dfs(this.root)
//     return result
// }


// postOrder(){
//     const result=[]
//     function dfs(node){
//         if(!node){
//             return
//         }
//         dfs(node.length)
//         dfs(node.right)
//         result.push(node.value)
//     }
//     dfs(this.root)
//     return result
// }

// search(value){
//     if(!this.root){
//         return false
//     }
//     const queue=[this.root]
//     while(queue.length>0){
//         const node=queue.shift()
//         if(node.value===value){
//             return true
//         }
//         if(node.left){
//             queue.push(node.left)
//         }
//         if(node.right){
//             queue.push(node.right)
//         }
//         return false
//     }
// }


//     delete(value){
//         if(!this.root){
//             return false
//         }
//         let nodeToDelete=null
//         let parentOfDeepest=null
//         let deepestNode=null
//         const queue=[this.root]
//         while(queue.length>0){
//             const node=queue.shift();

//             if(node.value===value){
//                 nodeToDelete=node
//             }
//             if(node.left){
//                 parentOfDeepest=node
//                 queue.push(node.left)
//             }
//             if(node.right){
//                 parentOfDeepest=node
//                 queue.push(node.right)
//             }
//             if(!queue.length){
//                 deepestNode=node
//             }
//         }
//         if(!nodeToDelete){
//             return false
//         }
//         nodeToDelete.value=deepestNode.value
//         if(parentOfDeepest.left===deepest){
//             parentOfDeepest.left=null
//         }else{
//             parentOfDeepest.right=null
//         }
//         return true
//     }
// }


// const Bt=new BinaryTree()
// Bt.insert(12)
// Bt.insert(17)
// Bt.insert(15)
// Bt.insert(12)
// Bt.insert(14)
// console.log(Bt);


// const Node(){
//     constructor(value){
//         this.value=value
//         this.right=null
//         this.left=null
//     }
// }

// const TreeNode(){
//     constructor(){
//         this.root=null
//     }


//     insert(value){
//         const 
//     }
// }


// 3rd week


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
//             this.root=newNode;
//             return 
//         }
//         const queue=[this.root]
//         while(queue.length){
//             const node=queue.shift()
//             if(node.left===null){
//                 node.left=newNode;
//                 break;
//             }else{
//                 queue.push(node.left)
//             }
//             if(node.right===null){
//                 node.right=newNode;
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

//     //power Of Two

//     PowerOfTwo(){
//         const results=[]
//         this.power(this.root, results)
//         return results
//     }
//     power(root,results){
//         if(!root){
//             return null
//         }
//         if(this.powerPower(root.value)){
//             results.push(root.value)
//         }
//         this.power(root.left,results)
//         this.power(root.right,results)
//     }

//     powerPower(n){
//         if(n<=0){
//             return false
//         }
//         if(n===1){
//             return true
//         }
//         if(n%2!==0){
//             return false
//         }
//         return this.powerPower(n/2)
//     }
//     print(){
//         console.log(this.root);
//     }
// }

// const bt=new BinaryTree()
// bt.insert(4)
// bt.insert(6)
// bt.insert(8)
// bt.insert(16)
// bt.insert(5)
// bt.print()
// console.log(bt.searchValue(8));
// console.log(bt.PowerOfTwo());


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

//     isempty(){
//         return this.root===null
//     }


//     insert(value){
//         const newNode=new Node(value)
//         if(this.isempty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//         if(root.value===value){
//             return true
//         }else if(value<root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }
//     }
//     print(){
//         console.log(this.root)
//     }


//     // dfs

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left)
//             console.log(root.value);
//             this.InOrder(root.right)
//         }
//     }

//     PostOrder(root){
//         if(root){
//             this.PostOrder(root.left)
//             this.PostOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     levelOrder(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)
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
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!this.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }


//     Delete(value){
//         this.root= this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }else if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }
//             if(root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right).value
//             root.right-this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// //second Largest

//    findLargest(root){
//     while(root.right!==null){
//         root=root.right
//     }
//     return root
//    } 

//    findSecondLargest(root){
//     if(!root||(root.left===null&&root.right===null)){
//         return null
//     }
//     let parent=null
//     while(root.right){
//         parent=root
//         root=root.right
//     }
//     if(root.left){
//         return this.findLargest(root.left).value
//     }
//     return parent.value
//    }


// //    thirdLargest
//    third(root,arr){
//     if(root){
//         this.third(root.left,arr)
//         arr.push(root.value);
//         this.third(root.right,arr)
//     }
// }
// findThird(){
//     let arr=[]
//     this.third(this.root,arr)
//     if(arr.length<3){
//         return null
//     }
//     return arr[arr.length-3]
// }


// // secondLargest
// INorder(root,a){
//     if(root){
//         this.INorder(root.left,a)
//         a.push(root.value)
//         this.INorder(root.right,a)
//     }
// }
// findSecond(){
//     let a=[]
//     this.INorder(this.root,a)
//     if(a.length<2){
//         return 
//     }
//     return a[a.length-2]
// }

// //closest
// findClosestValue(target){
//     return this.findClosest(this.root,target,this.root.value)  
// }

// // findClosest(root,target,closest){
// //     if(root===null){
// //         return closest
// //     }
// //     if(Math.abs(target-closest)>Math.abs(target-root.value)){
// //         closest=root.value
// //     }
// //     if(target<root.value){
// //         return this.findClosest(root.left,target,closest)
// //     }else if(target>root.value){
// //         return this.findClosest(root.right,target,closest)
// //     }else{
// //         return closest
// //     }
// // }

// findClosest(target){
//     let closest=this.root.value
//     let curr=this.root
//     while(curr!==null){
//     if(Math.abs(target-closest)>Math.abs(target-curr.value)){
//         closest=curr.value
//     }
//     if(target<curr.value){
//         curr=curr.left
//     }else if(target>curr.value){
//         curr=curr.right
//     }else{
//         break;
//     }
// }
// return closest
// }


// bst(){
//     return this.isbst(this.root,-Infinity,Infinity)
// }

// isbst(root,min,max){
//     if(root===null){
//         return true
//     }
//     if(root.value<=min||root.value>=max){
//         return false
//     }
//     return (
//         this.isbst(root.left,min,root.value)&&
//         this.isbst(root.right,root.value,max)
//     )
// }


// maxDepth(root){
//     if(root===null){
//         return 0
//     }
//     let leftDeapth=this.maxDepth(root.left)
//     let rightDeapth=this.maxDepth(root.right)
//     return Math.max(leftDeapth,rightDeapth)+1
// }



// height(root){
//     if(root===null){
//         return -1
//     }
//     let leftHeight=this.height(root.left)
//     let rightHeight=this.height(root.right)
//     return Math.max(leftHeight,rightHeight)+1
// }

// isBalanced(root){
//     function CheckBalance(root){
//         if(root===null){
//             return 0
//         }
//         const leftHeight=CheckBalance(root.left)
//         if(leftHeight===-1){
//             return -1
//         }
//         const rightHeight=CheckBalance(root.right)
//             if(rightHeight===-1){
//                 return -1
            
//         }
//         if(Math.abs(leftHeight,rightHeight)>1){
//             return -1
//         }
//         return Math.max(leftHeight,rightHeight)+1
//     }
//     return CheckBalance(root)!==-1
// }

// }




// const bst=new BinarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)
// bst.insert(4)
// bst.insert(2)
// bst.insert(6)
// bst.print()
// console.log(bst.search(bst.root,7));
// bst.preOrder(bst.root)
// bst.InOrder(bst.root)
// bst.PostOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root));
// bst.Delete(6)
// bst.levelOrder()
// console.log(bst.findSecondLargest(bst.root));
// console.log(bst.third(bst.root));
// bst.findThird()
// console.log(bst.findThird());
// console.log(bst.findSecond());
// console.log(bst.findClosest(6));
// console.log(bst.maxDepth(bst.root));
// console.log(bst.height(bst.root));
// console.log(bst.isBalanced(bst.root));



// Graph

class Graph{
    constructor(){
        this.adjucencyList={}
    }

    AddVertex(vertex){
        if(!this.adjucencyList[vertex]){
            this.adjucencyList[vertex]=new Set()
        }
    }

    AddEdge(vertex1,vertex2){
        if(!this.adjucencyList[vertex1]){
            this.AddVertex(vertex1)
        }
        if(!this.adjucencyList[vertex2]){
            this.AddVertex(vertex2)
        }
    }

    hasEdge(vertex1,vertex2){
        return 
        (this.adjucencyList[vertex1].has(vertex2)&&
        this.adjucencyList[vertex2].has(vertex1))
    }

    EdgeRemoval(vertex1,vertex2){
        
    }
}























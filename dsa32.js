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

//     // dfs
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
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
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//         if(curr.left){
//             queue.push(curr.left)
//         }
//         if(curr.right){
//             queue.push(curr.right)
//         }
//     }
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

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(this.root===null){
//             return null
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
//             }
//             if(!root.right){
//                 return root.left
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


//     print(){
//         console.log(this.root);
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


// }

// const bst=new BinarySearchTree()
// console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)
// bst.insert(15)
// bst.print()
// // console.log(bst);
// // console.log(bst.search(bst.root,20));
// // bst.preOrder(bst.root)
// // bst.inorder(bst.root)
// // bst.postOrder(bst.root)
// // bst.levelOrder(bst.root)
// // console.log(bst.max(bst.root));
// // bst.delete(3);
// // console.log(bst.min(bst.root));
// console.log(bst.findClosestValue(9));
// console.log(bst.isBST());
// console.log(bst.findSecondLargest());


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
//         return(
//             this.adjucencyList[vertex1].has(vertex2)&&
//             this.adjucencyList[vertex2].has(vertex1)
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
//         for(let adjucentVertex of this.adjucencyList[vertex]){
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
// console.log(graph);
// console.log(graph.hasEdge(5,4));
// graph.removeEdge(5,4)
// console.log(graph.hasEdge(5,4));
// graph.removevertex(4)
// console.log(graph);
// console.log(graph.bfs(5));



// trie workouts

// class trieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
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

//     startWith(prefix){
//         let node=this.root
//         for(let i=0;i<prefix.length;i++){
//             let char=word[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }

//     delete(word){
//         this.deleteHelper(this.root,word,0)
//     }
//     deleteHelper(node,word,index){
//         if(index===word.length){
//             if(!node.isEnd){
//                 return false
//             }
//             node.isEnd=false;
//             return Object.keys(node.children).length===0
//         }

//         let char=word[index]
//         if(!node.children[char]){
//             return false
//         }

//         let shouldDelete=this.deleteHelper(node.children[char],word,index+1)
//         if(shouldDelete){
//             delete node.children[char]
//             return Object.keys(node.children.length===0)
//         }
//         return false
//     }

// }


// const trie=new Trie()
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("apricot");

// console.log(trie.search("apple"));
// console.log(trie.search("apricot")); 
// console.log(trie.search("orange"));

// trie.delete("orange");
// console.log(trie.search("orange"));

// maxheap

// class Maxheap{
//     constructor(){
//         this.heap=[]
//     }
// class HeapSort{
//     constructor(arr){
//         this.heap=arr
//     }

//     getparent(index){
//         return Math.floor((index-1)/2)
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

//     getSize(){
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
//         while(currentIndex){
//             const parent=this.getparent(currentIndex)
//             if(this.heap[currentIndex]>this.heap[parent]){
//                 this.swap(currentIndex,parent)
//                 currentIndex=parent
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
//         this.hepifyDown(0)
//         return max
//     }

    // hepifyDown(index){
    //     let currentIndex=index
    //     let length=this.heap.length
    //     while(true){
    //         const leftChildIndex=this.getLeft(currentIndex)
    //         const rightChildIndex=this.getRight(currentIndex)
    //         let largest=currentIndex

    //         if(leftChildIndex<length&&this.heap[leftChildIndex]>this.heap[largest]){
    //             largest=leftChildIndex
    //         }

    //         if(rightChildIndex<length&&this.heap[rightChildIndex]>this.heap[largest]){
    //             largest=rightChildIndex
    //         }
    //         if(largest!==currentIndex){
    //             this.swap(currentIndex,largest)
    //             currentIndex=largest
    //         }else{
    //             break
    //         }
    //     }
    // }

//     heapifyDown(index,heapSize){
//         let largest=index
//         const leftChildIndex=this.getLeft(index)
//         const rightChildIndex=this.getRight(index)

//         if(leftChildIndex<heapSize&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }
//         if(rightChildIndex<heapSize&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=requestIdleCallback
//         }
//         if(largest!==index){
//             this.swap(index,largest)
//             this.heapifyDown(largest,heapSize)
//         }
//     }

//     buildMaxHeap(){
//         const length=this.heap.length
//         for(let i=Math.floor(length/2)-1;i>=0;i--){
//             this.heapifyDown(0,length)
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

// const maxh=new Maxheap()
// maxh.insert(4)
// maxh.insert(15)
// maxh.insert(3)
// maxh.insert(8)
// maxh.insert(5)
// console.log(maxh);

// console.log(maxh.getSize());
// console.log(maxh.removeMax());
// const arr=[4,15,3,8,5]
// const hepSort=new HeapSort(arr)
// console.log(hepSort.sort());






// class HeapSort{
//     constructor(arr){
//         this.heap=arr
//     }

//     getParent(index){
//         return Mathfloor((index-1)/2)
//     }
//     getLeft(index){
//         return index*2+1
//     }
//     getright(index){
//         return index*2+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }
//     heapifyDown(index,heapSize){
//         let largest=index
//         let leftChildIndex=this.getLeft(index)
//         let righttChildIndex=this.getright(index)

//         if(leftChildIndex<heapSize&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }

//         if(righttChildIndex<heapSize&&this.heap[righttChildIndex]>this.heap[largest]){
//             largest=righttChildIndex
//         }
//         if(largest!==index){
//             this.swap(largest,index)
//             this.heapifyDown(largest,index)
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
//             if(root.value===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.right.newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return null
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
//             console.log(root.value)
//             this.inOrder(root.right);
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
//         }else{
//             if(value<root.value){
//                root.left=this.delete(root.left,value)
//             }else if(value>root.value){
//                 root.right=this.delete(root.right,value)
//             }else{
//                 if(!root.left&&!root.right){
//                     return null
//                 }
//                 if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }

//                 root.value=this.min(root.right)
//                 root.right=this.deleteNode(root.right,root.value)
//             }
//             return root
//         }
//     }

//     findClosestValue(target){
//         return this.findClosest(this.root,target,root.value)
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
//         return this.isBST(this.root,-Infinity,Infinity)
//     }
//     BST(root, min,max){
//         if(root===null){
//             return true
//         }
//         if(root.value<=min||root.value>=max){
//             return false
//         }
//         return(
//         this.BST(root.left,min,root.value)&&
//         this.BST(root.right,root.value,max)
//         )
//     }

//     findLargest(root){
//         while(root.right!==null){
//             root=root.right
//         }
//         return root
//     }

// }


// class HeapSort{
//     constructor(arr){
//         this.heap=arr
//     }

//     getParent(index){
//         return Math.floor((index-2)/2)
//     }

//     getLeft(index){
//         return index*2+1
//     }

//     getRight(index){
//         return index*2+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     heapifyDown(index,heapSize){
//         let largest=index
//         const leftChildIndex=this.getLeft(index)
//         const rightChildIndex=this.getRight(index)

//         if(leftChildIndex<heapSize&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest=leftChildIndex
//         }
//         if(rightChildIndex<heapSize&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=rightChildIndex
//         }
//         if(largest!==index){
//             this.swap(index,largest)
//             this.heapifyDown(index,largest)
//         }
//     }
//     buildMaxHeap(){
//         const length=this.heap.length
        
//     }
// }


// var isValidBST = function(root) {
//     function BST(node, min, max) {
//         if (node === null) {
//             return true;
//         }
//         if (node.val <= min || node.val >= max) {
//             return false;
//         }
//         return (
//             BST(node.left, min, node.val) &&
//             BST(node.right, node.val, max)
//         );
//     }
//     return BST(root, -Infinity, Infinity);
// };

// class trieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
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
//         return true
//     }

//     startWith(prefix){
//         let node=this.root
//         for(let i=0;i<prefix.length;i++){
//             let char=prefix[i]
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }

//     delete(word){
//         this.deleteWord(this.root,word,0)
//     }
//     deleteWord(node,word,index){
//         if(index===word.length){
//             if(!node.isEnd){
//                 return false
//             }
//             node.isEnd=false
//             return Object.keys(node.children).length===0
//         }
//         let char=word[index]
//         if(!node.children[char]){
//             return false
//         }

//         let sholudDelete=this.deleteWord(node.children[char],word,index+1)
//             if(sholudDelete){
//                 delete node.children[char]
//                 return Object.keys(node.children.length===0)
            
//         }
//         return false
//     }

// }

// const trie=new Trie()
// trie.insert('land cruiser')
// trie.insert('crysta')
// trie.insert('range rover')
// trie.insert('mclaren')
// console.log(trie.search('mclaren'));
// console.log(trie.search('mclen'));
// console.log(trie.startWith('cl'));
// trie.delete('range rover')
// console.log(trie.search('range rover'));



// class trieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new trieNode()
//     }

//     insert(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
        
//         if(!node.children[char]){
//             node.children[char]=new trieNode()
//         }
//         node=node.children[char]
//     }
//     node.isEnd=true
// }

// search(word){
//     let node=this.root
//     for(let i=0;i<word.length;i++){
//         let char=word[i]
    
//     if(!node.children[char]){
//         return false
//     }
//     node=node.children[char]
// }
// return true
// }

// Delete(word){
//     this.deleteWord(this.root,word,0)
// }
// deleteWord(node,word,index){
//     if(index===word.length){
//         if(!node.isEnd){
//             return false
//         }
//         node.isEnd=false
//         return Object.keys(node.children).length===0
//     }
//         let char=word[index]
//         if(!node.children[char]){
//             return false
//         }
            
    

//     let shoulddelete=this.deleteWord(node.children[char],word,index+1)
//     if(shoulddelete){
//         delete node.children[char]
//         return Object.keys(node.children.length===0)
//     }
//     return false
// }
// }


// let trie=new Trie()
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("apricot");

// console.log(trie.search("apple"));
// console.log(trie.search("apricot")); 
// console.log(trie.search("orange"));

// trie.Delete("orange");
// console.log(trie.search("orange"));


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinrySearchTree{
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
//             if(this.isEmpty()){
//                 this.root=newNode
//             }else{
//                 if(newNode.value<root.value){
//                     if(!root.left){
//                         root.left=newNode
//                     }else{
//                         this.insertNode(root.left,newNode)
//                     }
//                 }else{
//                     if(!root.right){
//                         root.right=newNode
//                     }else{
//                         this.insertNode(root.right,newNode)
//                     }
//                 }
//             }
//         }


//         search(root,value){
//             if(!root){
//                 return false
//             }else{
//                 if(value===root.value){
//                     return true
//                 }else if(root.value>value){
//                         return this.search(root.left,value)
//                     }else{
//                         return this.search(root.right,value)
//                     }
//             }
//         }

//         preOrder(root){
//             if(root){
//                 console.log(root.value);
//                 this.preOrder(root.left)
//                 this.preOrder(root.right)
//             }
//         }

//         inOrder(root){
//             if(root){
//                 this.inOrder(root.left)
//                 console.log(root.value);
//                 this.inOrder(root.right)
//             }
//         }

//         postOrder(root){
//             if(root){
//                 this.postOrder(root.left)
//                 this.postOrder(root.right)
//                 console.log(root.value);
//             }
//         }

//         levelOrder(){
//             let queue=[]
//             queue.push(this.root)
//             while(queue.length){
//                 let curr=queue.shift()
//                 console.log(curr.value);

//                 if(curr.left){
//                     queue.push(curr.left)
//                 }
//                 if(curr.right){
//                     queue.push(curr.right)
//                 }
//             }

//         }

//         min(root){
//             if(!root.left){
//                 return root.value
//             }else{
//                 return this.min(root.left)
//             }
//         }

//         max(root){
//             if(!root.right){
//                 return root.value
//             }else{
//                 return this.max(root.right)
//             }
//         }

//         delete(value){
//            this.root= this.deleteNode(this.root,value)
//         }
//         deleteNode(root,value){
//             if(root===null){
//                 return null
//             }
//             if(value<root.value){
//                 root.left=this.deleteNode(root.left,value)
//             }else if(value>root.value){
//                 root.right=this.deleteNode(root.right,value)
//             }else{
//                 if(!root.left&&!root.right){
//                     return null
//                 }
//                 if(!root.left){
//                     return root.right
//                 }
//                 if(!root.right){
//                     return root.left
//                 }
//                 root.value=this.min(root.right)
//                 root.right=this.deleteNode(root.right,root.value)
//             }
//             return root
//         }

//         findClosestValue(target){
//             return this.findClosest(this.root,target,this.root.value)
//         }
//         findClosest(root,target,closest){
//             if(root===null){
//                 return closest
//             }
//             if(Math.abs(target-closest)>Math.abs(target-root.value)){
//                 closest=root.value
//             }
//             if(target<root.value){
//                 return this.findClosest(root.left,target,closest)
//             }else if(target>root.value){
//                 return this.findClosest(root.right,target,closest)
//             }else{
//                 return closest
//             }
//         }

//         isBst(){
//             return this.bst(this.root,-Infinity,Infinity)
//         }
//         bst(root,min,max){
//             if(root===null){
//                 return true
//             }
//             if(root.value<=min||root.value>=max){
//                 return false
//             }
//             return (
//                 this.bst(root.left,min,root.value)&&
//                 this.bst(root.right,root.value)
//             )
//         }

//         findLargest(root){
//             while(root.right!==null){
//                 root=root.right
//             }
//             return root
//         }

//         findSecondLarget(){
//             if(this.root===null||(this.root.left&&this.root.right===null)){
//                 return null
//             }
//             let parent =null
//             let curr=this.root
//             while(curr.right!==null){
//                 parent=curr
//                 curr=curr.right
//             }
//             if(curr.left!==null){
//                 return this.findLargest(curr.left).value
//             }
//             return parent.value
//         }



        
//         print(){
//             console.log(this.root);
//         }
//     }

//     const bst=new BinrySearchTree()
//     bst.insert(19)
//     bst.insert(45)
//     bst.insert(14)
//     bst.insert(4)
//     // bst.print()
//     console.log(bst.search(bst.root,6));
//     console.log(bst.search(bst.root,14));
//     // bst.preOrder(bst.root);
//     // bst.inOrder(bst.root);
//     // bst.postOrder(bst.root);
//     // bst.levelOrder(bst.root);
//     console.log(bst.min(bst.root));
//     console.log(bst.max(bst.root));
//     bst.delete(4)
//     bst.print()
//     console.log(bst.findClosestValue(18));
//     console.log(bst.findSecondLarget());


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
//         return(
//             this.adjucencyList[vertex1].has(vertex2)&&
//             this.adjucencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjucencyList[vertex1].delete(vertex2)
//         this.adjucencyList[vertex2].delete(vertex1)
//     }

//     removVertex(vertex){
//         if(!this.adjucencyList[vertex]){
//             return null
//         }
//         for(let adjucentVertex of this.adjucencyList[vertex]){
//             this.removeEdge(vertex,adjucentVertex)
//         }
//         delete this.adjucencyList[vertex]
//     }

//     bfs(start){
//         let queue=[start]
//         let result=[]
//         let visited=new Set()
//         let currentVertex

//         visited.add(start)
//         while(queue.length){
//             currentVertex=queue.shift()
//             result.push(currentVertex)

//             this.adjucencyList[currentVertex].forEach(element=>{
//                 if(!visited.has(element)){
//                     visited.add(element)
//                     queue.push(element)
//                 }
//             })
//         }
//         return result
//     }

//     dfsearch(start){
//         const result=[]
//         const visited=new Set()
        
//         const dfs=(vertex)=>{
//             if(!vertex){
//                 return null
//             }
//             visited.add(vertex)
//             result.push(vertex)
//             this.adjucencyList[vertex].forEach(element=>{
//                 if(!visited.has(element)){
//                     dfs(element)
//                 }
//             })
//         }
//         dfs(start)
//         return result
//     }
// }

// const graph=new Graph()
// graph.AddVertex(89)
// graph.AddVertex(39)
// graph.AddVertex(79)
// graph.AddVertex(84)
// graph.AddVertex(9)
// console.log(graph.hasEdge(9,79));
// graph.AddEdge(9,79);
// graph.AddEdge(89,79);
// graph.AddEdge(39,79);
// console.log(graph.hasEdge(9,79));
// console.log(graph);

// console.log(graph.bfs(84));
// console.log(graph.dfsearch(79));


// Maxheap

// class Maxheap{
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

//     getSize(index){
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
//             const parent=this.getparent(currentIndex)
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
//             const leftChildInde=this.getLeft(currentIndex)
//             const rightChildIndex=this.getRight(currentIndex)
//             let largest=currentIndex
        
//         if(leftChildInde<length&&this.heap[leftChildInde]>this.heap[largest]){
//             largest=leftChildInde
//         }
//         if(rightChildIndex<length&&this.heap[rightChildIndex]>this.heap[largest]){
//             largest=rightChildIndex
//         }
//         if(largest!==currentIndex){
//             this.swap(currentIndex,largest){
//                 currentIndex=largest
//             }else{
//                 break
//             }
//         }
//     }
//     }



// }
















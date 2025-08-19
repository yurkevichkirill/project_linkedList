export class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        if(this.size() === 0){        
            const newNode = new Node(value);
            this.head = newNode;
        }
        else{
          const tailNode = this.tail();
          const newNode = new Node(value);
          tailNode.nextNode = newNode;
        }
    }

    prepand(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size(){
        let currentNode = this.head;
        let size = 0;
        while(currentNode != null){
            size++;
            currentNode = currentNode.nextNode;
        }
        return size;        
    }

    head(){
        return this.head;
    }

    tail(){
        if(this.size() === 0){
            return this.head;
        }
        let currentNode = this.head;
        while(currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    // tail1(){
    //     return this.at(this.size() - 1);
    // }

    at(index){
        if(index < 0 || index > this.size() - 1){
            return null
        }
        let currentNode = this.head;
        let curIndex = 0;
        while(curIndex !== index){
            currentNode = currentNode.nextNode;
            curIndex++;
        }
        return currentNode;
    }

    pop(){
        if(this.size() === 0){
            return null;
        }
        else if(this.size() === 1){
            this.head = null;
        }
        else{          
          let currentNode = this.head;
          while(currentNode.nextNode.nextNode !== null){
              currentNode = currentNode.nextNode;
          }
          currentNode.nextNode = null;
        }
    }

    contains(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            if(currentNode.value === value){
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return null;        
    }

    toString(){
        let currentNode = this.head;
        let string = '';
        while(currentNode !== null){
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += 'null';
        return string;
    }

    insertAt(value, index){
        if(index < 0 || index > this.size() - 1){
            return null
        }
        let currentNode = this.head;
        let previousNode = null;
        let curIndex = 0;
        while(curIndex !== index){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            curIndex++;
        }
        const newNode = new Node(value, currentNode);
        previousNode.nextNode = newNode;
    }

    removeAt(index){
        if(index < 0 || index > this.size() - 1){
            return null
        }
        let currentNode = this.head;
        let previousNode = null;
        let curIndex = 0;
        while(curIndex !== index){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            curIndex++;
        }
        previousNode.nextNode = currentNode.nextNode;
    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
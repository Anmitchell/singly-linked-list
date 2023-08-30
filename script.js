class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        this.size = 0
    }

    // empty list
    clear() {
        this.head = null
    }

    listSize() {
        return this.size
    }

    push(data) {
        let newNode = new Node(data)

        // if list is empty
        if (!this.head) {
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    shift(data) {
        const newNode = new Node(data)
        // if list is empty
        if (!this.head) {
            this.head = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    insertAt(data, index) {
        // if index given is negative or greater than list length
        if (index < 0 || index > this.size) {
            console.log(`Please enter a valid index`)
            return
        }

        const newNode = new Node(data)
        // if index is at 0
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        }
        else {
            let current = this.head
            let prev = null
            let iterator = 0
            while (iterator < index) {
                prev = current
                current = current.next
                iterator++
            }
            prev.next = newNode
            newNode.next = current
        }
        this.size++
    }

    pop() {
        // if list is empty
        if (!this.head) {
            return null
        }

        // if list has one node
        if (this.size === 1) {
            this.head = null
        }
        else {
            let current = this.head
            let prev = null
            while (current.next) {
                prev = current
                current = current.next
            }
            prev.next = null
        }
        this.size--
    }

    unshift() {
        // if list is empty
        if (!this.head) {
            return null
        }
        else {
            let current = this.head
            this.head = current.next
            current = null
        }
        this.size--
    }

    removeAt(index) {
        // if list is empty
        if (!this.head) {
            return null
        }
        else if (index < 0 || index > this.size) {
            return null
        }
        else if (index === 0) {
            this.head = null
        }
        else {
            let current = this.head
            let prev = null
            let after = null
            let iterator = 0
            while (iterator < index) {
                iterator++
                prev = current
                current = current.next
            }
            after = current.next
            current = null
            prev.next = after
        }
        this.size--
    }

    printList() {
        // if list is empty
        if (!this.head) return null

        let listArr = []
        let current = this.head
        while (current) {
            listArr.push(current.data)
            current = current.next
        }
        console.log(listArr)
    }
}

const list = new LinkedList()
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.shift(4)
list.shift(2)
list.insertAt(3, 1)
list.insertAt(1, 0)
list.pop()
list.pop()
list.pop()
list.unshift()
list.unshift()
list.removeAt(1)
list.removeAt(2)
list.removeAt(1)
list.removeAt(0)

list.printList()
console.log(`List size: ${list.listSize()}`)



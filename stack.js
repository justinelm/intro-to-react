console.clear()
class Stack {
  constructor(initialVal){
    this.stack = initialVal || []
  }
  push(val){
    this.stack.push(val)
  }
  pop(){
    const isEmpty = this.stack.length === 0
    if(isEmpty) {
      console.log('Stack is currently empty.')
      return
    }
    //INFO: formerly reverse, thanks Sean!
    // this.stack.reverse().pop()
    this.stack.pop()
    
  }
  check(){
    console.log(this.stack)
  }
}

// const my_stack = new Stack(['Flour', 'Brown sugar'])
const my_stack = new Stack()

my_stack.push('Milk')
my_stack.push('Eggs')
my_stack.check()            // ['Milk', 'Eggs']
my_stack.pop()
my_stack.check()            // ['Eggs']
my_stack.pop()
my_stack.check()            // []
my_stack.pop()              // 'Stack is currently empty.'
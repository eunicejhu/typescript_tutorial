/**
 * Generator: iterator-authoring, function* , yield
 * function* returns a generator instance
 * generator is subtype of iterators which includes next and throw
 * This enables value flows back to the generator
 */

 let fibonacci = {
     [Symbol.iterator]: fuction* () {
         let pre = 0, cur = 1;
         for(;;) {
             let temp = pre;
            pre = cur;
            cur +=pre;
            yield cur;
         }
     }
 }

 for(let n of fibonacci) {
     if(n > 1000) {
         break;
     }
     console.log(n)
 }

 /**
  * Iterator protocol
  * 
  * const str = "hello"
  * let iterator = str[Symbol.iterator]()
  * iterator.next() output h
  * 
  * [...str] output ['h', 'e', 'l', 'l', 'o'] spread use the same protocal
  * 
  * to redefine iterator behavior
  * 
  * str[Symbol.iterator] = function() {
  *     return {
  *         next: function() {
  *             if(this._first) {
  *                 this._first = false;
  *                 return {value: "bye", done: false}
  *             } else {
  *                 return {done: true}
  *             }
  *         },
  *         _first: true
  *     }
  * }
  * now [...str] will output "bye"
  * 
  * Built-in iterables
  * String, Array, Set, Map, WeakMap, WeakSet
  * 
  * Expressions or statements expect iterables 
  * for..of loop, spread, yield*, destructuring assignment
  * 
  * 
  * 
  */


  /**
   * Enhanced Object Literals
   * 
   * let name = "isabella"; 
   * let employee = {name}
   */

   /**
    * Class
    * 
    * static function is used to create utility function
    * cannot be called through its instance
    * 
    * private field declaration
    * #privatefield
    * 
    * super is used to call parent class functions
    * 
    * 
    * Mix-ins
    * A function with a superclass as input, and a subclass extending that superclass as output can used to implement Mix-ins.
    * 
    */

    let calculatorMixin = Base => class extends Base {
        calc() {}
    }

    let randomizeMixin = Base => class extends Base {
        randomize() {}
    }

    /** A class that uses these Mixins can be written like this  */

    class Foo {}
    class Bar extends randomizeMixin(calculatorMixin(Foo)) {}


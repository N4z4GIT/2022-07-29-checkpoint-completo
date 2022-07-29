const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  let current;
  let current2; 

  if (this.head === null) { 
    return false;
  } else {
      current = this.head; 
      while (current.next) { 
        current2 = current.next; 
        while (current2) { 
          if (current.value < current2.value) { 
            const aux = current.value;               
            current.value = current2.value;
            current2.value = aux;
          }
          current2 = current2.next;
        }
        current = current.next; 
      }
    }

};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};
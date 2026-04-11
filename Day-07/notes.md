# Abstract Class vs Interface

## Abstract Class
- An abstract class cannot be instantiated.
- An abstract class can have both abstract and non-abstract methods.
- An abstract method declared in an abstract class must be implemented in the child class that extends it.
- In an abstract class, we can both declare and implement functions.
- An abstract class is extended, not implemented.
- An abstract class can have a constructor.

## Interface
- An interface can declare properties and methods, but it cannot implement them.
- An interface is implemented by a class, and an interface can also extend another interface.
- An interface cannot have a constructor.

## Static Property
- A static property can be accessed only through the class in which it is declared by using the class name.
- A class object cannot access the static property.

## Class Rules
- A class can implement multiple interfaces, but it can extend only one class.
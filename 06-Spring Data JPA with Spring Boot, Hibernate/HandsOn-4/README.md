# Hands-on 4

# Difference between JPA, Hibernate and Spring Data JPA

## Introduction

In Java applications, we use JPA, Hibernate and Spring Data JPA to work with databases. Even though they are related, each one has a different purpose.

## Java Persistence API (JPA)

JPA stands for Java Persistence API. It is a specification that defines how Java objects should be stored and retrieved from a database. Since it is only a specification, it cannot perform database operations by itself. It requires an implementation such as Hibernate.

## Hibernate

Hibernate is an ORM (Object Relational Mapping) framework. It implements the JPA specification and helps developers connect Java applications with databases. Hibernate automatically generates SQL queries and reduces the amount of JDBC code that needs to be written.

## Spring Data JPA

Spring Data JPA is built on top of JPA. It makes database programming much easier by reducing the amount of code required. Instead of writing Session and Transaction code, we can simply use interfaces like `JpaRepository` to perform database operations.

## Comparison

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| It is a specification. | It is an implementation of JPA. | It is built on top of JPA. |
| Defines standards for persistence. | Performs ORM operations. | Simplifies database access. |
| Cannot work by itself. | Can work independently. | Uses JPA implementation like Hibernate. |

## Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.save(employee);
tx.commit();
session.close();
```

## Spring Data JPA Example

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

## Conclusion

From this hands-on, I understood that JPA is only a specification, Hibernate is one of its implementations, and Spring Data JPA makes database programming much simpler by reducing boilerplate code. Using Spring Data JPA allows developers to write cleaner and more maintainable applications.

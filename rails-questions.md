# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
SQL stands for structured query language and allows for communication between programmers and databases.

2. What the PostgreSQL query that would return all the content in a particular table?
SELECT * ALL
FROM <table>


3. What is the command to create a new Rails application with a PostgreSQL database?
rails create new <app_name>

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
rails g model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
Migration allows you to manipulate/update/alter information in a database, you might use a migration to change the name of a column.

6. What is the command to generate a migration file?
rails g migration ...

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
CamelCase - ThisIsMyExample, and snake_case - this_is_my_examples

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
The schema file shows you a breakdown of the information in the database, you should not modify the schema directly because, especially the more complex the database becomes, you could completely corrupt your data.

9. What is the Rails console?
The rails console allows you to create data, for example you could generate a model for Meals with breakfast:string, but to actually add the data breakfast:"pancakes" you would need to use the rails console.

10. What is the Rails console command to see all the content in a particular table?
<Tablename>.all
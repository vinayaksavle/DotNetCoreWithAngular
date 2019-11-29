# DotNetCoreWithAngular
ASPCoreWithAngular
Creating Table and Stored Procedures
We will be using a DB table to store all the records of employees.

Open SQL Server and use the following script to create tblEmployee table.

Create table tblEmployee(      
    EmployeeId int IDENTITY(1,1) NOT NULL,      
    Name varchar(20) NOT NULL,      
    City varchar(20) NOT NULL,      
    Department varchar(20) NOT NULL,      
    Gender varchar(6) NOT NULL      
)
Now, we will create stored procedures to add, delete, update, and get employee data.

To insert an Employee Record
Create procedure spAddEmployee         
(        
    @Name VARCHAR(20),         
    @City VARCHAR(20),        
    @Department VARCHAR(20),        
    @Gender VARCHAR(6)        
)        
as         
Begin         
    Insert into tblEmployee (Name,City,Department, Gender)         
    Values (@Name,@City,@Department, @Gender)         
End
To update an Employee Record
Create procedure spUpdateEmployee        
(        
   @EmpId INTEGER ,      
   @Name VARCHAR(20),       
   @City VARCHAR(20),      
   @Department VARCHAR(20),      
   @Gender VARCHAR(6)      
)        
as        
begin        
   Update tblEmployee         
   set Name=@Name,        
   City=@City,        
   Department=@Department,      
   Gender=@Gender        
   where EmployeeId=@EmpId        
End
For deleting an Employee Record
Create procedure spDeleteEmployee       
(        
   @EmpId int        
)        
as         
begin        
   Delete from tblEmployee where EmployeeId=@EmpId        
End
To view all Employee Records
Create procedure spGetAllEmployees      
as      
Begin      
    select *      
    from tblEmployee   
    order by EmployeeId      
End

using { app.empLeave } from '../db/empLeave';

service LeaveManagementService @(requires: 'authenticated-user') {

  entity LeaveBalance @(restrict: [
    {
      grant: ['READ'],
      to: ['Employee']
    },
  ]) as projection on empLeave.LeaveBalance;
  entity LeaveType  @(restrict: [
    {
      grant: ['READ'],
      to: ['Employee']
    }
  ]) as projection on empLeave.LeaveType;
  entity LeaveRequest  @(restrict: [
    {
      grant: ['READ', 'CREATE', 'UPDATE', 'DELETE'],
      to: ['Employee']
    },
    {
      grant: ['READ', 'CREATE', 'UPDATE', 'DELETE'],
      to: ['Manager']
    },
    {
      grant: ['READ', 'UPDATE'],
      to: ['HR']
    }
  ])as projection on empLeave.LeaveRequest;

  @readonly
  entity Manager as projection on empLeave.Manager;

  @readonly
  entity HR as projection on empLeave.HR

  @readonly
  entity Employees as projection on empLeave.Employee;

  // @cds.persistence.exists
 @cds.persistence.exists
entity LoggedInUser {
    fullName : String;
    userRole : String;
}
  


}

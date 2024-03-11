using { app.empLeave } from '../db/empLeave';

service LeaveManagementService @(requires: 'authenticated-user') {
//abhishek
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
      grant: ['READ'],
      to: ['HR']
    }
  ])as projection on empLeave.LeaveRequest;
  entity Manager as projection on empLeave.Manager;
  entity HR as projection on empLeave.HR

  @readonly
  entity Employees as projection on empLeave.Employee;
}

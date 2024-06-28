package com.DTO;

public class EmployeeDto {
    private Long EmpId;

    private String EmpName;

    private String Designation;

    public EmployeeDto() {
    }

    public EmployeeDto(Long empId, String empName, String designation) {
        EmpId = empId;
        EmpName = empName;
        Designation = designation;
    }

    public Long getEmpId() {
        return EmpId;
    }

    public void setEmpId(Long empId) {
        EmpId = empId;
    }

    public String getEmpName() {
        return EmpName;
    }

    public void setEmpName(String empName) {
        EmpName = empName;
    }

    public String getDesignation() {
        return Designation;
    }

    public void setDesignation(String designation) {
        Designation = designation;
    }

    
}

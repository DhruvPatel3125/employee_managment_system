const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile financial data and create a monthly report.",
        "taskDate": "2025-01-22",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Database",
        "taskDescription": "Ensure all client contact information is up to date.",
        "taskDate": "2025-01-24",
        "category": "Data Entry"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule Team Meeting",
        "taskDescription": "Set up a team meeting for next week to discuss project updates.",
        "taskDate": "2025-01-26",
        "category": "Management"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix UI Bugs",
        "taskDescription": "Resolve reported UI bugs on the dashboard.",
        "taskDate": "2025-01-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Authentication",
        "taskDescription": "Add user authentication to the system.",
        "taskDate": "2025-01-23",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Improve SQL queries for better performance.",
        "taskDate": "2025-01-25",
        "category": "Database"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Create an article about recent tech trends.",
        "taskDate": "2025-01-21",
        "category": "Content Writing"
      },
      {
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Social Media Strategy",
        "taskDescription": "Plan and schedule social media posts.",
        "taskDate": "2025-01-22"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Feedback Analysis",
        "taskDescription": "Review and categorize customer feedback data.",
        "taskDate": "2025-01-28",
        "category": "Research"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Kabir",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Conduct Product Demo",
        "taskDescription": "Host a live demo session for potential clients.",
        "taskDate": "2025-01-29",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Training Materials",
        "taskDescription": "Develop documents for employee training sessions.",
        "taskDate": "2025-02-01",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Compliance Policies",
        "taskDescription": "Revise internal compliance guidelines for the new year.",
        "taskDate": "2025-02-03",
        "category": "Legal"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Aryan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Conduct a stock check and report discrepancies.",
        "taskDate": "2025-01-30",
        "category": "Logistics"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for the upcoming business meeting.",
        "taskDate": "2025-02-05",
        "category": "Business"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research Market Trends",
        "taskDescription": "Analyze current industry trends for Q1 planning.",
        "taskDate": "2025-02-08",
        "category": "Market Research"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];


  export const setLocalStorage = () => {
    if (!localStorage.getItem("employees")) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  };
  
  // Get data from localStorage
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    return { employees, admin };
  };
  
  // Assign a new task to an employee and update localStorage
  export const handleAssignTask = (employeeId, newTask) => {
    let { employees } = getLocalStorage(); // Get existing employees
  
    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask], // Append new task
          taskCounts: {
            ...emp.taskCounts,
            active: (emp.taskCounts.active || 0) + 1, // Ensure count exists
            newTask: (emp.taskCounts.newTask || 0) + 1
          }
        };
      }
      return emp;
    });
  
    // Update localStorage with new task
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  
  // Ensure Employee Dashboard fetches updated tasks
  export const getEmployeeTasks = (employeeEmail) => {
    const { employees } = getLocalStorage();
    const employee = employees.find(emp => emp.email === employeeEmail);
    return employee ? employee.tasks : [];
  };
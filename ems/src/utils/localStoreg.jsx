const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile financial data and create a monthly report.",
          "taskDate": "2025-01-22",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Client Database",
          "taskDescription": "Ensure all client contact information is up to date.",
          "taskDate": "2025-01-24",
          "category": "Data Entry",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Schedule Team Meeting",
          "taskDescription": "Set up a team meeting for next week to discuss project updates.",
          "taskDate": "2025-01-26",
          "category": "Management",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix UI Bugs",
          "taskDescription": "Resolve reported UI bugs on the dashboard.",
          "taskDate": "2025-01-20",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Implement Authentication",
          "taskDescription": "Add user authentication to the system.",
          "taskDate": "2025-01-23",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Optimize Database Queries",
          "taskDescription": "Improve SQL queries for better performance.",
          "taskDate": "2025-01-25",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write Blog Post",
          "taskDescription": "Create an article about recent tech trends.",
          "taskDate": "2025-01-21",
          "category": "Content Writing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Social Media Strategy",
          "taskDescription": "Plan and schedule social media posts.",
          "taskDate": "2025-01-22",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Customer Feedback Analysis",
          "taskDescription": "Review and categorize customer feedback data.",
          "taskDate": "2025-01-28",
          "category": "Research",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Conduct Product Demo",
          "taskDescription": "Host a live demo session for potential clients.",
          "taskDate": "2025-01-29",
          "category": "Sales",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Prepare Training Materials",
          "taskDescription": "Develop documents for employee training sessions.",
          "taskDate": "2025-02-01",
          "category": "HR",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Compliance Policies",
          "taskDescription": "Revise internal compliance guidelines for the new year.",
          "taskDate": "2025-02-03",
          "category": "Legal",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Conduct a stock check and report discrepancies.",
          "taskDate": "2025-01-30",
          "category": "Logistics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the upcoming business meeting.",
          "taskDate": "2025-02-05",
          "category": "Business",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Research Market Trends",
          "taskDescription": "Analyze current industry trends for Q1 planning.",
          "taskDate": "2025-02-08",
          "category": "Market Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
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
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
  const adminData = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees: employeesData, admin: adminData };
};

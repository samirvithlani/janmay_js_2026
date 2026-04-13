var companies = [
  {
    name: "Reliance",
    employees: [
      { id: 1, name: "Mukesh Ambani", post: "CEO", salary: 1222222 },
      { id: 2, name: "Ravi Sharma", post: "Manager", salary: 800000 },
      { id: 1, name: "DhiruBhai Ambani", post: "Founder", salary: 1222222 },
    ]
  },
  {
    name: "Tata",
    employees: [
      { id: 1, name: "Ratan Tata", post: "Chairman", salary: 1500000 },
      { id: 2, name: "Amit Verma", post: "HR", salary: 600000 },
      { id: 3, name: "Pooja Singh", post: "Designer", salary: 450000 }
    ]
  },
  {
    name: "Infosys",
    employees: [
      { id: 1, name: "Narayana Murthy", post: "Founder", salary: 1300000 },
      { id: 2, name: "Suresh Kumar", post: "Tech Lead", salary: 900000 },
      { id: 3, name: "Anjali Mehta", post: "Tester", salary: 400000 }
    ]
  }
];

//releicance employees

var rilemp = companies.find((comp)=>comp.name=="Reliance").employees.map((emp)=>emp.name)
console.log(rilemp)
//find all founders
//find Tech lead of Infosys

//find all employees whoese salary > 888
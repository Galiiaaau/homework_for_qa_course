// TASK 1
const users = [{
            firstName: 'John',
            lastName: 'Caper',
            phone: '7436676737634',
            registrationDate: '12.10.2021'
      },
      {
            firstName: 'Clark',
            lastName: 'Kent',
            phone: '4346676737634',
            registrationDate: '16.09.2021'
      },
      {
            firstName: 'Tony',
            lastName: 'Stark',
            phone: '7436698337634',
            registrationDate: '11.10.2021'
      },
      {
            firstName: 'Bruce',
            lastName: 'Wayne',
            phone: '1111176737634',
            registrationDate: '09.10.2021'
      },
      {
            firstName: 'Star',
            lastName: 'Lord',
            phone: '7439374737634',
            registrationDate: '10.10.2021'
      },
      {
            firstName: 'Kate',
            lastName: 'Bishop',
            phone: '7436693647634',
            registrationDate: '11.10.2021'
      },
      {
            firstName: 'Jerry',
            lastName: 'James',
            phone: '7409048737634',
            registrationDate: '10.10.2021'
      },
      {
            firstName: 'Jeremy',
            lastName: 'Clarkson',
            phone: '743667600289334',
            registrationDate: '16.10.2020'
      },
      {
            firstName: 'Robert',
            lastName: 'Patrik',
            phone: '7436676730093',
            registrationDate: '10.10.2020'
      },
      {
            firstName: 'Jonny',
            lastName: 'Sins',
            phone: '74923982737634',
            registrationDate: '01.01.2021'
      },
      {
            firstName: 'Andrew',
            lastName: 'Garfield',
            phone: '743667988344',
            registrationDate: '09.10.2019'
      },
      {
            firstName: 'Jane',
            lastName: 'Foster',
            phone: '74368783427634',
            registrationDate: '09.10.2019'
      },
      {
            firstName: 'Rick',
            lastName: 'Smith',
            phone: '700000037634',
            registrationDate: '12.10.2021'
      },
];

function findUsers() {
      return users.filter(user => user.registrationDate === "09.10.2021" || user.registrationDate === "10.10.2021");
}

console.log(findUsers());

// TASK 2**
let setOfUsers = require('./task2.json');

function findUniqueUsers() {
      const uniquePeople = [...new Set(setOfUsers.map(JSON.stringify))].map(JSON.parse);
      return uniquePeople;
}
console.log(findUniqueUsers());

// TASK 3**
const enterprises = [{
            id: 1,
            name: "Предприятие 1",
            departments: [{

                        id: 2,
                        name: "Отдел тестирования",
                        employees_count: 10,
                  },
                  {
                        id: 3,
                        name: "Отдел маркетинга",
                        employees_count: 20,
                  },
                  {
                        id: 4,
                        name: "Администрация",
                        employees_count: 15,
                  },
            ]
      },
      {
            id: 5,
            name: "Предприятие 2",
            departments: [{
                        id: 6,
                        name: "Отдел разработки",
                        employees_count: 50,
                  },
                  {
                        id: 7,
                        name: "Отдел маркетинга",
                        employees_count: 20,
                  },
                  {
                        id: 8,
                        name: "Отдел охраны труда",
                        employees_count: 5,
                  },
            ]
      },
      {
            id: 9,
            name: "Предприятие 3",
            departments: [{
                  id: 10,
                  name: "Отдел аналитики",
                  employees_count: 0,
            }, ]
      }
]

// 1.
function showAllEnterprisesInfo() {
      let departments = '';
      for (let i = 0; i < enterprises.length; i++) {
            departments += `${enterprises[i].name} `;
            if (enterprises[i].departments) {
                  let count = 0;
                  enterprises[i].departments.map(dep => count += dep.employees_count);
                  count !== 0 ? departments += `(${count} сотрудников) \n` : departments += `(нет сотрудников) \n`;
                  for (let k = 0; k < enterprises[i].departments.length; k++) {
                        enterprises[i].departments[k].employees_count !== 0 ? departments += `- ${enterprises[i].departments[k].name} (${enterprises[i].departments[k].employees_count} сотрудников) \n` : departments += `- ${enterprises[i].departments[k].name} (нет сотрудников) \n`;
                  }
            }
      }
      return departments;
}

console.log(showAllEnterprisesInfo())

// TASK 4
const company = [{
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [{
                  id: 2,
                  name: "Отдел тестирования",
                  parent: 1,
                  users_count: 7,
                  children: [{
                              id: 2,
                              name: "Тестирование Web",
                              parent: 2,
                              users_count: 5,
                        },
                        {
                              id: 3,
                              name: "Тестирование Mobile",
                              parent: 2,
                              users_count: 0,
                        },
                  ]
            },
            {
                  id: 4,
                  name: "Отдел маркетинга",
                  parent: 1,
                  users_count: 30,
            },
            {
                  id: 5,
                  name: "Администрация",
                  parent: 1,
                  users_count: 25,
                  children: [{
                              id: 6,
                              name: "Бухгалтерия",
                              parent: 5,
                              users_count: 10,
                        },
                        {
                              id: 7,
                              name: "Менеджмент",
                              parent: 5,
                              users_count: 15,
                              children: [{
                                          id: 8,
                                          name: "Подраздел менеджмента 1",
                                          parent: 7,
                                          users_count: 5,
                                    },
                                    {
                                          id: 9,
                                          name: "Подраздел менеджмента 2",
                                          parent: 7,
                                          users_count: 10,
                                    }
                              ]
                        },
                        {
                              id: 10,
                              name: "HR",
                              parent: 5,
                              users_count: 1,
                        }
                  ]
            },
      ]
}]

function getDepartments() {
      let departments = '';
      for (let i = 0; i < company.length; i++) {
            departments += `${company[i].name} ${company[i].users_count} \n`;
            if (company[i].children) {
                  for (let k = 0; k < company[i].children.length; k++) {
                        departments += `-- ${company[i].children[k].name} (${company[i].children[k].users_count}) \n`;
                        if (company[i].children[k].children) {
                              for (let j = 0; j < company[i].children[k].children.length; j++) {
                                    departments += `----${company[i].children[k].children[j].name} (${company[i].children[k].children[j].users_count}) \n`;
                                    if (company[i].children[k].children[j].children) {
                                          for (let g = 0; g < company[i].children[k].children[j].children.length; g++) {
                                                departments += `------${company[i].children[k].children[j].children[g].name} (${company[i].children[k].children[j].children[g].users_count}) \n`;
                                          }
                                    }
                              }
                        }
                  }
            }
      }
      return departments;
}

console.log(getDepartments(company));

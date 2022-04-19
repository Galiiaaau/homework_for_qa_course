// 1-3 задания
const item_1 = 5;
console.log(item_1);

// 4-6 задания
const item_2 = 3;
console.log(item_2);

// 7-9 задания
const item_3 = item_1 + item_2;
console.log(item_3);

// 10-12 задания
const item_4 = 'Yolochka';
console.log(item_4);

// 13 задание
console.log(item_3 + item_4);

// 14 задание
console.log(item_3 * item_4);

// 15-16 задания
const item_5 = item_3;

// 17-21 задания
const item_6 = 15;
const item_6_type = typeof(item_6);
console.log(`item_6 == ${item_6} item_6_type == ${item_6_type}`);

// 22-25 задания
const item_7 = item_6.toString();
const item_7_type = typeof(item_7);
console.log(`item_7 == ${item_7} item_7_type == ${item_7_type}`);

// 26-33 задания
const age_1 = 10;
const age_2 = 18;
const age_3 = 60;
if (age_1 < age_2) {
      console.log(`You don't have access cause your age is ${age_1}. It's less than ${age_2}.`);
}
else if (age_1 >= age_2 && age_1 < age_3) {
      console.log("Welcome!");
}
else if (age_1 > age_3) {
      console.log("Keep calm and look Culture channel");
}
else {
      console.log("Technical work");
}

// 1*
const checkAge = (age) => {
      const age_2 = 18;
      const age_3 = 60;
      if (age < age_2) {
            console.log(`You don't have access cause your age is ${age}. It's less than ${age_2}.`);
      }
      else if (age >= age_2 && age < age_3) {
            console.log("Welcome!");
      }
      else if (age > age_3) {
            console.log("Keep calm and look Culture channel");
      }
      else {
            console.log("Technical work");
      }
};

checkAge(17);
checkAge(18);
checkAge(61);

// 2*
const checkAge2 = (age) => {
      const age_2 = 18;
      const age_3 = 60;
      if (typeof(age) !== 'number') {
            console.log("Введите правильное значение!");
      }
      else if (age < age_2) {
            console.log(`You don't have access cause your age is ${age}. It's less than ${age_2}.`);
      }
      else if (age >= age_2 && age < age_3) {
            console.log("Welcome!");
      }
      else if (age > age_3) {
            console.log("Keep calm and look Culture channel");
      }
      else {
            console.log("Technical work");
      }
};

checkAge2('18');

// 3*
const checkAge3 = (age) => {
      const age_1 = +age;
      const age_2 = 18;
      const age_3 = 60;
      if (age_1 < age_2) {
            console.log(`You don't have access cause your age is ${age_1}. It's less than ${age_2}.`);
      }
      else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome!");
      }
      else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel");
      }
      else {
            console.log("Technical work");
      }
};

checkAge3('60');






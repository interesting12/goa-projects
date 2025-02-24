
// შექმენით arrow function, რომელიც იღებს ერთი პარამეტრს (სახელი) 
// და აბრუნებს „გამარჯობა, [სახელი]!“. თუ პარამეტრი არ არის მოცემული, გამოიყენეთ "მაყურებელი" როგორც დეფოლტი.
const greet = (name = "მაყურებელი") => `გამარჯობა, ${name}!`;


// შექმენით arrow function, რომელიც იღებს ორი პარამეტრს (a, b) და აბრუნებს მათ ჯამს.
//  თუ პარამეტრები არ არის მოცემული, გამოიყენეთ 0 და 5 როგორც დეფოლტი მნიშვნელობები.

const sum = (a = 0, b = 5) => a + b;

// შექმენით arrow function, რომელიც იღებს სამი პარამეტრს და აბრუნებს მათ გამრავლებას.
//  თუ პარამეტრები არ არის მოცემული, გამოიყენეთ 1, 2 და 3 როგორც დეფოლტი მნიშვნელობები.

const multiply = (a = 1, b = 2, c = 3) => a * b * c;


// შექმენით arrow function, რომელიც იღებს ორ პარამეტრს (ფასს და გადასახადს) და აბრუნებს საბოლოო ფასს
//  (ფასი + გადასახადი). თუ გადასახადი არ არის მოცემული, გამოიყენეთ 5% როგორც დეფოლტი.

const totalPrice = (price, tax = 0.05) => price + (price * tax);


// შექმენით arrow function, რომელიც იღებს ტექსტს და რიცხვს და აბრუნებს ტექსტის გამეორებას მოცემული რიცხვის
//  რაოდენობის მიხედვით. თუ რიცხვი არ არის მოცემული, გამოიყენეთ 3 როგორც დეფოლტი.

const repeatText = (text, times = 3) => text.repeat(times);


// შექმენით arrow function, რომელიც იღებს ორი რიცხვს და აბრუნებს true თუ პირველი რიცხვი
//  მეტია მეორეზე. თუ არ არის პარამეტრები, გამოიყენეთ 5 და 10 როგორც დეფოლტი.

const isGreater = (a = 5, b = 10) => a > b;

// შექმენით arrow function, რომელიც იღებს ობიექტს, რომელშიც არის სახელი, ასაკი და ქალაქი.
//  თუ რომელიმე პარამეტრი არ არის მოცემული, გამოიყენეთ მაია, 25 და თბილისი როგორც დეფოლტი
//  მნიშვნელობები. ფუნქცია უნდა დააბრუნოს სტრინგი, რომელიც შეიცავს შემდეგ შინაარსს: "გამარჯობა,
//  მე ვარ [სახელი], [ასაკი] წლის და მცხოვრები ვარ [ქალაქი]-ში."

const introduce = ({ name = "მაია", age = 25, city = "თბილისი" } = {}) => 
    `გამარჯობა, მე ვარ ${name}, ${age} წლის და მცხოვრები ვარ ${city}-ში.`;

console.log(introduce({ name: "გიორგი", age: 17, city: "ბათუმი" }));


// შექმენით arrow function, რომელიც იღებს დასაწყისის რიცხვს, ბოლოს რიცხვს 
// და ნაბიჯის ზომას. ფუნქცია უნდა დააბრუნოს ყველა რიცხვი იმ ინტერვალებში, 
// მიცემული ნაბიჯის ზომით. თუ რომელიმე პარამეტრი არ არის მოცემული, გამოიყენეთ 1, 10 და 1 როგორც დეფოლტი.

const range = (start = 1, end = 10, step = 1) => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  };

// შექმენით arrow function, რომელიც იღებს ობიექტებს (ორ ან მეტს) და აბრუნებს მათ გაერთიანებულ მნიშვნელობებს
//  (რაც იმას ნიშნავს, რომ ყველა ობიექტის ყველა მახასიათებელი გაერთიანდება ერთ ობიექტში). 
// თუ არ არის ობიექტი გადმოცემული, გამოიყენეთ ცარიელი ობიექტი {} როგორც დეფოლტი.

const objects = (...objects) => Object.assign({}, ...objects);

console.log(objects({ name: "გიორგი", age: 17 }, { city: "თბილისი", country: "საქართველო" }));


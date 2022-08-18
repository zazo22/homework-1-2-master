
//1.ამოიღეთ USER ცვლადის სტუდენტის სტატუსი;

let user = {
    firstName: 'giorgi',
    lastName: 'smith',
    age: 25,
    studentStatus: 'active'
}
console.log(user.studentStatus)


//2. შექმენით მასივი და დაბეჭდეთ სათითაოდ თითოეული ელემენტი (for, while)

let countries = ['Georgia', 'France', 'Belgium', 'Germany', 'Italy', 'Spain', 'Mexico', 'Tailand', 'Japan'] 

for (let x = 0; x < countries.length; x++) {

    console.log(countries[x]);
}

for (let item of countries) {

    console.log(item);
}

let y = 0; 
while (y < countries.length) {
    console.log(countries[y]);
    y++;
}

//3.ამოიღეთ ყველა რიცხვი რომელიც მეტია 5-ზე for ციკლის გამოყენებით;


let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let x = 0; x < numbers.length; x++) {

    if (numbers[x] > 5) {
        console.log(numbers[x]);
    }
}


//4. თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello;თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

var user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus == 'active'){
    console.log('hello');
} else if(user1.name == 'levan') {
    console.log('hello giorgi');
} else if(user1.studentstatus == 'active' || user1.age < 25) {
    console.log('hello world');
} else{
    console.log('error');
}


//5. გამოიტანეთ მარტო სტრინგები

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for (let item of array){
    if (typeof item == 'string') {
        console.log(item);
    }
}



//6.მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია


let array2 = [32, 10, 'hello', null, 'hello2', 50 ]

for (let item of array2) {
    if (item % 5 == 0 && typeof item == 'number') {
        console.log(item);
    }
}



//8. 1.ამოიღეთ მხოლოდ ლუწი რიცხვები;
// 2.ამოიღეთ მხოლოდ კენტი რიცხვები;

let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

// 1

for (let y of array1) {
    if(y % 2 == 0) {
        console.log(y);
    }
}

// 2

for (let y of array1) {
    if(y % 2 == 1) {
        console.log(y);
    }
}

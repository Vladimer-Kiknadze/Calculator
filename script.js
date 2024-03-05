const display = document.getElementById("display");
let isOperationAdded = true;

function appendToDisplay(input) {
  // ვამოწმებთ არის თუ არა შეყვანილი ინფუთში მათემატიკური ოპერაცია
  if ("+-*/".includes(input)) {
    // მოწმდება თუ ოპერაცია დამატებულია რიცხვის შემდეგ
    if (isOperationAdded) {
      // თუ  არის დამატებული მათ.ოპერაცია, უფლებას ვაძლევთ დაამატოს.
      isOperationAdded = false;
    } else {
      return; // თუ უკვე დამატებულია მათ.ოპერაცია არ ვაძლევთ უფლებას კიდევ დაამატოს, (არ ვაბრუნებთ არაფერს).
    }
  } else {
    // თუ input ში შეყვანილია რიცხვი, ვაძლევთ უფლებას კვლავ გაიმეროს მათ.ოპერაციები.
    isOperationAdded = true;
  }

  display.value += input;
}

// clearDisplay ("C") - ღილაკზე დაჭერისას ასუფთავებს displa.value-ს, ანუ უცვლის მნიშვნელობას ("")-ით.
function clearDisplay() {
  display.value = "";
}

// calculate ("="), ღილაკზე დაჭერისას თუ ოპერაციული მოქმედება ვალიდურია, eval მეთოდი გამოითვლის ოპერაციას და ცვლის შედეგს display.value-ში
// ხოლო არა ვადილური მოქმედებების შემთხვევაში მაგ: "7 + =" იქნება ერრორ, ამიტომ catch - ით დავიჭერთ ამ ერორს და ცვლის შედეგს "Error" -ით.
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

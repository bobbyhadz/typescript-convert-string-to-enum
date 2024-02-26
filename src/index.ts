export {};

// EXAMPLE 1 - Convert a String to Enum

enum EmailStatus {
  Read,
  Unread,
  Draft,
}

// 👇️ String to enum
const str: keyof typeof EmailStatus = 'Read';
console.log(EmailStatus[str]); // 👉️ 0

const enumToStr = EmailStatus[EmailStatus.Read];
console.log(enumToStr); // 👉️ "Read"

// ---------------------------------------------------

// // EXAMPLE 2 - Error

// enum EmailStatus {
//   Read,
//   Unread,
//   Draft,
// }

// // ⛔️ Error: Type "Test" is not assignable to type "Read" | "Unread" | "Draft"
// const str: keyof typeof EmailStatus = 'Test';
// console.log(EmailStatus[str]); // 👉️ undefined

// ---------------------------------------------------

// // EXAMPLE 3 - Using bracket notation

// enum EmailStatus {
//   Read,
//   Unread,
//   Draft,
// }

// const str: keyof typeof EmailStatus = 'Read';
// console.log(EmailStatus[str]); // 👉️ 0

// ---------------------------------------------------

// // EXAMPLE 4 - Convert a String to Enum using a type assertion

// enum EmailStatus {
//   Read,
//   Unread,
//   Draft,
// }

// const str = 'Read';
// const strEnum = str as unknown as EmailStatus;

// console.log(EmailStatus[strEnum]); // 👉️ 0

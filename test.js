const subject = "How to learn React";
const uperCaseStr = subject.replace(/\b\w/g, (l) => l.toUpperCase());
console.log(uperCaseStr); // How To Learn React

const phoneNum = "+91612345678";
const formattedPhoneNum = phoneNum.replace(/(\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
console.log(formattedPhoneNum); // +91 61234 5678

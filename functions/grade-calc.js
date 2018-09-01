// CHALLENGE
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
const gradeCalc = function(score, totalScore) {
    const percentage = (score / totalScore) * 100
    let grade = null
    if(percentage >= 90) {
        grade = 'A'
    } else if( percentage >= 80) {
        grade = 'B'
    } else if( percentage >= 70) {
        grade = 'C'
    } else if( percentage >= 60) {
        grade = 'D'
    } else { // F 0-59
        grade = 'F'
    }
    return `You got a ${grade} (${percentage}%)!`
}

console.log(gradeCalc(15, 20))
console.log(gradeCalc(100, 100))
console.log(gradeCalc(90, 100))
console.log(gradeCalc(80, 100))
console.log(gradeCalc(70, 100))
console.log(gradeCalc(60, 100))
console.log(gradeCalc(50, 100))
console.log(gradeCalc(40, 100))
console.log(gradeCalc(30, 100))
console.log(gradeCalc(20, 100))
console.log(gradeCalc(10, 100))
console.log(gradeCalc(0, 100))

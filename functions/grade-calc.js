// CHALLENGE
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
const gradeCalc = function(score, totalScore) {

    if(typeof score !== 'number') {
        throw Error('Argument "score" must be a number')
    }
    if(typeof totalScore !== 'number') {
        throw Error('Argument "totalScore" must be a number')
    }

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

try {
    // this block runs fully without throwing any error
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
} catch(e) {
    console.log('Catch block #1 is running')
}

try {
    console.log(gradeCalc(true, 20))
} catch(e) {
    console.log('Catch block #2 is running') // this one runs
    console.log(e.message)
}

try {
    console.log(gradeCalc(15, true))
} catch(e) {
    console.log('Catch block #3 is running') // this one runs
    console.log(e.message)    
}

console.log(gradeCalc(true, 20))

const myAge = 20
const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}
// if(myAge >= 18) {
//     message = 'You can vote'
// } else {
//     message = 'You cannot vote'
// }

console.log(message)
const msg = myAge >= 21 ? showPage() : showErrorPage()
console.log(msg)

const team = ['Tyler', 'Porter']
const teamMsg = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(teamMsg)
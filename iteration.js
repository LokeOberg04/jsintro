let name = 'Loke'
let chars = [];
for (let i = 0; i < name.length; i++) {
    chars.push(name[i])
}
chars.forEach(c => {
    console.log(c)
})
let namebw = ""
for (let i = name.length - 1; i > -1; i--) {
    console.log(chars[i])
    namebw += chars[i]
}
console.log(namebw)
console.log("...")
let bw = chars.map(c => {
    return c + c
})
console.log(bw)
let q = [1, 5, 12, 22]
let sum = q.reduce((a, b) => a + b, 0)
let filtered = q.filter(n => {
    return n !== 5
})
console.log(filtered)
console.log(sum)
import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]
const usersJson = JSON.stringify(users)
writeFileSync('backend/users.json', usersJson)

const readUsers = JSON.parse(usersJson)
readFileSync('backend/users.json', readUsers)
console.log(readUsers)

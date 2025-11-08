export default function GetRandomNumber(): number {
  const randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
  return randomNumber
}

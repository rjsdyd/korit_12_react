import HeaderText from "./HeaderText";

export default function Drink({drink}) {
  return (
    <>
      <h1>Would you Like to drink some {drink}?</h1>
      <HeaderText text='추가텍스트' />
    </>
  )
}
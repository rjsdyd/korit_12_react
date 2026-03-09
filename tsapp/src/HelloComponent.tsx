import {HelloProps} from './types.ts';

export default function HelloComponent({name, age}: HelloProps) {
  return(
    <>
      <h1>
        반갑습니다. {name}님, {name}님은 올해로 {age}살입니다.
      </h1>
    </>
  )
}
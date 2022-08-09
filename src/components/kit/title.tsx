import { useEffect } from 'react';
interface NameTitle{
  nameTitle: string;
}
function Title({nameTitle}: NameTitle) {
  //xu ly side effect
  useEffect(() => {
    document.title = nameTitle;
  })
  return (
    <div>
    </div>
  )
}
export default Title

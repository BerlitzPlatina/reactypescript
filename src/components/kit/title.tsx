import { useEffect } from 'react';
interface NameTitle{
  nameTitle: string;
}
function Title({nameTitle}: NameTitle) {
  useEffect(() => {
    document.title = nameTitle;
  })
  return (
    <div>
    </div>
  )
}
export default Title

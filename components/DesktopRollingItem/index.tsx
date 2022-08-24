import React, {FC} from 'react'
import dynamic from 'next/dynamic';
const RollingItem = dynamic(() => {
    return import("react-rolling-item")
  },{ssr:false})

  interface IProps{
    target: Number
  }

const DesktopRollingItem: FC<IProps> = (props): JSX.Element => {
    const [start, setStart] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {setStart(true)},500);
        // setTimeout(() => {setStart(false)}, 2000);
      },[])
      React.useEffect(() => {
        if(start){
      
          setTimeout(() => {setStart(false)}, 2000);
        }
        // setTimeout(() => {setStart(true)},1000);
      },[start])
  return (
    <>
    <RollingItem
                on={start}
                column={1}
                backgroundImage={"/images/desktop/bg-number.png"}
                backgroundSize="465px 768px"
                introItemInfo={{ x: 0, y: 0 }}
                itemInfo={
                  [
                    { x: 0, y: 0, id: 1, probability: 0 },
                    { x: 310, y: 0, id: 2, probability: 0 },
                    { x: 155, y: 0, id: 3, probability: 0 },
                    { x: 0, y: 512, id: 4, probability: 0 },
                    { x: 310, y: 512, id: 5, probability: 0 },
                    { x: 155, y: 512, id: 6, probability: 0 },
                    { x: 0, y: 256, id: 7, probability: 0 },
                    { x: 310, y: 256, id: 8, probability: 0 },
                    { x: 155, y: 256, id: 9, probability: 0 },
                    
                    
                  ]
                }
                width={155}
                height={256}
                startDelay={1000}
                fixedIds={[props.target]}
                completionAnimation={true}
                onProgress={(isProgress, result) => { console.log(isProgress,result); }}
              />
    </>
  )
}

export default DesktopRollingItem
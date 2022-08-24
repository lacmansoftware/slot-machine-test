// import type { NextPage } from 'next'
// import RollingItem from 'react-rolling-item'
import * as React from 'react';
// import imageFile from './images/bg-fruit.png';
import Image from 'next/image';
import MobileRollingItem from '../MobileRollingItem';
import DesktopRollingItem from '../DesktopRollingItem';
  
const RollingPan = () => {
    const [mobile, setMobile] = React.useState(false);

    function handleWindowSizeChange() {
        if (window !== undefined) {
            setMobile(
                window.innerWidth < 1024 ? true:false
            )
          }
    }
    React.useEffect(() => {
        if(window !== undefined ){
            handleWindowSizeChange();
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }
        
    }, []);
    return (
      <div>
        <div style={{position:"relative"}}>
            { mobile ? 
                <div style={{display:'flex', gap: '17px',position:"absolute",top:140,left:50}}>
                    <MobileRollingItem target={3}/>
                    <MobileRollingItem target={4}/>
                    <MobileRollingItem target={7}/>
                </div>
                : <div style={{display:'flex', gap: '30px',position:"absolute",top:325,left:120}}>
                    <DesktopRollingItem target={3}/>
                    <DesktopRollingItem target={4}/>
                    <DesktopRollingItem target={7}/>
                </div>
            }
          
          <Image src={ mobile ? "/images/draw (5).png" : "/images/desktop/draw1.png"} width={mobile ? 300 : 838} height={mobile ? 262 : 731}/>
        </div>
      </div>
  
      
    )
}

export default RollingPan
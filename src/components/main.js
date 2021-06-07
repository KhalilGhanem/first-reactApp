import React from 'react';
import HornedBeasts from './HornedBeasts';
import Hdata from './data.json';

class main extends React.Component {
   
  render(){
    return (
      <main>
          {Hdata.map((item)=>{
              return(
                  <HornedBeasts
                  beastTitle={item.title}
                  beastUrl={item.image_url}
                  beastDescription={item.description}
                  />
              )
          })}
        {/* <HornedBeasts beastTitle={'UniWhal'}  beastUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} beastDescription={'A unicorn and a narwhal nuzzling their horns'}/>
        <HornedBeasts beastTitle={'Rhino Family'}  beastUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} beastDescription={'Mother (or father) rhino with two babies'}/>
        <HornedBeasts beastTitle={'UniWhal'}  beastUrl={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'} beastDescription={'Someone wearing a creepy unicorn head mask'}/>
   */}
      </main>
    );

        
  }
    
}

export default main;

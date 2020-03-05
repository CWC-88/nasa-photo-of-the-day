import React from 'react';
import './BC.css';
import Pic from '../PictureContainer/PC';
import WebPageHeader from '../WebpageHeader/WH'
import PicDetail from '../PictureDetailsContainer/PDC';

const BodyContainer = () => {
return(
<div className ='BodyC'>
<WebPageHeader />
  
   <Pic />
   <PicDetail />
</div>


);

};

export default BodyContainer;



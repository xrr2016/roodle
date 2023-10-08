import React, { type FC } from 'react';

const Button: FC<{ title: string }> = (props) => <div className='doodle'><button >{props.title}</button></div> 

export default Button;

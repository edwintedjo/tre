import React from "react";
import Helmet from "@treats/helmet";
import AsyncComponent from "@treats/component/async-component";
import style from "./mypage.css";

const pStyle = {
    fontSize: '12px',
    textAlign: 'center'
  };
  
const MyPage = () =>(
    <div className={style.divStyles}>
        <h1>My Page</h1>
        <p style={pStyle}>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
        </p>
    </div>
);


export default AsyncComponent(module, MyPage);
import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Model.module.css";
import images from "../../images";
import { ChatAppContect } from "../../Context/ChatAppContext";

const Model = ({
  openBox,
  title,
  address,
  head,
  info,
  smallInfo,
  image,
  functionName,
}) => {
  //USESTATE
  const [name, setName] = useState("");
  const [userAddress, setUserAddress] = useState(address);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>
            <div className={Style.Model_box_left_name}>
              <div className={Style.Model_box_left_name_info}>
                <Image
                  src={images.username}
                  alt="User"
                  width={30}
                  height={30}
                />
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={Style.Model_box_left_name_info}>
                <Image src={images.account} alt="user" width={30} height={30}/>
                <input
                  type="text"
                  placeholder={"Enter Metamask Address"}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>
              <div className={Style.Model_box_left_name_btn}>
                <div className={Style.submit}>
                <button onClick={() => functionName({ name, userAddress })}>
                  {""}
                  <Image src={images.send} alt="Send" width={35} height={35} />
                  {""}
                  SUBMIT
                </button>
                </div>
                <div className={Style.cancel}>
                <button onClick={() => openBox(false)}>
                  {""}
                  <Image src={images.close} alt="Cancel" width={35} height={35} />
                  {""}
                  CANCEL
                </button>
                </div>
              </div>
            </div>

        </div>
        <div className={Style.Model_box_right}>
          <Image src={image} alt="buddy" width={850} height={850} />
        </div>
      </div>
    </div>
  );
};

export default Model;

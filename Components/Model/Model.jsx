import React, { useState, useContext } from "react";
import Image from "next/image";

import Style from "./Model.module.css";
import assets from "../../assets";
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Loader } from "../../Components/index";

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
  
  const [name, setName] = useState("");
  const [userAddress, setUserAddress] = useState(address);

  const { loading } = useContext(ChatAppContect);
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>
          {loading == true ? (
            <Loader />
          ) : (
            <div className={Style.Model_box_left_name}>
              <div className={Style.Model_box_left_name_info}>
                <Image
                  src={assets.username}
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
                <Image src={assets.account} alt="user" width={30} height={30}/>
                <input
                  type="text"
                  placeholder={address || "Enter Metamask Address"}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>
              <div className={Style.Model_box_left_name_btn}>
                <div className={Style.submit}>
                <button onClick={() => functionName({ name, userAddress })}>
                  {""}
                  <Image src={assets.send} alt="Send" width={35} height={35} />
                  {""}
                  SUBMIT
                </button>
                </div>
                <div className={Style.cancel}>
                <button onClick={() => openBox(false)}>
                  {""}
                  <Image src={assets.close} alt="Cancel" width={35} height={35} />
                  {""}
                  CANCEL
                </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={Style.Model_box_right}>
          <Image src={image} alt="buddy" width={850} height={850} />
        </div>
      </div>
    </div>
  );
};

export default Model;

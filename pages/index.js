import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import { Filter, Friend } from "../Components/index";

const ChatApp = () => {
  // const {} = useContext(ChatAppContect);
  return (
    <div>
      <Filter />
      <Friend />
    </div>
  );
};

export default ChatApp;

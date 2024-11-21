import React from "react";
import Button from "../../components/global/button/button";

export const Home = () => {
  return (
    <div>
      <Button variant={"primary"} text={"Generate a New Trip"} />
      <Button variant={"secondary"} text={"Create Manually"} />
    </div>
  );
};

export default Home;

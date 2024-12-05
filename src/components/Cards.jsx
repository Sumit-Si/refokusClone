import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-xl gap-1 mx-auto flex items-center">
        <Card width="w-1/3" hover={false} para={true} start={false} />
        <Card width="w-2/3" hover={true} para={false} start={true} />
      </div>
    </div>
  );
}

export default Cards;

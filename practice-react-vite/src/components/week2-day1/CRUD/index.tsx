import React from "react";
import List from "./List";
import Create from "./Create";

const Products = () => {
  const [reload, setReload] = React.useState(0);

  const handleOnCreated = () => {
    setReload((prev) => prev + 1);
  };
  return (
    <div>
      <Create onCreated={handleOnCreated} />
      <List reload={reload} />
    </div>
  );
};

export default Products;

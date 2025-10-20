import React, { Suspense } from "react";
import Categories from "../Components/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback='loading-----'>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;

import React from "react";
import Page from "../page";
import UseMemoPage from "../UseMemo/page";
import UseCallBackPage from "../UseCallBack/page";

function page() {
  return (
    <div>
      <Page />
      <UseMemoPage />
      <UseCallBackPage />
    </div>
  );
}

export default page;

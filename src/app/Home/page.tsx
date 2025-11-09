import React from "react";
import Page from "../page";
import UseMemoPage from "../UseMemo/page";
import UseCallBackPage from "../UseCallBack/page";
import UseReducePage from "../UseReduce/page";

function page() {
  return (
    <div>
      <Page />
      <UseMemoPage />
      <UseCallBackPage />
      <UseReducePage />
    </div>
  );
}

export default page;

import { Fragment } from "react";
import MainHeader from "./main-header";

function layout(props) {
  return (
    <Fragment>
      <main>
        <MainHeader />
        {props.children}
      </main>
    </Fragment>
  );
}

export default layout;

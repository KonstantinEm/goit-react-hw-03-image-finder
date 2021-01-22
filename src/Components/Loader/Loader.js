import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Downloader from "react-loader-spinner";
const Loader = () => (
  <Downloader
    type="Rings"
    height={300}
    width={300}
    color="#3f51b5"
    style={{ marginTop: "10em" }}
  />
);

export default Loader;

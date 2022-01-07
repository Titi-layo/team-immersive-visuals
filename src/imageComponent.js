import * as React from "react";
import ArticleTemplate from "./articleTemplate.js";
import Modal from "./modal.js";

const Recourselinks = [
  <img src="./images/20211118_CAP001.webp" style={{ width: "100%" }}></img>,
  <img
    src="./images/CleanShot 2022-01-06 at 11.09.png"
    style={{ width: "100%" }}
  ></img>,
  <ArticleTemplate />,
  <iframe
    // width="100vw"
    // height="669"
    src="https://www.youtube.com/embed/YlQ_4604Xfg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay;
    clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style={{ width: "100vh", height: "100vh" }}
  ></iframe>,

  // <iframe
  //   title="Embed Player"
  //   width="100%"
  //   height="188px"
  //   src="https://embed.acast.com/8044dc9e-e5f2-44bd-9c1c-e86bd88b72a0/851e88d9-fae5-48a7-8fee-e210c43b4a19"
  //   scrolling="no"
  //   frameBorder="0"
  //   style="border:none;overflow:hidden;"
  // ></iframe>,
];

let selectedResource;

function ImageComponent(props) {
  const [open, setOpen] = React.useState(false);

  const resourceSelector = () => {
    handleClickOpen();
    selectedResource = Math.floor(Math.random() * Recourselinks.length);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        handleClose={handleClose}
        resource={Recourselinks[selectedResource]}
      />
      <img
        onClick={resourceSelector}
        src="/images/WIB_2022-forhackathon_transparent.png"
        alt="no image found"
      />

      <map name="image-map">
        <area
          title="slice-1"
          coords="967,532,711,534,494,532,524,707,628,861"
          shape="poly"
        />
        <area
          title="slice-2"
          coords="965,532,957,705,957,877,957,1002,736,965,631,866"
          shape="poly"
        />
        <area
          title="slice-3"
          coords="968,534,1047,619,1104,680,1186,754,1230,805,1287,865,1125,980,962,999"
          shape="poly"
        />
        <area
          title="slice-4"
          coords="965,536,1096,529,1216,532,1328,532,1425,536,1413,624,1396,688,1376,741,1348,783,1286,858"
          shape="poly"
        />
        <area
          title="slice-5"
          coords="965,534,1023,475,1065,429,1121,373,1174,319,1220,275,1287,210,1343,268,1384,339,1413,420,1423,529"
          shape="poly"
        />
        <area
          title="slice-6"
          coords="960,515,962,444,962,385,960,331,960,273,962,205,962,134,960,76,1055,75,1128,100,1180,125,1221,158,1289,209"
          shape="poly"
        />
        <area
          title="slice-7"
          coords="955,521,863,443,794,368,712,295,655,231,634,210,677,170,802,97,887,76,958,66"
          shape="poly"
        />
        <area
          title="slice-8"
          coords="946,524,779,531,712,527,602,526,519,526,495,521,505,443,521,385,548,326,590,273,628,220"
          shape="poly"
        />
      </map>
    </div>
  );
}

export default ImageComponent;

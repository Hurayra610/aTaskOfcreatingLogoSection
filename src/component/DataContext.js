import React, { useEffect, useState } from "react";
import { createContext } from "react";
import data from "./data";
import { useDropzone } from "react-dropzone";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [position, setPosition] = useState([]);
  const [method, setMethod] = useState([]);
  const [color, setColor] = useState([]);
  const [files, setFiles] = useState([]);
  const [size, setSize] = useState([]);
  const [numItem1, setNumItem1] = useState(0);
  const [numItem2, setNumItem2] = useState(0);
  const [numItem3, setNumItem3] = useState(0);
  const [numItem4, setNumItem4] = useState(0);
  const [numItem5, setNumItem5] = useState(0);
  const [numItem, setNumItem] = useState(0);
  const [logoColor, setLogoColor] = useState("");
  const [textArea, setTextArea] = useState("");
  const [textLine, setTextLine] = useState("");
  const [artWork, setArtWork] = useState("");
  const [appType, setAppType] = useState("");
  const [font, setFont] = useState("");

  // ..............................incrementDecrement..................................
  const decrementValue = () => {
    setNumItem(numItem > 0 ? numItem - 1 : numItem);
  };
  const incrementValue = () => {
    // setNumItem(numItem < product.quantity ? numItem + 1 : product.quantity);
    setNumItem(numItem + 1);
  };
  const decrementValue1 = () => {
    setNumItem1(numItem1 > 0 ? numItem1 - 1 : numItem1);
  };
  const incrementValue1 = () => {
    // setNumItem1(numItem1 < product.quantity ? numItem1 + 1 : product.quantity);
    setNumItem1(numItem1 + 1);
  };
  const decrementValue2 = () => {
    setNumItem2(numItem2 > 0 ? numItem2 - 1 : numItem2);
  };
  const incrementValue2 = () => {
    // setNumItem2(numItem2 < product.quantity ? numItem2 + 1 : product.quantity);
    setNumItem2(numItem2 + 1);
  };
  const decrementValue3 = () => {
    setNumItem3(numItem3 > 0 ? numItem3 - 1 : numItem3);
  };
  const incrementValue3 = () => {
    // setNumItem3(numItem3 < product.quantity ? numItem3 + 1 : product.quantity);
    setNumItem3(numItem3 + 1);
  };
  const decrementValue4 = () => {
    setNumItem4(numItem4 > 0 ? numItem4 - 1 : numItem4);
  };
  const incrementValue4 = () => {
    // setNumItem4(numItem4 < product.quantity ? numItem4 + 1 : product.quantity);
    setNumItem4(numItem4 + 1);
  };
  const decrementValue5 = () => {
    setNumItem5(numItem5 > 0 ? numItem5 - 1 : numItem5);
  };
  const incrementValue5 = () => {
    // setNumItem5(numItem5 < product.quantity ? numItem5 + 1 : product.quantity);
    setNumItem5(numItem5 + 1);
  };

  //  ........................................get Position ....................................
  const lbHandler = () => {
    setPosition([...position, "Left Breast"]);
  };
  const rbHandler = () => {
    setPosition([...position, "Right Breast"]);
  };
  const lsHandler = () => {
    setPosition([...position, "Left Sleeve"]);
  };
  const rsHandler = () => {
    setPosition([...position, "Right Sleeve"]);
  };
  const bbHandler = () => {
    setPosition([...position, "Big Back"]);
  };
  const bfHandler = () => {
    setPosition([...position, "Big Front"]);
  };

  //  .................................................get Method........................................
  const paintSelectionHandler = () => {
    setMethod([...method, "Paint"]);
  };
  const embroSelectionHandler = () => {
    // setMethod([...method, "Embroidery (Stitching)"]);
    const showErr = document.getElementById("mthodErr");
    showErr.style.display = "block";
  };

  // ................................................get color............................................
  const blackBtnHandler = () => {
    const element = document.getElementById("blackBtn");
    element.style.display = "block";
    setColor([...color, "BLACK"]);
  };
  const redBtnHandler = () => {
    const element = document.getElementById("redBtn");
    element.style.display = "block";
    setColor([...color, "RED"]);
  };
  const greenBtnHandler = () => {
    const element = document.getElementById("greenBtn");
    element.style.display = "block";
    setColor([...color, "GREEN"]);
  };
  const blueBtnHandler = () => {
    const element = document.getElementById("blueBtn");
    element.style.display = "block";
    setColor([...color, "BLUE"]);
  };
  const orangeBtnHandler = () => {
    const element = document.getElementById("orangeBtn");
    element.style.display = "block";
    setColor([...color, "ORANGE"]);
  };
  const yellowBtnHandler = () => {
    const element = document.getElementById("yellowBtn");
    element.style.display = "block";
    setColor([...color, "YELLOW"]);
  };

  // .........................................getSize................................
  const getSizeXs = () => {
    const xsSize = document.getElementById("xs").innerHTML;
    setSize([...size, xsSize]);
    // setNumItem(product.quantity > 0 && 1);
  };
  const getSizeS = () => {
    const sSize = document.getElementById("s").innerHTML;
    setSize([...size, sSize]);
    // setNumItem1(product.quantity > 0 && 1);
  };
  const getSizeM = () => {
    const mSize = document.getElementById("m").innerHTML;
    setSize([...size, mSize]);
    // setNumItem2(product.quantity > 0 && 1);
  };
  const getSizeL = () => {
    const lSize = document.getElementById("l").innerHTML;
    setSize([...size, lSize]);
    // setNumItem3(product.quantity > 0 && 1);
  };
  const getSizeXl = () => {
    const xlSize = document.getElementById("xl").innerHTML;
    setSize([...size, xlSize]);
    // setNumItem4(product.quantity > 0 && 1);
  };
  const getSizeXxl = () => {
    const xxlSize = document.getElementById("xxl").innerHTML;
    setSize([...size, xxlSize]);
    // setNumItem5(product.quantity > 0 && 1);
  };

  const getArtWork = () => {
    setArtWork("Custom: ");
  };
  const setApplicationTypeLogo = () => {
    setAppType("Logo");
  };
  const setApplicationTypeText = () => {
    setAppType("Text");
  };
  const getTextArea = (e) => {
    setTextArea(e.target.value);
  };
  const getTextLine = (e) => {
    setTextLine(e.target.value);
  };
  const getFont = (e) => {
    setFont(e.target.value);
  };
  const getLogoColor = (e) => {
    setLogoColor(e.target.value);
  };

  // ...............................................drag&Drop......................................
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img className="thumbs" src={file.preview} alt="preview" />
      </div>
    </div>
  ));
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  // .............................................Return Option..........................................
  return (
    <DataContext.Provider
      value={{
        position,
        lbHandler,
        rbHandler,
        lsHandler,
        rsHandler,
        bbHandler,
        bfHandler,
        paintSelectionHandler,
        embroSelectionHandler,
        method,
        blackBtnHandler,
        redBtnHandler,
        greenBtnHandler,
        blueBtnHandler,
        orangeBtnHandler,
        yellowBtnHandler,
        color,
        getSizeXs,
        getSizeS,
        getSizeM,
        getSizeL,
        getSizeXl,
        getSizeXxl,
        size,
        data,
        decrementValue,
        decrementValue1,
        decrementValue2,
        decrementValue3,
        decrementValue4,
        decrementValue5,
        incrementValue,
        incrementValue1,
        incrementValue2,
        incrementValue3,
        incrementValue4,
        incrementValue5,
        numItem,
        numItem1,
        numItem2,
        numItem3,
        numItem4,
        numItem5,
        setNumItem,
        artWork,
        getArtWork,
        appType,
        setApplicationTypeLogo,
        setApplicationTypeText,
        getRootProps,
        getInputProps,
        thumbs,
        getTextArea,
        textArea,
        textLine,
        getTextLine,
        font,
        getFont,
        logoColor,
        getLogoColor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

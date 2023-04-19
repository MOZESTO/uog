import React from "react";
import { GEditor, GBlock } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "grapesjs-react";

class SimpleBlock extends GBlock {
  content = `<div class="custom-block">  <div></div</div>`;
  style = `.custom-block {background-color: #eee; padding: 10px;}`;


  constructor() {
    super("simple-block", "Simple Block");
    console.log('im here');
  }
}


function CustomBlock() {

  
  
  return (
    <div className="container-fluid">
      <div>
        <GEditor id="geditor" newsletter blocks={[new SimpleBlock()]} />
      </div>
    </div>
  );
}

export default CustomBlock;

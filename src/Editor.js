import React, { Component } from "react";
import { GEditor, PanelManager, BlockManager } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  CustomBlock from './Block' 
class GEditorExample extends Component {
  render() {
    const myCustomBlock = {
      id: "my-custom-block",
      label: "My Custom Block",
      content: "<div>My custom block content</div>",
    };

    return (
       <CustomBlock></CustomBlock>
    );
  }
}

export default GEditorExample;

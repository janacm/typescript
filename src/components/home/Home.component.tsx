import React, { useState } from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";
import "./styles.css";

const Home = () => {
  const [files, setFiles] = useState([]);

  const handleAdd = (newFiles: any) => {
    setFiles([...files]);
  };

  const handleDelete = (deleted: any) => {
    setFiles(files.filter((f) => f !== deleted));
  };

  return (
    <DropzoneAreaBase
      fileObjects={files}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  );
}
export default Home;
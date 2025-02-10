import React, { useContext, useEffect } from "react";
import { BGChange } from "../hooks/ContextApi";
import { Bounce, toast } from "react-toastify";

function BgChange() {
  const { setUploadedFiles } = useContext(BGChange);

  useEffect(() => {
    const savedImage = JSON.parse(localStorage.getItem("uploadFile")) || [];
    setUploadedFiles(savedImage);
  }, []);

  const handleClickBtn = (e) => {
    const file = e.target.files[0];
    const fileSize = (file.size / 1024 / 1024).toFixed(4);
    console.log(fileSize);

    if (file && fileSize < 2) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target.result;

        setUploadedFiles(() => {
          const updatedFiles = [imgUrl];
          localStorage.clear();
          localStorage.setItem("uploadFile", JSON.stringify(updatedFiles));
          return updatedFiles;
        });
        toast.success("Background Changed Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      };
      reader.readAsDataURL(file);
    } else {
      toast("Something went wrong");
    }
  };

  return (
    <input
      type="file"
      name="file"
      accept="image/*"
      onChange={handleClickBtn}
      className="file-input file-input-bordered file-input-xs w-full max-w-xs"
    />
  );
}

export default BgChange;

import { createContext, useState } from "react";

export const BGChange = createContext();

export const BGChangeProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BGChange.Provider
      value={{ uploadedFiles, setUploadedFiles, isLogin, setIsLogin }}
    >
      {children}
    </BGChange.Provider>
  );
};

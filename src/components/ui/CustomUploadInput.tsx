import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Label,
  Upload,
  Text,
} from "./CustomUploadInput.styled";

const CustomUploadInput: React.FC<{
  id: string;
  objKey: string;
  getValue(key: string, value: File | null): void;
}> = ({ id, getValue, objKey }) => {
  const [imageName, setImageName] = useState<string | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    if (imageWidth && imageHeight) {
      if (imageWidth < 70 && imageHeight < 70) {
        setImageName(null);
        getValue(objKey, null);
      }
    }
  }, [imageWidth, imageHeight]);

  const changeHandler = (event: React.ChangeEvent) => {
    const current = event.target as HTMLInputElement;
    const files = current.files as FileList | null;
    if (!files || files.length === 0) return;

    const file = files[0] as File;

    const isSizeMoreFiveMb = file.size * 1e-6 > 5;
    if (isSizeMoreFiveMb) return;

    const isTypeJpg = file.type === "image/jpg";
    const isTypeJpeg = file.type === "image/jpeg";
    if (!(isTypeJpg || isTypeJpeg)) return;

    getInfo(file).then((dimensions) => {
      if (dimensions) {
        setImageWidth(dimensions.width);
        setImageHeight(dimensions.height);
      }
    });

    setImageName(file.name);
    getValue(objKey, file);
  };

  const getInfo = async (file: File) => {
    try {
      const dimensions = await imageDimensions(file);
      return dimensions as { width: number; height: number };
    } catch (error) {
      console.error(error);
    }
  };

  const imageDimensions = (file: File) =>
    new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const { naturalWidth: width, naturalHeight: height } = img;
        resolve({ width, height });
      };

      img.onerror = () => {
        reject("There was some problem with the image.");
      };

      img.src = URL.createObjectURL(file);
    });

  return (
    <Container>
      <Upload
        type="file"
        id={id}
        onChange={changeHandler}
        accept=".jpg, .jpeg"
      />
      <Label htmlFor={id}>
        <Button>Upload</Button>
        <Text>{imageName ? imageName : "Upload your photo"}</Text>
      </Label>
    </Container>
  );
};

export default CustomUploadInput;

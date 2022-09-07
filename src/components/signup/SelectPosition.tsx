import React from "react";
import { positionsAPI } from "../../services/PositionsService";
import { IPosition } from "../../models/IPositions";
import { Container, Title } from "./SelectPosition.styled";
import CustomRadioInput from "../ui/CustomRadioInput";

const SelectPosition: React.FC<{
  getValue(key: string, value: string): void;
}> = ({ getValue }) => {
  const { data } = positionsAPI.useFetchAllPositionsQuery(null);

  return (
    <Container>
      <Title>Select your position</Title>
      {data?.success &&
        data.positions.map((position: IPosition) => (
          <CustomRadioInput
            key={position.id}
            id={`${position.id}`}
            value={position.name}
            name="positions"
            getValue={(value) => getValue("position_id", value)}
          />
        ))}
    </Container>
  );
};

export default SelectPosition;

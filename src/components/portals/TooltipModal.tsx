import React from "react";
import { createPortal } from "react-dom";
import { Tooltip } from "./Tooltip.styled";
import { ITooltip } from "../../models/ITooltip";

const Portal = ({ children }: any) => {
  const portalElement = document.getElementById("tooltip");
  return createPortal(children, portalElement || document.body);
};

const TooltipModal: React.FC<{ tooltip: ITooltip }> = ({ tooltip }) => {
  return (
    <Portal>
      <Tooltip pageX={tooltip.pageX} pageY={tooltip.pageY}>
        {tooltip.text}
      </Tooltip>
    </Portal>
  );
};

export default TooltipModal;

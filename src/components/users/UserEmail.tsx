import React, { useState } from "react";
import { ITooltip } from "../../models/ITooltip";
import TooltipModal from "../portals/TooltipModal";

const UserEmail: React.FC<{ email: string }> = ({ email }) => {
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<ITooltip>({
    pageX: 0,
    pageY: 0,
    text: "",
  });

  const showTooltip = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const currentElement = event.target as HTMLElement;
    const text = currentElement.textContent || "";

    setTimeout(() => {
      setTooltip({ pageX: event.clientX, pageY: event.clientY, text });
      setIsShowTooltip(true);
    }, 200);
  };

  const closeTooltip = () => {
    setTimeout(() => setIsShowTooltip(false), 200);
  };

  return (
    <>
      <a
        onMouseOver={showTooltip}
        onMouseOut={closeTooltip}
        href={`mailto:${email}`}
      >
        {email}
      </a>
      {isShowTooltip && <TooltipModal tooltip={tooltip} />}
    </>
  );
};

export default UserEmail;

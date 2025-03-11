import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ExpandableContainer(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={
        props.isLastContainer && !isExpanded ? "enableBottomBorder" : ""
      }
    >
      <button onClick={handleClick}>
        <h1>{props.title ?? "Click me!"}</h1>
        <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp} />
      </button>
      {isExpanded && (
        <div className={props.isLastContainer ? "enableBottomBorder" : ""}>
          {props.content}
        </div>
      )}
    </div>
  );
}

export default ExpandableContainer;

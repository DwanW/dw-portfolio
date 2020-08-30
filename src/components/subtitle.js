import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">developer</span>:{" "}
        <span className="text-blue-600">=</span> {'{'}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Design</span>:{" "}
        <span className="text-teal-400">Desirability</span>{" "}+{" "}
        <span className="text-teal-400">Viability</span>{" "}+{" "}
        <span className="text-teal-400">Feasibility</span>,
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Development</span>:{" "}
        <span className="text-teal-400">Simplicity</span>{" "}+{" "}
        <span className="text-teal-400">Breaking Complexity</span>,
      </div>
      <div>{'}'};</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
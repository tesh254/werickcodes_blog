import React from "react";
import Stacks from "../../utils/stacks";
import Link from "next/link";
import "../../static/styles/stack.css";

const stacks = [];

for (let value in Stacks) {
  if (Stacks.hasOwnProperty(value)) {
    stacks.push({stack_logo:Stacks[`${value}`], stack_label: `${value}`});
  }
}

const StackPosts = () => (
  <div className="stacks-holder">
    <div className="stack-logo-holder">
      {stacks.map(stack => (
        <Link href={`/stack/${stack.stack_label}`}>
          <a>
            <img src={stack.stack_logo} alt="" className="stack-logo" />
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default StackPosts;

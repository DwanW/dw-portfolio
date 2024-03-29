import Tooltip from '@mui/material/Tooltip';
import React from "react"
import social from "../data/social"
import { container } from "./social.module.css"

const Social = () => (
  <div className={container}>
    {social.map((socialObj, idx) => {
      const Icon = socialObj.icon

      return (
        <Tooltip
          key={socialObj.title}
          title={socialObj.title}
          placement="bottom"
        >
          <a
            href={socialObj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialObj.class} animated fadeIn`}
            style={{ animationDelay: `${idx * 0.25 + 0.25}s` }}
          >
            <Icon color="#FFF" size="0.9em" />
            <span className="sr-only">{socialObj.title}</span>
          </a>
        </Tooltip>
      )
    })}
  </div>
)

export default Social

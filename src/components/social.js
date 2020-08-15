import Tooltip from "@material-ui/core/Tooltip";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import social from "../data/social";
import styles from "./social.module.css";

const Social = () => (
    <div className={styles.container}>
        {social.map((socialObj, idx) => {
            const Icon = socialObj.icon;

            return (
                <Tooltip key={socialObj.title} title={socialObj.title} placement="bottom">
                        <OutboundLink
                            href={socialObj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${socialObj.class} animated fadeIn`}
                            style={{ animationDelay: `${idx * 0.25 + 0.25}s` }}
                        >
                            <Icon color="#FFF" size="0.9em" />
                            <span className="sr-only">{socialObj.title}</span>
                        </OutboundLink>
                </Tooltip>
            );
        })}
    </div>
);

export default Social;
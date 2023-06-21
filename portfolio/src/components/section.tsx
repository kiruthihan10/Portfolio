import { Typography } from "@mui/material"
import React from "react"

export enum SectionLevels {
    primary = 0,
    secondary = 1
}

interface Props {
    heading?: string
    subHeading?: string
    content: React.ReactNode
    level?: SectionLevels
}

const Section = ({ heading, subHeading, content, level = SectionLevels.primary }: Props): JSX.Element => {
    return (
        <div style={{ paddingBottom: 5, paddingTop: 5 }}>
            <Typography variant={`h${4 + level}`} color="primary" gutterBottom>
                {heading}
            </Typography>
            <Typography variant={`h${5 + level}`} color="secondary" gutterBottom>
                {subHeading}
            </Typography>
            <Typography color="inherit" gutterBottom>
                {content}
            </Typography>
        </div>
    )
}

export default Section
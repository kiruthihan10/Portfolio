import { Typography } from "@mui/material"
import React from "react"

interface Props {
    heading?: string
    subHeading?: string
    content: React.ReactNode
}

const Section = ({ heading, subHeading, content }: Props): JSX.Element => {
    return (
        <div style={{ paddingBottom: 5 }}>
            <Typography variant="h4" color="inherit" gutterBottom>
                {heading}
            </Typography>
            <Typography variant="h5" color="inherit" gutterBottom>
                {subHeading}
            </Typography>
            <Typography color="inherit" gutterBottom>
                {content}
            </Typography>
        </div>
    )
}

export default Section
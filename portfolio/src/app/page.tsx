'use client'
import {Box, Grid, Paper, Typography} from '@mui/material'
import Hero from './components/hero'

export default function Home() {
    return (
        <main>
            <Hero url='https://source.unsplash.com/random?wallpapers'>
                <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                    Hi, I'm
                </Typography>
                <Typography variant="h1" color="inherit" paragraph>
                    Kiruthihan Nagarajan
                </Typography>
                <Typography variant="h3" color="inherit" paragraph>
                    Associate Software Engineer
                </Typography>
            </Hero>
        </main>
    )
}

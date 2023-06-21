'use client'
import { Box, CardContent, CardMedia, Grid, Slider, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import Hero from '../components/hero'
import { HomeString } from '@/strings'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Section, { SectionLevels } from '../components/section';
import { skills } from '@/constant';

export default async function Home() {
    const renderInfoCard = () => {
        return (
            <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image='https://media.licdn.com/dms/image/D5603AQHeds-7Vafqag/profile-displayphoto-shrink_800_800/0/1673854930445?e=1692835200&v=beta&t=lfJCX8u6tIGvBLsZZaNRrzVQurOuq3S4gnhwUOJNY3s'
                />
                <CardContent sx={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                    <Typography variant="h5" color="white" gutterBottom>
                        BSc Engineering
                    </Typography>
                    <Typography color="white" gutterBottom>
                        kiruthihan10@gmail.com
                    </Typography>
                    <Typography color="white" gutterBottom>
                        +94770069968
                    </Typography>
                    <Stack direction="row" spacing={2} color={"white"}>
                        <Link href='https://www.linkedin.com/in/kiruthihan-nagarajan-0206b0134'><LinkedInIcon /></Link>
                        <Link href='https://www.facebook.com/ironghost10'><FacebookIcon /></Link>
                        <Link href='https://twitter.com/kiruthihan10'><TwitterIcon /></Link>
                    </Stack>
                </CardContent>
            </Card>
        )
    }

    const renderEducationHistory = () => {
        const educations = HomeString.education.content
        let educationsList = []
        for (let education of educations) {
            educationsList.push(
                <Card variant="outlined" key={education.dateRange}>
                    {/* <Box sx={{ fontWeight: 'bold' }}>{education.dataRange}</Box>
                    <div>{education.institue}</div>
                    <div>{education.course}</div> */}
                    <Section heading={education.dateRange} subHeading={education.institue} content={education.course} level={SectionLevels.secondary} />
                </Card>
            )
        }
        return <Stack direction="row" spacing={2}>{educationsList}</Stack>
    }

    const renderSkills = () => {
        let skillElements: JSX.Element[] = [];
        for (const skill of skills) {
            skillElements.push(
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        {skill.name}
                    </Grid>
                    <Grid item xs={8}>
                        <Slider value={skill.value} disabled />
                    </Grid>
                </Grid>)
        }
        return skillElements
    }

    return (
        <main>
            <Hero url='https://source.unsplash.com/random?wallpapers'>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                            Hi, I'm
                        </Typography>
                        <Typography variant="h1" color="inherit" paragraph>
                            Kiruthihan Nagarajan
                        </Typography>
                        <Typography variant="h3" color="inherit" paragraph>
                            Associate Software Engineer
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {renderInfoCard()}
                    </Grid>
                </Grid>
            </Hero>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Section content={HomeString.about.content} heading={HomeString.about.head} subHeading={HomeString.about.subhead} />
                </Grid>
            </Grid>
            <Section content={renderEducationHistory()} heading='Education' />
            <Section content={renderSkills()} heading={'Skills & Language'} subHeading='What I bring to the table' />
        </main>
    )
}

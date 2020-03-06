// About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

const SectionWrapper = styled(Section)`
  //background-image: url(https://source.unsplash.com/XvLRRaArUQg/480x800);
  
`

export default class About extends React.Component {
    render () {
        return (
            <SectionWrapper centered>
                <Container>
                    <Subheading>Ana Lopez</Subheading>

                    <Heading>About Me</Heading>

                    <Text>My interest in computers started at age eight; it was the first time I had seen or used one, and I was instantly amazed by it. Looking back, that is where my love of computers began. I finished my studies in Computer Science Engineer and after my graduation worked as a software developer for about 6 years.</Text>

                    <Text>During this time, I get professional experience that helped me understand project management, respecting deadlines, and improving my computer science abilities, as well as my problem-solving and analytical skills helping companies in Mexico to meet their goals within software developer areas. I made the decision to move to US 3 years ago and since then I been committed to learn the language and to my own continuous education and improvement.</Text>


                </Container>
            </SectionWrapper>
        )
    }
}
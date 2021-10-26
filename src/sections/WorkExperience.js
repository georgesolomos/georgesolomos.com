/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Text, Flex, Box } from "rebass"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Section from "../components/Section"
import { CardContainer, Card } from "../components/Card"
import SocialLink from "../components/SocialLink"
import Triangle from "../components/Triangle"
import ImageSubtitle from "../components/ImageSubtitle"
import Hide from "../components/Hide"

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={["35vh", "40vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="background"
      height={["15vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
    />

    <Triangle
      color="primary"
      height={["25vh", "40vh"]}
      width={["75vw", "60vw"]}
      invertX
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertY
    />
  </div>
)

const CARD_HEIGHT = "200px"

const MEDIA_QUERY_SMALL = "@media (max-width: 400px)"

const Title = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
  color: ${props => props.theme.colors.onSurface};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});
  color: ${props => props.theme.colors.onSurface};

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(-${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} + (${CARD_HEIGHT} / 4));
  }
`

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: "auto" }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage fluid={logo.src} alt={logo.title} />
        <ProjectTag>
          <Flex
            style={{
              float: "right",
            }}
          >
            {repositoryUrl !== undefined && (
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                />
              </Box>
            )}
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle
            bg="secondaryLight"
            color="onSecondary"
            y="bottom"
            x="right"
            round
          >
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="primaryLight">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    src: PropTypes.object,
    title: PropTypes.string,
  }).isRequired,
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const useImage = () => {
  const img = useStaticQuery(
    graphql`
      query {
        susatImg: file(relativePath: { eq: "work_experience/susat.jpg" }) {
          ...fluidImage
        }
        ninelvImg: file(relativePath: { eq: "work_experience/ninelv.jpg" }) {
          ...fluidImage
        }
        oneviewImg: file(relativePath: { eq: "work_experience/oneview.jpg" }) {
          ...fluidImage
        }
      }
    `
  )
  return img
}

const WorkExperience = () => {
  // TODO: Get these with a GraphQL query
  const susat = {
    name: "SUSat",
    description:
      "On-Board Data Handling software development on the SUSat 2U CubeSat. " +
      "This was a project with the University of Adelaide.",
    projectUrl: "https://space.skyrocket.de/doc_sdat/susat.htm",
    type: "Embedded",
    publishedDate: "2013",
    logo: { src: useImage().susatImg.childImageSharp.fluid, title: "SUSat" },
  }
  const oneview = {
    name: "Saab Oneview",
    description:
      "Software Engineer on the OneView Security Management System. " +
      "Utilised C#, WPF, and WCF on a Windows platform.",
    projectUrl:
      "https://saab.com/security/prison-security/security-management-solutions/oneview/",
    type: "Windows",
    publishedDate: "2014-2015, 2020-2021",
    logo: {
      src: useImage().oneviewImg.childImageSharp.fluid,
      title: "OneView",
    },
  }
  const ninelv = {
    name: "Saab 9LV",
    description:
      "Software Engineer/Team Lead on the 9LV Combat Management System. " +
      "Utilise Java, Ada, and C++ on a Dockerised Linux platform.",
    projectUrl:
      "https://saab.com/naval/decision-superiority/combat-management-systems/9lv-cms/",
    type: "Linux",
    publishedDate: "2015-Present",
    logo: { src: useImage().ninelvImg.childImageSharp.fluid, title: "9LV" },
  }
  const allProjects = [susat, oneview, ninelv]

  return (
    <Section.Container id="Experience" Background={Background}>
      <Section.Header name="Work Experience" icon="💻" Box="notebook" />
      <CardContainer minWidth="350px">
        {allProjects.map((p, i) => (
          <Fade bottom delay={i * 200} key={p.name}>
            <Project {...p} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  )
}

export default WorkExperience

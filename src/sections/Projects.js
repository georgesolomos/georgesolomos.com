import React from "react"
import PropTypes from "prop-types"
import { Image, Text, Flex, Box } from "rebass"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Section from "../components/Section"
import { CardContainer, Card } from "../components/Card"
import SocialLink from "../components/SocialLink"
import Triangle from "../components/Triangle"
import ImageSubtitle from "../components/ImageSubtitle"
import Hide from "../components/Hide"
import SaabLogo from "../images/saab.png"

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={["30vh", "20vh"]}
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
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
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
        <ProjectImage src={logo.src} alt={logo.title} />
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
            bg="secondary"
            color="onSecondary"
            y="bottom"
            x="right"
            round
          >
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="surface">{publishedDate}</ImageSubtitle>
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
    src: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

const project9lv = {
  name: "9LV",
  description: "9LV CMS software development",
  projectUrl:
    "https://saab.com/naval/decision-superiority/combat-management-systems/9lv-cms/",
  type: "Linux",
  publishedDate: "2015-Present",
  logo: { src: SaabLogo, title: "Saab logo" },
}
const allProjects = [project9lv]

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" icon="💻" Box="notebook" />
    <CardContainer minWidth="350px">
      {allProjects.map((p, i) => (
        <Fade bottom delay={i * 200} key={p.name}>
          <Project {...p} />
        </Fade>
      ))}
    </CardContainer>
  </Section.Container>
)

export default Projects

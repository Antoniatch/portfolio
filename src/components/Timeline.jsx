import styled from "styled-components";

import Container from "../styled-components/Container";

import timelineElements from "../data/timelineElements";

import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {


    return (
        <Container>
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            icon={<img src={element.icon} alt={element.iconAlt} width="100%" object-fit="cover" />}
                            iconStyle={{
                                overflow: "hidden",
                            }}
                        >
                            {element.title.map(element => {return (
                                <Title className="vertical-timeline-element-title">
                                    {element} 
                                </Title>
                            )})}
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
        </Container>
        
    );
}

export default Timeline;

const Title = styled.h3`
    color: white;
    font-size: 1rem;
    text-align: justify;
    padding-bottom: .7em;
`
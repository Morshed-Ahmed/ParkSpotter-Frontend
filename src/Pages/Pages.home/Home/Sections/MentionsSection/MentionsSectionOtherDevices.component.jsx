import styled from "styled-components";
import { useState, useEffect } from "react";
import SliderCarousel, { CarouselItem } from "./SliderCarousel/SliderCarousel";
import SliderCarouselCard from "./SliderCarouselCard/SliderCarouselCard.component";
import * as carouselIcons from "../../../../../assets/CarouselIcons/CarouselIcons";

const MentionsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  width: 30%;
  align-self: baseline;
  text-align: right;
  position: absolute;
  left: 5.25em;
  top: 20px;
  font-size: 40px;
  z-index: 0;

  @media (max-width: 768px) {
    position: static;
    align-self: center;
    left: auto;
    top: auto;
    text-align: center;
  }
`;

const Title = styled.p`
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

const ContentContainer = styled.div`
  width: 70%;
  z-index: 1;

  @media (max-width: 768px) {
    z-index: 0;
    width: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const SubGridContainerOne = styled.div`
  grid-column: 1 / 2;
  align-self: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SubGridContainerTwo = styled.div`
  grid-column: 2 / 3;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;
  }
`;

const fallbackData = [
  {
    icon: carouselIcons.adobeIcon,
    title: "Mooving, ParkSpotter to deploy 200 battery swapping stations in Delhi NCR, Mumbai and Bengaluru",
    description: "Battery swapping stations will play a pivotal role in expediting the Indian EV adoption rate across India.",
    author: "Express Mobility Desk",
    date: "November 30, 2022",
  },
  {
    icon: carouselIcons.caffeineIcon,
    title: "Government launches new EV policy to promote green transportation",
    description: "The new policy aims to reduce carbon emissions and promote sustainable transportation solutions.",
    author: "Green Transport News",
    date: "January 15, 2023",
  },
  {
    icon: carouselIcons.astrazenecaIcon,
    title: "Electric vehicle sales surge in 2023",
    description: "The demand for electric vehicles continues to rise with new advancements in battery technology.",
    author: "Automotive News",
    date: "February 10, 2023",
  },
  {
    icon: carouselIcons.huaweiIcon,
    title: "Startup launches innovative battery swapping technology",
    description: "A new startup introduces a cutting-edge battery swapping system to enhance the EV charging infrastructure.",
    author: "TechCrunch",
    date: "March 5, 2023",
  },
];

function MentionsSectionOtherDevices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/mentions");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(fallbackData);
      }
    }

    fetchData();
  }, []);

  return (
    <MentionsSectionContainer>
      <TitleContainer>
        <Title>Media Mentions</Title>
      </TitleContainer>

      <ContentContainer>
        <SliderCarousel>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <GridContainer>
                <SubGridContainerOne>
                  <SliderCarouselCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    date={item.date}
                  />
                </SubGridContainerOne>

                <SubGridContainerTwo>
                  <SliderCarouselCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    date={item.date}
                  />
                  <SliderCarouselCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    date={item.date}
                  />
                </SubGridContainerTwo>
              </GridContainer>
            </CarouselItem>
          ))}
        </SliderCarousel>
      </ContentContainer>
    </MentionsSectionContainer>
  );
}

export default MentionsSectionOtherDevices;

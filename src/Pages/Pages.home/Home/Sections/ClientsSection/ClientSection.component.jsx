import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as carouselIcons from "../../../../../assets/CarouselIcons/CarouselIcons";
import Carousel, { CarouselItem } from "./Carousel/Carousel";

// Styled components
const SectionContainer = styled.div`
  background-color: #f6f7fb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ClientsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 60px;
`;

const Subtitle = styled.p`
  margin-bottom: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const ClientItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ClientLogo = styled.img`
  height: 60px;
  max-width: 100%;
  max-height: 100%;
`;

const ClientName = styled.p`
  margin-top: 10px;
`;

// Dummy data
const dummyClients = [
  { name: "Adobe", logo: "adobeIcon" },
  { name: "ATI", logo: "atiIcon" },
  { name: "Brilliant", logo: "brandIcon" },
  { name: "Caffeine", logo: "caffeineIcon" },
  { name: "Huawei", logo: "huaweiIcon" },
  { name: "iTunes", logo: "itunesIcon" },
  { name: "Logo", logo: "logoIcon" },
  { name: "Pinterest", logo: "pinterestIcon" },
  { name: "McDonald's", logo: "mcdonaldsIcon" },
  { name: "Unity", logo: "unityIcon" },
  { name: "Nike", logo: "nikeIcon" },
  { name: "MSN", logo: "msnIcon" },
  { name: "AstraZeneca", logo: "astrazenecaIcon" },
  { name: "Telegram", logo: "telegramIcon" },
  { name: "UPS", logo: "upsIcon" },
  { name: "Enterprise", logo: "enterpriseIcon" },
];

// Fetch clients from API
const fetchClients = async () => {
  try {
    const response = await fetch("https://api.example.com/clients");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

function ClientSection() {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    const getClients = async () => {
      const clientsData = await fetchClients();
      if (clientsData && clientsData.length > 0) {
        setClients(clientsData);
      } else {
        setClients(dummyClients);
      }
    };

    getClients();
  }, []);

  const loadMoreClients = async () => {
    // Simulating API pagination by using dummy data
    const moreClients = dummyClients.map((client, idx) => ({
      ...client,
      name: `${client.name} ${idx + page * dummyClients.length}`,
    }));
    setClients((prevClients) => [...prevClients, ...moreClients]);
    setPage((prevPage) => prevPage + 1);
  };

  const lastClientElementRef = useRef();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreClients();
      }
    });

    if (lastClientElementRef.current) {
      observer.current.observe(lastClientElementRef.current);
    }
  }, [lastClientElementRef]);

  const chunkedClients = [];
  for (let i = 0; i < clients.length; i += 6) {
    chunkedClients.push(clients.slice(i, i + 6));
  }

  return (
    <SectionContainer>
      <ClientsContainer>
        <Title>Our Clients</Title>
        <Subtitle>We are trusted by some of the best</Subtitle>
      </ClientsContainer>
      <div>
        <Carousel>
          {chunkedClients.map((clientGroup, index) => (
            <CarouselItem key={index}>
              <GridContainer>
                {clientGroup.map((client, idx) => (
                  <ClientItem
                    key={idx}
                    ref={
                      chunkedClients.length === index + 1 &&
                      clientGroup.length === idx + 1
                        ? lastClientElementRef
                        : null
                    }
                  >
                    <ClientLogo src={carouselIcons[client.logo]} alt={client.name} />
                    <ClientName>{client.name}</ClientName>
                  </ClientItem>
                ))}
              </GridContainer>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </SectionContainer>
  );
}

export default ClientSection;
// original
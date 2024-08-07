import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  background-color: #ffffff;
  padding: 50px 0;
`

const ParkBusinessesTitle = styled.div`
  width: 85%;
  margin: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  h1 {
    font-size: 48px;
    line-height: 58px;
    font-weight: 600;
    color: #000000;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: #6e6e73;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    h1 {
      font-size: 36px;
      line-height: 46px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    h1 {
      font-size: 28px;
      line-height: 38px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`

const TabsContainer = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    justify-content: center;

    gap: 20px;
  }

  @media (max-width: 480px) {
    justify-content: center;

    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`

const TabCoupleContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`

const Tab = styled.div`
  padding: 10px 0;
  cursor: pointer;
  color: ${({ active }) => (active ? "#0071e3" : "#a1a1a6")};
  border: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  border-bottom: ${({ active }) =>
    active ? "2px solid #0071e3" : "transparent"};

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const Content = styled.div`
  margin: 50px 0;

  @media (max-width: 768px) {
    margin: 40px 0;
  }

  @media (max-width: 480px) {
    margin: 30px 0;
  }
`

const ContentBox = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

const ContentImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 10px;
  }
`

const ContentDescription = styled.div`
  flex: 1;
  padding: 30px;
  background-color: #f5f5f7;
  border-radius: 10px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    ul li {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }

    ul li {
      font-size: 12px;
    }
  }
`

const ContentDescriptionLink = styled(Link)`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #0071e3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
`

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`

const Slide = styled.img`
  width: 100%;
  height: auto;
`

const BusinessesProblemSolve = styled.div`
  text-align: center;
  padding: 50px 0;

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #000000;
  }

  button {
    font-size: 18px;
    padding: 10px 30px;
    background-color: #0071e3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #005bb5;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }

    button {
      font-size: 16px;
      padding: 8px 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    button {
      font-size: 14px;
      padding: 6px 15px;
    }
  }
`

const ParkOwnersImages = [
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
]

const UsersImages = [
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
  "https://parkplus.io/_next/image?url=https%3A%2F%2Fstrapi-file-uploads.s3.ap-south-1.amazonaws.com%2FSoftware_Technology_Park_Gurgaon_1_2_5a107f7fba.jpg&w=1920&q=75",
]

const ParkBusinesses = () => {
  const [activeTab, setActiveTab] = useState("Park Owners")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ParkOwnersImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Container>
      <ParkBusinessesTitle>
        <h1>
          ParkSpotter for <br /> Businesses
        </h1>
        <p>
          Our technology has transformed the tricky traffic movement in parking
          <br />
          lots for various business establishments
        </p>
      </ParkBusinessesTitle>
      <TabsContainer>
        <TabCoupleContainer>
          <Tab
            active={activeTab === "Park Owners"}
            onClick={() => handleTabClick("Park Owners")}
          >
            Park Owners
          </Tab>
          <Tab
            active={activeTab === "Users"}
            onClick={() => handleTabClick("Users")}
          >
            Users
          </Tab>
        </TabCoupleContainer>
      </TabsContainer>
      <Content>
        {activeTab === "Park Owners" && (
          <ContentBox>
            <ContentImage>
              <CarouselContainer>
                <SlideWrapper
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {ParkOwnersImages.map((image, index) => (
                    <Slide key={index} src={image} />
                  ))}
                </SlideWrapper>
              </CarouselContainer>
            </ContentImage>
            <ContentDescription>
              <h1>Park Owners</h1>
              <h2>Our Services:</h2>
              <ul>
                <li>Real-time monitoring</li>
                <li>Efficient space management</li>
                <li>Enhanced security</li>
              </ul>
              <ContentDescriptionLink to="/contact">
                <p>Contact Us</p>
              </ContentDescriptionLink>
            </ContentDescription>
          </ContentBox>
        )}
        {activeTab === "Users" && (
          <ContentBox>
            <ContentImage>
              <CarouselContainer>
                <SlideWrapper
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {UsersImages.map((image, index) => (
                    <Slide key={index} src={image} />
                  ))}
                </SlideWrapper>
              </CarouselContainer>
            </ContentImage>
            <ContentDescription>
              <h1>Users</h1>
              <h2>Benefits for Users:</h2>
              <ul>
                <li>Convenient parking spots</li>
                <li>Seamless payment options</li>
                <li>Real-time availability updates</li>
              </ul>
              <ContentDescriptionLink to="/contact">
                <p>Contact Us</p>
              </ContentDescriptionLink>
            </ContentDescription>
          </ContentBox>
        )}
      </Content>
      <BusinessesProblemSolve>
        <h1>Solving Your Parking Problems</h1>
        <button>Get in Touch</button>
      </BusinessesProblemSolve>
    </Container>
  )
}

export default ParkBusinesses
// original
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  height: 350px;
  width: 85%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 28px;
  box-shadow: -10px 10px 20px 0 rgba(0, 0, 0, 0.1),
    5px 5px 10px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  z-index: 99;
  background-color: white;

  @media (max-width: 768px) {
    z-index: 0;
    width: 100%;
    padding: 30px;
    height: 400px;
    width: 300px;
    margin-bottom: 10px;
  }
`

const IconContainer = styled.div`
  margin-right: auto;
  height: 30px;
  margin-bottom: 10px;
`

const Icon = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    max-height: 90%;
    max-width: 80%;
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-items: baseline;
`

const TitleContainer = styled.div`
  color: #00163e;
  font-size: 14px;
`

const Description = styled.p`
  font-size: 12px;
  color: #616161;
`

const ReadMoreButton = styled.button`
  font-size: 13px;
  padding: 0;
  border: 0;
  background-color: transparent;
  color: #5430bb;
  font-weight: bold;
  margin: 10px 0;
`

const Author = styled.h4`
  font-size: 13px;
`

const Date = styled.p`
  color: #cdd0d7;
  font-size: 12px;
`

function SliderCarouselCard({ icon, title, description, author, date }) {
  return (
    <CardContainer>
      <IconContainer>
        <Icon src={icon} />
      </IconContainer>
      <ContentContainer>
        <h1>&quot;</h1>
        <div>
          <TitleContainer>{title}</TitleContainer>
          <Description>{description}</Description>
          <ReadMoreButton>Read more...</ReadMoreButton>
          <Author>by {author}</Author>
          <Date>{date}</Date>
        </div>
      </ContentContainer>
    </CardContainer>
  )
}

export default SliderCarouselCard
// original
import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;export const ResumeButton = styled.a`
width: 180px;               /* Same width for both buttons */
padding: 12px;              /* Consistent padding for both buttons */
text-align: center;
color: ${({ theme }) => theme.white};
border-radius: 20px;
font-size: 18px;
font-weight: 600;
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
text-decoration: none;       /* Removes the underline */
transition: all 0.4s ease-in-out;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.6);
&:hover {
  transform: scale(1.05);
}
`;


export const GitHubButton = styled.a`
  width: 180px;               /* Same width to match the ResumeButton */
  padding: 12px;              /* Same padding for consistent height */
  text-align: center;
  border: none;               /* Remove border for a cleaner look */
  border-radius: 20px;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(90deg, rgba(75,85,99,1) 0%, rgba(31,41,55,1) 100%); /* Matching gradient */
  text-decoration: none;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.6);  /* Matching box shadow */
  transition: all 0.4s ease-in-out;
  transform: translateY(0); /* Reset transform for normal state */
  cursor: pointer;          /* Make it look clickable */

  &:hover {
    background: linear-gradient(90deg, rgba(55,65,81,1) 0%, rgba(17,24,39,1) 100%); /* Hover gradient */
    transform: scale(1.05); /* Scale on hover */
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.6);  /* Consistent shadow */
  }

  &:active {
    transform: translateY(1px); /* Slight movement when active */
    box-shadow: none; /* Remove shadow when pressed */
  }

  &:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 0 2px rgba(75,85,99,0.5); /* Custom focus ring */
  }
`;



export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;      /* Ensure buttons are aligned horizontally */
  justify-content: flex-start; /* Align buttons to the left */
  align-items: center;         /* Ensure they are aligned horizontally */
  gap: 20px;                   /* Add some spacing between the buttons */
  margin-top: 20px;            /* Space above the buttons */
  width: 100%;                 /* Take full width of container */
  max-width: 600px;            /* Limit max width to avoid stretching */
`;

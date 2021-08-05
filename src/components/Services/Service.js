import React from "react";
import Icon1 from '../../images/svg-1.png';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServiceEle";
const Service = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expense</ServicesH2>
          <ServicesP>We help in your growth</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual platform</ServicesH2>
          <ServicesP>We help in your growth</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Fast resolve</ServicesH2>
          <ServicesP>We help in your growth</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Service;

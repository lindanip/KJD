import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import caseStudy1Image from '../../assets/case-study-1.jpeg';
import caseStudy2Image from '../../assets/case-study-2.jpeg';
import caseStudy3Image from '../../assets/case-study-3.jpeg';
import caseStudy4Image from '../../assets/case-study-4.jpeg';
import caseStudy5Image from '../../assets/case-study-5.jpeg';
import caseStudy6Image from '../../assets/case-study-6.jpeg';
import { Card, Container, ContentWrapper, Heading, Image, Paragraph, Section } from './styles';

SwiperCore.use([Navigation, Pagination]);

const CaseStudySection = () => {
  return (
    <Section>
      <Container>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Card>
              <Image src={caseStudy1Image} alt="Case Study 1" />
              <ContentWrapper>
                <Heading>Case Study 1</Heading>
                <Paragraph>Short description of case study 1</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={caseStudy2Image} alt="Case Study 2" />
              <ContentWrapper>
                <Heading>Case Study 2</Heading>
                <Paragraph>Short description of case study 2</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={caseStudy3Image} alt="Case Study 3" />
              <ContentWrapper>
                <Heading>Case Study 3</Heading>
                <Paragraph>Short description of case study 3</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={caseStudy4Image} alt="Case Study 4" />
              <ContentWrapper>
                <Heading>Case Study 4</Heading>
                <Paragraph>Short description of case study 4</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={caseStudy5Image} alt="Case Study 5" />
              <ContentWrapper>
                <Heading>Case Study 5</Heading>
                <Paragraph>Short description of case study 5</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Image src={caseStudy6Image} alt="Case Study 6" />
              <ContentWrapper>
                <Heading>Case Study 6</Heading>
                <Paragraph>Short description of case study 6</Paragraph>
              </ContentWrapper>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default CaseStudySection;
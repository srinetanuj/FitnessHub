import { Image } from "@chakra-ui/image";
import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";

const About = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="900"
          color="#262a3b"
          marginY="3%"
        >
          About the Company
        </Text>
      </Box>
      <Box
        color="#262a3b"
        fontSize={{ base: ".7em", md: "1em" }}
        lineHeight="1.5em"
        textAlign="left"
        maxWidth={{ base: "85%", md: "75%" }}
        margin="auto"
        display="flex"
        flexDir="column"
        gap={7}
      >
        <Box>
          <Text>
            Fitnesshub is the most accurate, comprehensive nutrition tracking
            app on earth. Unlike other apps on the market, our nutritional data
            is curated from verified, accurate sources. We aim to provide a
            complete solution – no matter what diet you choose to be on.
          </Text>
        </Box>
        <Box>
          <Text>
            Our CEO, Aaron Davidson, built Fitnesshub as a side project in 2005.
            He was following the CRON diet (Calorie Restriction with Optimal
            Nutrition) and being the nutrition nerd/software developer that he
            is, decided to build an app to track his diet. Thus, Fitnesshub was
            born. It was several years later before he came to the conclusion
            that maybe he was onto something and quit his six-figure corporate
            job to focus on improving Fitnesshub.
          </Text>
        </Box>
        <Box>
          <Text>There are now over 6 million users who are happy he did.</Text>
        </Box>
        <Box>
          <Text>
            Fitnesshub's success has hinged entirely on positive word-of-mouth
            from its users. The company is still – and plans to continue being –
            a bootstrap startup to this day.
          </Text>
        </Box>
      </Box>
      <Box
        maxWidth="63%"
        marginX="auto"
        marginTop="6%"
        borderRadius="1%"
        overflow="hidden"
      >
        <Image src="https://cdn1.cronometer.com/webflow/crono-team-1.jpg" />
      </Box>
      <Box>
        <Text
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="900"
          color="#262a3b"
          marginY="3%"
        >
          Who We Are
        </Text>
      </Box>
      <Box
        color="#262a3b"
        fontSize={{ base: ".7em", md: "1em" }}
        lineHeight="1.5em"
        textAlign="left"
        maxWidth={{ base: "85%", md: "75%" }}
        margin="auto"
        display="flex"
        flexDir="column"
        gap={7}
      >
        <Box>
          <Text>
            While our staff spans the globe our headquarters is based in the
            small-town of Revelstoke, British Columbia, Canada. Revelstoke is a
            health-centric mountain town brimming with endless options for
            staying active and a growing tech community – the perfect
            combination to call home.
          </Text>
        </Box>
        <Box>
          <Text>
            We are an eclectic mix of web developers, designers, nutrition
            scientists, business majors and personal trainers brought together
            by a love of nutrition. While our company has grown our mission and
            values have remained the same; we believe full spectrum nutrition is
            the best way to understand your diet’s effect on your health. We
            also believe in empowering everyone by ensuring they have access to
            accurate and comprehensive data to make informed decisions.
          </Text>
        </Box>
        <Box>
          <Text>
            Our goal is to build the best software for people and professionals
            to manage their nutrition. And we have the passion to make that
            happen; amazing data paired with awesome customer support truly are
            the Fitnesshub difference.
          </Text>
        </Box>
        <Box>
          <Text>
            If you have interest in your personal nutrition or working with your
            client’s nutrition check us out!
          </Text>
        </Box>
        <Box>
          <Text>
            Have questions? We would love to hear from you. Email us at:
            <Link color="#005c5c" textDecoration="underline #005c5c">
              support@fitnesshub.com
            </Link>
          </Text>
        </Box>
      </Box>
      <hr
        style={{
          border: "0.2px solid #B2BEB5",
          maxWidth: "92%",
          margin: "6% auto 3% auto",
        }}
      />
      <Box marginY="3%">
        <Text fontSize={{ base: "xs", md: "xl" }}>
          Help us spread the good word about nutrition.
        </Text>
        <Link
          fontSize={{ base: "xs", md: "xl" }}
          color="#005c5c"
          textDecoration="underline #005c5c"
        >
          Become an Affiliate
        </Link>
      </Box>
    </Box>
  );
};

export default About;

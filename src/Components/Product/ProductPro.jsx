import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import pro from "./pro.png";
import {Link} from "react-router-dom";


const ProductPro = () => {
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2, 2]}
        spacing={[5, 5, 10, 10, 10, 10]}
        mt={20}
        w="90%"
        m="auto"
      >
        <Box textAlign="left" gap={5}>
          <Heading as="h2" size="3xl">
            Nutrition tracking software for health professionals
          </Heading>
          <Text my={5} fontSize="2xl">
            Sophisticated data for you, simplified diet tracking for your
            clients.
          </Text>
          <Heading my={5} as="h2" size="2xl">
            Free 30-Day Trial
          </Heading>
          <Link to="/signup"><Button bg="#24bf65" size="lg" px={20}>
            Sign Up
          </Button></Link>
        </Box>
        <Box>
          <Image
            src="https://cdn1.cronometer.com/webflow/pro-hero-2-1-p-1080.png"
            alt="run"
            w={["100%", "100%", "100%", "100%", "80%", "80%"]}
            m="auto"
          />
        </Box>
      </SimpleGrid>

      <Box>
        <Image src={pro} />
      </Box>

      <Box>
        <Heading as="h2" size="3xl">
          Adherence meets convenience{" "}
        </Heading>
        <Text fontSize="2xl">Monitor your clients nutrition.</Text>

        <SimpleGrid
          columns={[1, 1, 3, 3, 3, 3]}
          spacing={[5, 5, 10, 10, 10, 10]}
        >
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/food-diary-icon.svg"
              alt="logo"
              width="40%"
              m="auto"
              my={10}
            />
            <Text fontSize="4xl">Client food diary app</Text>
            <Text fontSize="md">
              Clients log their meals, exercise and metrics with the Cronometer
              App.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/hipaa-icon.svg"
              alt="logo"
              width="40%"
              m="auto"
              my={10}
            />
            <Text fontSize="4xl">HIPAA compliant</Text>
            <Text fontSize="md">
              We follow HIPAA standards with the option to sign a BAA.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/reports-icon.svg"
              alt="logo"
              width="40%"
              m="auto"
              my={10}
            />
            <Text fontSize="4xl">Client nutrition reports</Text>
            <Text fontSize="md">
              Generate and download insightful reports to upload to EMR
              software.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={20}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Exceed expectations
        </Heading>
        <Text fontSize="3xl" mb={20}>
          Deliver powerful results.
        </Text>

        <SimpleGrid
          columns={[1, 1, 2, 2, 2, 2]}
          spacing={[5, 5, 8, 8, 8, 8]}
          w="90%"
          m="auto"
        >
          <Box mt={10}>
            <Image
              src="https://cdn1.cronometer.com/webflow/pro-features-12x-1-p-1080.png"
              alt="client-report"
              w="80%"
              m="auto"
            />
          </Box>
          <Box textAlign="center">
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                Easy to set up and manage
              </Heading>
              <Text fontSize="xl">
                Organize clients into groups; view and edit your clients'
                nutrition targets, settings and data.
              </Text>
            </Box>
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                Share foods and recipes
              </Heading>
              <Text fontSize="xl">
                Easily share custom foods and recipes for your clients to use.
              </Text>
            </Box>
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                Track your clients' progress
              </Heading>
              <Text fontSize="xl">
                Educate, enable and empower your clients to live a healthy
                lifestyle.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={[1, 1, 2, 2, 2, 2]}
          spacing={[5, 5, 8, 8, 8, 8]}
          w="90%"
          m="auto"
          mt={20}
        >
          <Box textAlign="center">
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                In-app client messaging
              </Heading>
              <Text fontSize="xl">
                Easily connect with your clients with our secure, in-app client
                messaging.
              </Text>
            </Box>
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                Customize the client view
              </Heading>
              <Text fontSize="xl">
                Choose what the client can view as they log their nutrition with
                the Cronometer app.
              </Text>
            </Box>
            <Box textAlign="left" mt={5}>
              <Heading as="h4" size="lg">
                Grow your practice
              </Heading>
              <Text fontSize="xl">
                Feature your business in our professional directory and get
                discovered by other Cronometer app users.
              </Text>
            </Box>
          </Box>
          <Box mt={10}>
            <Image
              src="https://cdn1.cronometer.com/webflow/pro-features-22x-1-p-1080.png"
              alt="client-report"
              w="100%"
              m="auto"
            />
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={40}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Food diary app for clients
        </Heading>
        <Text fontSize="3xl">
          Clients can track their food, exercise and health metrics on the go.
        </Text>

        <SimpleGrid
          columns={[1, 1, 2, 2, 2, 2]}
          spacing={[5, 5, 5, 10, 10, 10]}
          w="80%"
          m="auto"
          mt={20}
        >
          <Box  mt={5}>
            <Image
              src="https://cdn1.cronometer.com/webflow/crono-app-4.svg"
              alt="data-pic"
              w="50%"
              m="auto"
            />
          </Box>
          <Box >
            <SimpleGrid columns={1} spacing={3} textAlign="left">
              <Box display="flex">
                <Box>
                  <Image
                    src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    alt="sign-pic"
                    w="60%"
                    h="60%"
                    // mt={-5}
                  />
                </Box>
                <Box>
                  <Text fontSize="3xl">Accurate nutrition data</Text>
                  <Text fontSize="md">
                    With our curated database you can be confident your clients
                    are only logging accurate info.
                  </Text>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Image
                    src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    alt="sign-pic"
                    w="60%"
                    h="60%"
                    // mt={-5}
                  />
                </Box>
                <Box>
                  <Text fontSize="3xl">Syncs with apps and devices</Text>
                  <Text fontSize="md">
                    Clients can sync Apple Health, Samsung Health, Google Fit,
                    FitBit, Garmin, and more.
                  </Text>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Image
                    src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    alt="sign-pic"
                    w="60%"
                    h="60%"
                    // mt={-5}
                  />
                </Box>
                <Box>
                  <Text fontSize="3xl">Premium features</Text>
                  <Text fontSize="md">
                    Your clients will have access to the premium Gold version of
                    the Cronometer app.
                  </Text>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Image
                    src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    alt="sign-pic"
                    w="60%"
                    h="60%"
                    // mt={-5}
                  />
                </Box>
                <Box>
                  <Text fontSize="3xl">Priority support</Text>
                  <Text fontSize="md">
                    Your clients will have priority support status with our
                    customer service team.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={40}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Fitness Pro reviews
        </Heading>
        <Text fontSize="3xl" my={5} mb={10}>
          Client nutrition tracking software for any size company.
        </Text>

        <SimpleGrid columns={[1,1,2,2,2,2]} spacing={[5,5,5,8,8,8]} mt={20} w="80%" m="auto" boxShadow='xl' p='6' rounded='md' bg='white'>
          <Box >
            <Image
              src="https://cdn1.cronometer.com/webflow/Stanford_Medicine_V-web-p-800.png"
              alt="review"
              w="40%"
              m="auto"
              mt={[20,30,60,100,100,100]}
            />
          </Box>
          <Box  textAlign="left">
            <Text fontSize="xl">
              Cronometer has been a great tool for our dietary intervention
              studies. We can adjust the targets for any nutrient for each
              person, we can review their logs in real time to make timely
              recommendations, can keep other data (such as blood sugars or
              sleep time) in the same platform, and the export of data is easy.
              We also really like the charts and reports!
            </Text> <br />
            <Text fontSize="xl">
              On the participant's side, entry of foods is easy with many
              shortcuts available and a robust food database with accurate
              nutrient information.
            </Text> <br />
            <Heading as='h3' size='lg'>Stanford University</Heading> 
            <Text fontSize='xl'>Nutrition Studies Group</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box  gap={5} mt={40} >
          <Heading as="h2" size="2xl">
          Eliminate paper food diaries
          </Heading>
          <Text my={5} fontSize="2xl">
          Used by nutritionists, dietitians, research teams, schools, and hospitals worldwide.
          </Text>
          <Heading my={5} as="h2" size="2xl">
            Free 30-Day Trial
          </Heading>
           <Link to="/signup"><Button bg="#24bf65" size="lg" px={20}>
            Sign Up
          </Button></Link>
        </Box>

        <Box my={10}>
        <Text fontSize='2xl'>Not sure if Cronometer Pro is right for you?</Text> 
        <Text fontSize='2xl' color="teal.700" textDecoration="underline"><Link>Contact Us</Link></Text> 
        </Box>

        <hr />

        <Box my={10}>
        <Text fontSize='2xl'>Help us spread the good word about nutrition.</Text> 
        <Text fontSize='2xl' color="teal.700" textDecoration="underline"><Link>Become an Affiliate</Link></Text> 
        </Box>

    </div>
  );
};

export default ProductPro;

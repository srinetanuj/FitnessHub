import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import seen_sec from "./seen_sec.png";
import Diet from "./Diet";
import { Link } from "react-router-dom";

const DietArr = [
  {
    id: 1,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-11.svg",
    title: "Track up to 84 nutrients and other compounds",
    text: "Log your meals and track all your macro and micronutrients.",
  },
  {
    id: 2,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-14.svg",
    title: "Log meals, exercise and health metrics",
    text: "Plus, you can create custom foods, recipes, exercises and metrics.",
  },
  {
    id: 3,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-13.svg",
    title: "Get valuable health reports and charts",
    text: "Learn how nutrients and metrics correlate over time.",
  },
  {
    id: 4,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-16.svg",
    title: "Custom diet settings",
    text: "Set weight, macro and nutrient targets to meet your goals.",
  },
  {
    id: 5,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-15.svg",
    title: "Fasting timer",
    text: "Track your intermittent fasts and see their effect over time.",
  },
  {
    id: 6,
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-12.svg",
    title: "Diet support",
    text: "Whether you’re Keto, Vegan, or on one recommended by your doctor.",
  },
];

const Home = () => {
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2, 2]}
        spacing={[5, 5, 5, 8, 8, 8]}
        mt={10}
      >
        <Box height="auto" ml={10}>
          <Box mt={10} textAlign="left" h="auto">
            <Heading as="h2" size="3xl" noOfLines={1}>
              Eat smarter.
            </Heading>
            <Heading as="h2" size="3xl" noOfLines={1}>
              Live better.
            </Heading>
          </Box>
          <Box textAlign="left">
            <Text fontSize="3xl">
              Track your diet, exercise, and health data.
            </Text>
          </Box>
          <Box textAlign="left">
            <Button bg="#1af070" size="lg" color="black" px={12}>
              Sign Up - It's Free!
            </Button>
          </Box>
        </Box>
        <Box height="400px">
          <iframe
            title="cronometer"
            src="https://www.youtube.com/embed/R49fLnhMhIE"
            allowFullScreen
            width="100%"
            style={{ minHeight: "350px", padding: "10" }}
          />
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={1} spacing={10}>
        <Box>
          <Image src={seen_sec} alt="Dan Abramov" w="90%" m="auto" />
        </Box>
      </SimpleGrid>

      <Box mt={100}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Develop healthy habits
        </Heading>
        <Text fontSize="2xl" mb={10}>
          Count your calories, ensure you're meeting nutrient <br /> targets,
          and see your progress over time.
        </Text>
        <SimpleGrid
          columns={[1, 2, 2, 3, 3, 3]}
          spacing={[5, 5, 8, 8, 10, 10]}
          w="90%"
          m="auto"
        >
          {/* <Box bg='tomato' height='80px'></Box> */}
          {DietArr.map((item) => (
            <Box>
              <Diet
                id={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Nutrition section */}

      <Box mt={100}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Discover your nutrition
        </Heading>
        <Text fontSize="2xl" mb={10}>
          Cronometer encourages you to not just count your <br /> calories but
          to focus on your nutrition as a whole.
        </Text>
        <SimpleGrid
          columns={[1, 1, 2, 2, 2, 2]}
          spacing={[5, 5, 5, 10, 10, 10]}
        >
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1-p-1080.png"
              alt="Nutrition-pic"
              w="80%"
              ml={10}
            />
          </Box>
          {/* <Box textAlign="left" w="80%" m="auto" > */}
          <SimpleGrid
            columns={1}
            spacing={6}
            textAlign="left"
            mr={10}
            mt={20}
            mb={30}
          >
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
                <Text fontSize="3xl">Over 6 million users</Text>
                <Text fontSize="md">
                  Join the community to get tips and inspiration from other
                  users on our forums and Facebook group.
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
                <Text fontSize="3xl">Accurate nutrition data</Text>
                <Text fontSize="md">
                  Be confident that the food you log has the correct nutrition
                  data. We verify every food submission for accuracy.
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
                <Text fontSize="3xl">Data privacy & security</Text>
                <Text fontSize="md">
                  We don't sell your account data to third parties and take the
                  security of our users' accounts seriously.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        {/* </Box> */}
      </Box>

      <Box bg="gray.800" color="white" h="auto" py={20} mb={10}>
        <Text fontSize="xl">
          Find you're getting the vitamins and minerals you need with our <br />{" "}
          food diary app
        </Text>
        <Button bg="#1af070" size="lg" color="black" px={20} mt={4}>
          Sign Up - It's Free!{" "}
        </Button>
      </Box>

      <Box mb={[20, 20, 20, 40, 40, 40]}>
        <Heading as="h2" size="3xl" mb={10} noOfLines={1}>
          Sync with apps and devices
        </Heading>
        <Image
          src="https://cdn1.cronometer.com/webflow/cronometer-devices-3-p-1080.png"
          alt="devices-pic"
          w="80%"
          m="auto"
        />
      </Box>

      <Box>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Cronometer reviews
        </Heading>

        <SimpleGrid columns={1} spacing={10} w="80%" m="auto">
          <Box
            height="auto"
            boxShadow="base"
            p="6"
            rounded="md"
            bg="white"
            mt={10}
          >
            <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} spacing={1}>
              <Box>
                <Heading as="h3" size="lg" color="teal">
                  A great all-in-one health app!
                </Heading>
                <Image
                  src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                  alt="app-store"
                  w={["40%", "40%", "40%", "30%", "30%", "30%"]}
                  m="auto"
                  mt={5}
                />
              </Box>
              <Box>
                <Text fontSize="md" textAlign="left">
                  After leaving SparkPeople, I came here. I love that it is
                  Canadian, includes fasting, can import recipes, gives me macro
                  details, and more. This is my daily tracking app.
                </Text>
                <Text fontSize="2xl" textAlign="left" mt={5}>
                  iOS Review
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box height="auto" boxShadow="base" p="6" rounded="md" bg="white">
            <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} spacing={1}>
              <Box>
                <Box>
                  <Text fontSize="md" textAlign="left">
                    Awesome. Getting direct feedback when you track your food
                    really opens your eyes to what you're putting in your body.
                    The modularity and ability to track macros, micros, and
                    calories in -calories out makes this an invaluable tool for
                    any nutritional goal.
                  </Text>
                  <Text fontSize="2xl" textAlign="left" mt={5}>
                    Android Review
                  </Text>
                </Box>
              </Box>
              <Box py={5}>
                <Heading as="h3" size="lg" color="teal">
                  Whether that's bodybuilding, weight loss, endurance training,
                  or just maintenance - everyone should be using Cronometer.
                </Heading>
                <Image
                  src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                  alt="app-store"
                  w={["40%", "35%", "35%", "30%", "30%", "30%"]}
                  m="auto"
                  mt={5}
                />
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>

      <SimpleGrid columns={[1,1,2,2,2,2]} spacing={[5,5,5,10,10,10]} mt={20}>
        <Box  height="auto" gap={5} mt={10}>
          <Box display="flex" alignItems="center" justifyContent="center" w="60%" m="auto">
            <Heading as='h2' size='2xl'>
              Fitnesshub
            </Heading>
            <Heading as='h2' size='2xl' color="#1af070">
              Pro
            </Heading>
          </Box>
          <Text fontSize="3xl" mt={2}>For Health Professionals</Text>
          <Text fontSize="md" m={2}>
            Client diet management for nutritionists, <br /> dietitians, research
            teams, schools, and hospitals
          </Text>
          <Button colorScheme='black' variant='outline' px={20} py={5} mt={3}>
            Lear About Pro
          </Button>
        </Box>
        <Box  height="auto">
          <Image src="https://cdn1.cronometer.com/webflow/pro-hero-1-1-p-1080.png" alt="running"  w="80%" m="auto"/>
        </Box>
      </SimpleGrid>

    <hr w="90%" m="auto" />
    <Box m={10}>
    <Text fontSize='2xl' >Help us spread the good word about nutrition.</Text>
     <Text fontSize='2xl' color="teal" textDecoration="underline"><Link>Become an Affiliate</Link></Text>
    </Box>
    </div>
  );
};

export default Home;
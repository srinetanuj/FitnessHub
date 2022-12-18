import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecentPost from "../../Components/RecentPost";


const SingleRecentPostPage = () => {
  let params = useParams();
  console.log(params.id);

  let [mydata, setmydata] = useState([]);
  let [error, seterror] = useState("");
  let [isloading,setisloading]= useState(false)

  let getmydata = async (id) => {
    try {
      setisloading(true)
      let res = await axios.get(
        `https://humane-remarkable-oregano.glitch.me/recentpost/${id}`
      );
      setmydata(res.data);
      setisloading(false)
    } catch (err) {
      seterror(err.message);
    }
  };

  useEffect(() => {
    getmydata(params.id);
  }, []);

  // console.log(mydata);

  if(isloading){
    return (
  
  <HStack m='auto' w='60%' mt={30}>
    <Skeleton height='600px' w='700px'/>
    
  </HStack>
  
    )
  }




  return (
    <Box>
      <Box bg="rgb(38,42,59)" h={350}>
        <Stack
          spacing={4}
          color="white"
          py="20"
          w={{ base: "80%", lg: "50%" }}
          m="auto"
        >
          <Heading size={{ base: "xl", lg: "2xl" }}> {mydata.title} </Heading>
        </Stack>
      </Box>

      <Stack
        w={{ base: "80%", lg: "50%" }}
        m="auto"
        mt="-100px"
        textAlign="left"
      >
        <Image
          src={mydata.image}
          alt="croww"
          borderRadius={20}
          w={{ base: "100%", lg: "90%" }}
          m="auto"
          mb={20}
        />

        <Stack w={{ base: "100%", lg: "95%" }} m="auto">
          <Heading size="2xl" mb={4}>
            All About Diabetes
          </Heading>
          <Text fontSize={22}>
            If you’ve ever been curious about diabetes, or how you can leverage
            Cronometer to help manage your condition, you’ve come to the right
            place! Listen in on our conversation with Robby Barbaro of Mastering
            Diabetes on our latest podcast episode below or read on to discover
            more.
          </Text>
          <Image
            src="https://cronometer.com/blog/wp-content/uploads/2022/09/new-cronometer-logos@2x.png"
            alt="fixed data"
          />
          <Heading size="2xl" mb={4}>
            What Is Diabetes?
          </Heading>
          <Text fontSize={22}>
            Diabetes is a disease in which your body either can’t produce
            insulin or can’t properly use the insulin it produces. Insulin is a
            hormone produced by your pancreas.
          </Text>
          <Text fontSize={22}>
            Insulin’s role is to regulate the amount of glucose (sugar) in the
            blood. Blood sugar must be carefully regulated to ensure that the
            body functions properly. Too much blood sugar can cause damage to
            organs, blood vessels, and nerves. Your body also needs insulin in
            order to use sugar for energy. Low blood sugar can cause headache,
            difficulty concentrating, blurred vision, dizziness and weakness and
            when severe, a loss of consciousness, seizures, coma and even death.
          </Text>

          <Heading size="lg" mb={4}>
            Type 1
          </Heading>
          <Text fontSize={22}>
            Type 1 diabetes is an autoimmune disease and is also known as
            insulin-dependent diabetes. People with type 1 diabetes aren’t able
            to produce their own insulin (and can’t regulate their blood sugar)
            because their body is attacking the pancreas. Roughly 10 per cent of
            people living with diabetes have type 1, insulin-dependent diabetes.
          </Text>
          <Text fontSize={22}>
            People with type 1 need to inject insulin or use an insulin pump to
            ensure their bodies have the right amount of insulin.
          </Text>

          <Heading size="lg" mb={4}>
            Type 2
          </Heading>
          <Text fontSize={22}>
            People with type 2 diabetes can’t properly use the insulin made by
            their bodies, or their bodies aren’t able to produce enough insulin.
            Roughly 90 per cent of people living with diabetes have type 2
            diabetes.
          </Text>
          <Text fontSize={22}>
            People with type 1 need to inject insulin or use an insulin pump to
            ensure their bodies have the right amount of insulin.
          </Text>

          <Heading size="lg" mb={4}>
            Gestational
          </Heading>
          <Text fontSize={22}>
            Gestational diabetes is a condition in which an individual develops
            high blood glucose levels during pregnancy. Most of the time
            gestational diabetes symptoms go away after the birth of their baby
            and blood glucose levels return to normal.
          </Text>

          <Heading mb={4}>What Is Pre-Diabetes?</Heading>
          <Text fontSize={22}>
            Prediabetes is a condition where blood sugar levels are higher than
            normal, but are not yet high enough to be diagnosed as type 2
            diabetes. Although not everyone with prediabetes will develop type 2
            diabetes, many people will.
          </Text>
          <Text fontSize={22}>
            It’s important to know if you have prediabetes, because research has
            shown that some long-term complications associated with
            diabetes—such as heart disease—may begin during prediabetes.{" "}
          </Text>
          <Text fontSize={22}>
            It’s estimated that 1 in every 3 adults in the United States have
            pre-diabetes.
          </Text>

          <Heading mb={4}>What Is Insulin Resistance?</Heading>
          <Text fontSize={22}>
            Insulin resistance is when cells in your muscles, fat, and liver
            don’t respond well to insulin and can’t easily take up glucose from
            your blood. As a result, your pancreas makes more insulin to help
            glucose enter your cells. As long as your pancreas can make enough
            insulin to overcome your cells’ weak response to insulin, your blood
            glucose levels will stay in the healthy range. Prior to type 2
            diabetes or pre-diabetes, insulin resistance will develop.{" "}
          </Text>

          <Heading mb={4}>Using Cronometer To Manage Diabetes</Heading>
          <Text fontSize={22}>
            Using Cronometer can become an integral part of managing your
            condition. It can be as easy as keeping an eye on your carb intake
            by logging the food you eat every day.{" "}
          </Text>

          <Text fontSize={22}>
            Or if you’d like to dive a bit deeper, you can start logging
            biometrics like blood glucose readings. We’ve recently introduced a
            Dexcom integration which will import readings from Dexcom CGM
            devices straight into your account
          </Text>
          <Text fontSize={22}>
            Take advantage of our Charts feature which will allow you to view
            your biometrics or nutrient intake over time. Gold subscribers can
            also create Custom Charts which will allow you to plot any two
            variables against each other, such as blood glucose and carb intake.{" "}
          </Text>

          <Image
            src="https://cronometer.com/blog/wp-content/uploads/elementor/thumbs/IMG_6528-pyg6ulv1nuccd3ma5hppzanc6qyewjxq404r5j5udc.png"
            alt="first"
            w={{ base: "100%", lg: "90%" }}
          />

          <Box alignItems="center" mb={10}>
            <hr style={{ height: "8px", color: "black", fontWeight: "bold" }} />
            <Stack
              direction={{ base: "column", lg: "row" }}
              display="flex"
              justify="space-between"
              py={8}
              gap={15}
              m="auto"
            >
              <Box>
                <Text fontSize={20} fontWeight="bold">
                  Share This Post
                </Text>
              </Box>

              <HStack gap={5}>
                <a href='https://www.facebook.com/' rel="noreferrer" target="_blank"><FaFacebook size={35} color="Blue" /></a>
                <a href="https://github.com/" rel="noreferrer" target='_blank'> <FaGithub size={35} /> </a>
                    <a href="https://www.linkedin.com/in/prakash-gariya-a7580a239/" rel="noreferrer" target='_blank'> <FaLinkedin size={35} color="Blue" /> </a>
                <a href="https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=en-IN&.intl=in&.done=https%3A%2F%2Fin.mail.yahoo.com%2Fd" rel="noreferrer" target='_blank'><MdEmail size={35} color="red" /></a>
              </HStack>
              
            </Stack>

            <hr style={{ height: "8px", color: "black", fontWeight: "bold" }} />
          </Box>
        </Stack>
      </Stack>


  <Heading mt={10}>Recommended Reads</Heading>

 <Box w='80%' m='auto'>
<RecentPost/>
 </Box>




    </Box>
  );
};

export default SingleRecentPostPage;

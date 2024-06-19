import { useSpring, animated } from "@react-spring/web";
import { prices, styles } from "../../data";
import {
  Card,
  Image,
  List,
  ListItem,
  Select,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Btn } from "@/src/components";
import ForM from "./Form";
import { ImageCollection } from "@/assets";

const BookPage = () => {
  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  const pricingPlans = prices.map((plan, index) => (
    <div key={index} className={`max-md:mx-auto`}>
      <Card className="max-w-[360px] h-full w-full p-7 rounded-xl" withBorder>
        <Title order={2}>{plan.packageName}</Title>
        <Text size="lg">{plan.duration}</Text>
        <List withPadding>
          {plan.services.map((service, idx) =>
            typeof service === "string" ? (
              <ListItem key={idx} pb={`md`} className={`flex`}>
                {service}
              </ListItem>
            ) : (
              <ListItem key={idx} pb={`md`} className={`flex`}>
                {service.name} - {service.price}
              </ListItem>
            )
          )}
        </List>
        <Btn
          text="Select Plan"
          style={`rounded-full font-semibold border-[1.5px] border-primary h-[50px] bg-transparent justify-center text-[16px] w-full text-primary mt-6 hover:bg-primary hover:text-white`}
          click={() => {}}
        />
      </Card>
    </div>
  ));

  return (
    <>
      <div className="bg-primary h-[90px] w-full"></div>
      <animated.div
        style={slideInStyles}
        className={`${styles.body} bg-[#f8f8f8] overflow-hidden w-full h-full`}
      >
        <section className="bg-white w-full h-full px-8 pt-[50px]">
          <Image
            src={ImageCollection.logo2}
            alt="Logo 2"
            className={`sm:w-[150px] sm:h-[70px] w-[110px] mb-5`}
          />
          <div className="bg-[#F5F6F7] text-text w-full p-8 rounded-xl">
            <Text size="sm" mb={`xs`}>
              Your appointment is not confirmed until you receive a confirmation
              email.
            </Text>
            <Text size="sm" mb={`xs`}>
              Please ensure that your contact information is accurate.
            </Text>
            <Text size="sm">
              By proceeding with the booking, you acknowledge and accept these
              terms. Thank you for your understanding and cooperation.
            </Text>
          </div>

          <div className="my-[60px]">
            <div className="flex sm:space-x-5 items-center max-sm:flex-col max-sm:items-start max-sm:space-y-5">
              <div className="flex justify-center items-center bg-primary rounded-full w-[70px] h-[70px] text-white">
                <span className="text-[24px]">1</span>
                <span className="text-[18px]">/3</span>
              </div>
              <div className="flex flex-col">
                <Title order={3}>Vehicle weight</Title>
                <Text className="text-[20px] font-thin">
                  Select vehicle type and weight.
                </Text>
              </div>
            </div>
            <Select
              label="Your vehicle weight"
              placeholder="Choose weight range"
              data={[
                "0 - 1500 Kg",
                "1501 - 1750 Kg",
                "1751 - 2499 Kg",
                "2500 - 2999 Kg",
              ]}
              mt={`lg`}
              comboboxProps={{
                transitionProps: { transition: "pop", duration: 200 },
              }}
              rightSectionWidth={0}
              size={`md`}
            />
          </div>
          <div className="my-[60px]">
            <div className="flex sm:space-x-5 items-center max-sm:flex-col max-sm:items-start max-sm:space-y-5">
              <div className="flex justify-center items-center bg-primary rounded-full w-[70px] h-[70px] text-white">
                <span className="text-[24px]">2</span>
                <span className="text-[18px]">/3</span>
              </div>
              <div className="flex flex-col">
                <Title order={3}>Wash packages</Title>
                <Text className="text-[20px] font-light">
                  Which wash is best for your vehicle?
                </Text>
              </div>
            </div>
            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing={`2.5rem`}
              className={`mt-10`}
            >
              {pricingPlans}
            </SimpleGrid>
          </div>
          <div className="my-[60px]">
            <div className="flex sm:space-x-5 items-center max-sm:flex-col max-sm:items-start max-sm:space-y-5">
              <div className="flex justify-center items-center bg-primary rounded-full w-[70px] h-[70px] text-white">
                <span className="text-[24px]">3</span>
                <span className="text-[18px]">/3</span>
              </div>
              <div className="flex flex-col">
                <Title order={3}>Booking summary</Title>
                <Text className="text-[20px] font-light">
                  Please provide us with your contact information.
                </Text>
              </div>
            </div>
            <ForM />
          </div>
        </section>
      </animated.div>
    </>
  );
};

export default BookPage;

import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";
import { Card, Image, Text, Title } from "@mantine/core";
import { Header2 } from "@/src/components";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      date: new Date().toLocaleString(),
      image: ImageCollection.about3,
      shortDescription:
        "Discover the perfect work time for remote workers. Learn key strategies and insights to optimize productivity and success in remote work environments.",
      title: "Perfect Work Time for Remote Workers",
      content: `
      Pellentesque vehicula eros neque, maximus mattis est sagittis. Nulla facilisi. In sed pretium, dynamically target high-payoff intellectual capital for customized technologies objectively. Integrate emerging core competencies before process-centric communities dramatically evisculate holistic innovation rather than client-centric data.

      <span class="font-semibold text-[18px]">Key Strategies for Remote Work Success</span>


          <strong>Target High-Payoff Intellectual Capital:</strong>
          
            - Identify the most valuable skills and knowledge that contribute to your work.
            - Invest time in continuous learning and professional development.
            - Leverage your expertise to enhance productivity.

          <strong>Redefine Jobs Replaced by Technology:</strong>
          
            - Embrace automation and technology to streamline repetitive tasks.
            - Focus on tasks that require creativity, critical thinking, and problem-solving.
            - Collaborate with AI tools and virtual assistants to optimize your workflow.

      <span class="font-semibold text-[18px]">Conclusion</span>

      Collaboratively orchestrate improved work processes, ensuring seamless communication across remote teams. Remember that the job market of the future will consist of roles that robots cannot perform. Gardeners will still have jobs because every garden is different. Make real-time a day of services, and deliver the tools you need to save time and improve field performance always.
    `,
    },
  ];

  // Slide-in animation
  const slideInStyles = useSpring({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 220, friction: 30 },
  });

  const blogS = blogPosts.map((post) => (
    <Card className="" key={post.id}>
      <Text className="text-text text-sm">{post.date}</Text>
      <Image src={post.image} alt="Car Wash" className="my-4 rounded-lg" />
      <Text className="mb-5 mt-3 text-[18px]">{post.shortDescription}</Text>
      <Title order={1} className="mb-4">
        {post.title}
      </Title>
      <Text
        className="whitespace-pre-line text-[17px]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Card>
  ));

  return (
    <animated.div style={slideInStyles} className="overflow-hidden">
      <Header2
        img={ImageCollection.service9}
        topText={`Blog Post`}
        mainText={`Read Through`}
      />
      <div className={`${styles.body} py-[140px]`}>{blogS}</div>
    </animated.div>
  );
};

export default BlogPage;

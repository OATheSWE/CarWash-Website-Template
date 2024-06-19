import { styles } from "@/src/data";
import { Group, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const Login = () => {
  const form = useForm({
    initialValues: {
      password: "",
    },
  });

  return (
    <div
      className={`${styles.data} w-full h-screen bg-[#101924] flex justify-center items-center`}
    >
      <div className="bg-[#141c26] rounded-xl p-7 max-w-[500px] w-full shadow-xl">
        <Title order={3} c={`white`}>
          Login
        </Title>
        <TextInput
          mt="md"
          placeholder="Enter your password"
          name="password"
          required
          {...form.getInputProps("password")}
          size="md"
        />
        <Group justify="center">
          <input
            type="submit"
            value="Login"
            className="bg-primary border-2 border-primary rounded-xl hover:bg-transparent hover:text-white mt-[40px] px-4 py-2.5 text-[16px] transition duration-300 text-white cursor-pointer"
          />
        </Group>
      </div>
    </div>
  );
};

export default Login;

import { api } from "@/src/api";
import { SuccessModal } from "@/src/components";
import { styles } from "@/src/data";
import { Group, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useRef, useState } from "react";

const Login = () => {
  const form = useForm({
    initialValues: {
      password: "",
    },
  });

  const [modalText, setModalText] = useState(""); // State for modal text
  const successModalRef = useRef(null); // Use useRef

  const handleOpenSuccessModal = (text) => {
    setModalText(text); // Set the modal text
    // Use a callback to ensure the modal opens after state is updated
    setTimeout(() => {
      if (successModalRef.current) {
        successModalRef.current.openModal();
      }
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(api.login, form.values, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.data.success) {
        localStorage.setItem("aya", "Logged In");
        handleOpenSuccessModal(response.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else {
        handleOpenSuccessModal(response.data.message);
      }
    } catch (error) {
      handleOpenSuccessModal("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className={`${styles.data} w-full h-screen bg-[#101924] flex justify-center items-center`}
      >
        <form className="bg-[#141c26] rounded-xl p-7 max-w-[500px] w-full shadow-xl"  onSubmit={handleSubmit}>
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
              value="Submit"
              className="bg-primary border-2 border-primary rounded-xl hover:bg-transparent hover:text-white mt-[40px] px-4 py-2.5 text-[16px] transition duration-300 text-white cursor-pointer"
            />
          </Group>
        </form>
      </div>
      {/* Ensure the SuccessModal component is mounted and pass the dynamic text */}
      <SuccessModal ref={successModalRef} text={modalText} />
    </>
  );
};

export default Login;

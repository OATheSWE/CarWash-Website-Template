import { Text, TextInput, Group, SimpleGrid } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import React, { useRef, useState } from "react";
import { useForm } from "@mantine/form";
import axios from "axios";
import { router } from "expo-router";
import { SuccessModal } from "@/src/components";
import { api } from "@/src/api";
import emailjs from "@emailjs/browser";

export default function ForM({ selectedWeight, selectedPlan }) {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      model: "",
      phone: "",
      date: null,
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });
  const formD = React.useRef();

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

  const confirmBooking = async (e) => {
    e.preventDefault();
    const allData = {
      ...form.values,
      weight: selectedWeight,
      plan: selectedPlan,
    };
    try {
      const response = await axios.post(api.book, allData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      handleOpenSuccessModal(response.data.message);
      emailjs
        .sendForm(
          "service_rjeoazd",
          "template_tnc209s",
          formD.current,
          "rF1fQvhab4meehQ_0",
          form.values.email
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    } catch (error) {
      handleOpenSuccessModal("Booking failed!");
    }
  };

  const currentDate = new Date();

  return (
    <>
      <form ref={formD} className={`mt-10`} onSubmit={confirmBooking}>
        <div className={``}>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <TextInput
              label="Your name"
              placeholder="Your name"
              name="name"
              {...form.getInputProps("name")}
              required
              size="md"
            />
            <TextInput
              label="Your email"
              placeholder="hello@123.dev"
              name="email"
              required
              {...form.getInputProps("email")}
              size="md"
            />
          </SimpleGrid>

          <TextInput
            mt="md"
            label="Vehicle Make & Model"
            placeholder="Vehicle Make"
            name="model"
            required
            {...form.getInputProps("model")}
            size="md"
          />

          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <TextInput
              mt="md"
              label="Phone Number"
              placeholder="Enter your phone number"
              name="phone"
              required
              {...form.getInputProps("phone")}
              size="md"
            />

            <DateTimePicker
              mt="md"
              label="Your Appointment Date"
              placeholder="Pick date and time"
              name="date"
              required
              {...form.getInputProps("date")}
              size="md"
              minDate={currentDate}
            />
          </SimpleGrid>

          <Group justify="center">
            <input
              type="submit"
              value="Confirm Booking"
              className="bg-primary border-2 border-primary rounded-full hover:bg-transparent hover:text-primary mt-[40px] px-4 py-2.5 text-[16px] transition duration-300 text-white cursor-pointer"
            />
          </Group>
        </div>
      </form>
      {/* Ensure the SuccessModal component is mounted and pass the dynamic text */}
      <SuccessModal ref={successModalRef} text={modalText} />
    </>
  );
}

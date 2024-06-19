import { Text, TextInput, Textarea, Group, SimpleGrid, Select } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import React from "react";
import { useForm } from "@mantine/form";

export default function ForM() {
  const form = useForm({
    initialValues: {
      weight: "",
      plan: "",
      name: "",
      email: "",
      model: "",
      message: "",
      phone: "",
      date: Date | null,
      payment: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const confirmBooking = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`mt-10`} onSubmit={confirmBooking}>
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

        <Textarea
          mt="md"
          label="Your message"
          name="message"
          placeholder="Please include all relevant information"
          minRows={3}
          {...form.getInputProps("message")}
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
          />
        </SimpleGrid>

        <Select
          label="Payment type"
          placeholder="Choose payment type"
          data={[
            "Cash",
            "Stripe",
          ]}
          mt={`lg`}
          comboboxProps={{
            transitionProps: { transition: "pop", duration: 200 },
          }}
          rightSectionWidth={0}
          size={`md`}
        />

        <Group justify="center">
          <input
            type="submit"
            value="Confirm Booking"
            className="bg-primary border-2 border-primary rounded-full hover:bg-transparent hover:text-primary mt-[20px] px-4 py-2.5 text-[16px] transition duration-300 text-white cursor-pointer"
          />
        </Group>
      </div>
    </form>
  );
}

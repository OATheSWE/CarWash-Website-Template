import { styles } from "@/src/data";
import {
  Select,
  SimpleGrid,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

export default function Admin() {
  const form = useForm({
    initialValues: {
      search: "",
      filter: "",
    },
  });

  const appointments = [
    {
      Id: "e0a3d8a281e9b87959a62024-06-18",
      amount: "699 Kr",
      date: "2024-08-13 10:00",
      customer: "nvnn bnbnb",
      weight: "1501 - 1750 KG",
      plan: "Good CARE",
      payment: "stripe",
    },
  ];

  const rows = appointments.map((appointment) => (
    <Table.Tr key={appointment.Id}>
      <Table.Td>{appointment.Id}</Table.Td>
      <Table.Td>{appointment.amount}</Table.Td>
      <Table.Td>{appointment.date}</Table.Td>
      <Table.Td>{appointment.customer}</Table.Td>
      <Table.Td>{appointment.weight}</Table.Td>
      <Table.Td>{appointment.plan}</Table.Td>
      <Table.Td>{appointment.payment}</Table.Td>
    </Table.Tr>
  ));

  const rows2 = appointments.map((appointment) => (
    <Table.Tr key={appointment.Id}>
      <Table.Td>{appointment.Id}</Table.Td>
      <Table.Td>{appointment.amount}</Table.Td>
      <Table.Td>{appointment.date}</Table.Td>
    </Table.Tr>
  ));

  const rows3 = appointments.map((appointment) => (
    <Table.Tr key={appointment.Id}>
      <Table.Td>{appointment.Id}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={`${styles.body} pt-[150px] bg-[#101924] h-full w-full`}>
      <Title order={3} c={`white`}>
        Dashboard
      </Title>
      <div className="flex sm:space-x-10 mt-7 max-sm:flex-col max-sm:space-y-6">
        <div className="bg-[#141c26] sm:max-w-[330px] w-full p-6 shadow-xl rounded-xl">
          <Text className="text-white">Total Amount</Text>
          <Text className="text-white text-[32px]">$ 1,772</Text>
        </div>
        <div className="bg-[#141c26] sm:max-w-[330px] w-full p-6 shadow-xl rounded-xl">
          <Text className="text-white">All Appointments</Text>
          <Text className="text-white text-[32px]">13</Text>
        </div>
      </div>
      <Title order={3} c={`white`} mt={`xl`}>
        Appointments
      </Title>
      <div className="bg-[#141c26] mt-10 w-full rounded-xl p-8 shadow-xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            placeholder="Type in search"
            name="search"
            required
            {...form.getInputProps("search")}
            size="md"
          />

          <Select
            placeholder="Today or Alltime"
            data={["Today", "Alltime"]}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
            }}
            rightSectionWidth={0}
            size={`md`}
            name="filter"
            required
            {...form.getInputProps("filter")}
          />
        </SimpleGrid>
        <div className="mt-10 max-lg:hidden">
          <Table highlightOnHover withColumnBorders withTableBorder c={`white`}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Weight</Table.Th>
                <Table.Th>Plan</Table.Th>
                <Table.Th>Payment</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
        <div className="mt-10 hidden lg:hidden sm:block ">
          <Table highlightOnHover withColumnBorders withTableBorder c={`white`}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Date</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows2}</Table.Tbody>
          </Table>
        </div>
        <div className="mt-10 sm:hidden">
          <Table highlightOnHover withColumnBorders withTableBorder c={`white`}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows3}</Table.Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

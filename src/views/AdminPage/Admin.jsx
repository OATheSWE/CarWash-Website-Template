import { useEffect, useState } from "react";
import { styles } from "@/src/data";
import {
  Select,
  SimpleGrid,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import { useForm } from "@mantine/form";
import { api } from "@/src/api";

export default function Admin() {
  const form = useForm({
    initialValues: {
      search: "",
      filter: "Alltime",
    },
  });

  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    filterAppointments();
  }, [appointments, form.values.search, form.values.filter]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(api.fetchApps);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const filterAppointments = () => {
    const searchText = form.values.search.toLowerCase();
    const filter = form.values.filter;
    const currentDate = new Date().toLocaleDateString(); // Get current date

    const filtered = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointment_date).toLocaleDateString(); // Convert appointment date to string

      // Filter by search text in any field
      if (
        searchText &&
        !(
          appointment.customer_name.toLowerCase().includes(searchText) ||
          appointment.customer_email.toLowerCase().includes(searchText) ||
          appointment.customer_phone.toLowerCase().includes(searchText) ||
          appointment.vehicle_weight.toLowerCase().includes(searchText) ||
          appointment.wash_plan.toLowerCase().includes(searchText) ||
          appointment.vehicle_model.toLowerCase().includes(searchText)
        )
      ) {
        return false;
      }

      // Filter by date if Today filter is selected
      if (filter === "Today") {
        const currentDate = new Date().toLocaleDateString(); // Get current date
        const appointmentDate = new Date(
          appointment.appointment_date
        ).toLocaleDateString(); // Convert appointment date to string

        if (currentDate !== appointmentDate) {
          return false;
        }
      }

      return true;
    });

    setFilteredAppointments(filtered);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-GB", options);
  };

  const rows = filteredAppointments.map((appointment) => (
    <Table.Tr key={appointment.id}>
      <Table.Td>
        {appointment.id}
        <br />
        {formatDateTime(appointment.appointment_date)}
      </Table.Td>
      <Table.Td>
        {appointment.customer_name}
        <br />
        {appointment.customer_email}
        <br />
        {appointment.customer_phone}
      </Table.Td>
      <Table.Td>
        {appointment.vehicle_weight}
        <br />
        {appointment.vehicle_model}
      </Table.Td>
      <Table.Td>{appointment.wash_plan}</Table.Td>
    </Table.Tr>
  ));

  const rows2 = filteredAppointments.map((appointment) => (
    <Table.Tr key={appointment.id}>
      <Table.Td>
        {appointment.id}
        <br />
        {formatDateTime(appointment.appointment_date)}
      </Table.Td>
      <Table.Td>
        {appointment.customer_name}
        <br />
        {appointment.customer_email}
        <br />
        {appointment.customer_phone}
      </Table.Td>
      <Table.Td>
        {appointment.vehicle_weight}
        <br />
        {appointment.vehicle_model}
      </Table.Td>
    </Table.Tr>
  ));

  const rows3 = filteredAppointments.map((appointment) => (
    <Table.Tr key={appointment.id}>
      <Table.Td>
        {appointment.id}
        <br />
        {formatDateTime(appointment.appointment_date)}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={`${styles.body} py-[150px] bg-[#101924] h-full w-full`}>
      <Title order={3} c={`white`}>
        Dashboard
      </Title>
      <div className="w-full mt-7">
        <div className="bg-[#141c26] w-full p-6 shadow-xl rounded-xl">
          <Text className="text-white">All Appointments</Text>
          <Text className="text-white text-[32px]">
            {appointments.length}  
          </Text>
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
          <Table withColumnBorders withTableBorder c={`white`}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Vehicle</Table.Th>
                <Table.Th>Plan</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
        <div className="mt-10 hidden lg:hidden sm:block ">
          <Table withColumnBorders withTableBorder c={`white`}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Vehicle</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows2}</Table.Tbody>
          </Table>
        </div>
        <div className="mt-10 sm:hidden">
          <Table withColumnBorders withTableBorder c={`white`}>
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

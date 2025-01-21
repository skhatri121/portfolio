import {
  Button,
  Card,
  Flex,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { Field } from "@/components/ui/field";
import { Toaster } from "@/components/ui/toaster";

import { useSendEmail } from "../services/Contact.services";

const ContactScreen = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      from_name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      from_email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    useSendEmail(formData);
    form.reset();
  };

  return (
    <>
      <Toaster />
      <Flex justifyContent={"center"} w={"100%"}>
        <Card.Root w={"500px"} p={4} gap={4} h={"fit-content"}>
          <Text fontSize={"2xl"} fontWeight={"medium"}>
            Contact Form
          </Text>
          <form onSubmit={sendEmail}>
            <Stack gap={4}>
              <Field label="Full Name">
                <Input name="name" placeholder="Thomas Jefferson" />
              </Field>

              <Field label="Email">
                <Input name="email" placeholder="example@gmail.com" />
              </Field>

              <Field label="Subject">
                <Input name="subject" placeholder="Subject here" />
              </Field>

              <Field label="Message">
                <Textarea
                  placeholder="Type your message here..."
                  h={"200px"}
                  name="message"
                />
              </Field>

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </Card.Root>
      </Flex>
    </>
  );
};

export default ContactScreen;

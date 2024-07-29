"use client";

import Icon from "@components/ui/Icon";
import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from "@components/ui/Popover";

import Textfield from "@components/inputs/Textfield";
import {
  Select,
  SelectGroup,
  SelectItem
} from "@components/inputs/SelectAlt";

import Box from "@components/layouts/Box";
import Calendar from "@components/ui/Calendar";

function Sales() {
  return (
    <form
      autoComplete="off"
      noValidate
      className="space-y-4"
    >
      <Textfield
        type="email"
        name="email"
        label="Email"
        placeholder="Enter Your Mail"
      />

      <Box>
        <Select
          name="country"
          label="Country"
          placeholder="Select a Country"
        >
          <SelectGroup>
            <SelectItem value="DE" textValue="Germany" />
            <SelectItem value="CA" textValue="Canada" />
            <SelectItem value="AS" textValue="Austrailia" />
          </SelectGroup>
        </Select>
      </Box>

      <Button type="submit">
        Submit
        <Icon name="ArrowRight" />
      </Button>
    </form>
  );
}

export default Sales;

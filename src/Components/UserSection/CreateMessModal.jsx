"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { IoAddSharp, IoClose, IoRemoveSharp } from "react-icons/io5";

const defaultBills = [
  {
    id: 1,
    name: "Electricity",
    amount: "",
  },
  {
    id: 2,
    name: "Water",
    amount: "",
  },
  {
    id: 3,
    name: "Gas",
    amount: "",
  },
];

const CreateMessModal = () => {
  const [bills, setBills] = useState(defaultBills);

  const addBill = () => {
    setBills((current) => [
      ...current,
      {
        id: Date.now(),
        name: "",
        amount: "",
      },
    ]);
  };

  const removeBill = (id) => {
    setBills((current) => {
      if (current.length === 1) {
        return current;
      }

      return current.filter((bill) => bill.id !== id);
    });
  };

  const updateBill = (id, field, value) => {
    setBills((current) =>
      current.map((bill) =>
        bill.id === id
          ? {
              ...bill,
              [field]: value,
            }
          : bill,
      ),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      type: formData.get("type"),
      monthlyRate: formData.get("monthlyRate"),
      address: formData.get("address"),
      city: formData.get("city"),
      maxMembers: formData.get("maxMembers"),
      contact: formData.get("contact"),
      description: formData.get("description"),

      bills: bills.map((bill) => ({
        name: bill.name,
        amount: bill.amount,
      })),
    };

    console.log("Mess Data:", data);
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button
        variant="primary"
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-green-900"
      >
        <IoAddSharp size={22} />
        Create Mess
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="w-full max-w-2xl overflow-hidden rounded-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <IoAddSharp size={23} />
                </div>

                <div>
                  <Modal.Heading className="text-xl font-bold text-gray-950">
                    Create New Mess
                  </Modal.Heading>

                  <p className="mt-1 text-sm text-gray-500">
                    Add the basic information and monthly bills for your mess.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="max-h-[72vh] overflow-y-auto px-6 py-5">
              <Form className="w-full" onSubmit={onSubmit}>
                <Fieldset className="w-full">
                  <Fieldset.Legend className="sr-only">
                    Mess Information
                  </Fieldset.Legend>

                  <Description className="sr-only">
                    Enter the information required to create a new mess.
                  </Description>

                  <FieldGroup className="gap-5">
                    {/* Mess Name */}
                    <TextField
                      isRequired
                      name="name"
                      className="w-full"
                      validate={(value) => {
                        if (!value?.trim()) {
                          return "Mess name is required";
                        }

                        if (value.trim().length < 3) {
                          return "Mess name must be at least 3 characters";
                        }

                        return null;
                      }}
                    >
                      <Label className="text-sm font-semibold text-gray-700">
                        Mess Name
                      </Label>

                      <Input
                        placeholder="e.g. Green View Mess"
                        className="mt-1 h-11 rounded-xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Mess Type + Monthly Rate */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Mess Type */}
                      <div className="w-full">
                        <label
                          htmlFor="mess-type"
                          className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                          Mess Type
                          <span className="ml-1 text-red-500">*</span>
                        </label>

                        <select
                          id="mess-type"
                          name="type"
                          required
                          defaultValue=""
                          className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        >
                          <option value="" disabled>
                            Select mess type
                          </option>

                          <option value="boys">Boys Mess</option>
                          <option value="girls">Girls Mess</option>
                          <option value="mixed">Mixed Mess</option>
                        </select>
                      </div>

                      {/* Monthly Rate */}
                      <TextField
                        isRequired
                        name="monthlyRate"
                        className="w-full"
                        validate={(value) => {
                          if (!value) {
                            return "Monthly rate is required";
                          }

                          if (Number(value) <= 0) {
                            return "Enter a valid monthly rate";
                          }

                          return null;
                        }}
                      >
                        <Label className="text-sm font-semibold text-gray-700">
                          Monthly Rate
                        </Label>

                        <Input
                          type="number"
                          min="0"
                          placeholder="e.g. 2500"
                          className="mt-1 h-11 rounded-xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Address */}
                    <TextField
                      isRequired
                      name="address"
                      className="w-full"
                      validate={(value) => {
                        if (!value?.trim()) {
                          return "Address is required";
                        }

                        if (value.trim().length < 5) {
                          return "Please enter a valid address";
                        }

                        return null;
                      }}
                    >
                      <Label className="text-sm font-semibold text-gray-700">
                        Address
                      </Label>

                      <Input
                        placeholder="House 12, Road 5, GEC"
                        className="mt-1 h-11 rounded-xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* City + Maximum Members */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* City */}
                      <TextField isRequired name="city" className="w-full">
                        <Label className="text-sm font-semibold text-gray-700">
                          City
                        </Label>

                        <Input
                          placeholder="e.g. Chattogram"
                          className="mt-1 h-11 rounded-xl"
                        />

                        <FieldError />
                      </TextField>

                      {/* Maximum Members */}
                      <TextField
                        isRequired
                        name="maxMembers"
                        className="w-full"
                        validate={(value) => {
                          if (!value) {
                            return "Maximum members is required";
                          }

                          if (Number(value) < 1) {
                            return "Must be at least 1";
                          }

                          return null;
                        }}
                      >
                        <Label className="text-sm font-semibold text-gray-700">
                          Maximum Members
                        </Label>

                        <Input
                          type="number"
                          min="1"
                          placeholder="e.g. 20"
                          className="mt-1 h-11 rounded-xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Contact */}
                    <TextField
                      name="contact"
                      className="w-full"
                      validate={(value) => {
                        if (!value) {
                          return null;
                        }

                        if (!/^[0-9+\-\s]{10,15}$/.test(value)) {
                          return "Enter a valid contact number";
                        }

                        return null;
                      }}
                    >
                      <Label className="text-sm font-semibold text-gray-700">
                        Contact Number
                      </Label>

                      <Input
                        type="tel"
                        placeholder="e.g. 017XXXXXXXX"
                        className="mt-1 h-11 rounded-xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Bills Section */}
                    <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                      {/* Bills Header */}
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">
                            Monthly Bills
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Add electricity, water, gas and other monthly
                            expenses.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={addBill}
                          className="flex size-9 items-center justify-center rounded-xl bg-green-800 text-white shadow-sm transition hover:bg-green-900"
                          title="Add another bill"
                        >
                          <IoAddSharp size={21} />
                        </button>
                      </div>

                      {/* Bills */}
                      <div className="space-y-3">
                        {bills.map((bill, index) => (
                          <div
                            key={bill.id}
                            className="flex items-end gap-2 rounded-xl border border-gray-100 bg-white p-3"
                          >
                            {/* Bill Name */}
                            <div className="min-w-0 flex-1">
                              <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                                Bill Name
                              </label>

                              <Input
                                value={bill.name}
                                onChange={(e) =>
                                  updateBill(bill.id, "name", e.target.value)
                                }
                                placeholder={
                                  index === 0
                                    ? "Electricity"
                                    : index === 1
                                      ? "Water"
                                      : index === 2
                                        ? "Gas"
                                        : "e.g. Internet"
                                }
                                className="h-10 rounded-lg"
                              />
                            </div>

                            {/* Amount */}
                            <div className="w-[120px] shrink-0">
                              <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                                Amount
                              </label>

                              <Input
                                type="number"
                                min="0"
                                value={bill.amount}
                                onChange={(e) =>
                                  updateBill(bill.id, "amount", e.target.value)
                                }
                                placeholder="৳ 0"
                                className="h-10 rounded-lg"
                              />
                            </div>

                            {/* Remove */}
                            <button
                              type="button"
                              onClick={() => removeBill(bill.id)}
                              disabled={bills.length === 1}
                              className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition ${
                                bills.length === 1
                                  ? "cursor-not-allowed bg-gray-100 text-gray-300"
                                  : "bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600"
                              }`}
                              title="Remove bill"
                            >
                              <IoRemoveSharp size={19} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Total */}
                      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
                        <span className="text-xs font-semibold text-gray-500">
                          Total Monthly Bills
                        </span>

                        <span className="text-sm font-bold text-green-800">
                          ৳{" "}
                          {bills
                            .reduce(
                              (total, bill) =>
                                total + (Number(bill.amount) || 0),
                              0,
                            )
                            .toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <TextField
                      name="description"
                      className="w-full"
                      validate={(value) => {
                        if (value && value.length > 500) {
                          return "Description cannot exceed 500 characters";
                        }

                        return null;
                      }}
                    >
                      <Label className="text-sm font-semibold text-gray-700">
                        Description
                      </Label>

                      <TextArea
                        placeholder="Write a short description about the mess..."
                        className="mt-1 min-h-[90px] rounded-xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Actions */}
                    <Fieldset.Actions className="mt-2 flex w-full flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                      <Button
                        type="reset"
                        variant="secondary"
                        className="h-11 rounded-xl px-5 text-sm font-semibold"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        className="h-11 rounded-xl bg-green-800 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-green-900"
                      >
                        <IoAddSharp size={19} />
                        Create Mess
                      </Button>
                    </Fieldset.Actions>
                  </FieldGroup>
                </Fieldset>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CreateMessModal;

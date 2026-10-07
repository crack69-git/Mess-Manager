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

import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

/* =========================================================
   BANGLADESH DIVISIONS & DISTRICTS
========================================================= */

const bangladeshDivisions = {
  Barishal: [
    "Barguna",
    "Barishal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
  ],

  Chattogram: [
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Cumilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
  ],

  Dhaka: [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
  ],

  Khulna: [
    "Bagerhat",
    "Chuadanga",
    "Jashore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ],

  Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],

  Rajshahi: [
    "Bogura",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
  ],

  Rangpur: [
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
  ],

  Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
};

/* =========================================================
   DEFAULT BILLS
========================================================= */

const defaultBills = [
  {
    id: 1,
    name: "Electricity",
    amount: "",
  },
];

/* =========================================================
   DEFAULT RULES
========================================================= */

const defaultRules = [
  {
    id: 1,
    text: "",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const CreateMessModal = () => {
  const [bills, setBills] = useState(defaultBills);

  const [rules, setRules] = useState(defaultRules);

  const [selectedDivision, setSelectedDivision] = useState("");

  /* =======================================================
     BILL FUNCTIONS
  ======================================================= */

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

  /* =======================================================
     RULE FUNCTIONS
  ======================================================= */

  const addRule = () => {
    setRules((current) => [
      ...current,
      {
        id: Date.now(),
        text: "",
      },
    ]);
  };

  const removeRule = (id) => {
    setRules((current) => {
      if (current.length === 1) {
        return current;
      }

      return current.filter((rule) => rule.id !== id);
    });
  };

  const updateRule = (id, value) => {
    setRules((current) =>
      current.map((rule) =>
        rule.id === id
          ? {
              ...rule,
              text: value,
            }
          : rule,
      ),
    );
  };

  /* =======================================================
     DIVISION CHANGE
  ======================================================= */

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),

      type: formData.get("type"),

      monthlyRate: Number(formData.get("monthlyRate")),

      numberOfMeals: Number(formData.get("numberOfMeals")),

      address: {
        floorNumber: formData.get("floorNumber"),

        buildingName: formData.get("buildingName"),

        division: formData.get("division"),

        district: formData.get("district"),

        fullAddress: formData.get("fullAddress"),
      },

      maxMembers: Number(formData.get("maxMembers")),

      contact: formData.get("contact"),

      rules: rules.map((rule) => rule.text.trim()).filter(Boolean),

      bills: bills
        .filter((bill) => bill.name.trim() || bill.amount)
        .map((bill) => ({
          name: bill.name.trim(),
          amount: Number(bill.amount) || 0,
        })),
    };

    console.log("Mess Data:", data);
  };

  /* =======================================================
     RESET
  ======================================================= */

  const handleReset = () => {
    setBills(defaultBills);

    setRules(defaultRules);

    setSelectedDivision("");
  };

  /* =======================================================
     TOTAL BILLS
  ======================================================= */

  const totalMonthlyBills = bills.reduce(
    (total, bill) => total + (Number(bill.amount) || 0),
    0,
  );

  /* =======================================================
     CURRENT DISTRICTS
  ======================================================= */

  const districts = selectedDivision
    ? bangladeshDivisions[selectedDivision] || []
    : [];

  return (
    <Modal>
      {/* ===================================================
          TRIGGER
      =================================================== */}

      <Button
        variant="primary"
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-green-800 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-green-900"
      >
        <IoAddSharp size={22} />
        Create Mess
      </Button>

      {/* ===================================================
          MODAL
      =================================================== */}

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="w-full max-w-3xl overflow-hidden rounded-3xl">
            <Modal.CloseTrigger />

            {/* =================================================
                HEADER
            ================================================= */}

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
                    Add mess information, location, meals, rules and monthly
                    bills.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* =================================================
                BODY
            ================================================= */}

            <Modal.Body className="max-h-[75vh] overflow-y-auto px-6 py-5">
              <Form className="w-full" onSubmit={onSubmit}>
                <Fieldset className="w-full">
                  <Fieldset.Legend className="sr-only">
                    Mess Information
                  </Fieldset.Legend>

                  <Description className="sr-only">
                    Enter the information required to create a new mess.
                  </Description>

                  <FieldGroup className="gap-5">
                    {/* =========================================
                        MESS NAME
                    ========================================== */}

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

                    {/* =========================================
                        TYPE + MONTHLY RATE
                    ========================================== */}

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

                          <option value="family">Family</option>

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

                    {/* =========================================
                        NUMBER OF MEALS
                    ========================================== */}

                    <TextField
                      isRequired
                      name="numberOfMeals"
                      className="w-full"
                      validate={(value) => {
                        if (!value) {
                          return "Number of meals is required";
                        }

                        if (Number(value) < 1) {
                          return "Number of meals must be at least 1";
                        }

                        if (Number(value) > 10) {
                          return "Number of meals cannot exceed 10";
                        }

                        return null;
                      }}
                    >
                      <Label className="text-sm font-semibold text-gray-700">
                        Number of Meals Per Day
                      </Label>

                      <Input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="e.g. 2"
                        className="mt-1 h-11 rounded-xl"
                      />

                      <p className="mt-1.5 text-xs text-gray-400">
                        Example: 2 meals = lunch and dinner.
                      </p>

                      <FieldError />
                    </TextField>

                    {/* =========================================
                        ADDRESS SECTION
                    ========================================== */}

                    <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                      <div className="mb-5">
                        <h3 className="text-sm font-bold text-gray-900">
                          Mess Address
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          Provide the complete location of the mess.
                        </p>
                      </div>

                      <div className="space-y-5">
                        {/* Floor + Building */}

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          {/* Floor Number */}

                          <TextField name="floorNumber" className="w-full">
                            <Label className="text-sm font-semibold text-gray-700">
                              Floor Number
                            </Label>

                            <Input
                              type="text"
                              placeholder="e.g. 5th Floor"
                              className="mt-1 h-11 rounded-xl"
                            />

                            <p className="mt-1.5 text-xs text-gray-400">
                              Keep this as text, e.g. Ground Floor, 2nd Floor,
                              5th Floor.
                            </p>

                            <FieldError />
                          </TextField>

                          {/* Building Name */}

                          <TextField name="buildingName" className="w-full">
                            <Label className="text-sm font-semibold text-gray-700">
                              Building Name
                            </Label>

                            <Input
                              type="text"
                              placeholder="e.g. Green Tower"
                              className="mt-1 h-11 rounded-xl"
                            />

                            <FieldError />
                          </TextField>
                        </div>

                        {/* Division + District */}

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          {/* Division */}

                          <div className="w-full">
                            <label
                              htmlFor="division"
                              className="mb-1.5 block text-sm font-semibold text-gray-700"
                            >
                              Division
                              <span className="ml-1 text-red-500">*</span>
                            </label>

                            <select
                              id="division"
                              name="division"
                              required
                              value={selectedDivision}
                              onChange={handleDivisionChange}
                              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                            >
                              <option value="" disabled>
                                Select division
                              </option>

                              {Object.keys(bangladeshDivisions).map(
                                (division) => (
                                  <option key={division} value={division}>
                                    {division}
                                  </option>
                                ),
                              )}
                            </select>
                          </div>

                          {/* District */}

                          <div className="w-full">
                            <label
                              htmlFor="district"
                              className="mb-1.5 block text-sm font-semibold text-gray-700"
                            >
                              District
                              <span className="ml-1 text-red-500">*</span>
                            </label>

                            <select
                              id="district"
                              name="district"
                              required
                              disabled={!selectedDivision}
                              defaultValue=""
                              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                            >
                              <option value="" disabled>
                                {selectedDivision
                                  ? "Select district"
                                  : "Select division first"}
                              </option>

                              {districts.map((district) => (
                                <option key={district} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Full Address */}

                        <TextField
                          isRequired
                          name="fullAddress"
                          className="w-full"
                          validate={(value) => {
                            if (!value?.trim()) {
                              return "Full address is required";
                            }

                            if (value.trim().length < 10) {
                              return "Please enter a complete address";
                            }

                            return null;
                          }}
                        >
                          <Label className="text-sm font-semibold text-gray-700">
                            Full Address
                          </Label>

                          <TextArea
                            placeholder="e.g. House 12, Road 5, GEC Circle, Chattogram"
                            className="mt-1 min-h-[90px] rounded-xl"
                          />

                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* =========================================
                        MAX MEMBERS + CONTACT
                    ========================================== */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                    </div>

                    {/* =========================================
                        RULES
                    ========================================== */}

                    <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                      {/* Rules Header */}

                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">
                            Mess Rules
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Add rules that members should follow in the mess.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={addRule}
                          className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-green-800 px-3 text-xs font-bold text-white shadow-sm transition hover:bg-green-900"
                        >
                          <IoAddSharp size={18} />
                          Add Rule
                        </button>
                      </div>

                      {/* Rules */}

                      <div className="space-y-3">
                        {rules.map((rule, index) => (
                          <div
                            key={rule.id}
                            className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3"
                          >
                            {/* Number */}

                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-xs font-bold text-green-800">
                              {index + 1}
                            </div>

                            {/* Rule */}

                            <div className="min-w-0 flex-1">
                              <Input
                                value={rule.text}
                                onChange={(e) =>
                                  updateRule(rule.id, e.target.value)
                                }
                                placeholder={
                                  index === 0
                                    ? "e.g. Keep common areas clean"
                                    : "Enter mess rule"
                                }
                                className="h-10 rounded-lg w-full"
                              />
                            </div>

                            {/* Remove */}

                            <button
                              type="button"
                              onClick={() => removeRule(rule.id)}
                              disabled={rules.length === 1}
                              className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition ${
                                rules.length === 1
                                  ? "cursor-not-allowed bg-gray-100 text-gray-300"
                                  : "bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600"
                              }`}
                              title="Remove rule"
                            >
                              <IoRemoveSharp size={19} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Rule Count */}

                      <div className="mt-4 border-t border-gray-200 pt-3">
                        <p className="text-xs text-gray-400">
                          {rules.length} {rules.length === 1 ? "rule" : "rules"}{" "}
                          added
                        </p>
                      </div>
                    </div>

                    {/* =========================================
                        MONTHLY BILLS
                    ========================================== */}

                    <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4">
                      {/* Bills Header */}

                      <div className="mb-4 flex items-center justify-between gap-4">
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
                          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-green-800 text-white shadow-sm transition hover:bg-green-900"
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
                                className="h-10 rounded-lg w-full"
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
                          ৳ {totalMonthlyBills.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* =========================================
                        ACTIONS
                    ========================================== */}

                    <Fieldset.Actions className="mt-2 flex w-full flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                      <Button
                        type="reset"
                        variant="secondary"
                        onPress={handleReset}
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

// IndexPage.spec.js
import IndexPage from "src/pages/IndexPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("IndexPage", () => {
  it("ตรวจสอบข้อมูลส่วนตัว (information)", () => {
    const wrapper = shallowMount(IndexPage);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("ชื่อ");
  });


it("ตรวจสอบรหัสนักศึกษา (studentcode)", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        title: "6604101309",
      };
    },
  });

  let header = wrapper.find(".htmlClass h1");
  expect(header.text()).toBe("6604101309");
});

it("ตรวจสอบชื่อเล่น (nickname)", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        title: "ฟิล์ม",
      };
    },
  });

  let header = wrapper.find(".htmlClass h1");
  expect(header.text()).toBe("ฟิล์ม");
});

it("ตรวจสอบชื่อ (name)", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        title: "กุลธิดา",
      };
    },
  });

  let header = wrapper.find(".htmlClass h1");
  expect(header.text()).toBe("กุลธิดา");
});

it("ตรวจสอบนามสกุล (lastname)", () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        title: "เกตุแก้ว",
      };
    },
  });

  let header = wrapper.find(".htmlClass h1");
  expect(header.text()).toBe("เกตุแก้ว");
});
});

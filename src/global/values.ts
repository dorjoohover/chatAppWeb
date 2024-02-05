import {
  imgHeader1,
  imgHeader2,
  imgHeader3,
  imgHeader4,
  imgHeader5,
} from "./assets";
import {
  SurveyCardActionTypes,
  SurveySortTypes,
  SurveyTypes,
  TextBoxTypes,
} from "./enum";
import { nav1, nav2, nav3 } from "./string";
import { MdOutlineArrowDropDownCircle, MdOutlineShortText, MdOutlineTextFields } from "react-icons/md";
import { BsTextParagraph } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckboxOutline, IoMdRadioButtonOn } from "react-icons/io";
// export const api = "http://localhost:5050/api/";
export const api = "139.162.40.225:5050/api/";
// export const url = "http://localhost:3000/";
export const url = "https://chat-app-web-xi.vercel.app";
export const navbar = [
  {
    text: nav1,
    value: "/#about",
  },
  {
    text: nav2,

    value: "/#pricing",
  },
  {
    text: nav3.toUpperCase(),
    value: "/#faq",
  },
];

export const headers = [
  imgHeader1,
  imgHeader2,
  imgHeader3,
  imgHeader4,
  imgHeader5,
  imgHeader1,
];
export const bottom = [
  imgHeader1,
  imgHeader2,
  imgHeader3,
  imgHeader4,
  imgHeader5,
];
export const productBottom = [imgHeader1, imgHeader2, imgHeader3];

export const productTop = [imgHeader1, imgHeader2];

export const aboutsRight = [
  "https://uploads-ssl.webflow.com/64a6caa646429ed756eb2d03/64a6cdff000962bbfb4a9d10_stewart-maclean-Zs1WKNa4Oy0-unsplash.jpg",
  "https://uploads-ssl.webflow.com/64a6caa646429ed756eb2d03/64a6cdff000962bbfb4a9cf9_card2.jpg",
];
export const aboutsLeft = [
  "https://uploads-ssl.webflow.com/64a6caa646429ed756eb2d03/64a6cdff000962bbfb4a9cea_card1.jpg",
  "https://uploads-ssl.webflow.com/64a6caa646429ed756eb2d03/64a6cdff000962bbfb4a9cd5_sc3.jpg",
];

export const questions = [
  {
    title: "How can our SaaS product benefit your business?",
    value:
      "Our SaaS product can benefit your business by automating time-consuming tasks, improving collaboration and communication between team members, and providing real-time data insights to help you make informed business decisions. It can also reduce costs associated with on-premise software solutions.",
  },

  {
    title: "How easy is it to use our SaaS product?",
    value:
      "Our SaaS product is designed to be intuitive and user-friendly. We offer extensive documentation and customer support to help you get started quickly and easily. Additionally, our product is regularly updated with new features and improvements based on customer feedback.",
  },
  {
    title: "What is our SaaS product?",
    value:
      "Our SaaS product is a cloud-based software solution designed to streamline your business operations and improve productivity. It is a flexible and scalable platform that can be customized to fit your unique needs.",
  },
  {
    title: "Can our SaaS product integrate with other software systems?",
    value:
      "Yes, our SaaS product is designed to integrate with a wide range of other software systems, including popular CRM, ERP, and accounting software. We offer robust APIs and developer tools to make integration as seamless as possible.",
  },
];

export class SurveyValues {
  static sorting = [
    {
      type: SurveySortTypes.LASTOPENED,
      text: "Хамгийн сүүлд нээсэн",
    },
    {
      type: SurveySortTypes.TITLE,
      text: "Гарчигаар",
    },
  ];

  static cartActions = [
    {
      type: SurveyCardActionTypes.RENAME,
      text: "Нэр солих",
      icon: MdOutlineTextFields,
    },
    {
      type: SurveyCardActionTypes.REMOVE,
      text: "Устгах",
      icon: RiDeleteBin6Line,
    },
  ];

  static tabs = [
    {
      type: SurveyTypes.QUESTION,
      text: "Асуултууд",
    },
    {
      type: SurveyTypes.ANSWER,
      text: "Хариултууд",
    },
  ];
  static inputs = [
    {
      type: TextBoxTypes.SHORT,
      text: "Богино хариулт",
      icon: MdOutlineShortText 
    },
    {
      type: TextBoxTypes.PARAGRAPH,
      text: "Догол мөр",
      icon: BsTextParagraph
    },
    {
      type: TextBoxTypes.MULTIPLE,
      text: "Олон сонголт",
      icon: IoMdRadioButtonOn
    },
    {
      type: TextBoxTypes.CHECKBOX,
      text: "Шалгах хайрцаг",
      icon: IoIosCheckboxOutline
    },
    {
      type: TextBoxTypes.DROPDOWN,
      text: "Уналт",
      icon: MdOutlineArrowDropDownCircle
    },
  ];
}

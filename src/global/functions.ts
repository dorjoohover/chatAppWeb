import { auth, provider } from "@/firebase";
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth/cordova";
import { SurveySortTypes } from "./enum";
import { SurveyValues } from "./values";

export type FilterType = {
  value: string;
  name: string;
  sub?: FilterType[];
};
export function filterName(value: string, arr: FilterType[]): string {
  let res = arr.filter((d) => d.value == value);
  if (res.length > 0) {
    return res[0].name;
  } else {
    return "";
  }
}

export class DateFormat {
  meridiem(value: string) : string {
    if(value == '')  return ''
    let date = new Date(value)
    const hour = date.getHours()
    const meridiem = hour > 12 ? "PM" : "AM"
    return `${(hour + 11) % 12 + 1}:${date.getMinutes()} ${meridiem}`
    
  }
}

export class SurveyFunctions {
  surveySortTypeName(value: SurveySortTypes): string {
    return SurveyValues.sorting.find((f) => f.type == value)!.text;
  }
}

import { HostelMenuItem } from "@/types/card";
import sunday from "@/public/weekdays/sunday-svgrepo-com.svg";
import monday from "@/public/weekdays/monday-svgrepo-com.svg";
import tuesday from "@/public/weekdays/tuesday-svgrepo-com.svg";
import wednesday from "@/public/weekdays/wednesday-svgrepo-com.svg";
import thursday from "@/public/weekdays/thursday-svgrepo-com.svg";
import friday from "@/public/weekdays/friday-svgrepo-com.svg";
import saturday from "@/public/weekdays/saturday.svg";

const weeklyMenu: HostelMenuItem[] = [
  {
    title: "Monday",
    dayTime: "08:00 - 12:00", 
    nightTime: "19:00 - 23:00", 
    morningFood: "Rice with lentil soup (Dal) and vegetable curry", 
    eveningFood: "Aloo Tikki (potato patties)", 
    nightFood: "Rice with chicken curry and salad", 
    icons: monday,
  },
  {
    title: "Tuesday",
    dayTime: "08:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with egg curry and sautéed greens",
    eveningFood: "Chura (beaten rice) with yogurt",
    nightFood: "Rice with fish curry and pickles",
    icons: tuesday,
  },
  {
    title: "Wednesday",
    dayTime: "08:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with meat curry and mixed vegetable stir-fry",
    eveningFood: "Pani Puri (water-filled crispy shells)",
    nightFood: "Rice with mutton curry and salad",
    icons: wednesday,
  },
  {
    title: "Thursday",
    dayTime: "08:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with chickpea curry (Chana) and spinach",
    eveningFood: "Momos (dumplings) with dipping sauce",
    nightFood: "Rice with vegetable curry and yogurt",
    icons: thursday,
  },
  {
    title: "Friday",
    dayTime: "08:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with potato curry and mixed salad",
    eveningFood: "Samosa (fried pastry with filling)",
    nightFood: "Rice with pork curry and pickles",
    icons: friday,
  },
  {
    title: "Saturday",
    dayTime: "09:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with vegetable stir-fry and dal",
    eveningFood: "Paneer Tikka (grilled cheese)",
    nightFood: "Rice with lentil curry and green salad",
    icons: saturday,
  },
  {
    title: "Sunday",
    dayTime: "09:00 - 12:00",
    nightTime: "19:00 - 23:00",
    morningFood: "Rice with fish curry and vegetable side",
    eveningFood: "Bhel Puri (puffed rice with vegetables)",
    nightFood: "Rice with chicken stir-fry and pickle",
    icons: sunday,
  },
];

export default weeklyMenu;

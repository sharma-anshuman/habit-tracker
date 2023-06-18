import React, { createContext, useContext, useReducer } from "react";
import { Habits } from "../db/HabitsDB";

const MainHabitContext = createContext();

const HabitContext = ({ children }) => {
  const handleHabits = (acc, { id, action }) => {
    switch (action) {
      case "add": {
        console.log("here in the adddd", id);
        return {
          ...acc,
          allHabits: [...acc.allHabits, id],
          habits: [...acc.habits, id.id],
        };
      }

      case "edit": {
        return {
          ...acc,
          allHabits: [
            ...acc.habits.map((item) => (item.id === id.id ? id : item)),
          ],
        };
      }

      case "mta": {
        return {
          ...acc,
          habits: [...acc.habits.filter((num) => num != id)],
          archives: [...acc.archives, id],
        };
      }

      case "delete": {
        console.log("here in delete");
        console.log(acc.habits.length, id);
        return {
          ...acc,
          habits: [...acc.habits.filter((num) => num !== id)],
        };
      }

      case "close": {
        return {
          ...acc,
          showModal: false,
        };
      }

      case "open": {
        return {
          ...acc,
          showModal: true,
        };
      }
    }
  };

  const [HabitsObj, dispatch] = useReducer(handleHabits, {
    allHabits: [...Habits],
    habits: [...Habits.map(({ id }) => id)],
    archives: [],
    showModal: false,
  });

  const elements = { Habits, HabitsObj, dispatch };
  return (
    <MainHabitContext.Provider value={elements}>
      {children}
    </MainHabitContext.Provider>
  );
};

export const UseHabits = () => {
  return useContext(MainHabitContext);
};

export default HabitContext;

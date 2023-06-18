import React, { createContext, useContext, useReducer } from "react";
import { Habits } from "../db/HabitsDB";
import { useNavigate } from "react-router-dom";

const MainHabitContext = createContext();

const HabitContext = ({ children }) => {
  const navigate = useNavigate();
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
          habits: [...acc.habits.filter((num) => num !== id)],
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
          showDetailsModal: false,
          showAddModal: false,
          showEditModal: false,
        };
      }

      case "openAdd": {
        return {
          ...acc,
          showAddModal: true,
        };
      }
      case "openDetails": {
        return {
          ...acc,
          showAddModal: true,
        };
      }
      case "openEdit": {
        return {
          ...acc,
          showAddModal: true,
        };
      }

      case "closeDetail": {
        navigate('/');
        return {...acc};
      }
    }
  };

  const [HabitsObj, dispatch] = useReducer(handleHabits, {
    allHabits: [...Habits],
    habits: [...Habits.map(({ id }) => id)],
    archives: [],
    showDetailsModal: false,
    showAddModal: false,
    showEditModal: false,
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

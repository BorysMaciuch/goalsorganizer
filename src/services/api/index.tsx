import axios from "axios";

export const getGoals = () => {
  return axios
    .get("http://localhost:5000/goals")
    .then((res) => res.data);
};

export const addGoal = (
  e: React.FormEvent<HTMLButtonElement>,
  goalTitle: string,
  id: string
) => {
  axios
    .post("http://localhost:5000/goals/add-goal", {
      id: id,
      title: goalTitle,
      actionPoints: [],
    })
    .catch((err) => console.log(err));
};

export const deleteGoal = (
  e: React.FormEvent<HTMLButtonElement>,
  id: string
) => {
  axios
    .delete(`http://localhost:5000/goals/delete-goal/${id}`)
    .catch((err) => console.log(err));
};

export const addActionPoint = (
  e: React.FormEvent<HTMLButtonElement>,
  actionPointTitle: string,
  id: string
) => {
  axios
    .patch(`http://localhost:5000/goals/add-goal/${id}`, {
      actionPoints: actionPointTitle,
      _id: id,
    })
    .catch((err) => console.log(err));
}
export const deleteActionPoint = (
  e: React.FormEvent<HTMLButtonElement>,
  goalId: string,
  id: string
) => {
  axios
    .post(`http://localhost:5000/goals/delete-action-point/${id}`, {
      goalId: goalId,
    })
    .catch((err) => console.log(err));
};
export const editActionPoint = (
  e: React.FormEvent<HTMLButtonElement>,
  goalId: string,
  id: string,
  description: string
) => {
  axios
    .patch(`http://localhost:5000/goals/edit-action-point/${id}`, {
      goalId: goalId,
      description: description,
    })
    .catch((err) => console.log(err));
};

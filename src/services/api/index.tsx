import axios from "axios";
import { ParametersType } from '../../pages/GoalsDashboard/index'

export const getGoals = (userId: string) => {
  return axios.get(`http://localhost:5000/goals/${userId}`).then((res) => res.data);
};

export const addGoal = (
  e: React.FormEvent<HTMLButtonElement>,
  goalTitle: string,
  id: string,
  userId: string,
) => {
  axios
    .post("http://localhost:5000/goals/add-goal", {
      id,
      title: goalTitle,
      actionPoints: [],
      userId,
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

export const editGoal = (
  e: React.FormEvent<HTMLButtonElement>,
  description: string,
  parameters: ParametersType
) => {
  console.log('edit goal bro', parameters)
  const { goalId } = parameters 
  axios
    .patch(`http://localhost:5000/goals/edit-goal/${goalId}`, {
      description: description,
    })
    .catch((err) => console.log(err));
};

export const addActionPoint = (
  e: React.FormEvent<HTMLButtonElement>,
  actionPointTitle: string,
  id: string,
  actionPointId: string
) => {
  axios
    .patch(`http://localhost:5000/goals/add-goal/${id}`, {
      actionPoints: actionPointTitle,
      _id: actionPointId,
    })
    .catch((err) => console.log(err));
};
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
  description: string,
  parameters: ParametersType
) => {
  const { goalId, id } = parameters
  axios
    .patch(`http://localhost:5000/goals/edit-action-point/${id}`, {
      goalId: goalId,
      description: description,
    })
    .catch((err) => console.log(err));
};

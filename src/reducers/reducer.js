import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = [{
  id: 0,
  title: "category 0",
  type: "cotegory", 
  items: [
    {
      id: 0,
      type: "toDo",
      title: "ro-do item 0.0",
      done: false,
      text: "lslls",
    },
    {
      id: 1,
      title: "ro-do item 0.1",
      done: false,
      text: "lslls",
    },
    {
      id: 2,
      title: "ro-do item 0.2",
      done: false,
      text: "lslls",
    }
  ]

}, {
  id: 1,
  title: "category 1",
  type: "cotegory",
  items: [
    {
      id: 3,
      type: "toDo",
      title: "ro-do item 1.0",
      done: false,
      text: "lslls",
    },
    {
      id: 4,
      type: "toDo",
      title: "ro-do item 1.1",
      done: false,
      text: "lslls",
    },
    {
      id: 5,
      type: "toDo",
      title: "ro-do item 1.2",
      done: false,
      text: "lslls",
    }
  ]
}, {
  id: 2,
  title: "category 3",
  type: "cotegory",
  items: [],
  childIsVisible: true,
  childCategories: [
    {
      id: 0,
      title: "category 3.1",
      type: "childCotegory",
      items: [
        {
          id: 6,
          type: "toDo",
          title: "to-do item 3.1.1",
          done: false,
          text: "lslls",
        },
        {
          id: 7,
          type: "toDo",
          title: "to-do item 3.1.2",
          done: false,
          text: "lslls",
        },
        {
          id: 8,
          type: "toDo",
          title: "to-do item 3.1.3",
          done: false,
          text: "lslls",
        }
      ]  
    }, {
      id:1,
      title: "category 3.2",
      type: "childCotegory",
      items: [
        {
          id: 9,
          type: "toDo",
          title: "to-do item 3.2.1",
          done: false,
          text: "lslls",
        },
        {
          id: 10,
          type: "toDo",
          title: "to-do item 3.2.2",
          done: false,
          text: "lslls",
        },
        {
          id: 11,
          type: "toDo",
          title: "to-do item 3.2.3",
          done: false,
          text: "lslls",
        }
      ]  
    }
  ]
}];

const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.toDoList.checkTodo]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.edit]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.addCat]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.addTodo]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.deleteCat]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.addChildCategory]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.toggleCategories]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.toDoList.moveTodo]: (state, { payload }) => ({ ...state, data: payload })
}, defaultState);

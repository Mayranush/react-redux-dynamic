import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';

const addCatResponse = createAction(ActionTypes.toDoList.addCat);

export function addCat(title) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().toDoList.data);
    let newCat = {
      id: tools.idGeneratorForCat(),
      title: title,
      type: "cotegory",
      items: []
    };
    newState.push(newCat);
    return dispatch(addCatResponse(newState))
  };
}

const addTodoResponse = createAction(ActionTypes.toDoList.addTodo);

export function addTodo(id, title) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().toDoList.data);    
    let todo = {      
      id: tools.idGeneratorForTodo(),
      text: title,
      title: title,
      type:"toDo",
      done: false
    }
    newState.filter((category) => ((category.id == id && category.items.push(todo)) ||
      (id.indexOf("-") > -1 && category.id == id.substring(0, id.indexOf("-")) && 
      category.childCategories.map((childCategory) => {
        if(category.id + '-' + childCategory.id == id) {
          childCategory.items.push(todo);
        } 
      }
      ))    
    ))
    return dispatch(addTodoResponse(newState))
  };
}

const deleteCatResponse = createAction(ActionTypes.toDoList.deleteCat);

export function deleteCat(id) {  
  return (dispatch) => {  
    let state = tools.cloneState(store.getState().toDoList.data); 
    let newState;
    if (id.indexOf("-") > -1) {
      newState = state.map((cat) => {
        if(cat.id == id.substring(0, id.indexOf("-"))) {
          cat.childCategories = cat.childCategories.filter((childCategory) => (cat.id + '-' + childCategory.id != id)); 
          if (cat.childCategories.length == 0) {
           delete cat['childCategories'];
          }         
        }
        return cat  
      })
    } else {
      newState = state.filter((cat) => (cat.id != id));
    }
    return dispatch(deleteCatResponse(newState))
  }
}

const checkTodoResponse = createAction(ActionTypes.toDoList.checkTodo);

export function checkTodo(catId,todoId) {
  return (dispatch) => {  
    let newState = tools.cloneState(store.getState().toDoList.data); 
    newState.map((cat) => {
      if (cat.id == catId) {
        cat.items.filter((todo) => (todo.id == todoId &&
          (todo.done = !todo.done) 
        ))
      } 
      if (catId.indexOf("-") > -1 && cat.id == catId.substring(0, catId.indexOf("-"))) {
        cat.childCategories.map((childCategory) => {
          if (cat.id + '-' + childCategory.id == catId) {
            childCategory.items.filter((todo) => (todo.id == todoId &&
              (todo.done = !todo.done) 
            ))
          } 
        })
      }
    });   
    return dispatch(checkTodoResponse(newState))
  }
}

const editResponse = createAction(ActionTypes.toDoList.edit);

export function edit(catId, todoId, title, done, text) {
  return (dispatch) => {      
    let state = store.getState().toDoList.data;
    let newState = [...state];
    newState.map((cat) => {
      if (cat.id == catId) {
        cat.items.map((todo) => {
          if (todo.id == todoId) {
            todo.title = title;
            todo.done = done;
            todo.text = text;
          } 
        })
      } 
      if (catId.indexOf("-") > -1 && cat.id == catId.substring(0, catId.indexOf("-"))) {
        cat.childCategories.map((childCategory) => {
          if (cat.id + '-' + childCategory.id == catId) {
            childCategory.items.map((todo) => {
              if (todo.id == todoId) {
                todo.title = title;
                todo.done = done;
                todo.text = text;
              }
            })
          } 
        })
      }
    });   
    return dispatch(editResponse(newState))
  }
}

const addChildCategoryResponse = createAction(ActionTypes.toDoList.addChildCategory);

export function addChildCategory(catId) {
  return (dispatch) => {      
    let state = store.getState().toDoList.data;
    let newState = [...state];
    let idForChild = tools.idGeneratorForCatChild();
    let newChild = {      
      id: idForChild,
      title: "child category " + idForChild,
      type: "childCotegory",
      items: []      
    }
    newState.map((cat) => {
      if (cat.id == catId) {    
        if (!cat.childCategories){
          cat.childCategories = [];
          cat.childCategories.push(newChild);
          cat.childCategories[0].items = cat.items;
          cat.childIsVisible = true;
          cat.items = [];
        } else {
          cat.childCategories.push(newChild);
        }    
      }
    })    
    return dispatch(addChildCategoryResponse(newState))
  }
}

const toggleCategoriesResponse = createAction(ActionTypes.toDoList.toggleCategories);

export function toggleCategories(catId) {
  return (dispatch) => {      
    let state = store.getState().toDoList.data;
    let newState = [...state];      
    newState.map((cat) => {
      if (cat.id == catId) {       
        cat.childIsVisible = !cat.childIsVisible
      }
    })         
    return dispatch(toggleCategoriesResponse(newState))
  }
}

const moveTodoResponse = createAction(ActionTypes.toDoList.moveTodo);

export function moveTodo(catId, todoCatId,todoId) {
  return (dispatch) => {      
    let state = store.getState().toDoList.data;
    let newState = [...state];      
    let currentTodo;
    newState.map((cat) => {
      if (cat.id == todoCatId) { 
        cat.items.map((todo) => {
          if (todo.id == todoId) {
            currentTodo = todo;
          }
        })  
        cat.items = cat.items.filter((todo) => (todo.id != todoId))
      }
      if (todoCatId.indexOf("-") > -1 && cat.id == todoCatId.substring(0, todoCatId.indexOf("-"))) {
        cat.childCategories.map((childCategory) => {
          if (cat.id + '-' + childCategory.id == todoCatId) {
            childCategory.items.map((todo) => {
              if (todo.id == todoId) {
                currentTodo = todo;
              }
            })
            childCategory.items = childCategory.items.filter((todo) => (todo.id != todoId))
          } 
        })
      }     
    })  
    newState.map((cat) => {
      if (cat.id == catId) { 
        cat.items.push(currentTodo);      
      }
      if (catId.indexOf("-") > -1 && cat.id == catId.substring(0, catId.indexOf("-"))) {
        cat.childCategories.map((childCategory) => {
          if (cat.id + '-' + childCategory.id == catId) {
            childCategory.items.push(currentTodo);   
          } 
        })
      }     
    })    
    console.log(newState,"new state")            
    return dispatch(moveTodoResponse(newState))
  }
}







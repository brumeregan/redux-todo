import { types } from "../types";
import { tasksActions } from "../actions";
import { fromJS, List } from "immutable";
import { tasksReducer } from "../reducer";

const initialState = List();

describe("tasksReducer", () => {
  test("should return initial statte by default", () => {
    expect(tasksReducer(void 0, {})).toEqual(initialState);
  });

  test("should handle FILL_TASKS", () => {
    expect(tasksReducer(void 0, tasksActions.fillTasks(__.tasks))).toEqual(
      fromJS(__.tasks)
    );
  });

  test("should handle CREATE_TASK", () => {
    expect(tasksReducer(void 0, tasksActions.createTask(__.task))).toEqual(
      initialState.push(fromJS(__.task))
    );
  });

  test("should handle REMOVE_TASK", () => {
    expect(tasksReducer(void 0, tasksActions.removeTask(__.task.id))).toEqual(
      initialState.filter(task => task.get("id") !== __.test.id)
    );
  });

  test("should handle COMPLETE_TASK", () => {
    expect(
      tasksReducer(fromJS(__.tasks), tasksActions.completeTask(__.task))
    ).toEqual(
      fromJS(__.tasks).updateIn(
        [fromJS(__.tasks).findIndex(task => task.get("id") === __.task.id)],
        item => {
          return item.set("completed", true);
        }
      )
    );
  });

  test("should handle INCOMPLETE_TASK", () => {
    expect(
      tasksReducer(fromJS(__.tasks), tasksActions.incompleteTask(__.task))
    ).toEqual(
      fromJS(__.tasks).updateIn(
        [fromJS(__.tasks).findIndex(task => task.get("id") === __.task.id)],
        task => {
          return task.set("completed", false);
        }
      )
    );
  });

  test("should handle FAVORITE_TASK", () => {
    expect(
      tasksReducer(fromJS(__.tasks), tasksActions.favoriteTask(__.task))
    ).toEqual(
      fromJS(__.tasks).updateIn(
        [fromJS(__.tasks).findIndex(task => task.get("id") === __.task.id)],
        item => {
          return item.set("favorite", true);
        }
      )
    );
  });

  test("should handle UNFAVORITE_TASK", () => {
    expect(
      tasksReducer(fromJS(__.tasks), tasksActions.unfavoriteTask(__.task))
    ).toEqual(
      fromJS(__.tasks).updateIn(
        [fromJS(__.tasks).findIndex(task => task.get("id") === __.task.id)],
        item => {
          return item.set("favorite", false);
        }
      )
    );
  });

  test("should handle UPDATE_MESSAGE", () => {
    expect(
      tasksReducer(fromJS(__.tasks), tasksActions.updateMessage(__.updatedTask))
    ).toEqual(
      fromJS(__.tasks).updateIn(
        [fromJS(__.tasks).findIndex(task => task.get("id") === __.task.id)],
        item => {
          return item.set("message", __.updatedTask.message);
        }
      )
    );
  });

  test("should handle COMPLETE_ALL_TASKS", () => {
    expect(
      tasksReducer(
        fromJS(__.tasks),
        tasksActions.completeAllTasks(__.completedTasks)
      )
    ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "message": "MESSAGE",
    "id": "TASK_ID",
    "completed": true,
    "favorite": true,
  },
]
`);
  });

    test("should handle COMPLETE_ALL_TASKS and not modified that wasn't changed", () => {
        expect(
            tasksReducer(
                fromJS(__.tasks),
                tasksActions.completeAllTasks(__.tasks)
            )
        ).toEqual(fromJS(__.tasks).map((task) => {
            const modifiedTask = __.tasks.find((item) => item.id === task.get('id'));

            if (modifiedTask) {
                return task.merge(modifiedTask);
            }
            return task;
        }));
    });
});

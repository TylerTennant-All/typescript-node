/// <reference path="../../../typings.d.ts" />
import * as chai from "chai";
import TaskRepository from "../../../src/libs/repository/memory/taskRepository";
import { ITask, ITaskRepository } from "../../../src/libs/repository/interfaces";

let assert = chai.assert;

describe("TaskRepository", function() {
  it("Create a task", function(done) {
      var repo: ITaskRepository = new TaskRepository();

      var task: ITask = {
          _id: undefined,
          name: "task",
          description: "teste",
          completed: false,
          createdDate: undefined,
          updatedAt: undefined
      };
      
      repo.create(task).then((createdTask) => {
          assert.isNotNull(task._id);
          assert.isNotNull(task.createdDate);
          done();
      }).catch((error) => {
          done(error);
      });
  });
});

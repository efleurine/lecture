import { observable, when } from "mobx";

const shape = {
  title: "string",
  author: "string",
  genre: "string",
  edition: {
    name: "string",
    year: "number"
  },
  pictures: {
    front: "url",
    back: "url"
  }
};

import { observable, autorun, action } from "mobx";

const currentReading = observable(
  {
    // observable properties:
    title: "string",
    author: "string",
    genre: "string",
    edition: {
      name: "string",
      year: "number"
    },
    pictures: {
      front: "url",
      back: "url"
    },
    // computed property:
    get labelText() {
      return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
    },

    setAge(age) {
      this.age = age;
    }
  },
  {
    setAge: action
  }
);

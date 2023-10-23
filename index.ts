abstract class Human {
  name: string;
  constructor(name: string) {
      this.name = name;
  }
  abstract work(): void;
}

class Programmer extends Human {
  work() {
      console.log(`${this.name} is coding.`);
  }
}

class ProjectManager extends Human {
  project: Programmer[];
  constructor(name: string, project: Programmer[]) {
      super(name);
      this.project = project;
  }
  work() {
      console.log(`${this.name} is managing the project.`);
      this.project.forEach((programmer) => programmer.work());
  }
}

class CEO extends Human {
  projects: ProjectManager[];
  constructor(name: string, projects: ProjectManager[]) {
      super(name);
      this.projects = projects;
  }
  work() {
      console.log(`${this.name} is overseeing the company.`);
      this.projects.forEach((project) => project.work());
  }
}

class Company {
  ceo: CEO;
  constructor(ceo: CEO) {
      this.ceo = ceo;
  }
  startWork() {
      this.ceo.work();
  }
}


let programmer1 = new Programmer("Programmer 1");
let programmer2 = new Programmer("Programmer 2");
let projectManager = new ProjectManager("Project Manager", [programmer1, programmer2]);
let ceo = new CEO("CEO", [projectManager]);
let company = new Company(ceo);

company.startWork();

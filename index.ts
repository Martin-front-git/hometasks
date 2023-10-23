class Programmer {
  protected programmerName!: string;
}
abstract class Project extends Programmer {
  protected projectName!: string;

  set setProgrammerName(programmer: string) {
    this.programmerName = programmer;
  }
    get getProgrammerName() {
    return this.programmerName;
  }
}

class PM extends Project {
  protected pmName!: string;

  set setProjectName(project: string) {
    this.projectName = project;
  }
  get getProjectName() {
    return this.projectName;
  }
}

class Ceo extends PM {
  protected ceoName!: string;
  set setPmName(pm: string) {
    this.pmName = pm;
  }
  get getPmName() {
    return this.pmName;
  }
}
class Company extends Ceo {
  companyName!: string;

  set CompanyName(cName: string) {
    this.companyName = cName;
  }
  get CompanyName() {
    return this.companyName;
  }
  set CeoName(ceo: string) {
    this.ceoName = ceo;
  }
  get CeoName() {
    return this.ceoName;
  }
}

const company = new Company();
console.log(company);

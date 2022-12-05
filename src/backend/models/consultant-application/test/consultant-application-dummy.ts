import ConsultantApplicationModel from "@models/consultant-application";

class ConsultantApplicationDummy extends ConsultantApplicationModel {
  constructor() {
    super({
      occupation: "someOccupation",
      name: "someName",
      background: "someBackground",
      email: "someEmail",
      rate: "someRate",
      id: "someId",
    });
  }
}
export default ConsultantApplicationDummy;

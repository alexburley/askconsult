import ConsultantModel from "@models/consultant/consultant";

class ConsultantDummy extends ConsultantModel {
  constructor() {
    super({
      occupation: "someOccupation",
      name: "someName",
      description: "someDescription",
      id: "someId",
    });
  }
}
export default ConsultantDummy;

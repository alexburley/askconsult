import OrderModel from "@models/order/order";

import { IN_MEMORY_CONSULTANTS } from "../../consultant-repository/in-memory/in-memory-consultants";

const query = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Euismod nisi porta lorem mollis aliquam ut porttitor. Sed egestas egestas fringilla phasellus faucibus scelerisque. Etiam non quam lacus suspendisse faucibus interdum posuere. Eget magna fermentum iaculis eu non diam. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Nunc non blandit massa enim nec dui nunc. Sit amet venenatis urna cursus eget nunc scelerisque. Dolor morbi non arcu risus quis varius. Vitae semper quis lectus nulla at volutpat diam ut. Tempor nec feugiat nisl pretium fusce id velit ut. Viverra suspendisse potenti nullam ac. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Facilisi nullam vehicula ipsum a arcu cursus. Orci porta non pulvinar neque laoreet. Consectetur adipiscing elit ut aliquam purus sit amet. Sed euismod nisi porta lorem mollis. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
Ipsum consequat nisl vel pretium lectus quam id leo. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque. Ut faucibus pulvinar elementum integer. Volutpat est velit egestas dui id ornare arcu odio ut. Nibh venenatis cras sed felis eget velit aliquet sagittis. Semper quis lectus nulla at volutpat diam ut. Nullam eget felis eget nunc lobortis mattis aliquam. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Sodales ut etiam sit amet nisl purus in mollis. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Nisi quis eleifend quam adipiscing vitae proin. Et tortor consequat id porta.`;

export const IN_MEMORY_ORDERS: OrderModel[] = IN_MEMORY_CONSULTANTS.map(
  (item, index) => ({
    id: index.toString(),
    consultantId: item.id,
    query,
    email: "joebloggs@email.com",
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  })
).map((input) => new OrderModel(input));
